import React, {Fragment} from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component { 
    myInput = React.createRef();   

    //constructor is necessary to bind or you can bind using properties and arrow functions as seen with goToStore below
    // constructor(){
        //super is necessary to create component first
        // super();
        //method that will run before component is created
        // this.goToStore = this.goToStore.bind(this);
    // }
    goToStore = (event) => {
    
        //1. stop form from submitting
        event.preventDefault();
        // console.log(this.myInput.current.value);
        //2. get text from input
        //golden rule don't touch the dom, no selectors, no jquery, use a ref instead
        //binding - lifecycle event - componentDidMount()
        //all built in methods come in mama component, any method we have on top of it will not be able to ref component, solution is to bind own methods
        //we will do this with a constructor or by using properties with arrow func instead of functions
        
        const storeName = this.myInput.current.value;
    
        //3. change the page to /store/whatever-they-enter
        this.props.history.push(`/store/${storeName}`);
    };

    render(){
        return (
            <Fragment>
                { /*fragment allows for sibling elements*/}
                <p></p>
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please Enter a Store</h2>
                                    
                    <input 
                        type="text"
                        ref={this.myInput} 
                        required 
                        placeholder="Store Name" 
                        defaultValue={getFunName()} 
                    />
                    <button type="submit">Visit Store >></button>
                </form>
            </Fragment>
        ) 
    }
}

export default StorePicker;