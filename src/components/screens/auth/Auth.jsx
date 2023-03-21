import Layout from './../../layout/Layout'
import { useForm } from 'react-hook-form'
import Button from './../../ui/button/Button'

const Auth = () => {
	const { register, handleSubmit } = useForm({
		mode: 'onChange'
	})

  const onSubmit = data => {
    console.log(data)
  }

	return (
		<Layout heading='Sign in' bgImage='./images/auth-bg.png'>
			<div className='wrapper-inner-page'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type='text'
						placeholder='Enter email'
						{...register('email', {
							required: 'Email is required'
						})}
					/>

					<Button>Sign in</Button>
				</form>
			</div>
		</Layout>
	)
}

export default Auth
