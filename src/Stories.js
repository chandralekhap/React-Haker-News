import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {

  const State = useGlobalContext();

  if(State.isLoading)
  {

    return (<div className = 'loading'></div>)
  }
 // console.log('data from context: ', State.hits.map((item)=>item.title))
  return ( <section className='stories'>
  {State.hits.map((story) => {
    const { objectID, title, num_comments, url, points, author } = story
    return (
      <article key={objectID} className='story'>
        <h4 className='title'>{title}</h4>
        <p className='info'>
          {points} points by <span>{author} | </span> {num_comments}{' '}
          comments
        </p>
        <div>
          <a
            href={url}
            className='read-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            read more
          </a>
          <button
            className='remove-btn'
         onClick = {()=>{State.removeStory(objectID)}}
          >
            remove
          </button>
        </div>
      </article>
    )
  })}
</section>)
}

export default Stories
