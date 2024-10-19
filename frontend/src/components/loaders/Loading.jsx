import React from 'react'

function Loading({message = 'Loading...'}) {
  return (
    <div>
      <span className="loading loading-spinner text-primary"></span>
      <p>{message}</p>
    </div>
  )
}

export default Loading
