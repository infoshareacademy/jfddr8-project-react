
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/Auth";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";


export const Login = (): JSX.Element => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { setIsLogged } = useContext(AuthContext);
    const [login, setLogin] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = async (event:React.FormEvent)=> {
      event.preventDefault();
      try {
        await createUserWithEmailAndPassword(auth, password, login)
        navigate ('/home')
      } catch (error) {
        error? signInWithEmailAndPassword: navigate('/login');
      }
    

//     const handleLogin = ({email, password}) =>
//     signInWithEmailAndPassword(auth, email, password);


// }


//     // useEffect(() => {
//     //     if(isLogged) {
//     //         navigate('/home');
//     //     }
//     // }, [isLogged, navigate]);

//     // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     //     e.preventDefault();
//     //     if (!username || !password) {
//     //         alert('Please provide user credentials');
//     //         return;
//     //     } else {
//     //         localStorage.setItem('user', username);
//     //         setIsLogged(true);
//     //     }
//     //   }
//     useEffect(() => {
//       const unsubscribe = onAuthStateChanged(auth, (user) => {
//         if (user) {
//           navigate("/");
//         }
//         setCurrentUser(user);
//       });
  
//       return () => unsubscribe();
//     }, [navigate]);
  
//     const handleLogin = ({ email, password }) =>
//       signInWithEmailAndPassword(auth, email, password);
  
//     const handleLogOut = () => signOut(auth);
  
//     const handleRegister = ({ email, password }) =>
//       createUserWithEmailAndPassword(auth, email, password);
  
//     if (currentUser) {
//       return (
//         <AuthenticatedHomePage
//           currentUser={currentUser}
//           onLogOut={handleLogOut}
//         />
//       );
//     }
  

//       const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//           await onSubmit({
//             email: event.target.elements.email.value,
//             password: event.target.elements.password.value,
//           });
//         } catch (error) {
//           setLoginError(true);
//         }
};

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