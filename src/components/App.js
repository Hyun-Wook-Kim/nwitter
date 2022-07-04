import React, { useEffect, useState } from "react";
import Routers from "components/Router";
import { authService } from "fBase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Router } from "react-router-dom";




function App() {
  useState()


  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log(user)
      if(user){
        setIsLoggedIn(true);
      } else{
        setIsLoggedIn(false);
      }
      setInit(true)
    })
  }, [])

  // setInterval(() => {
  //   console.log(authService.currentUser)
  // }, 2000);
  return (
    <>
    {init ? <Routers isLoggedIn={isLoggedIn}></Routers> : "Initializing...."}
    </>
  );
}

export default App;
