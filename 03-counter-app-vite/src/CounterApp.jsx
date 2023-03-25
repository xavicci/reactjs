import { useState } from 'react';
import ProtTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const [counter, setcounter] = useState(value)

    const handleAdd = () => setcounter(counter + 1)

    const handleSubstract = () => setcounter(counter - 1)

    const handleReset = () => setcounter(value)

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={handleAdd}>+1</button >
            <button onClick={handleSubstract}>-1</button >
            <button onClick={handleReset}>Reset</button >
        </>)
}

CounterApp.ProtTypes = {
    value: ProtTypes.number.isRequired
}
CounterApp.defaultProps = {
    value: 1234
}