import { defineStore } from "pinia";
import { reactive, computed } from "vue";

export const useCounterStore = defineStore("counter", () => {
    const count2 = reactive({ /* Si je sors de la fonction ça devient global */
        number: 0,
        title: "Home",
      });


    
      const oddOrEven = computed(() => {
        return count2.number % 2 ? "impair" : "pair";
      });
    
      function increaseCounter(steps) {
        count2.number += steps;
      };
      
      function decreaseCounter(steps, e) {
        count2.number -= steps;
      };

return {
    count2,
    oddOrEven,
    increaseCounter,
    decreaseCounter
};
});
