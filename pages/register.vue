<script setup>
  const { $emailPasswordRegister } = useNuxtApp()
  
  let username = ref("")
  let password = ref("")
  let verifyPassword = ref("")
  
  let toastStore = useToastStore()

  async function register() {
    // console.log("username: ", username.value)
    // console.log("password: ", password.value)
    // console.log("verifyPassword: ", verifyPassword.value)
    
    // If user didn't enter username or password, send error toast
    if (username.value.length == 0 || password.value.length == 0) {
      toastStore.addToast("Username/password can't be empty")
      return
    }
    
    if (verifyPassword.value.length == 0) {
      toastStore.addToast("Please verify your password")
      return
    }
    
    if (verifyPassword.value != password.value) {
      toastStore.addToast("Your password verification is incorrect")
      return
    }
    
    
    let response = await $emailPasswordRegister(username.value, password.value)
    // console.log(response.status)
    if (response.status <= 299) {
      console.log("Registration Success")
      navigateTo("/workbench")
      
    } else {
      // Show toaster if register failed
      console.log("Registration failed")
      toastStore.addToast(response.content.message)
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
    <SectionBelowNavbar id="register">
      <div class="flex flex-col justify-center items-center gap-y-5 p-8 mx-auto max-w-sm w-full border">
        <h3>Register</h3>
        <form class="flex flex-col gap-y-8">
          <div class="flex flex-col gap-y-2">
            <InputText v-model="username" placeholder="Username"></InputText>
            <InputPassword v-model="password" placeholder="Password"></InputPassword>
            <InputPassword v-model="verifyPassword" placeholder="Verify Password"></InputPassword>
            <ButtonSecondary @click.prevent="register">Register</ButtonSecondary>
          </div>
        </form>
        <p>Already have an account? 
          <NuxtLink to="/login">
            <span class="text-emerald-500 hover:text-emerald-600">login here</span>
          </NuxtLink>
        </p>
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