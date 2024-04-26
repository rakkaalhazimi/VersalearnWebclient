export const useUserStore = defineStore("user", () => {

  // User Profile
  const userKey = "userName"
  const photoUrlKey = "photoUrl"

  const name = ref("")
  const photoUrl = ref("")

  function setUserProfile({ pName, pPhotoUrl }) {
    name.value = pName
    photoUrl.value = pPhotoUrl
  }

  return { name, photoUrl, setUserProfile }
})