interface IProduct {
    id: string;
    imageGroups: [
        {
            images: [
                { link: string }
            ]
        }
    ];
    name: string;
    price: string;
    shortDescription: string;
    longDescription: string;
}

const products: Array<IProduct> = [
    {
        id: '001',
        imageGroups: [{ images: [{ link: '/images/merlina.jpeg' }] }],
        name: 'Merlina',
        price: '400.00 mxn',
        shortDescription: 'Piñata personalizada',
        longDescription: 'Piñata Merlina, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
        id: '002',
        imageGroups: [{ images: [{ link: '/images/shinobu.jpeg' }] }],
        name: 'Shinobu',
        price: '400.00 mxn',
        shortDescription: 'Piñata personalizada',
        longDescription: 'Piñata Shinobu, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
        id: '003',
        imageGroups: [{ images: [{ link: '/images/pikachu.jpeg' }] }],
        name: 'Pikachu',
        price: '400.00 mxn',
        shortDescription: 'Piñata personalizada',
        longDescription: 'Piñata Pikachu, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
        id: '004',
        imageGroups: [{ images: [{ link: '/images/birthday.jpeg' }] }],
        name: 'Birthday',
        price: '400.00 mxn',
        shortDescription: 'Piñata personalizada',
        longDescription: 'Piñata Birthday, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
        id: '005',
        imageGroups: [{ images: [{ link: '/images/tio-cosa.jpeg' }] }],
        name: 'Tío Cosa',
        price: '400.00 mxn',
        shortDescription: 'Piñata personalizada',
        longDescription: 'Piñata Tío Cosa, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
        id: '006',
        imageGroups: [{ images: [{ link: '/images/my-little-pony.jpeg' }] }],
        name: 'My Little Pony',
        price: '400.00 mxn',
        shortDescription: 'Piñata personalizada',
        longDescription: 'Piñata My Little Pony, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    /* {
        id: '007',
        imageGroups: [{ images: [{ link: '/images/guitar.jpeg' }] }],
        name: 'Guitar',
        price: '400.00 mxn',
        shortDescription: 'Piñata personalizada',
        longDescription: 'Piñata Guitarny, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    }, */
    /* {
        id: '008',
        imageGroups: [{ images: [{ link: '/images/princesa-sofia.jpeg' }] }],
        name: 'Princesa Sofia',
        price: '400.00 mxn',
        shortDescription: 'Piñata personalizada',
        longDescription: 'Piñata Princesa Sofia, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    }, */
    {
        id: '009',
        imageGroups: [{ images: [{ link: '/images/princesas-disney.jpeg' }] }],
        name: 'Princesas Disney',
        price: '400.00 mxn',
        shortDescription: 'Piñata personalizada',
        longDescription: 'Piñata Princesas Disney, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
        id: '010',
        imageGroups: [{ images: [{ link: '/images/unicornio.jpeg' }] }],
        name: 'Unicornio',
        price: '400.00 mxn',
        shortDescription: 'Piñata personalizada',
        longDescription: 'Piñata Unicornio, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
        id: '011',
        imageGroups: [{ images: [{ link: '/images/catrina.jpeg' }] }],
        name: 'Catrina',
        price: '400.00 mxn',
        shortDescription: 'Piñata personalizada',
        longDescription: 'Piñata Catrina, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
        id: '012',
        imageGroups: [{ images: [{ link: '/images/pony.jpeg' }] }],
        name: 'Pony',
        price: '400.00 mxn',
        shortDescription: 'Piñata personalizada',
        longDescription: 'Piñata Pony, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
        id: '013',
        imageGroups: [{ images: [{ link: '/images/sirenita.jpeg' }] }],
        name: 'La Sirenita',
        price: '400.00 mxn',
        shortDescription: 'Piñata personalizada',
        longDescription: 'Piñata La Sinerita, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
        id: '014',
        imageGroups: [{ images: [{ link: '/images/mariachi.jpeg' }] }],
        name: 'Mariachi',
        price: '400.00 mxn',
        shortDescription: 'Piñata personalizada',
        longDescription: 'Piñata Mariachi, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
        id: '015',
        imageGroups: [{ images: [{ link: '/images/gallinita.jpeg' }] }],
        name: 'Gallinita',
        price: '400.00 mxn',
        shortDescription: 'Piñata personalizada',
        longDescription: 'Piñata Gallinita, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
        id: '016',
        imageGroups: [{ images: [{ link: '/images/reno.jpeg' }] }],
        name: 'Rodolfo',
        price: '400.00 mxn',
        shortDescription: 'Piñata personalizada',
        longDescription: 'Piñata Rodolfo, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
        id: '017',
        imageGroups: [{ images: [{ link: '/images/snow-man.jpeg' }] }],
        name: 'Muñeco de nieve',
        price: '400.00 mxn',
        shortDescription: 'Piñata personalizada',
        longDescription: 'Piñata Muñeco de nieve, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
        id: '018',
        imageGroups: [{ images: [{ link: '/images/bautizo.jpeg' }] }],
        name: 'Mi Bautizo',
        price: '400.00 mxn',
        shortDescription: 'Piñata personalizada',
        longDescription: 'Piñata Bautizo, hecha con material de la más alta calidad. Ideal para bautizo.'
    },
    {
        id: '019',
        imageGroups: [{ images: [{ link: '/images/varios-1.jpeg' }] }],
        name: 'Varios',
        price: '400.00 mxn',
        shortDescription: 'Piñata personalizada',
        longDescription: 'Piñata Varios, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
        id: '020',
        imageGroups: [{ images: [{ link: '/images/varios-2.jpeg' }] }],
        name: 'Varios',
        price: '400.00 mxn',
        shortDescription: 'Piñata personalizada',
        longDescription: 'Piñata Varios, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    }
]

export { products, type IProduct }