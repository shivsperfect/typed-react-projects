import React from 'react'

let count = 0;
function Message() {
    count++;
    console.log('message called', count);
    
  return (
    <div>Message {count}</div>
  )
}

export default Message