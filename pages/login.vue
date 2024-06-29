<script setup>
const { $googleLogin, $emailPasswordLogin } = useNuxtApp()

let username = ref("")
let password = ref("")

let toastStore = useToastStore()

async function login() {
  
}

// async function login() {
//   // console.log("username: ", username.value)
//   // console.log("password: ", password.value)
  
//   // If user didn't enter username or password, send error toast
//   if (username.value.length == 0 || password.value.length == 0) {
//     toastStore.addToast("Username/password can't be empty")
//     return
//   }
  
//   let response = await $emailPasswordLogin(username.value, password.value)
  
//   // console.log(response.status)
//   if (response.status <= 299) {
//     console.log("Login Success")
//     navigateTo("/workbench")
    
//   } else {
//     // Show toaster if login failed
//     console.log("Login failed")
//     toastStore.addToast("Invalid username/password")
//   }
// }
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
          <p>Don't have an account? 
            <NuxtLink to="/register">
              <span class="text-emerald-500 hover:text-emerald-600">register here</span>
            </NuxtLink>
          </p>
          <ButtonNeutral @click="$googleLogin" class="flex items-center gap-x-4 mx-auto">
            <font-awesome-icon icon="fa-brands fa-google"></font-awesome-icon>
            <span class="flex align-middle">Login with Google</span>
          </ButtonNeutral>
        </div>
      </div>
      
      <!-- Toaster -->
      <template v-for="toast in toastStore.getToast()">
        <ToasterLoginError>
          
          <template v-slot:content>
            {{toast.message}}
            <!-- {{ toast }} -->
          </template>
          
          <template v-slot:close>
            <button @click="toastStore.clearToast()">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </button>
          </template>
          
        </ToasterLoginError>
      </template>
      
      
    </SectionBelowNavbar>
  </main>
</template>