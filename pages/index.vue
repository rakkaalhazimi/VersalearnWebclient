<script setup>
  // const { isLogin } = useAuthStore();
  let isLogin = 'true';
</script>

<template>

  <Navbar>

    <template v-slot:left>
      <NavbarLinkLogo link="/">Versalearn</NavbarLinkLogo>
    </template>

    <template v-slot:middle>
      <NavbarLink link="#home">Home</NavbarLink>
      <NavbarLink link="#products">Products</NavbarLink>
    </template>

    <template v-slot:right>
      <Profile v-if="isLogin == 'true'"></Profile>
      <NavbarLink v-else link="/login">Login</NavbarLink>
    </template>

  </Navbar>

  <main>
    <SectionHero id="home">
      <div class="flex flex-col justify-center items-center gap-y-2 w-full">
        <h1>Versalearn</h1>
        <p>Versatile AI ready for assistance</p>
      </div>
      <div class="flex flex-row justify-center items-center gap-x-4 w-full">
        <div>
          <NuxtLink to="/workbench">
            <ButtonPrimary>Get Started</ButtonPrimary>
          </NuxtLink>
        </div>
        <div>
          <ButtonNeutral>
            <NuxtLink to="#products" class="">About</NuxtLink>
          </ButtonNeutral>
        </div>
      </div>
    </SectionHero>

    <Section id="products">

      <div class="flex flex-col justify-center items-center gap-y-2 w-full">
        <h2>Products</h2>
        <p>What Versalearn good at</p>
      </div>

      <div class="grid auto-cols-fr gap-4 justify-center mx-auto w-full max-w-xs sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl lg:max-w-none">

          <Card
            imageSrc="/logo/sound.png"
            imageAlt="voice spectrum icon"
            title="Voice Clone"
            desc="Clone your favorite characters from anime/game">
              <ButtonPrimary class="w-40">Visit</ButtonPrimary>
          </Card>

          <Card
            imageSrc="/logo/coming-soon.png"
            imageAlt="coming soon icon"
            title="Coming Soon"
            desc="Let it be secret">
            <ButtonGhost class="w-40">Not Yet</ButtonGhost>
          </Card>

          <Card
            imageSrc="/logo/coming-soon.png"
            imageAlt="coming soon icon"
            title="Coming Soon"
            desc="Let it be secret">
            <ButtonGhost class="w-40">Not Yet</ButtonGhost>
          </Card>

      </div>
    </Section>

  </main>
</template>