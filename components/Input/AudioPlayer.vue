<script setup>
  let props = defineProps({
    url: String,
    filename: String,
  });
  
  let audioDuration = ref(0);
  let audioProgress = ref(0);
  let audioRangeSlider = ref(HTMLInputElement);
  let audioTime = ref("00:00");
  let isPlay = ref(false);
  
  
  let audio = new Audio();
  audio.onloadedmetadata = (event) => {
    let duration = event.target.duration;
    audioDuration.value = duration;
    console.log("Audio duration: ", duration);
  }
  audio.src = props.url;
  
  function getAudioTrackGradient() {
    return `linear-gradient(to right, #fff ${audioProgress.value}%, #ccc ${audioProgress.value}%)`;
  }
  
  function updateAudioTrackBackground() {
    let slider = audioRangeSlider.value;
    slider.style.background = getAudioTrackGradient();
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
    let slider = audioRangeSlider.value;
    slider.oninput = updateAudioRangeSlider;
    // Init audio track background color
    slider.style.background = getAudioTrackGradient();
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
  <!-- <div class="flex flex-col gap-y-4 mr-auto px-2 py-1 border-solid border-4 border-sky-500"> -->
  <div class="flex flex-col gap-y-4 mr-auto px-4 py-2 bg-pink-500 text-gray-50">
    <p class="pl-4 text-lg font-normal">{{ props.filename }}</p>
    <div class="flex flex-row gap-x-4 items-center p-4 h-6">
      <ButtonAudioPause v-if="isPlay" @click="pause" class="text-xl"></ButtonAudioPause>
      <ButtonAudioPlay v-else-if="!isPlay" @click="play" class="text-xl"></ButtonAudioPlay>
      <p class="">{{ audioTime }}</p>
      <input 
        type="range"
        min="0"
        max="100"
        v-model="audioProgress"
        ref="audioRangeSlider"
      >
    </div>
  </div>
</template>

<style>
  /* Create custom css slider */
  /* ref: https://blog.logrocket.com/creating-custom-css-range-slider-javascript-upgrades/ */

  :root {
    --thumb-width: 1rem;
    --thumb-height: 1rem;
    --track-height: .3em;
  }
  
  input[type="range"] {
    /* removing default appearance */
    -webkit-appearance: none;
    appearance: none; 
    /* creating a custom design */
    width: 100%;
    height: var(--track-height);
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
      height: var(--thumb-height);
      width: var(--thumb-width);
      background-color: #fff;
      border-radius: 50%;
      border: 2px solid #fff;
  }

  /* Thumb: Firefox */
  input[type="range"]::-moz-range-thumb {
      height: var(--thumb-height);
      width: var(--thumb-width);
      background-color: #fff;
      border-radius: 50%;
      border: 2px solid #fff;
  }
</style>
