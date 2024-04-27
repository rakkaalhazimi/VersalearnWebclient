import { initializeApp, cert } from "firebase-admin/app"
import { getAuth } from "firebase-admin/auth"



// Initialize Firebase Admin
const config = useRuntimeConfig()
const credential = {
  type: config.type,
  project_id: config.project_id,
  private_key_id: config.private_key_id,
  private_key: config.private_key,
  client_email: config.client_email,
  client_id: config.client_id,
  auth_uri: config.auth_uri,
  token_uri: config.token_uri,
  auth_provider_x509_cert_url: config.auth_provider_x509_cert_url,
  client_x509_cert_url: config.client_x509_cert_url,
  universe_domain: config.universe_domain
}

const appName = "admin"
const adminApp = initializeApp({ credential: cert(credential) }, appName)  // Pass appName to initialize multiple app
const adminAuth = getAuth(adminApp)

async function verifyUser(idToken) {
  const response = await adminAuth
    .verifyIdToken(idToken, false)
    .then(decodedToken => {
      const response = {
        status: 200,
        content: {code: "firebase/verify-user", message: "user is verified"},
      }
      return response
    })
    .catch(error => {
      const response = {
        status: 401,
        content: {code: error.code, message: error.message},
      }
      return response
    })
  return response
}
export default defineNitroPlugin(nitroApp => {
  nitroApp.$verifyUser = verifyUser
})