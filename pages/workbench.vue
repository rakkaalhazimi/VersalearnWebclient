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
      <FormVoiceClone>
        <template v-slot:form-submit>
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

        </template>
      </FormVoiceClone>
    </SectionBelowNavbar>

  </main>
</template>