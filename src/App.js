import { useEffect, useState } from 'react';
import axios from 'axios';

import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './component/Input';
import './assets/all.scss';

function App() {
	const [text, setText] = useState('');

	const onChangeHandler = (e) => {
		setText(e.target.value);
	};

	useEffect(() => {
		(async () => {
			const path = process.env.REACT_APP_PATH;
			const result = await axios.get(path);
			console.log(result);
		})();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat perferendis assumenda illo accusamus obcaecati? Quod voluptate praesentium iste asperiores nobis modi voluptas, officiis maiores cumque non ipsum ratione est sit!
				</p>
				<a className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer" >
					Learn React
				</a>
				<button type="button" className="btn btn-primary">Primary</button>
				{text}
				<Input id="sampleText" text="這是一個 Input" value={text} onChangeHandler={onChangeHandler} />
			</header>
		</div>
	);
}

export default App;
