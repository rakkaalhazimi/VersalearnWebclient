// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
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


    function googleLogin() {
        signInWithPopup(auth, provider)
            .then( async (result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                const idTokenCookie = useCookie("idToken", {sameSite: true, maxAge: 60 * 60})

                const user = result.user
                userStore.setPhotoUrl(user.photoURL)

                // ID Token must be acquired from auth object
                // ref: https://stackoverflow.com/questions/38335127/firebase-auth-id-token-has-incorrect-aud-claim
                idTokenCookie.value = await auth.currentUser.getIdToken()
                return navigateTo("/workbench")

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;

                userStore.$reset()

                return navigateTo("/login")
            })

    }

    function googleLogout() {
        signOut(auth).then(() => {
            const idTokenCookie = useCookie("idToken")
            idTokenCookie.value = null
            return navigateTo("/login")
        })
    }

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            // Do something
        } else {
            console.log("Logout")
        }
    })

    nuxtApp.provide("googleLogin", googleLogin)
    nuxtApp.provide("googleLogout", googleLogout)
})