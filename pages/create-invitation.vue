<template>
  <div class="m-auto bg-slate-50 h-screen relative" style="max-width: 425px;">
    <div class="h-12 bg-primary flex shadow-lg justify-center items-center font-smg text-secondary text-2xl">
      <div class="">Create Invitation</div>
    </div>

    <!-- ALert -->
    <!-- <div class="bg-teal-100 mt-3 mx-2 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
      <div class="flex">
        <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
        <div>
          <p class="font-bold">Copied</p>
          <p class="text-sm">Caption berhasil di salin ke clipboard, anda dapat mengirim ke kontak tujuan.</p>
        </div>
      </div>
    </div> -->

    <div class="fixed bottom-20 w-full" style="max-width: 425px;">
      <div id="toast-simple" class="flex items-center mx-auto w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow" role="alert">
        <Icon name="fa6-solid:copy" class="text-blue-600 active:text-blue-800" />
        <div class="pl-4 text-sm font-normal">Caption copied.</div>
      </div>
    </div>

    <div class="py-5">
      <div class="flex border-b bg-white">
        <div class="h-10 w-10 flex justify-center items-center">#</div>
        <div class="h-10 w-full flex px-2 items-center">Name</div>
        <div class="h-10 w-16 mr-0 mx-auto flex justify-center items-center">
          Link
        </div>
        <div class="h-10 w-20 mr-0 mx-auto flex justify-center items-center">
          Hapus
        </div>
      </div>
      <div class="flex bg-white border-b" v-for="(v, i) in invitations" :key="i">
        <div class="h-10 w-10 flex bro justify-center items-center">{{ i+1 }}</div>
        <div class="h-10 w-full flex px-2 items-center">{{ v.name }} </div>
        <div class="h-10 w-16 mr-0 mx-auto  flex justify-center items-center" @click="copy(v.id)">
          <Icon name="fa6-solid:copy" class="text-blue-600 active:text-blue-800" />
        </div>
        <div class="h-10 w-20 mr-0 mx-auto flex justify-center items-center" @click="del(v.id)">
          <Icon name="fa6-solid:trash" class="text-red-600 active:text-red-800" />
        </div>
      </div>
    </div>

    <!-- Input Invitation -->
    <div class="flex gap-3 mb-2 p-2 fixed bottom-0 bg-slate-100 w-full" style="max-width: 425px;">
      <input type="text" class="py-2 outline-none px-3 bg-white shadow rounded w-full" v-model="name" placeholder="Tulis nama undangan">
      <button class="py-2 px-3 shadow rounded bg-primary" @click="add">
        <Icon name="fa6-solid:plus" class="text-white" />
      </button>
    </div>
  </div>
</template>

<script>
import { useCollection, useFirestore, useDocument } from 'vuefire'
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { startAt } from 'firebase/database';

export default {
  data() {
    return {
      db: useFirestore(),
      invitations: [],
      name: '',
    }
  },
  methods: {
    getCollection() {
      return collection(this.db, 'invitations');
    },
    async add() {
      if (this.name.trim() == '') {
        return false;
      }
      await addDoc(this.getCollection(), {
        name: this.name,
      })
      this.name = '';
    },
    async del(id) {
      if (confirm('Apakah anda yakin ingin menghapus?')) {
        await deleteDoc(doc(this.db, "invitations", id))
      }
    },
    sendToast() {

    },
    copy(id) {
      navigator.clipboard.writeText(`Assalamu'alaikum Warahmatullahi Wabarakatuh.

Maha suci Allah yang telah menjadikan segala sesuatu lebih indah dan sempurna.

Izinkan kami mengundang Bapak/Ibu/Sahabat sekalian untuk dapat menghadiri acara pernikahan kami.

Link undangan : https://resepsi.vercel.app/invitation/${id} 

Note:
”Copy link kemudian paste di Chrome atau Browser lain jika tidak bisa dibuka”
”Untuk tampilan terbaik, silahkan akses melalui browser Chrome / Safari dan Non-Aktifkan DarkMode / Mode Gelap.”

Kehadiran, doa dan restu anda semua adalah kado terindah bagi kami. Tiada yang dapat kami ungkapkan selain rasa terima kasih dari hati yang tulus dan dalam.

Jangan lupa menggunakan protokol kesehatan dengan memakai masker

Kami yang berbahagia
Rizza dan Dwi`);
      alert("Copied the text: " + copyText.value);
    }
  }, 
  mounted() {
    this.invitations = useCollection(this.getCollection())
  }
}
</script>