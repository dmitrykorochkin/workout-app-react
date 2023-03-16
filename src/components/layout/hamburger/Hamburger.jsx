import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/Ai'
import { BiMenuAltRight } from 'react-icons/Bi'
import Menu from './Menu'

const Hamburger = () => {
	const [isShow, setIsShow] = useState(false)



	return (
		<div>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <AiOutlineClose /> : <BiMenuAltRight />}
			</button>
      <Menu isShow={isShow}/>
		</div>
	)
}

export default Hamburger
