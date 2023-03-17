import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/Ai'
import { BiMenuAltRight } from 'react-icons/Bi'
import Menu from './Menu'
import styles from './Hamburger.module.scss'

const Hamburger = () => {
	const [isShow, setIsShow] = useState(false)

	return (
		<div className={styles.wrapper}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <AiOutlineClose color='white' /> : <BiMenuAltRight color='white' />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger
