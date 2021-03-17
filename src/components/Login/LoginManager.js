// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';

// export const initializeLoginFramework=()=>{
//     if (firebase.apps.length === 0) {
//         firebase.initializeApp(firebaseConfig);
//     }
// }

// export const handleGoogleSignIn = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider)
//         .then(res => {
//             const { displayName, photoURL, email } = res.user;
//             const signedInUser = {
//                 isSignedIn: true,
//                 name: displayName,
//                 email: email,
//                 photo: photoURL
//             }
//             setUser(signedInUser);
//             console.log(displayName, photoURL, email);
//         })
//         .catch(error => {
//             console.log(error);
//         })
// }

// const handleSignOut = () => {
//     firebase.auth().signOut()
//         .then(res => {
//             const signedOutUser = {
//                 isSignedIn: false,
//                 name: '',
//                 photoURL: '',
//                 email: '',
//                 error: '',
//                 success: false
//             }
//             setUser(signedOutUser);
//         })
//         .catch(err => {

//         })
// }

// export const createUserWithEmailAndPassword =()=>{
//     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//                 .then(res => {
//                     const newUserInfo = { ...user };
//                     newUserInfo.error = '';
//                     newUserInfo.success = true;
//                     setUser(newUserInfo);
//                     // setLoggedInUser(newUserInfo);
//                     history.replace(from);
//                     updateUserName(user.name);

//                     console.log('sign in user info', res.user)
//                 })
//                 .catch((error) => {
//                     const newUserInfo = { ...user };
//                     newUserInfo.error = error.message;
//                     newUserInfo.success = false;
//                     setUser(newUserInfo);
//                 });

// }
// export signInWithEmailAndPassword