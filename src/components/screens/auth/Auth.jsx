import Layout from './../../layout/Layout'
import { useForm } from 'react-hook-form'
import Button from './../../ui/button/Button'
import Field from './../../ui/field/Field'

const Auth = () => {
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
		<Layout heading='Sign in' bgImage='./images/auth-bg.png'>
			<div className='wrapper-inner-page'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name='email'
						type='text'
						register={register}
						placeholder='Enter email'
						options={{ required: 'Email is required' }}
					/>
					<Button>Sign in</Button>
				</form>
			</div>
		</Layout>
	)
}

export default Auth
