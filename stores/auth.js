export const useAuthStore = defineStore("auth", () => {

    // Login state
    const isLogin = ref("false")
    function setLoginState(condition) {
        isLogin.value = condition
        if (process.client) {
            localStorage.setItem("isLogin", isLogin.value)
        }
    }
    function getLoginState() {
        if (process.client) {
            return localStorage.getItem("isLogin") || isLogin.value
        }
        return isLogin.value
    }
    return {getLoginState, setLoginState}
})