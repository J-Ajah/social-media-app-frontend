import React from 'react'
import Post from '../post/Post'
import Share from "../share/Share"
import { PostData } from '../../dummyData' 

const Feed = () => {
  return (
    <div className='feed flex-[7] pt-14 '>
        <div className="feedwrapper px-2">
            <Share/>
            {
              PostData?.map(post =>  <Post key={post.id} post={post}/>)
            }
           
        </div>
    </div>
  )
}

export default Feed