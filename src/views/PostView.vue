<template>
  <h1>Posts</h1>
<ul>
  <li v-for="post in posts" :key="post.id">
    <RouterLink :to="`/postdetail/${post.id}`">{{ post.title }}</RouterLink>
  </li>
</ul>

<div>
  <button 
   @click="counter.increaseCounter(1)"
   @contextmenu.prevent="counter.decreaseCounter(1)"
   class="counter-button"> <!-- contextmenu le clique droit, prevent dégage le contexte -->
   {{ counter.count2.number }}
  </button>
</div>
</template>
  
<script setup>
import {ref, watch} from 'vue';
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore(); /* Version namespace de counter js */

const posts = ref([
  {
    id: "id1",
    title: "post 1"
  },
  {
    id: "id2",
    title: "post 2"
  },
  {
    id: "id3",
    title: "post 3"
  }
])


const color = ref("yellow");
watch(() => counter.oddOrEven, (newCount) => { /* newCount sera soit pair ou impair et selon pair ou impair color change de couleur  */
  color.value = newCount == "pair" ? "red": "yellow"; /* si odd rouge sinon jaune */
});
</script>
<style>
.counter-button {
  background-color: v-bind("color");
}
</style>
