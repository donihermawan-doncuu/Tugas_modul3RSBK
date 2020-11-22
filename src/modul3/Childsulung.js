import React, { Component } from "react";
class Childsulung extends Component {
    state = {
        nama: "Doni Hermawan"
    }
    componentDidMount() {
        alert(`Mount dimulai!`)
    }
    ChangeName = () => {
        this.setState((state) => { 
            if (state.nama === "Doni Hermawan") {
                return {nama : "Siskawati Sianipar"}
            } else {
                return { nama: "Doni Hermawan"}                 
            }
        })
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     alert(`Component Updates! State nama sebelumnya: ${prevState.nama}`)
    // }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return window.confirm('Haruskah Component ini di-Update?');
    // }
    componentWillUnmount() {
        alert('child sulung pundaknya harus kuat :')
    }
    render() {
        return (
            <div>
                <h4>Aku Anak Sulung</h4>
                <button onClick={this.ChangeName}>Ganti Jeneng!</button>
                <br />
                <h4>{this.state.nama}</h4>
            </div>
        );
    }
}
export default Childsulung;