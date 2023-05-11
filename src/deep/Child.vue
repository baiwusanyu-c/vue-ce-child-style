<script setup lang="ts">
import GrandChild from "./GrandChild.vue";
import {ref} from "vue";
const color = ref('blue')
const show = ref(true)
const handleVb = () => {
    color.value = '#00ffff'
}
const handleIf= () => {
    show.value = !show.value
}
</script>

<template>
    <div>
        <p class="my-blue" @click="handleIf">This should be blue</p>
        <GrandChild v-if="show"></GrandChild>
        <div v-else>test</div>
    </div>

</template>

<style>
.my-blue { color: v-bind(color) }
</style>