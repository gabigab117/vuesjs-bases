<template>
<h1>{{ traduct }}</h1>
<h2 ref="h2Ref">{{ counterTitle }}</h2>

<div class="home">
  <button class="btn" @click="counter.decreaseCounter(2, $event)">--</button>
  <button class="btn" @click="counter.decreaseCounter(1)">-</button>
<span class="counter">{{ counter.count2.number }}</span> <!-- span est inline -->
<button class="btn" @click="counter.increaseCounter(1)">+</button>
<button class="btn" @click="counter.increaseCounter(2)">++</button>
</div>

<div class="oddEvent">{{ counter.oddOrEven }}</div>

<button @click="traductInFrench">Traduct in french</button>

<div>
<input v-model="counterTitle" type="text" v-bucdany>
</div>


<button @click="testNextTick">Test Tick</button>

</template>

<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { vBucdany } from "@/directives/vBucdany";
import { useCounterStore } from "@/stores/counter";


const counter = useCounterStore();


const h2Ref = ref(null);



const traduct = ref("Home");


function traductInFrench() {
  if (traduct.value == "Home") traduct.value = "Accueil";
  else traduct.value = "Home";
}


const counterTitle = ref("Home 2");

/*const counter = ref(0); */



onMounted(() => {
  console.log("L'application est montée");
  console.log(h2Ref);
});

onBeforeMount(() => {
  console.log("Avant le montage")
});
</script>

<style>
.home {
  text-align: center;
  padding: 20px;;
}

.btn, .counter {
  font-size: 20px;
  margin: 10px;
}
</style>


