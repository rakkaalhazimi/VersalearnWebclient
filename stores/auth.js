export const useAuthStore = defineStore("auth", () => {

  // Login state
  const isLogin = ref("false")

  function setLoginTrue() {
    isLogin.value = "true";
  }
  
  function setLoginFalse() {
    isLogin.value = "false";
  }

  return { isLogin, setLoginTrue, setLoginFalse }
})