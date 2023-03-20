import { useAuth } from '../../../hooks/useAuth'
import { AiOutlineArrowLeft } from 'react-icons/Ai'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'
import { useLocation, useNavigation } from 'react-router-dom'

const Header = ({ backLink }) => {
	const { pathname } = useLocation()
	const navigate = useNavigation()

	const { isAuth } = useAuth()
	return (
		<header className={styles.header}>
			{pathname !== '/' && (
				<button
					onClick={() => {
						navigate(backLink || '/')
					}}
				>
					<AiOutlineArrowLeft />
				</button>
			)}
			<Hamburger />
		</header>
	)
}

export default Header
