<script setup>
import { ref } from 'vue'
import { inject } from 'vue'

const aside = ref(null)

const moveRight = () => {
  aside.value.classList.toggle('move-right')
}
</script>
<template>
  <aside ref="aside">
    <div>
      <h2>Liste de courses</h2>
      <i @click="moveRight" class="fa-solid fa-circle-xmark"></i>
    </div>
  </aside>
</template>
<style scoped>
aside {
  background-color: #fff;
  height: 80vh;
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
  transform: translateX(0); /* Position initiale à droite */
}

.move-right {
  transform: translateX(800px);
}

aside div {
  display: flex;
  justify-content: space-between;
}

i {
  font-size: 30px;
  position: absolute;
  top: -15px;
  right: -15px;
  color: red;
}
</style>
