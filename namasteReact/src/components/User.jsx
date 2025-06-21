import { useState } from "react";

const User = ({name}) => {
    const [count, setCount] = useState(1);
    const [count1] = useState(1);


    return <div className="user-card">
        <h1 style={{cursor: "pointer"}} onClick={() => setCount(count * 2)}>Count: {count}</h1>
        <h1>Count: {count1}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Chandigarh</h3>
        <h4>Contact: @karanjamwal2004</h4>
    </div>
}

export default User;
