import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component{
    state = {
        fishes: {},
        order: {}
    };
    componentDidMount(){
        console.log("mounted");
        const {params} = this.props.match;
        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef){
            this.setState({order: JSON.parse(localStorageRef)});
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }
    componentDidUpdate(){
        console.log("updated");  
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));  
    }
    componentWillUnmount(){
        console.log("unmounted");
        base.removeBinding(this.ref);
    }
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
    updateFish = (key, updateFish) => {
        //take a copy of the current state
        const fishes = {...this.state.fishes};
        //update that state
        fishes[key] = updateFish;
        //set that to state
        this.setState({fishes});
    }
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
                updateFish={this.updateFish}
                loadSampleFishes={this.loadSampleFishes} fishes={this.state.fishes}/>
            
            </div>
        );
    }
}

export default App;