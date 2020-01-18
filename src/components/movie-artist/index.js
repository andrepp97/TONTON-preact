import { h } from 'preact';
import { Link } from 'preact-router/match';

const MovArtists = ({ movArtists }) => (
	<Link href={`/artist/${movArtists.id}`} className="mx-1">
		<p className="badge badge-dark px-2 py-1">{movArtists.castName}</p>
	</Link>
);

export default MovArtists;