<script setup>
  defineProps({
    link: String,
    value: String,
  })
</script>

<template>
  <li>
    <NuxtLink :to="link"
        class="
            flex items-center
            px-3 py-1 w-full
            border-b-2 border-b-transparent hover:bg-gray-300
            hover:text-gray-900">{{ value }}</NuxtLink>
  </li>
</template>