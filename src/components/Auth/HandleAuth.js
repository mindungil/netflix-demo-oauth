import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Signin from "./Signin";
import Register from "./Register";

export function HandleAuth() {
  const [isRegister, setIsRegister] = useState(true);

  const changeAuth = (state) => {
    setIsRegister(state);
  };

  const animationVariants = {
    initial: { opacity: 0, rotateX: 80 },
    animate: { opacity: 1, rotateX: 0 },
    exit: { opacity: 0, rotateX: -80 },
  };

  return (
    <div className="auth-container">
      <AnimatePresence mode="wait">
        {isRegister ? (
          <motion.div
            key="signin"
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <Signin changeAuth={changeAuth} state={isRegister} />
          </motion.div>
        ) : (
          <motion.div
            key="register"
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <Register changeAuth={changeAuth} state={isRegister} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
