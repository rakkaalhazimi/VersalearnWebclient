function redirectUnauthorizedUser(toName) {
  if (toName === "workbench") {
    return navigateTo("/login")
  }
}


export default defineNuxtRouteMiddleware(async (to, from) => {

  const authStore = useAuthStore()
  const config = useRuntimeConfig()

  const { data } = await useFetch("/api/login", { method: "POST" })
  data.value.status = config.public.runMode == "test" ? 200 : data.value.status

  if (data.value.status > 299) {
    authStore.setLoginState("false")
    return redirectUnauthorizedUser(to.name)
  } else {
    authStore.setLoginState("true")
    return
  }
})