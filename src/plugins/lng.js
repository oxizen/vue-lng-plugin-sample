import data from '../lng';

const lexicon = Object.keys(data)
  .map(groupKey => Object.keys(data[groupKey])
    .map(key => ({[(groupKey === 'common' ? '' : groupKey+'.')+key]: data[groupKey][key]}))
  )
  .reduce((groupAcc, group) => ({
    ...groupAcc,
    ...group.reduce((nodeAcc, node) => ({ ...nodeAcc, ...node }), {})
  }), {});


export default {
  install(Vue) {

    const translate = (key, code, options) => {
      if (!lexicon[key]) return `** no value for (${key}) from lng **`;
      const t = (typeof lexicon[key] === 'string') ? lexicon[key] : lexicon[key][code];
      if (!t) return `** no value for (${key}-${code}) from lng **`;
      if (options) return t.replace(/#{(\w+)}/g, (_, key) => options[key] || `** no options for (${key}) **`);
      return t;
    }

    Vue.directive('lng', {
      bind(el, binding, vnode) {
        const key = [binding.arg, ...Object.keys(binding.modifiers)].join('.');
        const run = lang => {
          el.innerHTML = translate(key, lang, binding.value);
        }
        vnode.context.$watch('$store.state.lang', run);
        run(vnode.context.$store.state.lang);
      },
    });

    Vue.prototype.$lng = function (key, options) {
      return translate(key, this.$store.state.lang, options);
    }
  }
}
