const { createApp, ref } = Vue
createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const desc = ref('It is the product...')
        const link = ref('https://www.camt.cmu.ac.th/index.php/th/')
        const inStock = ref(false)
        const inventory = ref(100)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green' },
            { id: 2235, color: 'blue' }
        ])
        const sizes = ref([
            'S',
            'M',
            'L'
        ])
        return {
            product,
            image,
            desc,
            link,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes
        }
    }
}).mount('#app')