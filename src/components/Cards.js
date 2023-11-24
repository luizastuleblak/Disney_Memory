import { useState } from "react";
import Card from './Card';

function Cards() {
	const [items, setItems] = useState([
		{ id: 1, img: '/img/miki.jpeg', stat: "" },
		{ id: 1, img: '/img/miki.jpeg', stat: "" },
		{ id: 2, img: '/img/minnie.jpeg', stat: "" },
		{ id: 2, img: '/img/minnie.jpeg', stat: "" },
		{ id: 3, img: '/img/arielka.jpg', stat: "" },
		{ id: 3, img: '/img/arielka.jpg', stat: "" },
		{ id: 4, img: '/img/simba.jpg', stat: "" },
		{ id: 4, img: '/img/simba.jpg', stat: "" },
		{ id: 5, img: '/img/śnieżka.jpeg', stat: "" },
		{ id: 5, img: '/img/śnieżka.jpeg', stat: "" },
		{ id: 6, img: '/img/donald.jpg', stat: "" },
		{ id: 6, img: '/img/donald.jpg', stat: "" },
		{ id: 7, img: '/img/pluto.jpeg', stat: "" },
		{ id: 7, img: '/img/pluto.jpeg', stat: "" },
		{ id: 8, img: '/img/daisy.jpg', stat: "" },
		{ id: 8, img: '/img/daisy.jpg', stat: "" },
	].sort(() => Math.random() -0.5))

	const [prev, setPrev] = useState(-1)

	function check(current) {
		if (items[current].id == items[prev].id) {
			items[current].stat = "correct"
			items[prev].stat = "correct"
			setItems([...items])
			setPrev(-1)
		} else {
			items[current].stat = "wrong"
			items[prev].stat = "wrong"
			setItems([...items])
			setTimeout(() => {
				items[current].stat = ""
				items[prev].stat = ""
				setItems([...items])
				setPrev(-1)
			}, 1000)
		}
	}

	function handleClick(id) {
		if (prev === -1) {
			items[id].stat = "active"
			setItems([...items])
			setPrev(id)
		} else {
			check(id)
		}
	}

	return (
		<div className="container">
			{items.map((item, index) => (
				<Card key={index} item={item} id={index} handleClick={handleClick} />
			))}
		</div>
	)
}

export default Cards;
