import React from 'react'
import Post from '../post/Post'
import Share from "../share/Share"
import { PostData } from '../../dummyData' 

const Feed = () => {
  return (
    <div className='feed flex-[7] '>
        <div className="feedwrapper relative px-2 lg:top-14">
            <Share/>            {
              PostData?.map(post =>  <Post key={post.id} post={post}/>)
            }
           
        </div>
    </div>
  )
}

export default Feed