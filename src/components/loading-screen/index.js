import { h } from 'preact';
import LoadingImage from '../../assets/illustrations/movie_night.svg';

const loadingScreen = () => (
	<div className="container text-center p-5">
		<h1>Preparing Your Movies</h1>
		<div className="row justify-content-center my-4">
			<div className="spinner-grow text-success" role="status" />
			<div className="spinner-grow text-danger mx-3" role="status" />
			<div className="spinner-grow text-warning" role="status" />
		</div>
		<img src={LoadingImage} className="w-25" />
	</div>
);

export default loadingScreen;