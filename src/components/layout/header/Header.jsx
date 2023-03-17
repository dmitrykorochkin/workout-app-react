import { useAuth } from "../../../hooks/useAuth"
import { AiOutlineArrowLeft } from 'react-icons/Ai'
import Hamburger from "../hamburger/Hamburger"
import styles from "./Header.module.scss"



const Header = ({ backLink }) => {

  const {} = useAuth()
	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
        <AiOutlineArrowLeft />
      </button>
      <Hamburger/>
		</header>
	)
}

export default Header
