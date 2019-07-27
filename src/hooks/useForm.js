import { useState } from 'react'
import axios from 'axios'

const useForm = () => {
  const [form, setForm] = useState({})

  const handleInputs = e => {
    e.persist()
    setForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const uploadPhoto = async e => {
    const file = new FormData()
    file.append('photo', e.target.files[0])

    const {
      data: { img }
    } = await axios.post('http://localhost:3000/upload', file)
    setForm(prevState => ({
      ...prevState,
      img
    }))
  }

  return [form, handleInputs, uploadPhoto]
}

export default useForm
