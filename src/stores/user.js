import { defineStore } from "pinia";
import { reactive } from "vue";

export const userStore = defineStore("user", () => {
    const userData = reactive({
        name: "gab",
        pseudo: "gabigab",
      });


return {
    userData
};
});
