<script >
import axios from 'axios'
import store from '../store'

export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="main">
        <div class="container">
            <div class="grid">
                <div v-for="(element, i) in store.arrayFilm" :key="i" class="card">
                    <figure>
                        <img :src="'https://image.tmdb.org/t/p/w342' + element.poster_path" alt="">
                    </figure>
                    <ul class="fetch-film">
                        <li>
                            <h4>title</h4>
                            {{ element.title }}
                        </li>
                        <li>
                            <h4>original_title</h4>
                            {{ element.original_title }}
                        </li>
                        <li>
                            <h4>original_language-TV</h4>
                            <img v-if="store.IconFlags[element.original_language]"
                                :src="store.IconFlags[element.original_language]">
                            <p v-else>
                                {{ element.original_language }}
                            </p>
                        </li>
                        <li>
                            <h4>vote_average</h4>
                            {{ element.vote_average }}
                        </li>
                    </ul>
                </div>
                <div v-for="(element, i) in store.arrayTv" :key="i" class="card">
                    <figure>
                        <img :src="'https://image.tmdb.org/t/p/w342' + element.poster_path" alt="">
                    </figure>
                    <ul class="fetch-film">
                        <li>
                            <h4>title-TV</h4>
                            {{ element.name }}
                        </li>
                        <li>
                            <h4>original_title-TV</h4>
                            {{ element.original_name }}
                        </li>
                        <li>
                            <h4>original_language-TV</h4>
                            <img v-if="store.IconFlags[element.original_language]"
                                :src="store.IconFlags[element.original_language]">
                            <p v-else>
                                {{ element.original_language }}
                            </p>
                        </li>
                        <li>
                            <h4>vote_average-TV</h4>
                            {{ element.vote_average }}
                        </li>
                    </ul>
                </div>
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

.fetch-film {
    background-color: darkolivegreen;

    li {
        padding: 2px;
    }
}
</style>