import { createApp } from 'vue'
import WordleWars from './WordleWars.vue'
import './styles/global.css'

// resize for scaling the board size
window.addEventListener('resize', onResize)
// set size on startup
onResize()

function onResize () {
  // get actual vh on mobile
  document.body.style.setProperty('--vh', window.innerHeight + 'px')
}

createApp(WordleWars).mount('#app')
