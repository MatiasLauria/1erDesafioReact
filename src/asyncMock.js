const products = [
    {   id: '1',
        name: 'arandanos',
        category: 'frutas',
        price: 1340,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/419/553/products/arandanos1-23d7494b9845eede0815391103177955-1024-1024.jpg',
        stock: 25,
        description: 'Arandanos congelados en bolsa de 1kg'
    },
    {   id: '2',
        name: 'durazno',
        category: 'frutas',
        price: 1000,
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/515/128/products/durazno-congelado-guru-market1-b8707dcb9f9d9ba5f416028569152138-640-0.jpg',
        stock: 25,
        description: 'Durazno cubeteado en bolsa de 1kg'
    },
    {   id: '3',
        name: 'frambuesas',
        category: 'frutas',
        price: 1440,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/419/553/products/frambuesas1-a0edcbb920ea03bd5c15391103623875-1024-1024.jpg',
        stock: 25,
        description: 'Frambuesas congeladas en bolsa de 1kg'
    },
    {   id: '4',
        name: 'acelga',
        category: 'verduras',
        price: 600,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/658/159/products/51-ed9b656366d64725b916210092715396-1024-1024.png',
        stock: 25,
        description: 'Acelga congelada en bolsa de 1kg'
    },
    {   id: '5',
        name: 'arveja',
        category: 'verduras',
        price: 450,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7efsdUO71GGrWvvcdrkG6Mq0h6jTCfxStYw&usqp=CAU',
        stock: 25,
        description: 'Arveja congelada en bolsa de 1kg'
    },
    {   id: '6',
        name: 'brocoli',
        category: 'verduras',
        price: 530,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/419/553/products/brocoli_11-2f6f17c7e952ad0daf15391099972693-1024-1024.jpg',
        stock: 25,
        description: 'Brocoli congelado en bolsa de 1kg'
    },
    {   id: '7',
        name: 'aceitunas verdes',
        category: 'almacén',
        price: 800,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/907/554/products/don-salim-51-2bda7b77dfa418525115711535216348-1024-1024.jpg',
        stock: 25,
        description: 'tarro de aceitunas x 500grs'
    },
    {   id: '8',
        name: 'almendra',
        category: 'almacén',
        price: 2000,
        img: 'https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/a/l/almendra-pelada_1_2_1.jpg',
        stock: 25,
        description: '1 kg de almendra en bolsa'
    },
    {   id: '9',
        name: 'arroz blanco',
        category: 'almacén',
        price: 350,
        img: 'https://m.media-amazon.com/images/I/81MLXU97JdL.jpg',
        stock: 25,
        description: 'arroz de 1kg en caja'
    }
]

 export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products)
        }, 1000)
    }
    )
}

export const getProduct = (id) => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    }
    )
}

