<template>
  <div class="m-auto bg-slate-50 h-screen relative" style="max-width: 425px;">
    <div class="h-12 bg-primary flex shadow-lg justify-center items-center font-smg text-secondary text-2xl">
      <div class="">Create Invitation</div>
    </div>

    <div :class="`fixed w-full`" :style="`max-width: 425px;bottom: ${10 + (70 * (i+1))}px`" v-for="(v, i) in toats" :key="i">
      <div id="toast-simple" class="flex animate-bounce items-center mx-auto w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow" role="alert">
        <Icon :name="v.icon_name" class="text-green-600 active:text-blue-800" />
        <div class="pl-4 text-sm font-normal">{{ v.caption }}</div>
      </div>
    </div>

    <div class="py-5">
      <div class="flex border-b bg-white">
        <div class="h-10 w-10 flex justify-center items-center">#</div>
        <div class="h-10 w-full flex px-2 items-center">Name</div>
        <div class="h-10 w-24 mr-0 mx-auto flex justify-center items-center">
          Caption
        </div>
        <div class="h-10 w-24 mr-0 mx-auto flex justify-center items-center">
          Hapus
        </div>
      </div>

      <div class="flex bg-white border-b" v-for="(v, i) in invitations" :key="i">
        <div class="h-10 w-10 flex bro justify-center items-center">{{ i+1 }}</div>
        <div class="h-10 w-full flex px-2 items-center">{{ v.name }} </div>
        <div class="h-10 w-24 mr-0 mx-auto  flex justify-center items-center" @click="copy(v)">
          <Icon name="fa6-solid:copy" class="text-blue-600 active:text-blue-800" />
        </div>
        <div class="h-10 w-24 mr-0 mx-auto flex justify-center items-center" @click="del(v.id)">
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
      toats: [],
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
      this.pushToast('fa6-solid:check', 'Invitation successfully created.')
    },
    async del(id) {
      if (confirm('Apakah anda yakin ingin menghapus?')) {
        await deleteDoc(doc(this.db, "invitations", id))
        this.pushToast('fa6-solid:check', 'Invitation successfully deleted.')
      }
    },
    pushToast(icon_name, caption) {
      this.toats.push({
        icon_name, caption
      })
      setTimeout(() => {
        this.toats.shift()
      }, 3000);
    },
    copy(v) {
      navigator.clipboard.writeText(`Assalamu'alaikum Warahmatullahi Wabarakatuh.

Maha suci Allah yang telah menjadikan segala sesuatu lebih indah dan sempurna.

Izinkan kami mengundang Bapak/Ibu/Sahabat ${v.name} untuk dapat menghadiri acara pernikahan kami.

Link undangan : https://resepsi-rizzadandwi.vercel.app/invitation/${v.id} 

Note:
”Copy link kemudian paste di Chrome atau Browser lain jika tidak bisa dibuka”
”Untuk tampilan terbaik, silahkan akses melalui browser Chrome atau Safari.”

Kehadiran, doa dan restu anda semua adalah kado terindah bagi kami. Tiada yang dapat kami ungkapkan selain rasa terima kasih dari hati yang tulus dan dalam.

Jangan lupa menggunakan protokol kesehatan dengan memakai masker

Kami yang berbahagia
Rizza dan Dwi`);
      this.pushToast('fa6-solid:check', 'Caption successfully copied.')
    }
  }, 
  mounted() {
    this.invitations = useCollection(this.getCollection())
  }
}
</script>