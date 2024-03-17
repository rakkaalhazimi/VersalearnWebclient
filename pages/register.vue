<script setup>
  const { $emailPasswordRegister } = useNuxtApp()
  
  let username = ref("")
  let password = ref("")
  let verifyPassword = ref("")

  function register() {
    // console.log("username: ", username.value)
    // console.log("password: ", password.value)
    // console.log("verifyPassword: ", verifyPassword.value)
    $emailPasswordRegister(username.value, password.value, verifyPassword.value)
  }

</script>


<template>
  <Navbar>
    <template v-slot:left>
      <NavbarLinkLogo link="/">LOGO</NavbarLinkLogo>
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
      </div>
    </SectionBelowNavbar>
  </main>
</template>