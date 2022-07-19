import React from 'react'
import Post from '../post/Post'
import Share from "../share/Share"

const Feed = () => {
  return (
    <div className='feed flex-[7] '>
        <div className="feedwrapper px-2">
            <Share/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>
  )
}

export default Feed