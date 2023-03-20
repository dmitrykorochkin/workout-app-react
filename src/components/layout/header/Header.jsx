import { useAuth } from '../../../hooks/useAuth'
import { AiOutlineArrowLeft } from 'react-icons/Ai'
import { FaRegUser } from 'react-icons/Fa'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = ({ backLink = '' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()
	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button
					onClick={() => {
						navigate(backLink)
					}}
				>
					<AiOutlineArrowLeft />
				</button>
			) : (
				<button
					onClick={() => {
						navigate('/profile')
					}}
				>
					<FaRegUser fontSize={25}/>
				</button>
			)}
			<Hamburger />
		</header>
	)
}

export default Header
