import { useCallback, useState } from "react";
import ChildrenTest from "./ChildrenText";

const Parent = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => console.log('Clicked'), [])
    return (
        <>
            <p>{count}</p>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20}}>
                <button onClick={() => setCount(pre => pre + 1)}>+</button>
                <ChildrenTest onClick={handleClick}/>
            </div>
        </>
    )
}
export default Parent;