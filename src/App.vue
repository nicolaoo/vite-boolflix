<script >
import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
  data() {
    return {

    }
  },
  components: {
    Header,
    Main,
  }
}

</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss">
@use './style/gneral.scss';

body {
  background-color: rgb(0, 0, 0);
}
</style>
