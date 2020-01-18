import { h, Component } from 'preact';
import Axios from 'axios';
import style from '../movie-details/style.css';
import { urlAPI } from '../../lib/database';

// COMPONENTS //
import GenreBox from '../../components/genre-box';
import Loadings from '../../components/loading-screen';
import NoResult from '../../components/no-result';
// COMPONENTS //

class Genre extends Component {
    state = {
    	allGenre: [],
    	isLoading: false
    }

    getAllGenre = () => {
    	this.setState({ isLoading: true })
    	Axios.get(urlAPI + '/allGenres')
    		.then(res => {
    			this.setState({ allGenre: res.data, isLoading: false });
    		})
    		.catch(err => {
    			console.log(err);
    		});
    }

    // LIFECYCLE //
    componentDidMount() {
    	this.getAllGenre()
    }
    // LIFECYCLE //

    // RENDERS //
	renderAllGenre = () => this.state.allGenre.map(val => <GenreBox data={val} />)
	// RENDERS //
    

	render({}, { allGenre, isLoading }) {
		return (
			<div className={style.pageContainer}>
				<h2>Movie Genres</h2>
				<div className="row px-2">
					{
						isLoading
							?
							<Loadings />
							:
							allGenre.length
								?
								this.renderAllGenre()
								:
								<NoResult />
					}
				</div>
			</div>
		);
	}
}

export default Genre;