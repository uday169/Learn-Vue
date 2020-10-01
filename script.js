new Vue ({
	el: '#app',
	data: {
        product: 'Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        description: 'Pair of Socks',
        inStock: false,
        details: ["80% cotton" , "20% polister", "Gender-neutral"],
        variants:[
            {
                variantId: 2232,
                variantColor: "Green",
                variantImage: './assets/vmSocks-green-onWhite.jpg',
            },
            {
                variantId: 2233,
                variantColor: "Blue",
                variantImage: './assets/vmSocks-blue-onWhite.jpg',
            }
        ],
        cart: 0,
    },
    methods:{
        addtoCart() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
    
})