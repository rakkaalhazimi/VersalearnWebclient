<template>
  <span class="flex flex-row items-center justify-between py-2 px-2 bg-red-500 text-gray-50">
    <!-- Error message -->
    <slot name="content"></slot>
    <!-- Close button -->
    <slot name="close"></slot>
  </span>
</template>