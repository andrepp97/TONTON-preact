import { h, Component } from 'preact';
import Axios from 'axios';
import style from '../movie-details/style.css';
import { urlAPI } from '../../lib/database';

// COMPONENTS //
import ArtistBox from '../../components/artist-box';
import Loadings from '../../components/loading-screen';
import NoResult from '../../components/no-result';
// COMPONENTS //

class ArtistList extends Component {
    state = {
    	allArtist: [],
    	isLoading: false
    }

    getAllArtist = () => {
    	this.setState({ isLoading: true })
    	Axios.get(urlAPI + '/allArtist')
    		.then(res => {
    			this.setState({
    			    allArtist: res.data,
    			    isLoading: false
    			});
    		})
    		.catch(err => {
    			console.log(err);
    		});
    }

    // LIFECYCLE
    componentDidMount() {
    	this.getAllArtist();
    }
    // LIFECYCLE

    // RENDER ARTIST
    renderAllArtist = () => this.state.allArtist.map(val => <ArtistBox data={val} />)
    // RENDER ARTIST

    render({}, { allArtist, isLoading }) {
    	return (
    		<div className={style.pageContainer}>
    			<h2>ARTISTS</h2>
    			<div className="row genre-list px-2">
    				{
    					isLoading
    						?
    						<Loadings />
    						:
    						allArtist.length
    							?
    							this.renderAllArtist()
    							:
    							<NoResult />
    				}
    			</div>
    		</div>
    	);
    }
}

export default ArtistList;