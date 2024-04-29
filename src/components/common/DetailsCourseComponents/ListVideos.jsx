import React from 'react'

import Video from './Video'

const ListVideos = () => {
    return (
        <div className='flex w-full flex-col items-start'>
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
    )
}

export default ListVideos