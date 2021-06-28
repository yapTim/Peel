import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const loginUsername: HTMLInputElement = document.querySelector('#loginUsername')
const loginPassword: HTMLInputElement = document.querySelector('#loginPassword')
const loginBtn = document.querySelector('#loginBtn')

loginBtn.addEventListener('click', () => {
    console.log(loginUsername.value)
    console.log(loginPassword.value)
    
    const auth = getAuth()
    signInWithEmailAndPassword(auth, loginUsername.value, loginPassword.value)
        .then((userCredential: any) => {
            console.log('SUCCESS')
            console.log(userCredential)
        })
        .catch((error: any) => {
            console.log('This is an error', error);
        });
})
