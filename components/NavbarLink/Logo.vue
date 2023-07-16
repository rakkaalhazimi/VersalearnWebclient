<script setup>
  defineProps({
    link: String,
  })
</script>

<template>
  <li>
    <NuxtLink :to="link"
        class="
          flex items-center
          px-2 h-full
          text-xl text-sky-600 font-semibold">
      <slot></slot>
    </NuxtLink>
  </li>
</template>