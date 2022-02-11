import React, { Component } from "react";
// import { render } from "react-dom"; 
// import { Component } from "react/cjs/react.production.min";
import Cardlist from '../components/Cardlist';
// import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';


// const state ={
//     robots: robots,
//     searchField:'',
// }

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield:'',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users =>this.setState({ robots: users}));
    }
    

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
        // console.log(filterdRobots);
    }
    render() {
        const { robots, searchfield } = this.state;
        const filterdRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
            <h1 className="tc">Loading</h1>:
        

            (
            <div className='tc'>
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <Cardlist robots={filterdRobots}/>
                </Scroll>
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