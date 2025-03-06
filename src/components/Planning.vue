<script setup>
import { breakfastMeals, dayOfTheWeek, otherMeals } from '@/assets/data'
import { onMounted, onUnmounted, ref } from 'vue'
import { inject } from 'vue'

onMounted(() => {
  window.addEventListener('keydown', handleKeyPress)
})

const GlobalStore = inject('GlobalStore')

const handleKeyPress = (event) => {
  if (event.code === 'Space' || event.key === ' ') {
    const changeMeals = () => {
      for (let i = 0; i < dayOfTheWeek.value.length; i++) {
        if (dayOfTheWeek.value[i].bfIsLocked === false) {
          const randomIndex = Math.floor(Math.random() * breakfastMeals.value.length)
          dayOfTheWeek.value[i].meal.breakfast = breakfastMeals.value[randomIndex].name
          GlobalStore.ingredients.value.push(breakfastMeals.value[randomIndex].ingredients)
          GlobalStore.selectedMeals.value.push(dayOfTheWeek.value[i].meal.breakfast)
        }
      }
      for (let i = 0; i < dayOfTheWeek.value.length; i++) {
        if (dayOfTheWeek.value[i].lunchIsLocked === false) {
          const randomIndex = Math.floor(Math.random() * otherMeals.value.length)
          dayOfTheWeek.value[i].meal.lunch = otherMeals.value[randomIndex].name
          GlobalStore.ingredients.value.push(otherMeals.value[randomIndex].ingredients)
          GlobalStore.selectedMeals.value.push(dayOfTheWeek.value[i].meal.lunch)
        }
      }
      for (let i = 0; i < dayOfTheWeek.value.length; i++) {
        if (dayOfTheWeek.value[i].dinnerIsLocked === false) {
          const randomIndex = Math.floor(Math.random() * otherMeals.value.length)
          dayOfTheWeek.value[i].meal.dinner = otherMeals.value[randomIndex].name
          GlobalStore.ingredients.value.push(otherMeals.value[randomIndex].ingredients)
          GlobalStore.selectedMeals.value.push(dayOfTheWeek.value[i].meal.dinner)
        }
      }
    }
    changeMeals()
    // console.log(GlobalStore.ingredientsList.value)
    const addIngredients = () => {
      for (let i = 0; i < GlobalStore.ingredients.value.length; i++) {
        for (let y = 0; y < GlobalStore.ingredients.value[i].length; y++) {
          GlobalStore.ingredientsList.value.push(GlobalStore.ingredients.value[i][y])
        }
      }
      GlobalStore.ingredientsListFinal.value = [...new Set(GlobalStore.ingredientsList.value)]
      // console.log(GlobalStore.ingredientsListFinal.value)
    }
    addIngredients()
  }
}

const lockMeal = (key) => {
  if (dayOfTheWeek.value[key].bfIsLocked === true) {
    dayOfTheWeek.value[key].bfIsLocked = false
  } else {
    dayOfTheWeek.value[key].bfIsLocked = true
  }
  if (dayOfTheWeek.value[key].lunchIsLocked === true) {
    dayOfTheWeek.value[key].lunchIsLocked = false
  } else {
    dayOfTheWeek.value[key].lunchIsLocked = true
  }
  if (dayOfTheWeek.value[key].dinnerIsLocked === true) {
    dayOfTheWeek.value[key].dinnerIsLocked = false
  } else {
    dayOfTheWeek.value[key].dinnerIsLocked = true
  }
}

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyPress)
})

// console.log(dayOfTheWeek)
</script>
<template>
  <main>
    <div v-for="day in dayOfTheWeek" :key="day.id" class="card">
      <h3>{{ day.day }}</h3>
      <div class="meal">
        <div>
          <button v-if="day.bfIsLocked === true" @click="lockMeal(day.id)">
            <i class="fa-solid fa-lock lock"></i>
          </button>
          <button v-else @click="lockMeal(day.id)">
            <i class="fa-solid fa-lock-open open"></i>
          </button>

          <p>Petit déjeuner</p>
          <form>
            <textarea name="" id="" v-model="day.meal.breakfast">{{ day.meal.breakfast }}</textarea>
          </form>
        </div>
      </div>
      <div class="meal">
        <div>
          <button v-if="day.lunchIsLocked === true" @click="lockMeal(day.id)">
            <i class="fa-solid fa-lock lock"></i>
          </button>
          <button v-else @click="lockMeal(day.id)">
            <i class="fa-solid fa-lock-open open"></i>
          </button>
          <p>Déjeuner</p>
          <form>
            <textarea name="" id="" v-model="day.meal.lunch">{{ day.meal.lunch }}</textarea>
          </form>
        </div>
      </div>
      <div class="meal">
        <div>
          <button v-if="day.bfIsLocked === true" @click="lockMeal(day.id)">
            <i class="fa-solid fa-lock lock"></i>
          </button>
          <button v-else @click="lockMeal(day.id)">
            <i class="fa-solid fa-lock-open open"></i>
          </button>
          <p>Dîner</p>
          <form>
            <textarea name="" id="" v-model="day.meal.dinner">{{ day.meal.dinner }}</textarea>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: var(--header-height);
  left: 0;
  width: 100%;
  height: calc(100vh - var(--header-height));
  background: rgb(63, 94, 251);
  background: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%);
}

h3 {
  background-color: #fff;
  padding: 5px;
  border-radius: 20px;
  font-family: 'DynaPuff', system-ui;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: 'wdth' 100;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  /* color: #000; */
}

.card {
  /* border: 1px solid #000; */
  width: 13%;
  flex-wrap: nowrap;
  flex-shrink: 1;
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h4 {
  margin-bottom: 10px;
}

.card .meal {
  /* border: 1px solid #000; */
  border-radius: 20px;
  height: calc(100% / 3);
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: relative;
}

.meal div {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.meal p {
  color: #808080;
  font-size: 13px;
  font-style: italic;
  margin: 10px;
}

textarea {
  width: 100%;
  height: 100%;
  border: 1px solid #80808033;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  resize: none;
  font-size: 18px;
}

button {
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 13px;
  color: #808080;
  background-color: #fff;
  border: 0px;
}

@media screen and (max-width: 1400px) and (min-width: 1024px) {
  textarea {
    font-size: 15px;
  }
}

@media screen and (max-width: 1024px) {
  main {
    flex-direction: column;
    gap: 0px;
  }
  .card {
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 10px;
    gap: 0px;
    height: 14%;
  }
  .card h3 {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card .meal {
    width: 23%;
    height: auto;
    padding: 15px;
  }
  textarea {
    height: 50%;
  }
}
</style>
