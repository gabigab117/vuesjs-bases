<template>
    <Teleport to="#modals-container">
        <div class="modal">
            <h2>{{ props.gab }}</h2>
            <slot />

            Salut {{ userName.pseudo }}

            <button @click="handleButtonClick">Hide Modal</button>
        </div>
    </Teleport>
</template>

<script setup>
import { inject } from 'vue';


const userName = inject("gabShare");


const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    gab: {
        type: String,
        default: "Default title"
    }
});

const emit = defineEmits(["update:modelValue"])

const handleButtonClick = () => {
    emit("update:modelValue", false);
};

</script>

<style>
.modal {
    color: black;
    background-color: beige;
    padding: 10px;
}
</style>
