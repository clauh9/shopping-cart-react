import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Carousel } from "./Carousel";

type MyVerticallyCenteredModalProps = {
	show: boolean;
	onHide: () => void;
	name: string;
	productImgs: string[];
};

export function MyVerticallyCenteredModal({
	show,
	onHide,
	name,
	productImgs,
}: MyVerticallyCenteredModalProps) {
	const props = { show, onHide, name };
	// console.log(props);
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">{name}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Carousel productImgs={productImgs} />
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}
