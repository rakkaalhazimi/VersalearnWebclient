export const useUserStore = defineStore("user", () => {

    // User Profile
    const photoUrl = ref("")
    function getPhotoUrl() {
        if (process.client) {
            return localStorage.getItem("photoUrl") || photoUrl.value
        }
        return photoUrl.value
    }
    function setPhotoUrl(url) {
        photoUrl.value = url
        if (process.client) {
            localStorage.setItem("photoUrl", url)
        }
    }

    return {getPhotoUrl, setPhotoUrl}
})