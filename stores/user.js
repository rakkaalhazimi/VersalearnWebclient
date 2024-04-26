export const useUserStore = defineStore("user", () => {

  // User Profile
  const userKey = "userName"
  const photoUrlKey = "photoUrl"

  const name = ref("")
  const photoUrl = ref("")
  const genericPhotoUrl = ref("/assets/logo/user-generic.png")

  function setUserProfile({ pName, pPhotoUrl }) {
    name.value = pName
    photoUrl.value = pPhotoUrl
  }

  return { name, photoUrl, genericPhotoUrl, setUserProfile }
})