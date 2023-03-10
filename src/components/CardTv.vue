<script>
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
    },
    props: {
        tv: {
            type: Array,
            require: true,

        }
    }
}

</script>

<template>
    <div class="card">
        <figure class="imgflix">
            <img v-if="tv.poster_path" :src="'https://image.tmdb.org/t/p/w342' + tv.poster_path" alt="">
            <img v-else height="302"
                src="https://st.depositphotos.com/2392933/3450/v/950/depositphotos_34505199-stock-illustration-cinema-symbols.jpg"
                alt="">
        </figure>
        <ul class="fetch-film">
            <li>
                <h2>
                    Title-TV
                </h2>
                <p>
                    {{ tv.name }}
                </p>

            </li>
            <li>
                <h3>original_title-TV</h3>
                {{ tv.original_name }}
            </li>
            <li>
                <h4>original_language-TV</h4>
                <img v-if="store.IconFlags[tv.original_language]" :src="store.IconFlags[tv.original_language]">
                <p v-else>
                    {{ tv.original_language }}
                </p>
            </li>
            <li>
                <h4>vote_average</h4>
                <span v-for="n in 5" :class="{ 'yellow-star': n <= arrotondaNumeri(tv.vote_average) }">
                    <i class=" fa-solid fa-star"></i>
                </span>
            </li>
            <li>
                <p>{{ tv.overview }}</p>
            </li>
        </ul>
    </div>
</template>


<style lang="scss" scoped>
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