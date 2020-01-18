import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const GenreBox = ({ data }) => {
    return (
        <Link
            href={`/genre/${data.id}`}
            className={style.genreBox}
            style={{ width: '10rem' }}
        >
            {data.genreName}
        </Link>
    );
};

export default GenreBox;