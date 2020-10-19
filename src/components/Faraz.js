import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Faraz() {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.count1);
	const data = useSelector((state) => state.mydata);
	const age = useSelector((state) => state.forNoor);

	const [name] = useState('Faraz');
	return (
		<div>
			<h1>
				Faraz: {count}
				{data}
				{age}
			</h1>
			<button
				onClick={() =>
					dispatch({ type: 'Faraz', payload: count + 1, name: name })
				}
			>
				Click
			</button>
			<button
				onClick={() =>
					dispatch({ type: 'Faraz', payload: count + 1, name: name })
				}
			>
				Click
			</button>
			<button
				onClick={() =>
					dispatch({ type: 'Faraz', payload: count + 1, name: name })
				}
			>
				Click
			</button>
			<button
				onClick={() =>
					dispatch({ type: 'Faraz', payload: count + 1, name: name })
				}
			>
				Click
			</button>
		</div>
	);
}
