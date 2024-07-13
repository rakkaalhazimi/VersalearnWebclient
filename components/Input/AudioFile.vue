<script setup>
  let inputFile = ref(null);
  let isAudioLoaded = ref(false);
  let audioUrl = ref("");
  let filename = ref("");
  
  function updateAudioFile(file) {
    filename.value = file.name;
    isAudioLoaded.value = true;
    audioUrl.value = URL.createObjectURL(file);
  }

  function uploadAudio(event) {
    // console.log("Uploaded");
    let file = event.target.files[0];
    updateAudioFile(file);
  }
  
  // Check if the file is loaded
  onMounted(() => {
    if (inputFile.value.files) {
      let file = inputFile.value.files[0];
      updateAudioFile(file);
    }
  })
</script>

<template>
  <!-- Audio Player -->
  <InputAudioPlayer v-if="isAudioLoaded" :url="audioUrl" :filename="filename"/>
  
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
    ref="inputFile"
  >
</template>