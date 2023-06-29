const { createApp, ref, computed } = Vue
createApp({
    setup(){
        const product = ref('Boots')
        const brand = ref('SE 331')
        // const image = ref('./assets/images/socks_green.jpg')
        const desc = ref('It is the product...')
        const link = ref('https://www.camt.cmu.ac.th/index.php/th/')
        // const inStock = ref(false)
        const inventory = ref(100)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: '/assets/images/socks_green.jpg', quantity: 50},
            { id: 2235, color: 'blue', image: '/assets/images/socks_blue.jpg', quantity: 0}
        ])
        const selectedVariant = ref(0)
        const sizes = ref([
            'S',
            'M',
            'L'
        ])
        const cart = ref(0)
        
            function addToCart(){
            cart.value +=1
            }
            
            const saleState = computed(() => {
                return brand.value + ' ' + product.value + ' ' + 'is on sale'
            })

            const title = computed(() => {
                return brand.value + ' ' + product.value
            })

            function updateVariant(index){
                selectedVariant.value = index;
            }
            const image = computed(() => {
                return variants.value[selectedVariant.value].image
            })
            const inStock = computed(() => {
                return variants.value[selectedVariant.value].quantity
            })

            function updateImage(variantImage){
                image.value = variantImage
            }
            function updateInStock(){
                this.inStock = !this.inStock
            }
        return {
            title,
            saleState,
            image,
            desc,
            link,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes,
            cart,
            addToCart,
            updateImage,
            updateInStock
        }
    }
}).mount('#app')