<script>
import store from '../store'

export default {
    data() {
        return {
            store,
        }
    }, methods: {
        arrotondaNumeri(num) {
            return Math.round(num / 2)
        }
    },
    props: {
        film: {
            type: Array,
            require: true,
        }
    }
}

</script>

<template>
    <div class="card">
        <figure class="imgflix">
            <img class="posterImg" v-if="film.poster_path" :src="'https://image.tmdb.org/t/p/w342' + film.poster_path"
                alt="">
            <img class="posterImg" v-else src="https://hd2.tudocdn.net/516955?w=1000&fit=clip" alt="">
        </figure>
        <ul class="fetch-film">
            <li>
                <h2>Title</h2>
                {{ film.title }}
            </li>
            <li>
                <h3>Original_title</h3>
                {{ film.original_title }}
            </li>
            <li>
                <h4>Original_language-TV</h4>
                <img v-if="store.IconFlags[film.original_language]" :src="store.IconFlags[film.original_language]">
                <p v-else>
                    {{ film.original_language }}
                </p>
            </li>
            <li>
                <h4>vote_average</h4>
                <span v-for="n in 5" :class="{ 'yellow-star': n <= arrotondaNumeri(film.vote_average) }">
                    <i class="fa-solid fa-star"></i>
                </span>
            </li>
            <li>
                <p>{{ film.overview }}</p>
            </li>
        </ul>
    </div>
</template>



<style lang="scss" scoped>
.posterImg {
    aspect-ratio: 7/9;
    object-fit: cover;
    object-position: center;
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
        background-color: rgb(255, 255, 255, 0.8);
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