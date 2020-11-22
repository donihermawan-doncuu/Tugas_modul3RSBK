import React, { Component } from "react";
class Childdwi extends Component {
    state = {
        angka: 0
    }
    componentDidMount() {
        alert(`Mount dimulai!`)
    }
    tambahAngka = () => {
        this.setState((state) => { return { angka: state.angka + 1 } })
    }
    kurangiAngka = () => {
        this.setState((state) => { return { angka: state.angka - 1 } })
    }
    componentWillUnmount() {
        alert('Children Dwi Enak gak enak lur :)')
    }
    render() {
        return (
            <div>
                <h4>Aku Anak sing nomor loro</h4>
                <button onClick={this.tambahAngka}>Ditambah</button>
                <button onClick={this.kurangiAngka}>Dikurang</button>
                <br/>
                <p>{this.state.angka}</p>
            </div>
        );
    }
}
export default Childdwi;