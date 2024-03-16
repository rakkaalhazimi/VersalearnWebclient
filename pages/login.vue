<script setup>
const { $googleLogin } = useNuxtApp()
</script>


<template>
  <Navbar>
    <template v-slot:left>
      <NavbarLinkLogo link="/">LOGO</NavbarLinkLogo>
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
            <InputText placeholder="Username"></InputText>
            <InputPassword placeholder="Password"></InputPassword>
            <ButtonSecondary>Login</ButtonSecondary>
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