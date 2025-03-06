<script setup>
import { inject, ref } from 'vue'
import { breakfastMeals, otherMeals } from '@/assets/data'

const GlobalStore = inject('GlobalStore')

const printPage = () => {
  window.print()
}

const aside = ref(true)

const moveRight = () => {
  aside.value.classList.toggle('move-right')
}

// console.log(GlobalStore.ingredientsListFinal.value)
</script>
<template>
  <header>
    <h1>Miam Miam</h1>
    <h2>Qu'est-ce qu'on mange ???</h2>
    <div>
      <button @click="moveRight"><i class="fa-solid fa-list"></i></button>
      <button @click="printPage"><i class="fa-solid fa-print"></i></button>
    </div>
  </header>
  <aside ref="aside">
    <div>
      <h2>Liste de courses</h2>
      <i @click="moveRight" class="fa-solid fa-circle-xmark close-button"></i>
    </div>
    <div v-if="GlobalStore.ingredientsListFinal.value.length != 0">
      <form v-for="ingredient in GlobalStore.ingredientsListFinal.value">
        <input type="checkbox" id="check" name="check" />
        <label for="check">{{ ingredient }}</label>
      </form>
      <!-- 
        <li v-for="ingredient in GlobalStore.ingredientsListFinal.value">
          <i class="fa-regular fa-square"></i>{{ ingredient }}
        </li> -->
    </div>
    <div v-else>
      <p>Appuyez sur la barre espace pour obtenir des idées de repas !</p>
    </div>
    <!-- <div v-for="meal in breakfastMeals" :key="meal">
      <ul>
        <li v-for="ingredient in meal.ingredients">{{ ingredient }}</li>
      </ul>
    </div> -->
  </aside>
</template>
<style scoped>
@media print {
  @page {
    size: A4 landscape;
  }
}

header {
  height: var(--header-height);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header div {
  position: absolute;
  top: 30px;
  right: 30px;
}

button {
  background-color: #fff;
  border: 0px;
  font-size: 20px;
  cursor: pointer;
}

aside {
  background-color: #fff;
  z-index: 999;
  position: absolute;
  margin: 20px;
  width: 500px;
  top: 0;
  right: 0;
  padding: 50px;
  border-radius: 20px;
  border: 1px solid #000;
  transition: transform 0.5s ease-in-out;
  transform: translateX(800px); /* Position initiale à droite */
}

.move-right {
  transform: translateX(0);
}

aside .close-button {
  font-size: 30px;
  position: absolute;
  top: -15px;
  right: -15px;
  color: red;
  cursor: pointer;
}
li {
  line-height: 1.2;
}

li i {
  margin-right: 5px;
}
</style>
