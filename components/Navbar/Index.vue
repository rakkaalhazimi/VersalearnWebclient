<template>
  <nav class="sticky top-0 z-10 bg-gray-100 text-gray-500 drop-shadow-sm">

    <div class="
        grid grid-rows-1 grid-flow-col
        mx-auto px-2
        h-[var(--navbar-height)] max-w-[var(--max-screen-width)]
        sm:px-6 lg:px-8"
    >

      <ul id="left-navbar" class="flex flex-row justify-start gap-x-4">
        <slot name="left"></slot>
      </ul>

      <ul id="middle-navbar" class="col-span-10 flex flex-row justify-start gap-x-4">
        <slot name="middle"></slot>
      </ul>

      <ul id="right-navbar" class="flex flex-row justify-end gap-x-4">
        <slot name="right"></slot>
      </ul>

    </div>

  </nav>
</template>