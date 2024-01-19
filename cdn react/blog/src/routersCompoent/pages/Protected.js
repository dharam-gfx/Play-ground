import { useEffect } from "react"
import { isLogin } from "../../Validations/Auth"
import { useNavigate } from "react-router-dom"

const Protected = (props) => {
    let navigate = useNavigate()
  useEffect(()=>{
    if (!isLogin()) {
      navigate("login",{state:{isLogin: isLogin()}});
    }
  },[])

  return (
    <>
    <props.Component />
    </>
  )
}

export default Protected