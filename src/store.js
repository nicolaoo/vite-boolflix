import { reactive } from "vue";

const store = reactive({
    keyApi: '835c66cc5b8e53712c49931e6484eca1',
    query: '',
    arrayFilm: [],
    arrayTv: [],
    IconFlags: {
        en: '/united_states_flags.png',
        it: '/italy_flags.ico',
        ko: '/south_korea_flags.png',
        zh: '/china_flags.png',
        fr: '/france_flags.png',
        ja: '/japan_flags.ico',
        es: '/spain_flags.ico',
        de: '/germany_flags.png',
        cn: '/china_flags.png',
    },

})

export default store