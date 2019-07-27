import React from 'react'
import { StyledPost } from '../styles'

const Post = ({ img, title, description }) => {
  return (
    <StyledPost>
      <div>
        <h2>{title}</h2>
        <small>User</small>
      </div>
      <img src={img} alt={title} />
      <small>User</small>
      <p>{description}</p>
    </StyledPost>
  )
}

export default Post
