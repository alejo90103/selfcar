import Vue from 'vue'
import barra_lateral from './layout/Barra_Lateral.vue'
import cmp_footer from './layout/Footer.vue'
import testimony from './layout/Testimony.vue'
import stadistics from './layout/Stadistics.vue'
import cmp_video from './layout/Video.vue'
import last_news from './layout/Last_News.vue'
import offert from './layout/Offert.vue'

new Vue({
  el: '#barra_lateral',
  render: h => h(barra_lateral)
})

new Vue({
  el: '#cmp_footer',
  render: h => h(cmp_footer)
})

new Vue({
  el: '#testimony',
  render: h => h(testimony)
})

new Vue({
  el: '#stadistics',
  render: h => h(stadistics)
})

new Vue({
  el: '#cmp_video',
  render: h => h(cmp_video)
})

new Vue({
  el: '#last_news',
  render: h => h(last_news)
})

new Vue({
  el: '#offert',
  render: h => h(offert)
})
