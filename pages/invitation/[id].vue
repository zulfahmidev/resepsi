<template>
  <div class="m-auto bg-primary h-screen text-center text-white flex flex-col justify-center align-center" style="max-width: 425px;">
    <div class="flex justify-center relative w-fit mx-auto">
      <img src="/images/border.png" class="absolute" alt="">
      <div class="w-40 h-40 overflow-hidden rounded-full">
        <img src="/images/prewed.jpeg" alt="">
      </div>
    </div>
    <div class="mt-3">THE WEDDING OF</div>
    <div class="font-smg text-5xl my-4">Riza & Dwi</div>
    <div class="">Kepada Bapak/Ibu/Saudara/I</div>
    <div class="text-secondary text-xl my-4 font-bold capitalize">{{ invitation?.name }}</div>
    <NuxtLink to="/" class="text-primary bg-white mx-auto rounded-full px-6 py-3 shadow-lg mt-2 inline-block">
      <Icon name="fa6-solid:book-open" class="relative mr-1" style="bottom:1px" />
      Buka Undangan
    </NuxtLink>
  </div>
</template>

<script>
import { useFirestore, useDocument } from 'vuefire'
import { doc } from 'firebase/firestore'
export default {
  data() {
    return {
      db: useFirestore(),
      invitation: '',
    }
  },
  mounted() {
    let id = this.$route.params.id
    this.invitation = useDocument(doc(this.db, 'invitations', id))
  }
}
</script>

<style scoped>
img {
  max-width: none;
  width:13.5rem;
  top:-27px;
  right: -15px;
}
</style>