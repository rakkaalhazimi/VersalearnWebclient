<script setup>
const { $googleLogin, $emailPasswordLogin } = useNuxtApp()

let username = ref("")
let password = ref("")
function login() {
  // console.log("username: ", username.value)
  // console.log("password: ", password.value)
  $emailPasswordLogin(username.value, password.value)
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
    </SectionBelowNavbar>
  </main>
</template>