import { h } from 'preact';

const MovTitle = ({movieData}) => {
    return (
        <div className="row my-4 mx-1">
			<div className="col-md-12 border-bottom border-primary">
				<h2 id="movie-title">
					{movieData.movieName}
					<span className="ml-2 text-secondary">({movieData.year})</span>
				</h2>
			</div>
		</div>
    );
};

export default MovTitle;