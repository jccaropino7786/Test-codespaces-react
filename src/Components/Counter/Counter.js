
const Counter = ({count, text, setCount}) => {
    return (
        <div>
            <p id="count">{count}{text}</p>
            <button onClick={() => setCount(count + 1)} id="countBtn">Increment</button>
        </div>
    )
}

export default Counter