import { useState } from "react"
import { registerRequest } from "../../../service/api"
import toast from "react-hot-toast"

export const useRegister = () =>{
    const [isLoading, setIsLoading] = useState(false)

    const register = async (email, username, password ) =>{

        setIsLoading(true)
        const user = {
            email, 
            username, 
            password
        }

        const response = await registerRequest(user)
        setIsLoading(false)
        if(response.error){
            return toast.error(
                response?.err.response?.data?.message ||
                'Error al registrar usuario, intentalo de nuevo'
            )
        }

        console.log(response)

    }
    return {
        register,
        isLoading

    }
}