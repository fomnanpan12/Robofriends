import React, { Component } from "react";
// import { render } from "react-dom"; 
// import { Component } from "react/cjs/react.production.min";
import Cardlist from './Cardlist';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';


// const state ={
//     robots: robots,
//     searchField:'',
// }

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield:'',
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
        // console.log(filterdRobots);
    }
    render() {
        const filterdRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Cardlist robots={filterdRobots}/>
            </div>
        );
    }
}

// const App = () =>{
//     return (
//         <div className='tc'>
//             <h1>RoboFriends</h1>
//             <SearchBox />
//             <Cardlist robots={robots}/>
//         </div>
//     );
// }



export default App;