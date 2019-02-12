import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";


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
    render() {
        return ( 
            <div className="catch-of-the-day">
               <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                </div>
                <Order />
                <Inventory addFish={this.addFish}/>
            </div>
        );
    }
}

export default App;