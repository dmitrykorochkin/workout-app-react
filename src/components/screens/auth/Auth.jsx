import Layout from './../../layout/Layout'
import { useForm } from 'react-hook-form'
import Button from './../../ui/button/Button'
import Field from './../../ui/field/Field'
import Loader from './../../ui/Loader'
import { useState } from 'react'
import styles from './Auth.module.scss'

const isLoading = true
const isLoadingAuth = false

const Auth = () => {
	const [type, setType] = useState('auth')

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		console.log(data)
	}

	return (
		<>
			<Layout heading='Sign in' bgImage='./images/auth-bg.png' />
			<div className='wrapper-inner-page'>
				{isLoading || (isLoadingAuth && <Loader />)}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name='email'
						type='text'
						register={register}
						placeholder='Enter email'
						options={{ required: 'Email is required' }}
					/>
					<Field
						error={errors?.password?.message}
						name='password'
						type='password'
						register={register}
						placeholder='Enter password'
						options={{ required: 'Password is required' }}
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('auth')}>Sign in</Button>
						<Button clickHandler={() => setType('register')}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
