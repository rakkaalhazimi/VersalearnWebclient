<script setup>
  let props = defineProps({
    url: String,
    filename: String,
  });
  
  let audioDuration = ref(0);
  let audioProgress = ref(0);
  let audioRangeSlider = ref(HTMLInputElement);
  let isPlay = ref(false);
  
  let audio = new Audio();
  audio.onloadedmetadata = (event) => {
    let duration = event.target.duration;
    audioDuration.value = duration;
    console.log("Audio duration: ", duration);
  }
  audio.src = props.url;
  
  
  function updateAudioTrackBackground() {
    let slider = audioRangeSlider.value;
    slider.style.background = 
      `linear-gradient(to right, var(--primary-color) ${audioProgress.value}%, #ccc ${audioProgress.value}%)`;
  }
  function updateAudioCurrentTime() {
    if (audioProgress.value) {
      // console.log("Update: ", (audioProgress.value / 100) * audioDuration);
      audio.currentTime = (audioProgress.value / 100) * audioDuration.value;
    }
  }
  function updateAudioRangeSlider() {
    updateAudioTrackBackground();
    updateAudioCurrentTime();
  }
  
  // Access input range element
  onMounted(() => {
    audioRangeSlider.value.oninput = updateAudioRangeSlider;
  })
  audio.ontimeupdate = () => {
    audioProgress.value = (audio.currentTime / audioDuration.value) * 100;
    // console.log(audioProgress.value);
    updateAudioTrackBackground();
  };
  
  let audioContext = new AudioContext();
  let analyserNode = audioContext.createAnalyser();
  
  function play() {
    audio.play();
    isPlay.value = true;
  }
  function pause() {
    audio.pause();
    isPlay.value = false;
  }
</script>

<template>
  <div class="flex flex-col basis-0 mr-auto">
    <p>{{ props.filename }}</p>
    <div class="h-6">
      <input 
        type="range"
        min="0"
        max="100"
        v-model="audioProgress"
        ref="audioRangeSlider"
      >
    </div>
    <ButtonAudioPause v-if="isPlay" @click="pause" class="w-12"></ButtonAudioPause>
    <ButtonAudioPlay v-else-if="!isPlay" @click="play" class="w-12"></ButtonAudioPlay>
  </div>
</template>

<style>
  /* Create custom css slider */
  /* ref: https://blog.logrocket.com/creating-custom-css-range-slider-javascript-upgrades/ */

  input[type="range"] {
    /* removing default appearance */
    -webkit-appearance: none;
    appearance: none; 
    /* creating a custom design */
    width: 100%;
    height: 6px;
    cursor: pointer;
    outline: none;
    border-radius: 16px;
}

  /* Track: webkit browsers */
  input[type="range"]::-webkit-slider-runnable-track,
  /* Track: Mozilla Firefox */
  input[type="range"]::-moz-range-track {
      height: 0.1rem;
      /* background: #ccc; */
      border-radius: 16px;
  }

  /* Thumb: webkit */
  input[type="range"]::-webkit-slider-thumb {
      /* removing default appearance */
      -webkit-appearance: none;
      appearance: none; 
      /* creating a custom design */
      height: 1rem;
      width: 1rem;
      background-color: #fff;
      border-radius: 50%;
      border: 2px solid var(--primary-color);
  }

  /* Thumb: Firefox */
  input[type="range"]::-moz-range-thumb {
      height: 1rem;
      width: 1rem;
      background-color: #fff;
      border-radius: 50%;
      border: 2px solid var(--primary-color);
  }
</style>
