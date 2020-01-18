import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const ArtistBox = ({ data }) => {
	return (
		<Link
			href={`/artist/${data.id}`}
			className={style.artistBox}
		>
			<div className="card-img-top">
				<img src={data.image} className="img-fluid rounded" />
			</div>
			<h6 className="pt-2">
			    {data.castName}
			</h6>
		</Link>
	);
};

export default ArtistBox;