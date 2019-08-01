import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Post from './Post'
import { StyledPosts } from '../styles'

const Dashboard = () => {
  const [allPosts, setPosts] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get('https://greengo.now.sh/post')

      setPosts(data)
    }
    getPosts()
  }, [])
  return (
    <StyledPosts>
      {allPosts.map(post => (
        <Post {...post} />
      ))}
    </StyledPosts>
  )
}

export default Dashboard
