import React from 'react'

const Loading = () => {
    return (
        <div className="m-5 d-flex justify-content-center">
        <div className="spinner-border  text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
}

export default Loading