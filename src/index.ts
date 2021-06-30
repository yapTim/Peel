import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const loginUsername: HTMLInputElement = document.querySelector('#loginUsername')
const loginPassword: HTMLInputElement = document.querySelector('#loginPassword')
const loginState: HTMLElement = document.querySelector('#loginState')
const loginBtn = document.querySelector('#loginBtn')
const closeLoginBtn = document.querySelector('#closeLoginBtn')


loginBtn.addEventListener('click', () => {
    console.log(loginUsername.value)
    console.log(loginPassword.value)
    
    const auth = getAuth()
    signInWithEmailAndPassword(auth, loginUsername.value, loginPassword.value)
        .then((userCredential: any) => {
            console.log(userCredential)
            loginState.innerText = "Success!"
            closeLoginBtn.addEventListener('click', () => {
                window.location.href = "inventory.html"
                })
        })
        .catch((error: any) => {
            console.log('This is an error', error);
            loginState.innerText = "Empty or incorrect email/password!"
            closeLoginBtn.addEventListener('click', () => {
                setTimeout(() => loginState.innerText = "Loading...", 500)
                })
        });
})

