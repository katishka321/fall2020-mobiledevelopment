import React from 'react';

function DecreaseCount(props) {
  return (
    <div>
      <button onClick={() => {props.dispatch({"type": "decrement"}) }}>Click me to decrease the count!</button>
    </div>
  );
}

export default DecreaseCount;
