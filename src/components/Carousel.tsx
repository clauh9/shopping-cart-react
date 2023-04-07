import { Carousel as Slider } from "react-bootstrap";

type CarouselProps = {
	productImgs: string[];
};

export function Carousel({ productImgs }: CarouselProps) {
	// console.log(productImgs);

	return (
		<Slider
			interval={null}
			variant="dark"
			style={{
				display: "grid",
				alignContent: "center",
				justifyContent: "center",
			}}
		>
			{productImgs.map((img) => (
				<Slider.Item key={img}>
					<img
						src={img}
						style={{
							objectFit: "contain",
							height: "500px",
						}}
					/>
				</Slider.Item>
			))}
		</Slider>
	);
}
