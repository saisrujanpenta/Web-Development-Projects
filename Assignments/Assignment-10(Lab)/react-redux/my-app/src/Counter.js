import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './action';


class Counter extends Component {
    render () {

        const {counter, increment, decrement, reset} = this.props;

        return (
            <div className="App">
                <div>Counter {counter}</div>
                <div><button onCLick={increment}>Increment</button></div>
                <div><button onCLick={decrement}>Decrement</button></div>
                <div><button onCLick={reset}>Reset</button></div>
            </div>
        )
    }
}

const mapStateToprops = (state) => {
    return {
        counter: state
    }
}

const mapDispatcherToprops = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset()),
    }
}

export default connect(mapStateToprops, mapDispatcherToprops) (Counter);