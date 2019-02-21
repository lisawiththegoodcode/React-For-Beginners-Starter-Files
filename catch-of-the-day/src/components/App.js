import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";


class App extends React.Component{
    state = {
        fishes: {},
        order: {}
    };
    addFish = fish =>{
        console.log("adding a fish");
        //1. take a copy of the existing state
        const fishes = {...this.state.fishes};
        //2. add new fish to that fishes varuable
        fishes[`fish${Date.now()}`] = fish;
        //3. set new fishes object to state
        this.setState({
            fishes: fishes
        });
        //alternatively this.setState({fishes}); will work if variable names match
    };
    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes});
    }
    addToOrder = (key => {
        //copy of state
        const order = {...this.state.order};
        
        //add to the order or update number
        //or operate will defaut if oder.fish1 doesn't exist yet
        order[key] = order[key] + 1 || 1;
        
        //call setstate to update state object
        this.setState({order});
    })
    render() {
        return ( 
            <div className="catch-of-the-day">
               <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => 
                        <Fish 
                            key={key} 
                            index={key}
                            details={this.state.fishes[key]}
                            addToOrder={this.addToOrder}
                        />)}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory 
                addFish={this.addFish} 
                loadSampleFishes={this.loadSampleFishes}/>
            </div>
        );
    }
}

export default App;