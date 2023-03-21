import styles from './field/Field.module.scss'

const Loader = () => {
	return (
		<img
			className={styles.svg}
			src='/images/three-dots.svg'
			alt='loader'
			draggable={false}
		/>
	)
}

export default Loader
