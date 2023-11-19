export const useUserStore = defineStore("user", () => {

    // User Profile
    const userKey = "userName"
    const photoUrlKey = "photoUrl"
    
    const name = computed(() => sessionStorage.getItem(userKey))
    const photoUrl = computed(() => sessionStorage.getItem(photoUrlKey))
    
    function setUserProfile({name, photoUrl}) {
        sessionStorage.setItem(userKey, name)
        sessionStorage.setItem(photoUrlKey, photoUrl)
    }
    
    return {name, photoUrl, setUserProfile}
})