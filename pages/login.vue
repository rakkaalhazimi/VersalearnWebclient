<script setup>
const { $googleLogin, $emailPasswordLogin } = useNuxtApp()

let username = ref("")
let password = ref("")
let toasts = ref([])
let toastCount = ref(0)

function closeToaster() {
  toasts.value = []
}

async function login() {
  // console.log("username: ", username.value)
  // console.log("password: ", password.value)
  
  // User didn't enter username or password
  if (username.value.length == 0 || password.value.length == 0) {
    closeToaster()
    toasts.value.push({count: toastCount.value, message: "Username/password can't be empty"})
    toastCount.value++
    return
  }
  
  let response = await $emailPasswordLogin(username.value, password.value)
  
  // console.log(response.status)
  if (response.status <= 299) {
    console.log("Login Success")
    navigateTo("/workbench")
    
  } else {
    // Show toaster if login failed
    console.log("Login failed")
    closeToaster()
    toasts.value.push({count: toastCount.value, message: "Invalid username/password"})
    toastCount.value++
  }
}
</script>


<template>
  <Navbar>
    <template v-slot:left>
      <NavbarLinkLogo link="/">Versalearn</NavbarLinkLogo>
    </template>
  </Navbar>

  <main>
    <SectionBelowNavbar id="login">
      <div class="flex flex-col justify-center items-center gap-y-5 p-8 mx-auto max-w-sm w-full border">
        <div>
          <h3>Login</h3>
        </div>
        <div class="flex flex-col gap-y-8">
          <form class="flex flex-col gap-y-2">
            <InputText v-model="username" placeholder="Username"></InputText>
            <InputPassword v-model="password" placeholder="Password"></InputPassword>
            <ButtonSecondary @click.prevent="login">Login</ButtonSecondary>
          </form>
          <div>
            <p>Don't have an account? <NuxtLink to="/register">register here</NuxtLink>
            </p>
          </div>
          <ButtonNeutral @click="$googleLogin" class="flex items-center gap-x-4 mx-auto">
            <font-awesome-icon icon="fa-brands fa-google"></font-awesome-icon>
            <span class="flex align-middle">Login with Google</span>
          </ButtonNeutral>
        </div>
      </div>
      
      <!-- Toaster -->
      <template v-for="toast in toasts" :key="toast.count">
        <ToasterLoginError>
          
          <template v-slot:content>
            {{toast.message}}
          </template>
          
          <template v-slot:close>
            <button @click="closeToaster">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </button>
          </template>
          
        </ToasterLoginError>
      </template>
      
      
    </SectionBelowNavbar>
  </main>
</template>