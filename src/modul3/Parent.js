import { Component } from "react";
import React from "react";
import Childsulung from "./Childsulung";
import Childdwi from "./Childdwi";
class Parent extends Component {
    state = {
        komponen1: false,
        komponen2: false
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Component Updates! prevState childsulung: ${prevState.komponen1} -- prevState childdwi: ${prevState.komponen2}`)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('Tekan Ora?');
    }
    ubahkomponen1 = () => {
        this.setState((state) => {
            return { komponen1: !this.state.komponen1 }
        })
    }
    ubahkomponen2 = () => {
        this.setState((state) => {
            return { komponen2: !this.state.komponen2 }
        })
    }
    render() {
        return (
            <div>
                {this.state.komponen1 ? <Childsulung /> : ''}
                <button onClick={this.ubahkomponen1}>{this.state.komponen1 ? 'HIDE' : 'SHOW'} Anak Sulung!</button>
                <br/>
                {this.state.komponen2 ? <Childdwi /> : ''}
                <button onClick={this.ubahkomponen2}>{this.state.komponen2 ? 'HIDE' : 'SHOW'} Anak sing nomor loro!</button>
            </div>
        );
    }
}
export default Parent;