import { useNavigate } from 'react-router-dom';

function Card(props) {
	const navigate = useNavigate();

	return (
		<div
			style={{ display: 'flex', width: '750px', alignItems: 'center'}}
			onClick={() =>
				navigate('/details', {
					state: {
						id: props.movie.imdbID
					}
				})}
		>
			<img src={props.movie.Poster} style={{padding: '15px'}} />
			<div style={{ color: 'orange'}}>
				<h1>{props.movie.Title}</h1>
				<p>Anno di uscita: {props.movie.Year}</p>
			</div>
		</div>
	);
}

export default Card;
