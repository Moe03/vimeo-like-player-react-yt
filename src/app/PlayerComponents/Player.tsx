import React from 'react';

export type PlayerProps = {
    src: string,
}

const Player = (props: PlayerProps) => {
  return (
    <div className='w-full h-full'>
        <video className='w-full h-full' src={props.src}>

        </video>
    </div>
  )
}

export default Player