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
                variantColor: "Green"
            },
            {
                variantId: 2233,
                variantColor: "Blue"
            }
        ],

	}
})