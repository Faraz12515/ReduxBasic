import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Talha() {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.count2);
	const name = useSelector((state) => state.forTalha);
	const age = useSelector((state) => state.forNoor);

	const [data] = useState('Talha');

	return (
		<div>
			<h1>
				Talha: {count}
				{name}
				{age}
			</h1>
			<button
				onClick={() =>
					dispatch({ type: 'Talha', payload: count + 1, data: data })
				}
			>
				Click
			</button>
		</div>
	);
}
