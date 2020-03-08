import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThreePage from './components/ThreePage';
import './components/App.css';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/FirstPage" component={FirstPage} />
						<Route path="/SecondPage" component={SecondPage} />
						<Route path="/ThreePage" component={ThreePage} />{' '}
					</Switch>
					<div className="first-footer">
						<img src="https://media1.giphy.com/media/ykvRcYBJBiQwg/giphy.gif" />
						<div className="next-page">
							{' '}
							<ul className="full-page">
								<li>
									<Link to={'/FirstPage'} className="nav-link">
										first
									</Link>
								</li>
								<li>
									<Link to={'/SecondPage'} className="nav-link">
										second
									</Link>
								</li>
								<li>
									<Link to={'/ThreePage'} className="nav-link">
										three
									</Link>
								</li>
							</ul>{' '}
							<img src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Decorative-Elements-PNG/Gold_Corner_Decoration_PNG_Clipart.png?m=1434276875" />
						</div>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
