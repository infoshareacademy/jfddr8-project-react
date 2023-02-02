import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/Auth";


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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!username || !password) {
            alert('Please provide user credentials');
            return;
        } else {
            localStorage.setItem('user', username);
            setIsLogged(true);
        }
      }

    return (
        <>
        <h1>Please log in:</h1>
        <form onSubmit={e => { handleSubmit(e) }}>
        <label>Login</label>
        <br />
        <input 
          name='login' 
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <br/>
        <label>Password</label>
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