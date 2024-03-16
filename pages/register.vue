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
    <SectionBelowNavbar id="register">
      <div class="flex flex-col justify-center items-center gap-y-5 p-8 mx-auto max-w-sm w-full border">
        <h3>Register</h3>
        <form class="flex flex-col gap-y-8">
          <div class="flex flex-col gap-y-2">
            <InputText placeholder="Username"></InputText>
            <InputPassword placeholder="Password"></InputPassword>
            <InputPassword placeholder="Verify Password"></InputPassword>
            <ButtonSecondary>Register</ButtonSecondary>
          </div>
        </form>
      </div>
    </SectionBelowNavbar>
  </main>
</template>