import { useAuth } from "../../../hooks/useAuth"
import { AiOutlineArrowLeft } from 'react-icons/Ai'



const Header = ({ backLink }) => {

  const {} = useAuth()
	return (
		<header>
			<button onClick={() => {}}>
        <AiOutlineArrowLeft />
      </button>
      <Hamburger/>
		</header>
	)
}

export default Header
