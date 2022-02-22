import React, { Component } from 'react';
import CounterFeature from './counterFeature';


class Counters extends Component {
    // shud always IMMUTABLE -> to perform undo feature which is common in all apps
        // also it will be easier to spot the difference changing
    state = { 
       counters : [
           {id: 1, value: 0},
           {id: 2, value: 0},
           {id: 3, value: 0},
           {id: 4, value: 0}
       ],
       anything: 'nice',
       anythingx: 'okay'
    }


    // const anyFunc = () => { functional feature}

    handleDelete = (counterId) => {
        // console.log('Event handler called');
        const deletingList = this.state.counters.filter(c => c.id !== counterId);
        // overwritting counters list value with deletingList 
        this.setState({ counters: deletingList });
    };

    render() { 
        return (

        <React.Fragment>

            

            <div>
               { this.state.counters.map( counter => 
               <CounterFeature 
                        // passing props here
                        key={ counter.id } 
                        
                        onHapus={ this.handleDelete }
                        // value={ counter.value } 
                        // id={ counter.id }
                        // counter can bring all the component of counters
                        counter={ counter } 
                        // then change with 'onClick={this.props.counter.id} in counter.jsx
                        // also this.state = { count: this.props.counter.value in counter.jsx};
                        />) }                  
            </div>

            <div>
                <h1> This is a separation </h1>
            </div>


            
            </React.Fragment>    
        )}
}
 
export default Counters;