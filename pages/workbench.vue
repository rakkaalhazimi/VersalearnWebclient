<script setup>
// Sidebar open/close logic
const isSidebarOpen = ref(false)
function openSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}

// Voice Clone logic
const cloneStates = {
  BEFORE_CLONE: 0,
  IS_CLONING: 1,
  AFTER_CLONE: 2
}
const currentCloneState = ref(cloneStates.BEFORE_CLONE)
function startClone() {
  currentCloneState.value = cloneStates.IS_CLONING
  setTimeout(() => currentCloneState.value = cloneStates.AFTER_CLONE, 5000)
}
</script>

<template>
  <Navbar>
    <template v-slot:left>
      <button @click="openSidebar">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>
      <NavbarLinkLogo link="/">Versalearn</NavbarLinkLogo>
    </template>

    <template v-slot:right>
      <Profile></Profile>
    </template>
  </Navbar>

  <main class="relative">
    <Sidebar :class="{ 'left-0': isSidebarOpen, '-left-80': !isSidebarOpen }">

      <template v-slot:title>Workbench</template>

      <template v-slot:upper-link>
        <SidebarLink link="/" value="Voice Clone"></SidebarLink>
        <SidebarLink link="/" value="Coming Soon"></SidebarLink>
        <SidebarLink link="/" value="Coming Soon"></SidebarLink>
      </template>

    </Sidebar>

    <SectionBelowNavbar id="workbench">
      <h3>Voice Clone</h3>
      <form>
        <div class="flex flex-col gap-y-8">
          <div class="flex flex-col">
            <label class="mb-2" for="voice-clone-transcript">Transcript</label>
            <InputTextArea name="voice-clone-transcript"></InputTextArea>
          </div>
          
          <div class="flex flex-col">
            <label class="mb-2" for="voice-clone-audio">Audio File</label>
            <InputAudioFile name="voice-clone-audio"></InputAudioFile>
          </div>

          <div class="flex flex-row gap-x-4 items-center">
            <ButtonPrimary @click.prevent="startClone">Clone</ButtonPrimary>

            <ButtonGhost
              v-show="currentCloneState == cloneStates.BEFORE_CLONE"
              @click.prevent="" disabled>Download</ButtonGhost>
            <Spinner
              v-show="currentCloneState == cloneStates.IS_CLONING"
              class="ml-5"></Spinner>
            <ButtonSecondary
              v-show="currentCloneState == cloneStates.AFTER_CLONE"
              @click.prevent="">Download</ButtonSecondary>
          </div>
        </div>

      </form>
    </SectionBelowNavbar>

  </main>
</template>