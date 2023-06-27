const { createApp, ref } = Vue
createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const desc = ref('It is the product...')
        const link = ref('https://www.camt.cmu.ac.th/index.php/th/')
        return {
            product,
            image,
            desc,
            link
        }
    }
}).mount('#app')