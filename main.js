const { createApp, ref } = Vue
createApp({
    setup(){
        const product = ref('Boots')
        const desc = ref('It is the product...')
        return {
            product,
            desc
        }
    }
}).mount('#app')