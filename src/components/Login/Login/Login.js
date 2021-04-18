import React, { useContext } from 'react';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((res) => {
                const { email, displayName, photoURL } = res.user;
                const signInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setLoggedInUser(signInUser);
                history.replace(from);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }
    return (
        <div className="social-media">
            <h4 className='logo'>SPLASH</h4>
            <div className='login'>
                <h3 className='font'>Login With</h3>
                <div onClick={googleSignIn} className='social-icon-text'>
                    <FontAwesomeIcon className="social-icon" icon={faGoogle} />
                    <h5 className='font' >Continue with Google</h5>
                </div>

            </div>
        </div>
    );
};

export default Login;