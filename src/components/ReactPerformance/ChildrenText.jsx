import React from "react";

const ChildrenTest = React.memo(({onClick}) => {
    return <button onClick={onClick}>Click</button>
})
export default ChildrenTest;