import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth()
signInWithEmailAndPassword(auth, 'yap.rtim@gmail.com', 'password')
    .then((userCredential: any) => {
        console.log('SUCCESS')
        console.log(userCredential)
    })
    .catch((error: any) => {
        console.log('This is an error', error);
    });
