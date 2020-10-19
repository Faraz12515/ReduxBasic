import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Noor() {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.count3);
	const data = useSelector((state) => state.mydata);
	const name = useSelector((state) => state.forTalha);

	const [age] = useState('My age is: 23');

	return (
		<div>
			<h1>
				Noor: {count}
				{data}
				{name}
			</h1>
			<button
				onClick={() => dispatch({ type: 'Noor', payload: count + 1, age: age })}
			>
				Click
			</button>
		</div>
	);
}
