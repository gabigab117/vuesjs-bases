<template>
    <h1>Post Detail</h1>
    <button @click="showPostId">Show id</button>

    <RouterLink :to="{name: 'posts'}">Retour</RouterLink>
    <button @click="goHomeIn3Seconds">Go home</button>


    <button
    @click="counter.inc()"
    @contextmenu.prevent="counter.dec()"
    >{{ counter.count }}</button>
</template>

<script setup>
import { useRoute } from 'vue-router';
import router from '@/router'
import { useCounter } from '@vueuse/core';
import { watch } from 'vue';

const counter = useCounter();

const route = useRoute();
console.log(route.params.id);

function showPostId() {
    /* backtick = fstring en python */
    alert(`The id of this post: ${route.params.id}`)
}

function goHomeIn3Seconds() {
    setTimeout(() => {
        router.push("/");
    }, 3000);
}


watch(() => counter.count.value, (newCount, oldCount) => {
    if (newCount == 20) { alert("Résussi !")}
  });
</script>