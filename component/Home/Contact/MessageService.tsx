import nodemailer from 'nodemailer'
import { RateLimiterMemory } from 'rate-limiter-flexible'

type req = {
	body: {
		firstName: string
		lastName: string
		email: string
		phoneNumber: number
		message: string
		lookingFor: string
	}
	method: string
	headers: {
		'x-forwarded-for': string
	}
	socket: {
		remoteAddress: string
	}
}
type status = {
	status: (arg0: number) => {
		(): () => void
		new (): () => void
		json: {
			(arg0: { success: boolean; message: string }): object
			new (): () => void
		}
	}
}

type Props = {
	req: req
	res: status
}
const rateLimiter = new RateLimiterMemory({
	points: 1,
	duration: 60,
})

export default async function handler({ req, res }: Props) {
	if (req.method === 'POST') {
		const { firstName, lastName, email, phoneNumber, message, lookingFor } =
			req.body

		const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		})

		const mailOptions = {
			from: email,
			to: process.env.EMAIL_RECEIVER,
			subject: 'New Contact Form Submission',
			text: `You have a new message from ${firstName} ${lastName} (${email}):\n\n${message} looking for a ${lookingFor} contact him on ${email} or ${phoneNumber}`,
		}

		try {
			await rateLimiter.consume(ip)
			await transporter.sendMail(mailOptions)
			return res
				.status(200)
				.json({ success: true, message: 'Email sent successfully!' })
		} catch (error) {
			if (error instanceof Error) {
				if (error.message.includes('Too many requests')) {
					return res.status(429).json({
						success: false,
						message: 'Rate limit exceeded. Please try again later.',
					})
				}
				console.error('Error sending email', error)
			}

			return res
				.status(500)
				.json({ success: false, message: 'Error sending email.' })
		}
	} else {
		return res
			.status(405)
			.json({ success: false, message: 'Method Not Allowed' })
	}
}
