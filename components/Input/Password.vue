<script setup>
  let defaultPlacholder = "Password"
  let passwordModel = defineModel()
  defineProps({
    placeholder: String,
  })
</script>

<template>
  <input type="password" v-model="passwordModel" :placeholder="placeholder || defaultPlacholder" class="border focus:outline-none py-3 px-6">
</template>