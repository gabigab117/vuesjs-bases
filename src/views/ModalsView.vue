<template>
    <div class="modals">
        <h1>Modals</h1>

        <button @click="modalStore.showModalFunc(true)">Show modal</button>


        <Modal
        gab="Salut Gab"
        v-if="modalStore.showModal"
         />
         <!-- props gab de  Modal.vue -->
    </div>

    <pre>{{ modalStore.showModal }}</pre>
</template>

<script setup>
import Modal from '@/component/Modal.vue';
import { useModalStore } from "@/stores/modal";

const modalStore = useModalStore();


</script>
