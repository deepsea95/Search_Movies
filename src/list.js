import axios from 'axios';
import { useState } from 'react';
import Card from './Card';

function List() {
	const [ movies, setMovie ] = useState([]);
	const [ searchInput, setSearchInput ] = useState('');

	const search = async () => {
		const response = await axios.get(`https://www.omdbapi.com/?s=${searchInput}&apikey=42f82aeb`);
		setMovie([ ...response.data.Search ]);
	};

	return (
		<div>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<input
					style={{ marginBottom: '10px', outline:'none', width:'200px', height:'20px', color:'darkblue', backgroundColor:'orange'}}
					type="text"
					placeholder="Cerca"
					value={searchInput}
					onChange={(e) => setSearchInput(e.currentTarget.value)}
				/>
				<button
					style={{
						marginBottom: '20px',
						backgroundColor: 'transparent',
						cursor: 'pointer',
						borderColor: 'orange',
						color: 'orange'
					}}
					onClick={search}
				>
					Cerca
				</button>
			</div>

			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				{movies.map((movie) => <Card movie={movie} />)}
			</div>
		</div>
	);
}

export default List;
