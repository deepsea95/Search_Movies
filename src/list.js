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
					style={{ margin: '15px', outline:'none', width:'200px', height:'20px', backgroundColor:'transparent', color:'black'}}
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
