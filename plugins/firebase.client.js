// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth, GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup, signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


export default defineNuxtPlugin(nuxtApp => {

  const userStore = useUserStore()

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const config = useRuntimeConfig()
  const firebaseConfig = {
    apiKey: config.public.apiKey,
    authDomain: config.public.authDomain,
    projectId: config.public.projectId,
    storageBucket: config.public.storageBucket,
    messagingSenderId: config.public.messagingSenderId,
    appId: config.public.appId,
    measurementId: config.public.measurementId,
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()
  const analytics = getAnalytics(app);


  function emailPasswordRegister(email, password, verifyPassword) {
    console.log("Register")
    console.log(email, password, verifyPassword)
    if (password != verifyPassword) return
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        // console.log("Registered user: ")
        // console.log(user)
      })

      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)

        // userStore.$reset()

        return navigateTo("/register")
      })
  }

  async function emailPasswordLogin(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      const idTokenCookie = useCookie("idToken", { sameSite: true, maxAge: 60 * 60 })
      // ID Token must be acquired from auth object
      // ref: https://stackoverflow.com/questions/38335127/firebase-auth-id-token-has-incorrect-aud-claim
      idTokenCookie.value = await auth.currentUser.getIdToken()

      const response = {
        status: 200,
        content: { code: "firebase/email-login", message: "login success" },
      }
      // console.log(response)
      return response

    } catch (error) {
      const response = {
        status: 401,
        content: { code: error.code, message: error.message },
      }
      console.log(response)
      return response
    }
  }


  async function googleLogin() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      const idTokenCookie = useCookie("idToken", { sameSite: true, maxAge: 60 * 60 })
      // ID Token must be acquired from auth object
      // ref: https://stackoverflow.com/questions/38335127/firebase-auth-id-token-has-incorrect-aud-claim
      idTokenCookie.value = await auth.currentUser.getIdToken()

      const response = {
        status: 200,
        content: { code: "firebase/google-login", message: "login success" },
      }
      // console.log(response)
      return response

    } catch (error) {
      const response = {
        status: 500,
        content: { code: error.code, message: error.message },
      }
      // console.log(response)
      return response
    }
  }

  function logout() {
    signOut(auth).then(() => {
      const idTokenCookie = useCookie("idToken")
      idTokenCookie.value = null
      return navigateTo("/login")
    })
  }

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // Do something
      userStore.setUserProfile({ 
        pName: user.displayName, 
        pPhotoUrl: user.photoURL, 
        pEmail: user.email 
      })
    } else {
      console.log("Logout")
    }
  })

  nuxtApp.provide("googleLogin", googleLogin)
  nuxtApp.provide("logout", logout)
  nuxtApp.provide("emailPasswordRegister", emailPasswordRegister)
  nuxtApp.provide("emailPasswordLogin", emailPasswordLogin)
})