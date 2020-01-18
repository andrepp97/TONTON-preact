import { h } from 'preact';

const MovieEmbed = ({movieData}) => {
    return (
        <iframe
			src={movieData.trailer}  // I don't have online video hosting, so at least we can play the trailer
			height={window.innerHeight - (20 / 100 * window.innerHeight)}
			className="embed-responsive shadow rounded"
			title="Trailer"
			frameBorder="0"
			allowFullScreen="allowFullScreen"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		/>
    );
};

export default MovieEmbed;