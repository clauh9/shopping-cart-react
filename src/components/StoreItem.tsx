import { Card } from "react-bootstrap";
import { currencyFormater } from "../utilities/currencyFormater";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { MyVerticallyCenteredModal } from "../components/MyVerticallyCenteredModal";

type StoreItemProps = {
	id: number;
	name: string;
	price: number;
	imgUrl: string;
	productImgs: string[];
};

export function StoreItem({
	id,
	name,
	price,
	imgUrl,
	productImgs,
}: StoreItemProps) {
	const [modalShow, setModalShow] = useState(false);
	const {
		getItemQuantity,
		increaseCartQuantity,
		decreaseCartQuantity,
		removeFromCart,
	} = useShoppingCart();
	const quantity = getItemQuantity(id);
	return (
		<Card className="h-100">
			<Card.Img
				onClick={() => setModalShow(true)}
				variant="top"
				src={imgUrl}
				height="200px"
				style={{ objectFit: "contain", cursor: "pointer" }}
			/>
			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
				name={name}
				productImgs={productImgs}
			/>
			<Card.Body className="d-flex flex-column">
				<Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
					<span className="fs-2">{name}</span>
					<span className="ms-2 text-muted">{currencyFormater(price)}</span>
				</Card.Title>
				<div className="d-flex align-items-center justify-content-center mt-auto">
					{quantity === 0 ? (
						<Button onClick={() => increaseCartQuantity(id)}>
							+ Add To Cart
						</Button>
					) : (
						<div
							className="d-flex align-items-center flex-column"
							style={{ gap: ".5rem" }}
						>
							<div
								className="d-flex align-items-center justify-content-center"
								style={{ gap: ".5rem" }}
							>
								<Button onClick={() => decreaseCartQuantity(id)}>-</Button>
								<span className="fs-3">{quantity}</span>
								<Button onClick={() => increaseCartQuantity(id)}>+</Button>
							</div>
							<Button
								variant="danger"
								size="sm"
								onClick={() => removeFromCart(id)}
							>
								Remover
							</Button>
						</div>
					)}
				</div>
			</Card.Body>
		</Card>
	);
}
