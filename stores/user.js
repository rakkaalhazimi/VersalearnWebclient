export const useUserStore = defineStore("user", () => {

    // User Profile
    const photoUrl = ref("")
    function getPhotoUrl() {
        return photoUrl.value
    }
    function setPhotoUrl(url) {
        photoUrl.value = url
    }

    return {getPhotoUrl, setPhotoUrl}
})