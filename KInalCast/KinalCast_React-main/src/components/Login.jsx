
import { emailValidationMessage } from "../shared/validators/input.validator"
import { passwordValidationMessage } from "../shared/validators/password.validator.js"
import { Input } from "./Input.jsx"
import { useLogin } from "../shared/validators/hooks/useLogin.jsx"
import { useState } from "react"
import { validateEmail } from "../shared/validators/input.validator.js"
import { validatePassword } from "../shared/validators/password.validator.js"


export const Login = ({ switchAuthHandler }) => {

  const { login, isLoading } = useLogin()


  const [formData, setFormData] = useState(
    {
      email: {
        value: '',
        isValid: false,
        showError: false
      },
      password: {
        value: '',
        isValid: false,
        showError: false
      }
    }
  )

  const onValueChange = (value, field) => {
    setFormData((prevData) => (

      {
        ...prevData,
        [field]: {
          ...prevData[field],
          value
        }
      }
    ))
  }

  const handleValidationOnBlur = (value, field) => {
    let isValid = false
    switch (field) {
      case 'email':
        isValid = validateEmail(value)
        break
      case 'password':
        isValid = validatePassword(value)
        break
      default:
        break
    }

    setFormData((prevData) => (

      {
        ...prevData,
        [field]: {
          ...prevData[field],
          isValid,
          showError: !isValid
        }
      }
    ))
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    login(
      formData.email.value,
      formData.password.value
    )
  }

  const isSubmitButtonDisable = !formData.email.isValid ||
    !formData.password.isValid

  return (
    <div className="login-container">
      <form className="auth-form"
        onSubmit={handleLogin}
      >
        <Input
          field='email'
          label='Email'
          type='email'
          value={formData.email.value}
          onChangeHandler={onValueChange}
          onBlurHandler={handleValidationOnBlur}
          showErrorMessage={formData.email.showError}
          validationMessage={emailValidationMessage}

        />

        <Input
          field='password'
          label='Password'
          type='password'
          value={formData.password.value}
          onChangeHandler={onValueChange}
          onBlurHandler={handleValidationOnBlur}
          showErrorMessage={formData.password.showError}
          validationMessage={passwordValidationMessage}
        />

        <button
          disabled={isSubmitButtonDisable}
        >
          Login
        </button>
      </form>
      <span onClick={switchAuthHandler}>
        ¿No tienes una cuenta? ¡Regístrate acá!
      </span>
    </div>
  )
}
