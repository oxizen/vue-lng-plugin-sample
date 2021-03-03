<template>
  <div>
    <div v-lng:home.hello="{name: 'Ben'}"></div>
    <router-link to="/about">{{ $lng('goAbout') }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
