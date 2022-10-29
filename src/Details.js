import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Details() {
    const navigate = useNavigate();
	const [ movie, setMovie ] = useState(null);

	const retrieveMovie = async (id) => {
		const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=42f82aeb`);
		setMovie({ ...response.data });
	};

	useEffect(() => {
		retrieveMovie(window.history.state.usr.id);
	}, []);

	return (
		<div style={{ display: 'flex', width: '80vw', marginTop: 24, alignItems:'center'}}>
			{movie && (
				<div style={{ display: 'flex', alignItems:'center', flexDirection:'column', color:'orange'}}>
					<img src={movie.Poster} style={{ width: 300, height: 300}} />
					<div>
						<h1>{movie.Title}</h1>
						<span>
							<strong>Anno di uscita: </strong> {movie.Released}
						</span>
						<br />
						<span>
							<strong>Durata: </strong>
							{movie.Runtime}
						</span>
						<br />
						<span>
							<strong>Direttore: </strong>
							{movie.Director}
						</span>
						<br />
						<span>
							<strong>Genere: </strong>
							{movie.Genre}
						</span>
						<br />
						<span>
							<strong>Voto: </strong>
							{movie.Ratings[0].Value}
						</span>
					</div>
                    <button style={{cursor:'pointer', backgroundColor:'transparent', marginTop:'10px', borderBlockColor:'orange', color:'orange'}} onClick={() => navigate('/')}>Home</button>
				</div>
			)}
		</div>
	);
}

export default Details;
