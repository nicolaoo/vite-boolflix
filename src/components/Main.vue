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
                <div class="card">
                    <figure>
                        <img src="https://picsum.photos/200/300" alt="">
                    </figure>
                    <ul>
                        <li>Titolo</li>
                        <li>Titolo Originale</li>
                        <li>Lingua</li>
                        <li>Voto</li>
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
</style>