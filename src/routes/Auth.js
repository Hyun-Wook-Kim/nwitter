import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { async } from "@firebase/util";

const Auth =  function() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newAccount, setNewAccount] = useState(true)
    const [error, setError] = useState('');

    const onChange = e => {
        const {target : {name, value}} = e;

        if(name === "email"){
            setEmail(value)
        } else if(name === "password"){
            setPassword(value)
        }
        console.log(e.target.name)
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try{
            let account;
            if(newAccount){
                const auth = getAuth();
                account =  await createUserWithEmailAndPassword(auth, email, password);
            } else {
                const auth = getAuth();
                account = await signInWithEmailAndPassword(auth, email, password);
            }

            console.log(account)
        } catch(error){
            setError(error.message);
        }

    }
    const toggleAccount = () => setNewAccount(prev => !prev);


        return(
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} name="email" type="text" placeholder="Email" required value={email}></input>
                <input onChange={onChange} name="password" type="password" placeholder="Password" required value={password}></input>
                <input type="submit" value={newAccount ? "Create Account" : "Log in"}></input>
                {error}
            </form>
            <span onClick={toggleAccount}>{newAccount ? "sign in" : "Create Account"}</span>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>

            </div>
        </div>
        )
}

export default Auth;