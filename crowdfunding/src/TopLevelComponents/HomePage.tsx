import './Styles/HomePageStyle.scss'
import { useState } from 'react'
import Modal from 'react-modal'

type Props = {}

export const HomePage = (props: Props) => {
	const [showModal, setShowModal] = useState<boolean>(false)

	const toggleDialog = () => {
		setShowModal(!showModal)
	}

	return (
		<div className='homepage'>
			<button onClick={() => toggleDialog()}>Toggle</button>
			<Modal isOpen={showModal}>
				<h1>Foo!!!</h1>
				<button onClick={() => toggleDialog()}>bye-bye</button>
			</Modal>
		</div>
	)
}