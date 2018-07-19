import React, { Component } from 'react';
import Routes from 'react-router';
// import { Router, IndexRoute, Route, browserHistory } from 'react-router'
// import { Provider } from 'react-redux'
//
// import store from '../store'
//
// import NavContainer from'./NavContainer'
// import CollectContainer from'./CollectContainer'
// import Profile from './../components/Profile/Profile.js'
// import MenuContainer from './MenuContainer.js'

import '../styles/animation.less'
import '../styles/reset.css'

class App extends Component {

    render() {
        // console.log(this.props.users);
        // addLocaleData([...en, ...es]);
        // let users = this.props.users;
        // console.log(users)
        return (
			<div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>

				<div className="off-canvas-content" data-off-canvas-content>

					<Routes />

				</div>
			</div>

        );
    }
}
// const App = (
// 	<Provider store={ store }>
// 		<div>
// 			<NavContainer />
// 			<CollectContainer />
// 			<Profile />
// 			<MenuContainer />
// 		</div>
// 	</Provider>
// )



export default App