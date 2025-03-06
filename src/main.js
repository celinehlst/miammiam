import './assets/main.css'

import { computed, createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ref } from 'vue'

const app = createApp(App)

// const aside = ref(null)

// const moveRight = () => {
//   aside.value.classList.toggle('move-right')
// }
const selectedMeals = ref([])
const ingredients = ref([])
const ingredientsList = ref([])
const ingredientsListFinal = ref([])
// console.log(ingredientsListFinal.value)

app.provide('GlobalStore', {
  selectedMeals,
  ingredients,
  ingredientsList,
  ingredientsListFinal,
})

app.use(router)

app.mount('#app')
