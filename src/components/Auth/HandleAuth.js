import React, {useState} from "react";
import Signin from "./Signin";
import Register from './Register';

export function HandleAuth() {
  const [isRegister, SetIsRegister] = useState(false);

  const changeAuth = (state) => {
    SetIsRegister(state);
  };

  return (
    <div>
      {isRegister ? <Signin changeAuth={changeAuth} state={isRegister}/> : <Register changeAuth={changeAuth} state={isRegister}/>}
    </div>
  );
}