<template>
  <div order>
    <label v-for="item in list" :key="item.id">
      <input type="checkbox" v-model="checked" :value="item.id">{{ item.name }}
    </label>
    <a @click="moveChecked(-1)">위로</a><a @click="moveChecked(1)">아래로</a>
  </div>
</template>

<script>
import _ from 'lodash';
import { readNumber } from '@/utils';

export default {
  name: 'Order',
  data() {
    return {
      list: null,
      checked: [],
    };
  },
  methods: {
    moveChecked(d) {
      const l = this.list;
      _.forEach(this.checked.map(id => _.findIndex(l, item => item.id === id)).sort((a,b) => (b-a)*d), i => {
        const to = i + d;
        if (to < 0 || to > l.length - 1) return false;
        l.splice(to,0, ...l.splice(i,1));
      });
    },
  },
  mounted() {
    this.list = [...Array(30)].map((_, id) => ({id, name: readNumber(id+1)+'똥이'}));
  }
};
</script>

<style>
[order] { margin-bottom: 50px; }
[order] label { padding: 5px; display: block; }
[order] a { padding: 5px; margin-top: 20px; display: inline-block; }
</style>
