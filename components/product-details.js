const productDetail = {

    template:
        /*html*/
        `
        <div class="product-info">Detail: {{ details }}</div>
`,
props: {
    details: String
},
setup(props) {
    
        // const details = ref([
        //     '50% cotton',
        //     '30% wool',
        //     '20% polyester'
        // ])
      
        return {
            details,
        }   
    }
}