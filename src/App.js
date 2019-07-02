import React,{Component} from 'react';
import LandingPage from './components/LandingPage';
import {Provider} from 'react-redux';
import store from './store';
import '/Users/user/Documents/Project/ThinkDiffPage/src/main.css';

class App extends Component{
    render(){
        return(
            <Provider store = {store}>
                <div>
                    <LandingPage/>
                </div>
            </Provider>
        )
    }
}

export default App;