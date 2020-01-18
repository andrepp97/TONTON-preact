import { h, Component } from 'preact';
import style from './style.css';
import qs from 'query-string';
import Axios from 'axios';
import { urlAPI } from '../../lib/database';

// COMPONENTS //
import MovCard from '../../components/movie-card';
import NoResult from '../../components/no-result';
import Loadings from '../../components/loading-screen';
// COMPONENTS //

class Results extends Component {
    searchVal = ''

    state = {
    	movieResults: [],
    	isLoading: false
    }

    // GET MOVIE //
    getMovieByKeyword = () => {
    	this.setState({ isLoading: true })
    	Axios.get(urlAPI + '/movieByKeyword', {
    		params: {
    			keyword: this.searchVal
    		}
    	}).then(res => {
    		this.setState({
    			movieResults: res.data,
    			isLoading: false
    		});
    	}).catch(err => {
    		console.log(err);
    	});
    }
    // GET MOVIE //

    // LIFECYCLE //
    componentDidMount() {
    	let searchKeyword = qs.parse(location.search);
    	this.searchVal = searchKeyword.keyword;
    	this.getMovieByKeyword();
    }
    // LIFECYCLE //

    // RENDERS //
    renderMovieResults = () => this.state.movieResults.map(val => <MovCard movData={val} />)
    // RENDERS //

    render({}, { movieResults, isLoading }) {
    	return (
    		<div className={style.pageContainer}>
    			<h6 className={style.resultHeader}>
                    Search Results "{this.searchVal}"
    			</h6>
    			<div className="row px-2">
    				{
    					isLoading
    						?
    						<Loadings />
    						:
    						movieResults.length
    							?
    							this.renderMovieResults()
    							:
    							<NoResult />
    				}
    			</div>
    		</div>
    	);
    }
}

export default Results;