<script setup>
  defineProps({
    name: String,
  })
</script>

<template>
  <textarea
    class="border focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
    cols="30" rows="10" 
    style="resize: none;">
  </textarea>
</template>