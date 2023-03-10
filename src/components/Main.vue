<script >
import axios from 'axios'
import store from '../store'
import CardToFilm from './CardFilm.vue'
import CardToTv from './CardTv.vue'

export default {
    data() {
        return {
            store,

        }
    },
    components: {
        CardToTv,
        CardToFilm,
    }
}
</script>

<template>
    <div class="main">
        <div class="container">
            <div class="grid">
                <CardToFilm v-for="(element, i) in store.arrayFilm" :key="i" :film="element" />
                <CardToTv v-for="(element, i) in store.arrayTv" :key="i" :tv="element" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
}
</style>