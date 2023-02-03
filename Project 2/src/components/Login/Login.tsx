import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/Auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../firebase"

export const Login = (): JSX.Element => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { isLogged, setIsLogged } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(isLogged) {
            navigate('/home');
        }
    }, [isLogged, navigate]);

    const signIn = async (): Promise<void> => {
      try {
          await signInWithEmailAndPassword(firebaseAuth, username, password)
          setIsLogged(true)
      } catch ({code}) {
          console.log(code);
      }
  }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!username || !password) {
            alert('Please provide user credentials');
            return;
        } else {
          try {
            await createUserWithEmailAndPassword(firebaseAuth, username, password);
            setIsLogged(true)
          }
          catch ({code}) {
            if (code === 'auth/email-already-in-use') {
                signIn()
            } else {
                console.log(code);
            }
        }
        }
      }

    return (
        <>
        <h1>Please log in:</h1>
        <form onSubmit={e => { handleSubmit(e) }}>
        <label>Login:</label>
        <br />
        <input 
          name='login' 
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <br/>
        <label>Password:</label>
        <br />
        <input 
          name='password' 
          type='text' 
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <input 
          type='submit' 
          value='Log in' 
        />
      </form> 
      </>
    )
}