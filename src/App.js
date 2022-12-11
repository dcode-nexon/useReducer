import { useReducer } from 'react';

const reducer = (state, action) => {
	switch (action.type) {
		case 'minus':
			return state - action.payload;
		case 'plus':
			return state + action.payload;
		default:
			return state;
	}
};

function App() {
	const [number, dispatch] = useReducer(reducer, 0);

	return (
		<main>
			<h1>{number}</h1>

			<button onClick={() => dispatch({ type: 'minus', payload: 1 })}>minus</button>
			<button onClick={() => dispatch({ type: 'plus', payload: 1 })}>plus</button>
		</main>
	);
}

export default App;
