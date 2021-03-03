<template>
  <div>
    <div v-lng:about.hello></div>
    <router-link to="/" v-lng:goHome></router-link>
    <div>
      <span>{{ $lng('ok') }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>
