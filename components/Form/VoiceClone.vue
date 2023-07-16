<template>
  <form>
    <div class="flex flex-col gap-y-8">
      <div class="flex flex-col">
        <label class="mb-2" for="voice-clone-transcript">Trancript</label>
        <textarea
          class="border focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          name="voice-clone-transcript" cols="30" rows="10" style="resize: none;"></textarea>
      </div>

      <div class="flex flex-col">
        <label class="mb-2" for="voice-clone-audio">Audio File</label>
        <input
          class="w-80
                bg-gray-50 border cursor-pointer
                  file:py-3 file:px-6 file:mr-4
                  file:bg-sky-500 hover:file:bg-sky-600 file:rounded-none file:border-none
                  file:text-gray-50"
          type="file">
      </div>

      <div class="flex flex-row gap-x-4 items-center">
        <slot name="form-submit"></slot>
      </div>
    </div>

  </form>
</template>