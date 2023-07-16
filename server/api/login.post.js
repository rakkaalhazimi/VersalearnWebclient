export default defineEventHandler(async (event) => {
    const { $verifyGoogleUser } = useNitroApp()

    const cookies = parseCookies(event)
    const idToken = cookies.idToken ? cookies.idToken : ""
    const response = await $verifyGoogleUser(idToken)

    return response
})