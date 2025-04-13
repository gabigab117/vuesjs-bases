import { ref, reactive, computed, watch, onMounted, onBeforeMount, nextTick } from "vue";


const count2 = reactive({ /* Si je sors de la fonction ça devient global */
    number: 0,
    title: "Home",
  });


export function useCounter() {


function increaseCounter(steps) {
    count2.number += steps;
  };
  
  function decreaseCounter(steps, e) {
    count2.number -= steps;
  };


  
  const oddOrEven = computed(() => {
    return count2.number % 2 ? "impair" : "pair";
  });
  
  watch(() => count2.number, (newCount, oldCount) => {
    if (newCount == 20) { alert("Résussi !")}
  });


return { count2, oddOrEven, increaseCounter, decreaseCounter }

}