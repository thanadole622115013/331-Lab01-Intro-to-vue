const { createApp, ref, computed} = Vue;
const app = createApp({
    setup(){
        const cart = ref([])
        
        const premium = ref(true)
       function updateCart(id){
        cart.value.push(id)
       }
       function spliceCart(id){
        cart.value.push(id)
       }
       

        return {
            cart,
            premium,
            updateCart,
            spliceCart
        }
    }
})

app.component('product-display', productDisplay)
// app.component('product-detail', product-detail)
app.mount('#app')