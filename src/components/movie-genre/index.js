import { h } from 'preact';
import { Link } from 'preact-router/match';

const MovGenre = ({ movGenres }) => (
	<Link href={`/genre/${movGenres.id}`} className="mx-1">
		<p className="badge badge-dark px-2 py-1">{movGenres.genreName}</p>
	</Link>
);

export default MovGenre;