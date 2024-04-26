export default defineEventHandler(async (event) => {
  const { $verifyUser } = useNitroApp()

  const cookies = parseCookies(event)
  const idToken = cookies.idToken ? cookies.idToken : ""
  const response = await $verifyUser(idToken)

  return response
})