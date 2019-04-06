const Player = () => {
	return (
		<div className="player">
			<span className="player-name">
				Ed
			</span>
		</div>
	);
}

const Counter = () => {
	return (
		<div className="counter">
			<button className="counter-action decrement"> - </button>
			<span className="counter-score">35</span>
			<button className="counter-action increment"> + </button>
		</div>	
	);
}

ReactDOM.render(
	<Player />,
	document.getElementById('root')
);

ReactDOM.render(
	<Counter />,
	document.getElementById('root')
);