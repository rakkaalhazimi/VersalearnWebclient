<template>
  <aside id="sidebar" class="fixed transition-all duration-1000">
    <div class="flex flex-col p-2 h-[calc(100vh-var(--navbar-height))] w-80 bg-gray-900 text-gray-50">

      <h4 class="mb-5 text-center">
        <slot name="title"></slot>
      </h4>

      <ul class="flex flex-col gap-y-2">
        <slot name="upper-link"></slot>
      </ul>

      <ul class="flex flex-col gap-y-1 mt-auto">
        <slot name="bottom-link"></slot>
      </ul>
    </div>
  </aside>
</template>