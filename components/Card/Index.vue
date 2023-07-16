<script setup>
  defineProps({
    imageSrc: String,
    imageAlt: String,
    title: String,
    desc: String,
  })

</script>

<template>
  <div class="flex flex-col justify-center gap-y-10 p-2 h-96 border-2">
    <div class="flex justify-center items-center h-1/3">
      <img class="w-32" :src="imageSrc" :alt="imageAlt">
    </div>
    <div class="flex flex-col justify-center items-center h-1/3">
      <h4>{{ title }}</h4>
      <p class="mb-5">{{ desc }}</p>
      <slot></slot>
    </div>
  </div>
</template>