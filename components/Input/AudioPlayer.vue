<script setup>
  let props = defineProps({
    url: String,
  });
  
  let audioDuration = ref(0);
  let audioCurrentTime = ref(0);
  
  let audio = new Audio();
  audio.onloadedmetadata = (event) => {
    let duration = event.target.duration;
    audioDuration.value = duration;
    console.log("Audio duration: ", duration);
  }
  audio.ontimeupdate = () => { 
    audioCurrentTime.value = (audio.currentTime / audioDuration.value) * 100;
  };
  audio.src = props.url;
  
  let audioContext = new AudioContext();
  let analyserNode = audioContext.createAnalyser();
  
  function play() {
    audio.play();
  }
  function pause() {
    audio.pause();
  }
  
</script>

<template>
  <div class="flex flex-col basis-0 mr-auto">
    <input 
      id="audio-player-slider"
      type="range"
      min="0"
      max="100"
      :value="audioCurrentTime"
      name="audio-player-slider"
    >
    <ButtonAudioPlay @click="play" class="w-12"></ButtonAudioPlay>
    <ButtonAudioPause @click="pause" class="w-12"></ButtonAudioPause>
  </div>
</template>
