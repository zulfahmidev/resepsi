<template>
  <div>
    <NuxtPage />
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Sorts+Mill+Goudy:ital@0;1&display=swap');
  * {
    font-family: 'Inter', sans-serif;
  }
  .font-smgi {
    font-family: 'Sorts Mill Goudy';
    font-style: italic;
  }
  .font-smg {
    font-family: 'Sorts Mill Goudy';
  }
  .font-inter {
    font-family: 'Inter', sans-serif;
  }
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>