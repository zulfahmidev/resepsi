<template>
  <div class="m-auto relative bg-primary h-screen" style="max-width: 425px;">
    <div id="cover" class="fixed z-10 bg-primary text-center text-white h-screen flex justify-center flex-col w-full" style="max-width: 425px;">
      <div class="flex justify-center relative w-fit mx-auto">
        <img src="/images/border.png" class="absolute avatar" alt="">
        <div class="w-40 h-40 rounded-full overflow-hidden">
          <img src="/images/avatar.jpeg" alt="" style="width: 10rem;">
        </div>
      </div>
      <div class="mt-3">THE WEDDING OF</div>
      <div class="font-smg text-5xl my-4">Riza & Dwi</div>
      <div class="">Kepada Bapak/Ibu/Saudara/I</div>
      <div class="text-secondary text-xl my-4 font-bold capitalize">{{ invitation?.name }}</div>
      <div class="text-primary bg-white cursor-pointer mx-auto rounded-full px-6 py-3 shadow-lg mt-2 inline-block" @click="openInvitation">
        <Icon name="fa6-solid:book-open" class="relative mr-1" style="bottom:1px" />
        Buka Undangan
      </div>
    </div>
    <div id="invitation" class="m-auto bg-primary text-center flex flex-col justify-center align-center" style="max-width: 425px;">
      <div class="h-screen relative" id="header">
        <div class="bg-black/50 h-screen flex flex-col justify-center">
          <div class="relative bottom-16">
            <div class="text-white">THE WEDDING OF</div>
            <div class="text-white font-smgi text-5xl my-3">Rizza & Dwi</div>
          </div>
          <div class="absolute w-full h-fit bottom-0">
            <img src="/images/wave.png" class="w-full" alt="">
          </div>
        </div>
      </div>
      <div class="m-auto ">
        <img src="/images/logo.png" alt="">
      </div>
      <div class="my-3 mx-auto">
        <img src="/images/bismillah.png" alt="">
      </div>
      <div class="mx-5 text-sm text-black font-smg mt-2 text-center">
        Dengan memohon Rahmat & Ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri pernikahan putra-putri kami:
      </div>
      <div class="rounded-2xl mt-4 shadow-lg mx-4 bg-light relative py-10 text-black">
        <div class="flex justify-center relative w-fit mx-auto">
          <img src="/images/border.png" class="absolute frame-w" alt="">
          <div class="w-28 h-28 overflow-hidden rounded-full">
            <img src="/images/rizza.jpeg" alt="">
          </div>
        </div>
        <div class="font-smgi my-3 text-2xl text-secondary">Teuku Rizza Muly S.I.Kom</div>
        <div class="text-sm">
          <div class="font-smg">Putra pertama dari</div>
          <div class="font-smg">Bapak Drh. Muzakir Anwar</div>
          <div class="font-smg">& Ibu Cut Rihanna S.PD</div>
        </div>
      </div>
      <div class="rounded-2xl mt-4 shadow-lg mx-4 bg-light relative py-10 text-black">
        <div class="flex justify-center relative w-fit mx-auto">
          <img src="/images/border.png" class="absolute frame-w" alt="">
          <div class="w-28 h-28 overflow-hidden rounded-full">
            <img src="/images/dwi.jpeg" alt="">
          </div>
        </div>
        <div class="font-smgi my-3 text-2xl text-secondary">Dwi Ninda Safania</div>
        <div class="text-sm">
          <div class="font-smg">Putri pertama dari</div>
          <div class="font-smg">Bapak M. Yusuf</div>
          <div class="font-smg">& Ibu Yusniar</div>
        </div>
      </div>
      <div class="mt-4" id="highligh">
        <div class="bg-black/50 relative pt-12 backdrop-blur-sm">
          <div class="bg-gradient-to-b from-primary absolute top-0 left-0 right-0 to-transparent h-32"></div>
          <div class="text-white mt-10 font-smg text-2xl">Menuju Hari Bahagia</div>
          <div class="flex gap-3 justify-center my-8">
            <div class="rounded-xl text-white w-20 py-2 h-25 bg-white/50">
              <div class="text-4xl" id="day">0</div>
              <div class="text-sm font-smg">Hari</div>
            </div>
            <div class="rounded-xl text-white w-20 py-2 h-25 bg-white/50">
              <div class="text-4xl" id="hour">0</div>
              <div class="text-sm font-smg">Jam</div>
            </div>
            <div class="rounded-xl text-white w-20 py-2 h-25 bg-white/50">
              <div class="text-4xl" id="minute">0</div>
              <div class="text-sm font-smg">Menit</div>
            </div>
            <div class="rounded-xl text-white w-20 py-2 h-25 bg-white/50">
              <div class="text-4xl" id="second">0</div>
              <div class="text-sm font-smg">Detik</div>
            </div>
          </div>
          <div class="rounded-2xl mt-4 shadow-lg mx-4 relative py-10 text-black" id="agenda">
            <div class="font-smgi my-3 text-3xl text-black">Resepsi Pernikahan</div>
            <div class="font-smg">Sabtu</div>
            <div class="font-smg text-primary text-7xl">22</div>
            <div class="font-smg text-primary">Juli 2023</div>
            <div class="font-smg">Pukul 10.00 WIB s/d 14.00 WIB</div>
            <div class="font-smg mt-2">Alamat:</div>
            <div class="font-smg">Jalan Malikussaleh, Dusun Tp. Aceh, Keude Geudong Kecamatan Samudera, Aceh Utara</div>
            <a href="https://goo.gl/maps/3CDCecZMzAKPjCbX7" target="_blank" rel="noopener noreferrer" class="text-primary bg-white mx-auto rounded-full px-6 py-3 shadow-lg mt-2 inline-block">
              <Icon name="fa6-solid:map" class="relative mr-1" style="bottom:1px" />
              Buka Di Google Map
            </a>
          </div>
          <div class="rounded-2xl mt-4 shadow-lg mx-4 relative p-5 text-black" id="card">
            <div class="font-smgi my-3 text-3xl text-black">Cashless Gift</div>
            <img src="/images/card.png" class="w-full shadow-xl">
            <div class="text-primary bg-white mx-auto rounded-full px-6 py-3 shadow-lg mt-2 inline-block active:shadow-sm cursor-pointer" @click="copyNumber">
              <Icon name="fa6-solid:copy" class="relative mr-1" style="bottom:1px" />
              Salin Nomor
            </div>
          </div>
          <div class="rounded-t-3xl mt-5 bg-light">
            <div class="mx-4 pt-10">
              <div class="text-5xl font-smgi">Wishes</div>
              <div class="text-sm mt-2 mb-5 font-smg">Berikan Ucapan & Doa Restu</div>
              <input type="text" placeholder="Nama" class="w-full outline-none px-3 py-2 rounded border-b-2 border-secondary focus:shadow-md mt-2" v-model="name" min="3" max="18">
  
              <textarea cols="30" minlength="10" maxlength="200" rows="2" v-model="comment" placeholder="Ucapan" class="w-full outline-none px-3 py-2 rounded border-b-2 border-secondary focus:shadow-md mt-2 overflow-hidden resize-none" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
              <button class="w-full py-2 bg-primary rounded text-white active:bg-secondary" @click="add">Kirim</button>
  
              <div class="w-full border-b my-5 border-black/25"></div>
  
              <div class="rounded bg-white py-3 mt-3 px-4 text-left border-l-4 border-secondary" v-for="(v, i) in comments.slice(0, limit)" :key="i">
                <div class="font-smg font-bold mb-1 capitalize">{{ v.name }}</div>
                <div class="text-black/75 text-sm">{{ v.comment }}</div>
                <!-- <div class="text-black/75 mt-2" style="font-size:10px">
                  <Icon name="fa6-regular:clock" class="relative" style="bottom:1px;margin-right: 3px;" />
                  1 Hari yang lalu.
                </div> -->
              </div>
              <button v-if="limit < comments.length" class="w-full py-2 mt-3 border-2 border-primary rounded active:bg-primary text-primary active:text-white" @click="loadMore">Muat lebih banyak</button>
            </div>
            <div class="rounded-t-3xl mt-5 bg-slate-950 text-sm text-primary py-4">
              Copyright &copy;2023, Created by <a class="font-bold" href="https://zulfahmidev.com">Zulfahmidev</a>.
            </div>
          </div>
        </div>
      </div>
      <div :class="`fixed w-full`" :style="`max-width: 425px;bottom: ${10 + (70 * (i+1))}px`" v-for="(v, i) in toats" :key="i">
        <div id="toast-simple" class="flex animate-bounce items-center mx-auto w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow" role="alert">
          <Icon :name="v.icon_name" class="text-green-600 active:text-blue-800" />
          <div class="pl-4 text-sm font-normal">{{ v.caption }}</div>
        </div>
      </div>
      <!-- <div id="audio"></div> -->
      <audio loop id="lagu">
        <!-- <source src="horse.ogg" type="audio/ogg"> -->
        <source src="/lagu.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
      <!-- <iframe src="/lagu.mp3" allow="autoplay" id="audio" hidden ></iframe> -->
    </div>
  </div>
