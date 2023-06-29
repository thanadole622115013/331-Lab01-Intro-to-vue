const productDetail = {

    template:
        /*html*/
        `
        <div>Detail: {{ getDetail }}</div>
`,
props: {
    details: String
},
setup(props) {

    const getDetail = computed(() => {
        return details.value
    })
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
      
        return {
            details,
            getDetail
        }   
    }
}