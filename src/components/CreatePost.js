import React from 'react'
import { withRouter } from 'react-router-dom'
import { Form } from '../styles' // these styles will be issued with Bulma, instead of styled-components
import useForm from '../hooks/useForm'
import axios from 'axios'

const CreatePost = props => {
  const [form, handleInput, uploadPhoto] = useForm()

  const handleSubmit = async e => {
    e.preventDefault()
    await axios.post('http://localhost:3000/post/new', form)
    props.history.push('/')
  }

  return (
    <div>
      <h1>New post:</h1>
      <Form onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleInput} placeholder="Título" />
        <input type="text" name="description" onChange={handleInput} placeholder="Escribe una descripción" />
        <input type="file" name="photo" onChange={uploadPhoto} />
        {form.img && <img src={form.img} alt="photo_url" />}
        <input type="submit" value="Enviar" disabled={form.img ? false : true} />
      </Form>
    </div>
  )
}

export default withRouter(CreatePost)