</template>

<script>
import { useCollection, useFirestore, useDocument } from 'vuefire'
import { collection, addDoc, query, orderBy, limit, startAfter, getDocs, doc } from 'firebase/firestore'
export default {
  data() {
    return {
      db: useFirestore(),
      invitation: '',
      comments: [],
      name: '',
      comment: '',
      limit: 5,
      toats: []
    }
  },
  methods: {
    openInvitation() {
      document.querySelector('#lagu').play();
      document.querySelector('#cover').classList.add('page-leave-to');
      window.scrollTo(0, 0);
      setTimeout(() => {
        document.querySelector('#cover').style.display = 'none';
      }, 500);
    },
    getCollection() {
      return collection(this.db, 'comments');
    },
    async add() {
      if (this.name.trim() == '' || this.comment.trim() == '') {
        return false;
      }
      await addDoc(this.getCollection(), {
        name: this.name,
        comment: this.comment,
        createdAt: new Date().getTime()
      })
      this.name = '';
      this.comment = '';
      this.pushToast('fa6-solid:check', 'Ucapan berhasil terkirim.')
    },
    async loadMore() {
      this.limit += 5
    },
    copyNumber() {
      navigator.clipboard.writeText('1052721907');
      this.pushToast('fa6-solid:check', 'Number successfully copied.')
    },
    pushToast(icon_name, caption) {
      this.toats.push({
        icon_name, caption
      })
      setTimeout(() => {
        this.toats.shift()
      }, 3000);
    },
  },
  mounted() {
    let endDate = new Date('July 22 2023 08:00:00').getTime();
    setInterval(() => {
      var now = new Date().getTime()
      let remainingTime = endDate - now;
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      let daysLeft = Math.trunc(remainingTime / day);
      let hoursLeft = Math.trunc((remainingTime % day) / hour);
      let minutesLeft = Math.trunc((remainingTime % hour) / minute);
      let secondsLeft = Math.trunc((remainingTime % minute) / second);

      document.querySelector('#day').innerHTML = 0;
      document.querySelector('#hour').innerHTML = 0;
      document.querySelector('#minute').innerHTML = 0;
      document.querySelector('#second').innerHTML = 0;

    }, 1000);

    this.comments = useCollection(this.getCollection())
    let id = this.$route.params.id
    this.invitation = useDocument(doc(this.db, 'invitations', id))
  }
}
</script>

<style scoped>
.avatar {
  max-width: none;
  width:13.5rem;
  top:-27px;
  right: -15px;
}
.frame-w {
  max-width: none;
  top:-19px;
  right: -9px;
  width: 9.5rem;
  position: absolute;
}
#header {
  background-image: url(/images/nikah.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
#highligh {
  background-image: url(/images/nikah.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
#agenda, #card {
  background-image: url(/images/bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
