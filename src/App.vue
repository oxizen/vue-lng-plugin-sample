<template>
  <div id="app">
    <router-view />
    <a @click="changeLang(lang === 'kr' ? 'en' : 'kr')">Change Language [{{ lang }}]</a>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState({
      lang: 'lang'
    })
  },
  methods: {
    ...mapMutations({
      changeLang: 'lang'
    }),
  }
}
</script>

<style scoped>
a { cursor: pointer; }
</style>
