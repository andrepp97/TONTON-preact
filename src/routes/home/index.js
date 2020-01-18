import { h, Component } from 'preact';
import style from './style';
import Axios from 'axios';
import { urlAPI } from '../../lib/database';

// COMPONENTS //
import MovCard from '../../components/movie-card';
import Loadings from '../../components/loading-screen';
// COMPONENTS //

class Home extends Component {
	state = {
		allMovies: [],
		itemsPerPage: 15,
		activePage: 1,
		isLoading: false
	}
	
	// Local Variable //
	orderBy = 'movieName'
	orderDir = 'asc'
	currentPage = this.state.activePage;
	// Local Variable //
	
	// GGET MOVIES & PAGING HANDLE //
	getMovieData = () => {
		this.setState({ isLoading: true });
		Axios.get(urlAPI + '/movies', {
			params: {
				limit: this.state.itemsPerPage,
				offset: this.state.itemsPerPage * (this.currentPage - 1),
				orderBy: this.orderBy,
				orderDir: this.orderDir
			}
		}).then(res => {
			// console.log(res.data);
			this.setState({ allMovies: res.data, isLoading: false });
		}).catch(err => {
			console.log(err);
		});
	}

	pageHandler = (action) => {
		if (action === 'next') {
			this.setState({
				activePage: this.currentPage + 1
			});
			this.currentPage += 1;
		}
		else if (action === 'prev') {
			this.setState({
				activePage: this.currentPage - 1
			});
			this.currentPage -= 1;
		}

		this.getMovieData();

		window.scrollTo(0,0);
	}
	// GGET MOVIES & PAGING HANDLE //

	// SORTING //
	sortMoviesHandler = (event) => {
		this.orderBy = event.target.value;
		this.getMovieData();
	}

	sortMoviesHandler2 = (event) => {
		this.orderDir = event.target.value;
		this.getMovieData();
	}
	// SORTING //

	// LIFECYCLE //
	componentDidMount() {
		this.getMovieData();
	}
	// LIFECYCLE //

	// RENDERS //
	renderMovies = () => this.state.allMovies.map(val => <MovCard movData={val} />)
	// RENDERS //
	

	render({}, { allMovies }) {
		return (
			<div class={style.home}>
				{/* HEADER */}
				<div className="row mb-4">
					<h2 className="col-md-6">Discover Movies</h2>
					<div className="col-md-6">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text" id="basic-addon1">Sort by</span>
							</div>
							<select className="custom-select" onChange={this.sortMoviesHandler}>
								<option value="movieName" defaultChecked>Movie Title</option>
								<option value="releaseDate">Release Date</option>
								<option value="duration">Movie Duration</option>
							</select>
							<select className="custom-select ml-1"  onChange={this.sortMoviesHandler2}>
								<option value="asc" defaultChecked>Ascending</option>
								<option value="desc">Descending</option>
							</select>
						</div>
					</div>
				</div>
				{/* HEADER */}

				{/* MAIN CONTENT */}
				<div className="row justify-content-around mb-4">
					{
						allMovies.length && !this.state.isLoading
							?
							this.renderMovies()
							:
							<Loadings />
					}
				</div>
				{/* MAIN CONTENT */}

				{/* PAGINATION */}
				<nav className="d-flex justify-content-center">
					<ul className="pagination shadow">
						{
							this.state.activePage < 2
								?
								<li className="page-item disabled">
									<a className="page-link">Previous</a>
								</li>
								:
								<li className="page-item" onClick={() => this.pageHandler('prev')}>
									<a className={`page-link ${style.pageButton}`}>Previous</a>
								</li>
						}
						{
							this.state.activePage < 2
								?
								null
								:
								<li className="page-item">
									<span className="page-link">
										{this.state.activePage - 1}
									</span>
								</li>
						}

						<li className="page-item active">
							<span className="page-link">
								{this.state.activePage}
							</span>
						</li>

						{
							this.state.allMovies.length < this.state.itemsPerPage || this.state.allMovies.length / (this.state.activePage + 1) === this.state.itemsPerPage
								?
								null
								:
								<li className="page-item">
									<span className="page-link">
										{this.state.activePage + 1}
									</span>
								</li>
						}
						{
							this.state.allMovies.length < this.state.itemsPerPage || this.state.allMovies.length / (this.state.activePage + 1) === this.state.itemsPerPage
								?
								<li className="page-item disabled">
									<a className="page-link">Next</a>
								</li>
								:
								<li className="page-item" onClick={() => this.pageHandler('next')}>
									<a className={`page-link ${style.pageButton}`}>Next</a>
								</li>
						}
					</ul>
				</nav>
				{/* PAGINATION */}
			</div>
		);
	}
}

export default Home;
