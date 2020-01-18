import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const MovCard = ({ movData }) =>
	(<Link href={`/movie-details/${movData.id}`}
		className={`${style.movCard} card text-decoration-none mx-2`}
	 >
		<div className="row">
			<div className="col-sm-4">
				<img src={movData.poster} className="img-fluid rounded" alt="Poster" />
			</div>
			<div className={`col-sm-8 ${style.titleContainer}`}>
				<div className="row">
					<div className="col-sm-12">
						<h6 className={style.movTitle}>
							{movData.movieName} ({movData.year})
						</h6>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<p className={style.movSynopsis}>
							{
								movData.synopsis.length > 150
									?
									movData.synopsis.slice(0,150) + '...'
									:
									movData.synopsis
							}
						</p>
					</div>
				</div>
			</div>
		</div>
	</Link>);

export default MovCard;