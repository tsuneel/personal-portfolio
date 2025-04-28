'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'

type FormData = {
	firstName: string
	lastName: string
	email: string
	phoneNumber: number
	lookingFor: string
	message: string
}
const Form = () => {
	const [formData, setFormData] = useState<FormData>({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: 0,
		lookingFor: '',
		message: '',
	})
	const [isSending, setIsSending] = useState<boolean>(false)
	const [statusMessage, setStatusMessage] = useState<string>('')

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSending(true)
		setStatusMessage('')
		console.log('formData is', formData)

		try {
			const response = await fetch('/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			const result = await response.json()
			if (result.success) {
				setStatusMessage('Your message has been sent successfully!')
				setFormData({
					firstName: '',
					lastName: '',
					email: '',
					phoneNumber: 0,
					lookingFor: '',
					message: '',
				})
			} else {
				setStatusMessage('Something went wrong, please try again later.')
			}
		} catch (error) {
			setStatusMessage(`${error} - Unable to send the message.`)
		} finally {
			setIsSending(false)
		}
	}

	return (
		<div className='bg-[#140c1c] rounded-ld p-4 sm:p-10'>
			<h1 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>
				Lets work together!
			</h1>
			<p className='text-gray-200 mt-3 lg:text-base text-xs md:text-sm'>
				some ramdom text ....
			</p>

			<form
				onSubmit={handleSubmit}
				className='mt-8 block w-full overflow-hidden'>
				<div className='flex flex-col md:flex-row items-center justify-between gap-4'>
					<input
						type='text'
						name='firstName'
						value={formData.firstName}
						onChange={handleInputChange}
						placeholder='First Name'
						className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-300 border-opacity-15 outline-none w-full'
					/>
					<input
						type='text'
						placeholder='Last Name'
						onChange={handleInputChange}
						value={formData.lastName}
						name='lastName'
						className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
					/>
				</div>
				<div className='flex mt-5 flex-col md:flex-row items-center justify-between gap-5'>
					<input
						type='email'
						placeholder='Email Address'
						name='email'
						value={formData.email}
						onChange={handleInputChange}
						className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-300 border-opacity-15 outline-none w-full'
					/>
					<input
						type='text'
						placeholder='Phone Number'
						name='phoneNumber'
						//value={formData.phoneNumber}
						onChange={handleInputChange}
						className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
					/>
				</div>
				<div>
					<select
						name='lookingFor'
						// value={formData.lookingFor}
						defaultValue={''}
						onChange={handleInputChange}
						className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none'>
						<option
							value=''
							disabled
							className='text-gray-600'>
							Select an option
						</option>
						<option value='frontend'> Front-End Developer</option>
						<option value='backend'> Back-End Developer</option>
						<option value='fullstack'> Full-Stack Developer</option>
					</select>
				</div>
				<textarea
					rows={7}
					placeholder='Message'
					name='message'
					value={formData.message}
					onChange={handleInputChange}
					className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none'
				/>
				<div className='mt-4'>
					<button
						type='submit'
						disabled={isSending}
						className='px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-300 rounded-full'>
						{isSending ? 'Sending.....' : 'Send Message'}
					</button>
				</div>
			</form>
			{statusMessage && <p>{statusMessage}</p>}
		</div>
	)
}

export default Form
