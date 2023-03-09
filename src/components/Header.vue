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
                .catch((error) => {
                    console.log(error)
                    this.store.arrayFilm = []

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
                .catch((error) => {
                    console.log(error)
                    this.store.arrayTv = []

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
                <div class="navbar">
                    <figure class="logo">
                        <img src="https://www.lascimmiapensa.com/wp-content/uploads/2017/05/Netflix-Logo.png" alt="">
                    </figure>
                    <ul class="navbar-menu">
                        <li class="active">Home</li>
                        <li>Serie Tv</li>
                        <li>Film</li>
                        <li>Originali</li>
                        <li>La mia lista</li>
                    </ul>
                </div>
                <div class="search">
                    <button @click="searchTvFilm" class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                    <input @keyup.enter="searchTvFilm" v-model="store.query" type="text" class="input-bar"
                        placeholder="Inserisci il film">
                    <button class="btn">
                        <img src="https://blog.it.playstation.com/tachyon/sites/12/2022/06/c7ad90b8e7459ba44f6974a429783aee42275f1b.jpg?resize=1088%2C612&crop_strategy=smart&zoom=1"
                            alt="">
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>


<style lang="scss" scoped>
.btn {
    display: flex;
    width: 40px;
    height: 40px;
    margin-left: 20px;

    img {
        object-fit: cover;
        object-position: center;
        aspect-ratio: 1/1;
    }
}

.search {
    display: flex;
    align-items: center;

}

.navbar-menu {
    color: rgb(255, 255, 255, 0.5);
    display: flex;
    gap: 8px;

    li:hover {
        color: white;

    }

    .active {
        color: white;

    }
}

.search_bar {
    display: flex;
    padding: 10px 0;
    align-items: center;

    .navbar {
        display: flex;
        align-items: center;

    }

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

// .search-btn:hover+.input-bar {
//     display: flex;

// }
</style>