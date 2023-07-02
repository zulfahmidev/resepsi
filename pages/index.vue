<template>
  <div class="m-auto bg-primary text-center flex flex-col justify-center align-center" style="max-width: 425px;">
    <div class="h-screen relative" id="header">
      <div class="bg-black/50 h-screen flex flex-col justify-center">
        <div class="text-white">THE WEDDING OF</div>
        <div class="text-white font-smgi text-5xl my-3">Riza & Dwi</div>
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
          <img src="/images/prewed.jpeg" alt="">
        </div>
      </div>
      <div class="font-smgi my-3 text-2xl text-secondary">Teuku Riza Muli</div>
      <div class="text-sm">
        <div class="font-smg">Putra pertama dari</div>
        <div class="font-smg">Bapak nama</div>
        <div class="font-smg">& Ibu nama</div>
      </div>
    </div>
    <div class="rounded-2xl mt-4 shadow-lg mx-4 bg-light relative py-10 text-black">
      <div class="flex justify-center relative w-fit mx-auto">
        <img src="/images/border.png" class="absolute frame-w" alt="">
        <div class="w-28 h-28 overflow-hidden rounded-full">
          <img src="/images/prewed.jpeg" alt="">
        </div>
      </div>
      <div class="font-smgi my-3 text-2xl text-secondary">Dwi</div>
      <div class="text-sm">
        <div class="font-smg">Putri pertama dari</div>
        <div class="font-smg">Bapak nama</div>
        <div class="font-smg">& Ibu nama</div>
      </div>
    </div>
    <div class="mt-4" id="highligh">
      <div class="bg-black/50 relative pt-12 backdrop-blur-sm">
        <div class="bg-gradient-to-b from-primary absolute top-0 left-0 right-0 to-transparent h-32"></div>
        <div class="text-white mt-10 font-smg text-2xl">Menuju Hari Bahagia</div>
        <div class="flex gap-3 justify-center my-8">
          <div class="rounded-xl text-white w-20 py-2 h-25 bg-white/50">
            <div class="text-4xl">0</div>
            <div class="text-sm font-smg">Hari</div>
          </div>
          <div class="rounded-xl text-white w-20 py-2 h-25 bg-white/50">
            <div class="text-4xl">0</div>
            <div class="text-sm font-smg">Hari</div>
          </div>
          <div class="rounded-xl text-white w-20 py-2 h-25 bg-white/50">
            <div class="text-4xl">0</div>
            <div class="text-sm font-smg">Hari</div>
          </div>
          <div class="rounded-xl text-white w-20 py-2 h-25 bg-white/50">
            <div class="text-4xl">0</div>
            <div class="text-sm font-smg">Hari</div>
          </div>
        </div>
        <div class="rounded-2xl mt-4 shadow-lg mx-4 relative py-10 text-black" id="agenda">
          <div class="font-smgi my-3 text-3xl text-black">Resepsi</div>
          <div class="font-smg">Minggu</div>
          <div class="font-smg text-primary text-7xl">16</div>
          <div class="font-smg text-primary">Juli 2023</div>
          <div class="font-smg">Pukul 08.00 WIB s/d Selesai</div>
          <a href="" class="text-primary bg-white mx-auto rounded-full px-6 py-3 shadow-lg mt-2 inline-block">
            <Icon name="fa6-solid:map" class="relative mr-1" style="bottom:1px" />
            Buka Google Map
          </a>
        </div>
        <div class="rounded-t-3xl mt-5 bg-light">
          <div class="mx-4 pt-10">
            <div class="text-5xl font-smgi">Wishes</div>
            <div class="text-sm mt-2 mb-5 font-smg">Berikan Ucapan & Doa Restu</div>
            <input type="text" placeholder="Nama" class="w-full outline-none px-3 py-2 rounded border-b-2 border-secondary focus:shadow-md mt-2">
            <textarea cols="30" rows="2" placeholder="Ucapan" class="w-full outline-none px-3 py-2 rounded border-b-2 border-secondary focus:shadow-md mt-2 overflow-hidden resize-none" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
            <button class="w-full py-2 bg-primary rounded text-white active:bg-secondary">Kirim</button>
            <div class="w-full border-b my-5 border-black/25"></div>

            <div class="rounded bg-white py-3 mt-3 px-4 text-left border-l-4 border-secondary">
              <div class="font-smg font-bold mb-1">Zulfahmi</div>
              <div class="text-black/75 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, sunt?</div>
              <div class="text-black/75 mt-2" style="font-size:10px">
                <Icon name="fa6-regular:clock" class="relative" style="bottom:1px;margin-right: 3px;" />
                1 Hari yang lalu.
              </div>
            </div>
            <div class="rounded bg-white py-3 mt-3 px-4 text-left border-l-4 border-secondary">
              <div class="font-smg font-bold mb-1">Zulfahmi</div>
              <div class="text-black/75 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, sunt?</div>
              <div class="text-black/75 mt-2" style="font-size:10px">
                <Icon name="fa6-regular:clock" class="relative" style="bottom:1px;margin-right: 3px;" />
                1 Hari yang lalu.
              </div>
            </div>
          </div>
          <div class="rounded-t-3xl mt-5 bg-slate-950 text-sm text-primary py-4">
            Copyright &copy;2023, Created by <a class="font-bold" href="https://zulfahmidev.github.io">Zulfahmidev</a>.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.frame-w {
  max-width: none;
  top:-19px;
  right: -9px;
  width: 9.5rem;
  position: absolute;
}
#header {
  background-image: url(/images/prewed.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
#highligh {
  background-image: url(/images/prewed.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
#agenda {
  background-image: url(/images/bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>