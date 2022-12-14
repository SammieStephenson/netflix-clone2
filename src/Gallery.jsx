import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function Gallery() {
	return (
		<div className='App'>
			{/* <h1>lets go fake netflix for the win</h1> */}

			<Nav />
			<Banner />
			<Row
				title='NETFLIX ORIGINALS'
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
			<Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
			<Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
			<Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
			<Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
			<Row title='Documentaries' fetchUrl={requests.fetchDocumantaries} />
		</div>
	);
}

export default Gallery;
