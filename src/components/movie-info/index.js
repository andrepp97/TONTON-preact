import { h } from 'preact';
import MovGenre from '../movie-genre';
import MovArtist from '../movie-artist';

const MovInfo = ({movieData, genreData, artistData}) => {
    // RENDER GENRE & ARTIST //
    const renderMovieGenres = () => genreData.map(val => <MovGenre movGenres={val} />)
    const renderMovieArtists = () => artistData.map(val => <MovArtist movArtists={val} />)
    // RENDER GENRE & ARTIST //

    return (
        <div className="row mx-1">
			<div className="col-md-3">
				<img src={movieData.poster} className="img-fluid rounded" />
			</div>
			<div className="col-md-9">
				<p>{movieData.synopsis}</p>
				<p className="font-weight-bold">
					Country :
					<span className="font-weight-normal ml-2">{movieData.country}</span>
				</p>
				<p className="font-weight-bold">
					Language :
					<span className="font-weight-normal ml-2">{movieData.lang}</span>
				</p>
				<p className="font-weight-bold">
					Duration :
					<span className="font-weight-normal ml-2">{movieData.duration}</span>
				</p>
				<p className="font-weight-bold">
					Genres : {renderMovieGenres()}
				</p>
				<p className="font-weight-bold mt-n3">
					Artists : {renderMovieArtists()}
				</p>
			</div>
		</div>
    );
};

export default MovInfo;