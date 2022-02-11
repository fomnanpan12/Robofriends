import React, { Component } from "react";
// import { render } from "react-dom"; 
// import { Component } from "react/cjs/react.production.min";
import Cardlist from './Cardlist';
// import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';


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
        const filterdRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0) {
            return <h1 className="tc">Loading</h1>
        } else {

                return (
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