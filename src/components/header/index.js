/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prefer-stateless-function */
import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'unistore/preact';
import { actions } from '../../actions-store';
import style from './style.css';

class Header extends Component {
	state = {
		searchFocus: false,
		searchValue: ''
	}

	onSearch = (event) => {
		if (event.key === 'Enter' && this.state.searchValue !== '') {
			window.location = `/results?keyword=${this.state.searchValue}`;
		}
	}

	userLogout = () => {
		this.props.userLogout();
	}

	render() {
		return (
			<header className={style.header}>

				<Link href="/" className={style.logo}>
					TONTON
				</Link>

				<input className={style.menu_btn} type="checkbox" id="menu-btn" />
				<label className={style.menu_icon} for="menu-btn">
					<span className={style.navicon} />
				</label>

				<ul className={style.menu}>
					<li>
						<input
							type="search"
							className={style.navbarSearch}
							placeholder={this.state.searchFocus ? 'Find Movies . . .' : 'Search'}
							onFocus={() => this.setState({ searchFocus: true })}
							onBlur={() => this.setState({ searchFocus: false })}
							onChange={(e) => this.setState({ searchValue: e.target.value })}
							onKeyUp={this.onSearch}
						/>
					</li>
					<li><Link href="/genre">Genre</Link></li>
					<li><Link href="/artist">Artist</Link></li>
					{
						this.props.username
							?
							<li onClick={this.userLogout}>
								<a className={style.logoutUser}>Logout</a>
							</li>
							:
							null
					}
				</ul>

			</header>
		);
	}
}

export default connect('username', actions)(Header);
