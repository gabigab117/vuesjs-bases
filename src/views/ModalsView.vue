<template>
    <div class="modals">
        <h1>Modals</h1>

        <button @click="showModal = true">Show modal</button>

        <div>
            <label>Show dark ?
            <input type="checkbox" v-model="showDarkModal">
            </label>
        </div>

        <component v-if="showModal" gab="Salut Gab" v-model="showModal" :is="showDarkModal ? ModalDark : Modal">
            <p>Contenu du modal</p>

        </component>


    </div>
    <pre>{{ showModal }}</pre> <!--Permet d'afficher ma variable pour debug-->
</template>

<script setup>
import {ref} from 'vue';
import Modal from '@/component/Modal.vue';
import ModalDark from '@/component/ModalDark.vue'

const showDarkModal = ref(Modal);
const showModal = ref(false);


</script>
