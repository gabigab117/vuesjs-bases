import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
    const showModal = ref(false);

    function showModalFunc (state) {
        showModal.value = state;
    };


return {
    showModal,
    showModalFunc,
};
});
