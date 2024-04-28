<template>
  <span class="flex flex-row items-center justify-between mx-auto w-80 py-2 px-4 bg-red-500 rounded text-gray-50">
    <!-- Error message -->
    <slot name="content"></slot>
    <!-- Close button -->
    <slot name="close"></slot>
  </span>
</template>