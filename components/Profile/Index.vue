<script setup>
  const { $logout } = useNuxtApp()
  const userStore = useUserStore()

  const isProfileCardOpen = ref(false)
  function openProfileCard() {
    isProfileCardOpen.value = !isProfileCardOpen.value
  }
</script>

<template>
  <div class="relative self-center">
    <img v-if="userStore.photoUrl" @click="openProfileCard" :src="userStore.photoUrl" class="h-8 w-8 border-1 rounded-full"/>
    <img v-else @click="openProfileCard" :src="userStore.genericPhotoUrl" class="h-8 w-8 border-1 rounded-full"/>
    <ul
      class="absolute top-14 right-0 p-4 flex flex-col gap-y-2 h-44 w-72 bg-gray-50 border-2 border-gray-200 text-sm"
      :class="{'block': isProfileCardOpen, 'hidden': !isProfileCardOpen}"

    >
      <li class="grid grid-cols-2">
        <span>Name</span>
          <span v-if="userStore.name">{{ userStore.name }}</span>
          <span v-else>{{ userStore.email }}</span>
      </li>
      <li class="grid grid-cols-2">
        <span>Packet</span>
        <span>Free</span>
      </li>
      <li class="grid grid-cols-2">
        <span>Quota</span>
        <span>10 of 10</span>
      </li>
      <li class="mt-auto ml-auto">
        <ButtonSecondary @click="$logout">Logout</ButtonSecondary>
      </li>
    </ul>
  </div>
</template>