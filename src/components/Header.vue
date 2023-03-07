<script >
import axios from 'axios'

import store from '../store'

export default {
    data() {
        return {
            store
        }
    },
    methods: {
        fetchFilm() {
            const keyApi = this.store.keyApi
            const query = this.store.query

            axios
                .get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: keyApi,
                        query
                    }
                })
                .then((res) => {
                    // console.log(res.data)
                    // console.log(res.data.results)
                    // console.log(res.data.results[0].title)
                    // console.log(res.data.results[1].original_title)
                    // console.log(res.data.results[2].original_language)
                    // console.log(res.data.results[4].vote_average)

                    this.store.arrayFilm = res.data.results

                })
        },
        fetchTv() {
            const keyApi = this.store.keyApi
            const query = this.store.query

            axios
                .get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        api_key: keyApi,
                        query
                    }
                })
                .then((res) => {
                    console.log(res.data.results)

                    this.store.arrayTv = res.data.results
                })

        },
        searchTvFilm() {
            this.fetchFilm()
            this.fetchTv()
        }
    }
}
</script>

<template>
    <header>
        <div class="container">
            <div class="search_bar">
                <figure class="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Netflix_logo_%282%29.svg" alt="">
                </figure>
                <div>
                    <div>
                        <button @click="searchTvFilm" class="search-btn"><i
                                class="fa-solid fa-magnifying-glass"></i></button>
                        <input @keyup.enter="searchTvFilm" v-model="store.query" type="text" class="input-bar"
                            placeholder="Inserisci il film">
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.search_bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;

    .logo {
        flex-basis: 20%;

    }

}

.input-bar {
    border: 1px solid rgb(0, 0, 0);
    border-radius: 10px;
    padding: 5px;
}

.search-btn {
    padding: 5px;
    font-size: 12px;
    border: 1px solid black;
    background-color: white;
    border-radius: 10px;
    text-align: center;
    margin-right: 8px;
}
</style>