<script setup>
  let defaultPlacholder = "Insert Text"
  let textModel = defineModel()
  defineProps({
    placeholder: String,
  })
</script>

<template>
  <input type="text" v-model="textModel" :placeholder="placeholder || defaultPlacholder" class="border focus:outline-none py-3 px-6">
</template>