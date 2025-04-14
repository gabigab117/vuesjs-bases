<template>
    <Teleport to="#modals-container">
        <div class="modal">
            <slot />

            Salut {{ store.userData.pseudo }}

            <button @click="modalStore.showModalFunc(false)">Hide Modal</button>
        </div>
    </Teleport>
</template>

<script setup>
import { userStore } from "@/stores/user";
import { useModalStore } from "@/stores/modal";

const modalStore = useModalStore();
const store = userStore();



const props = defineProps({
    gab: {
        type: String,
        default: "Defaut"
    }
});

</script>

<style>
.modal {
    color: black;
    background-color: beige;
    padding: 10px;
}
</style>
