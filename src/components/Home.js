import React from 'react'
import { Form, Input, Tooltip, Icon, Button, Cascader } from 'antd'


import AuthService from '../services/auth'
const authService = new AuthService()

const profile = [
  {
    value: 'Asociacion',
    label: 'Asociación'
  },
  {
    value: 'Cliente',
    label: 'Cliente'
  },
  {
    value: 'Patrocinador',
    label: 'Patrocinador'
  },
  {
    value: 'Proveedor',
    label: 'Proveedor'
  }
]

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  }

  componentDidMount(props) {
    const loggedUser = localStorage.getItem('loggedUser')
    if (loggedUser) return this.props.history.push('/')
  }
  handleInput = e => {
    e.persist()
    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  handleCascader = (value, field) => {
    this.setState(prevState => ({
      ...prevState,
      [field]: value[0]
    }))
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        authService
          .signup(this.state)
          .then(response => {
            //aquí deberia ir una notificacion o un swal o un toastr
            this.props.history.push('/login')
          })
          .catch(err => {
            //aquí deberia ir una notificacion o un swal o un toastr
            console.log(err.response)
            alert(err.response.data.msg || err.response.data.err.message)
          })
      }
    })
  }

  handleConfirmBlur = e => {
    const { value } = e.target
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!')
    } else {
      callback()
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }

  render() {
    const { getFieldDecorator } = this.props.form

    const formItemLayout = {
      labelCol: {
        xs: { span: 12 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 8 }
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 15,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    }

    return (
      
      <div>
        {/* <pre>{JSON.stringify(this.state)}</pre> */}

        <div className="signU">
          <h2>Registro de usuario</h2>
        </div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="¿qué tipo de perfil?">
            {getFieldDecorator('role', {
              rules: [{ type: 'array', required: true, message: 'Por favor selecciona tu perfil' }]
            })(<Cascader options={profile} name="role" onChange={values => this.handleCascader(values, 'role')} />)}
          </Form.Item>
          <Form.Item
            label={
              <span>
                Nombre&nbsp;
                <Tooltip title="Su nombre, o el de su empresa / asociación">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Por favor introduzca un nombre', whitespace: true }]
            })(<Input name="name" onChange={this.handleInput} />)}
          </Form.Item>
          <Form.Item label="Correo electrónico">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'El correo electrónico ingresado no es válido'
                },
                {
                  required: true,
                  message: 'Por favor ingrese un correo electrónico'
                }
              ]
            })(<Input name="email" onChange={this.handleInput} />)}
          </Form.Item>
          <Form.Item label="Contraseña" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Por favor ingrese una contraseña'
                },
                {
                  validator: this.validateToNextPassword
                }
              ]
            })(<Input.Password name="password" onChange={this.handleInput} />)}
          </Form.Item>
          <Form.Item label="Confirme contraseña" hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Por favor confirme su contraseña'
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="login-form-button2">
              Registro
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm)
export default WrappedRegistrationForm