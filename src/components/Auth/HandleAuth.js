import React, {useState} from "react";
import Signin from "./Signin";
import Register from './Register';

export function HandleAuth() {
  const [isRegister, SetIsRegister] = useState(true);

  const changeAuth = (state) => {
    SetIsRegister(state);
    console.log("isrender");
    console.log(state);
  };
  console.log("isRender");

  return (
    <div>
      {isRegister ? <Signin changeAuth={changeAuth} state={isRegister}/> : <Register changeAuth={changeAuth} state={isRegister}/>}
    </div>
  );
}