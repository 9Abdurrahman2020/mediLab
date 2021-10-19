import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, signOut, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


initializeAuthentication();
const useFirebase = () => {

const [isLoading,setIsLoading] = useState(true);
const [location,setLocation] = useState({});
const [history,setHistory] = useState({});
const [doctors,setDoctors] = useState([]);
const [user,setUser] = useState(null);
const [error,setError] = useState('');
const [email,setEmail] = useState('');
const [pass,setPass] = useState('');

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubPrivider = new GithubAuthProvider();

const redirect_url = location.state?.from || '/' ;

useEffect( ()=>{
    fetch('/data/doctorsData.json')
    .then(res=>res.json())
    .then(data=>setDoctors(data))
},[]);

const registerUser = () =>{
    const regex = /^\S+@\S+\.\S+$/;

    if(!regex.test(email)){
        return setError('Please try again with a valid email');
    }
    else if(pass.length < 6){
        return setError('Please put a password bigger then 5 character');
    }
    else{
        setError('')
        createUserWithEmailAndPassword(auth, email, pass)
    .then( () =>{
        setError('Successfully registered, You can login now !')
        signOut(auth)
    })
    .catch(error =>{
        setError(error.message)
    })
    }
}

const loginUsingEmailPass = () =>{

    const regex = /^\S+@\S+\.\S+$/;

    if(!regex.test(email)){
        return setError('Please try again with a valid email');
    }
    else if(pass.length < 6){
        return setError('Please put a password bigger then 5 character');
    }
    else{
        setError('')
        signInWithEmailAndPassword(auth, email, pass)
    .then( result =>{
        setUser(result.user)
        history.push(redirect_url)
    })
    .catch(error =>{
        setError(error.message)
    })
    }
}

const githubSignIn = () =>{
    signInWithPopup(auth, githubPrivider)
    .then( result =>{
        setUser(result.user)
        history.push(redirect_url)
    })
    .catch(error=>{
        setError(error.message)
    })
}

const googleSignIn = () =>{
    
signInWithPopup(auth, googleProvider)
.then(result =>{
    setUser(result.user);
    history.push(redirect_url)
})
.catch(error=>{
    setError(error.message);
})
};

useEffect( ()=>{
    setIsLoading(true)
onAuthStateChanged(auth, user=>{
    if(user){
        setUser(user)
        setIsLoading(false)
    }else{
        setUser(null)
        setIsLoading(false)
    }
})
},[])

const logOut = () =>{
signOut(auth)
.then( ()=>{
setUser(null)
})
}
 

 

return {
    error,
    user,
    googleSignIn,
    logOut,
    githubSignIn,
    doctors,
    setEmail,
    setPass,
    registerUser,
    setLocation,
    setHistory,
    isLoading,
    loginUsingEmailPass
}
}
export default useFirebase;