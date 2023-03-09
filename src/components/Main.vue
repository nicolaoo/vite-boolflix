<script >
import axios from 'axios'
import store from '../store'

export default {
    data() {
        return {
            store,
        }
    }, methods: {
        arrotondaNumeri(num) {
            return num / 2
        }
    }
}
</script>

<template>
    <div class="main">
        <div class="container">
            <div class="grid">
                <div v-for="(element, i) in store.arrayFilm" :key="i" class="card">
                    <figure class="imgflix">
                        <img v-if="element.poster_path" :src="'https://image.tmdb.org/t/p/w342' + element.poster_path"
                            alt="">
                        <img v-else height="302"
                            src="https://st.depositphotos.com/2392933/3450/v/950/depositphotos_34505199-stock-illustration-cinema-symbols.jpg"
                            alt="">
                    </figure>
                    <ul class="fetch-film">
                        <li>
                            <h3>Title</h3>
                            {{ element.title }}
                        </li>
                        <li>
                            <h4>Original_title</h4>
                            {{ element.original_title }}
                        </li>
                        <li>
                            <h4>Original_language-TV</h4>
                            <img v-if="store.IconFlags[element.original_language]"
                                :src="store.IconFlags[element.original_language]">
                            <p v-else>
                                {{ element.original_language }}
                            </p>
                        </li>
                        <li>
                            <h4>vote_average</h4>
                            <span v-for="n in 5" :class="{ 'yellow-star': n <= arrotondaNumeri(element.vote_average) }">
                                <i class="fa-regular fa-star"></i>
                            </span>
                        </li>
                    </ul>
                </div>
                <div v-for="(element, i) in store.arrayTv" :key="i" class="card">
                    <figure class="imgflix">
                        <img v-if="element.poster_path" :src="'https://image.tmdb.org/t/p/w342' + element.poster_path"
                            alt="">
                        <img v-else height="302"
                            src="https://st.depositphotos.com/2392933/3450/v/950/depositphotos_34505199-stock-illustration-cinema-symbols.jpg"
                            alt="">
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
                            <h4>vote_average</h4>
                            <span v-for="n in 5" :class="{ 'yellow-star': n <= arrotondaNumeri(element.vote_average) }">
                                <i class="fa-regular fa-star"></i>
                            </span>
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
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    opacity: 0;

    &:hover {
        opacity: 0.9;
        background-color: rgb(255, 255, 255, 0.5);
    }

    li {
        padding: 2px;
    }
}

.card {
    position: relative;

}

.yellow-star {
    color: yellow;
}
</style>