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
            px-2 h-full
            border-b-2 border-b-transparent hover:border-b-sky-600
            hover:text-gray-950">
      <slot></slot>
    </NuxtLink>
  </li>
</template>