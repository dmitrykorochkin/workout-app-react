import { AiOutlineClose } from 'react-icons/Ai'
import { BiMenuAltRight } from 'react-icons/Bi'
import Menu from './Menu'
import styles from './Hamburger.module.scss'
import { useOnClickOutside } from './../../../hooks/useOnClickOutside'

const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? (
					<AiOutlineClose  />
				) : (
					<BiMenuAltRight  />
				)}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger
