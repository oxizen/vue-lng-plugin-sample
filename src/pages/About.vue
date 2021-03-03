<template>
  <div>
    <div v-lng:about.hello></div>
    <router-link to="/" v-lng:goHome></router-link>
    <div>
      <div>{{ $lng('ok') }}</div>
      <div>{{ $lng('about.good') }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>
