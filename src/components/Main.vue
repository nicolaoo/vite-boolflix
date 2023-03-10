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
            <div class="grid" v-if="store.arrayFilm.length > 0">
                <CardToFilm v-for="(element, i) in store.arrayFilm" :key="i" :film="element" />
            </div>
            <div v-else-if="store.arrayTv.length > 0">
                <CardToTv v-for="(element, i) in store.arrayTv" :key="i" :tv="element" />
            </div>
            <div v-else class="error">
                {{ store.query }} non è stato trovato!!!!

            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.error {
    color: white;
    display: flex;
    justify-content: center;
    align-items: start;

}

.grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 15px;
}
</style>