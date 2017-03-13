import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {

    constructor() {
        super();
        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        //getinitialState
        this.state = {
            fishes: {},
            order: {}
        }
    }

    loadSamples() {
        this.setState({
            fishes: sampleFishes
        })
    }

    addFish(fish) {
        //update our state
        const fishes = {...this.state.fishes};
        //add in our new fish
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        //set state
        this.setState({fishes});
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"></Header>
                    <ul className="list-of-fishes">
                        {
                            Object.keys(this.state.fishes)
                            .map(key => <Fish key={key} details={this.state.fishes[key]}></Fish>)
                        }
                    </ul>
                </div>
                <Order></Order>
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples}></Inventory>
            </div>
        )
    }

}


export default App;