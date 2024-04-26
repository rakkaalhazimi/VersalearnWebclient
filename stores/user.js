export const useUserStore = defineStore("user", () => {

  // User Profile
  const userKey = "userName"
  const photoUrlKey = "photoUrl"

  const name = ref("")
  const email = ref("")
  const photoUrl = ref("")
  const genericPhotoUrl = ref("/assets/logo/user-generic.png")

  function setUserProfile({ pName, pPhotoUrl, pEmail }) {
    name.value = pName
    email.value = pEmail
    photoUrl.value = pPhotoUrl
  }

  return { name, email, photoUrl, genericPhotoUrl, setUserProfile }
})