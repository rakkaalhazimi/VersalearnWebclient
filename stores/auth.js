export const useAuthStore = defineStore("auth", () => {

    // Login state
    const isLogin = ref("false")
    
    function setLoginState(condition) {
        isLogin.value = condition
    }
    
    return {isLogin, setLoginState}
})