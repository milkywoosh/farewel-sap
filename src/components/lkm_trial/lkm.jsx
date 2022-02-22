import React, { Component } from 'react';
import Clock from '../clockClass/clock.jsx';

class Henloo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            anyObj: null,
            students: ['ben', 'ron', 'john'],
        }

        this.render = this.render.bind(this);
        this.getDataStudent = this.getDataStudent.bind(this);
        this.renderClockClass = this.renderClockClass.bind(this)
    }

    getDataStudent() {
        const data = this.state.students.slice();
        
    }

    renderClockClass() {
        return (
            < Clock />
        )
    }

    render() {
        return (
        <div>
            {/* {this.renderClockClass()}
                    or
               
             */}
              {/* < Clock /> */}
        </div>
        
        )
    }
}


export default Henloo;