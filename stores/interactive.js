export const useInteractiveStore = defineStore("interactive", () => {

  const isSidebarOpen = ref(false)
  function openSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  const isCloned = ref(false)

  const cloneState = {
    BEFORE_CLONE: 0,
    IS_CLONING: 1,
    AFTER_CLONE: 2,
  }

  function getCloneState() {
    return cloneState.value
  }

  function setCloneState(state) {
    cloneState.value = state
  }

  function startClone() {
    setCloneState("isCloning")
    setTimeout(setCloneState("afterClone"))
  }

  return {
    isSidebarOpen,
    openSidebar,
    isCloned,
    startClone,
    cloneState,
  }
})