<script setup>
  let isAudioLoaded = ref(false);
  let audioUrl = ref("");

  function uploadAudio(event) {
    // console.log("Uploaded");
    let file = event.target.files[0];
    isAudioLoaded.value = true;
    
    let url = URL.createObjectURL(file);
    audioUrl.value = url;
  }
</script>

<template>
  <!-- Audio Player -->
  <InputAudioPlayer v-if="isAudioLoaded" :url="audioUrl" />
  
  <!-- Audio File Upload Form -->
  <input 
    v-else
    class="w-80
        bg-gray-50 border cursor-pointer
          file:py-3 file:px-6 file:mr-4
          file:bg-sky-500 hover:file:bg-sky-600 file:rounded-none file:border-none
          file:text-gray-50" 
    type="file"
    @input="uploadAudio"
  >
</template>