<script >
import axios from 'axios'
import store from '../store'

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="main">
        <div class="container">
            <div class="grid">
                <div v-for="(element, i) in store.arrayFilm" :key="i" class="card">
                    <figure>
                        <img src="https://picsum.photos/200/300" alt="">
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
                            <h4>original_language</h4>
                            {{ element.original_language }}
                        </li>
                        <li>
                            <h4>vote_average</h4>
                            {{ element.vote_average }}
                        </li>
                    </ul>
                </div>
                <div v-for="(element, i) in store.arrayTv" :key="i" class="card">
                    <figure>
                        <img src="https://picsum.photos/200/300" alt="">
                    </figure>
                    <ul class="fetch-film">
                        <li>
                            <h4>title</h4>
                            {{ element.name }}
                        </li>
                        <li>
                            <h4>original_title</h4>
                            {{ element.original_name }}
                        </li>
                        <li>
                            <h4>original_language</h4>
                            {{ element.original_language }}
                        </li>
                        <li>
                            <h4>vote_average</h4>
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
    grid-template-columns: repeat(6, 1fr);
    gap: 15px;
}

.fetch-film {
    background-color: darkolivegreen;

    li {
        padding: 2px;
    }
}
</style>