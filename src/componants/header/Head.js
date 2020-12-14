import React, { useState } from 'react';


const Head = (props) => {
    const [count, setCount] = useState(0);

    const incrase = () => {
        setCount(count + 1);
    }

    const decrase = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrase}>Incrase</button>
            <button onClick={decrase}>Decrase</button>
        </div>
    )
}

export default Head;