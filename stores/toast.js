export const useToastStore = defineStore("toast", () => {
  
  let toasts = ref([])
  let count = ref(0)
  
  function clearToast() {
    toasts.value = []
  }
  function addToast(message) {
    clearToast()
    toasts.value.push({id: count.value, message: message})
    count.value++
  }
  function getToast() {
    return toasts.value
  }
  
  return {getToast, addToast, clearToast}
})