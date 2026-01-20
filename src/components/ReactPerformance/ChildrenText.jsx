import React from "react";

const ChildrenTest = React.memo(({onClick}) => {
    console.log('Child render');
    return <button onClick={onClick}>Click</button>
})
export default ChildrenTest;