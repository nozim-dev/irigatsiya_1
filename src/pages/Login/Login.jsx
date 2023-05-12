import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input, TextField } from "@mui/material";
import React from "react";
import "./scss/Login.scss";
import { useNavigate } from "react-router-dom";
import AxiosCall from '../../Components/AxiosCall/AxiosCall'
const Login = () => {
  const [showpass, setShowpass] = React.useState(false);
  const [username, setUserName] = React.useState("")
  const [password, setPassword] = React.useState("")
  const navigate = useNavigate("")
  function submit1(e) {
    e.preventDefault()
    AxiosCall('post', "/login", {

    })
  }
  return (
    <div className="login">
      <div className="container">
        <form className="form" onSubmit={submit1}>
          <div className="textes">
            <strong>Kirish</strong>
          </div>
          <div className="inputs">
            <div className="input-contanier">
              <input onChange={(e) => setUserName(e.target.value)} value={username} type="text" className="input" autoComplete="username" placeholder="Foydalanuvchi nomi" />
            </div>
            <div className="input-contanier">
              <input onChange={(e) => setPassword(e.target.value)} value={password} type={!showpass ? "password" : "text"} autoComplete="current-password" className="input" placeholder="Parol" />
              {showpass ? (
                <FontAwesomeIcon onClick={() => setShowpass(!showpass)} icon={faEye} className="eye-icon" />
              ) : (
                <FontAwesomeIcon onClick={() => setShowpass(!showpass)} icon={faEyeSlash} className="eye-icon" />
              )}
            </div>
          </div>
          <div className="sign-in-btn">
            <Button type="submit">Kirish</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
