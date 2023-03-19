import Header from './header/Header'
import cn from 'clsx'
import styles from './Layout.module.scss'

const Layout = ({ children, bgImage, heading = '', backLink = '/' }) => {
	return (
		<div
			className={cn(styles.wrapper, {
				[styles.otherPage]: !!heading
			})}
			style={{ backgroundImage: `URL(${bgImage})` }}
		>
			<Header backLink={backLink}/>
			{heading && <h1 className={styles.heading}>{heading}</h1>}
			{children && <div>{children}</div>}
		</div>
	)
}

export default Layout
