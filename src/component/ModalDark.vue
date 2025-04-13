<template>
    <Teleport to="#modals-container">
        <div class="modal-dark">
            <h2>{{ props.gab }}</h2>
            <slot />

            <button @click="handleButtonClick">Hide Modal</button>
        </div>
    </Teleport>
</template>

<script setup>


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

const emit = defineEmits(["update:modelVale"])

const handleButtonClick = () => {
    emit("update:modelValue", false);
};

</script>

<style>
.modal-dark {
    color: white;
    background-color: #333;
    padding: 10px;
}
</style>
