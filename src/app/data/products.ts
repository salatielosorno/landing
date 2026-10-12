export const PRODUCT_TYPES = [
  { id: 'pinatas', title: 'Piñatas', tagline: 'Hechas a mano para ti' },
  { id: 'recuerdos', title: 'Recuerdos', tagline: 'Detalles para recordar tu fiesta' },
  { id: 'monos', title: 'Moños', tagline: 'El toque final perfecto' },
  { id: 'dulceros', title: 'Dulceros', tagline: 'Recuerdos que se disfrutan' },
] as const;
export type ProductType = (typeof PRODUCT_TYPES)[number]['id'];

export interface IProduct {
  id: string;
  name: string;
  type: ProductType;
  category: string;
  image: string;
  alt: string;
}

export const products: IProduct[] = [
  { type: 'pinatas', id: '001', name: 'Merlina', category: 'Personajes', image: '/images/merlina.jpeg', alt: 'Piñata Merlina' },
  { type: 'pinatas', id: '002', name: 'Shinobu', category: 'Personajes', image: '/images/shinobu.jpeg', alt: 'Piñata Shinobu' },
  { type: 'pinatas', id: '003', name: 'Pikachu', category: 'Personajes', image: '/images/pikachu.jpeg', alt: 'Piñata Pikachu' },
  { type: 'pinatas', id: '004', name: 'Birthday', category: 'Tradicionales', image: '/images/birthday.jpeg', alt: 'Piñata Birthday' },
  { type: 'pinatas', id: '005', name: 'Tío Cosa', category: 'Personajes', image: '/images/tio-cosa.jpeg', alt: 'Piñata Tío Cosa' },
  { type: 'pinatas', id: '006', name: 'My Little Pony', category: 'Personajes', image: '/images/my-little-pony.jpeg', alt: 'Piñata My Little Pony' },
  { type: 'pinatas', id: '009', name: 'Princesas Disney', category: 'Princesas', image: '/images/princesas-disney.jpeg', alt: 'Piñata Princesas Disney' },
  { type: 'pinatas', id: '010', name: 'Unicornio', category: 'Personajes', image: '/images/unicornio.jpeg', alt: 'Piñata Unicornio' },
  { type: 'pinatas', id: '011', name: 'Catrina', category: 'Tradicionales', image: '/images/catrina.jpeg', alt: 'Piñata Catrina' },
  { type: 'pinatas', id: '012', name: 'Pony', category: 'Personajes', image: '/images/pony.jpeg', alt: 'Piñata Pony' },
  { type: 'pinatas', id: '013', name: 'La Sirenita', category: 'Princesas', image: '/images/sirenita.jpeg', alt: 'Piñata La Sirenita' },
  { type: 'pinatas', id: '014', name: 'Mariachi', category: 'Tradicionales', image: '/images/mariachi.jpeg', alt: 'Piñata Mariachi' },
  { type: 'pinatas', id: '015', name: 'Gallinita', category: 'Tradicionales', image: '/images/gallinita.jpeg', alt: 'Piñata Gallinita' },
  { type: 'pinatas', id: '016', name: 'Rodolfo', category: 'Temporada', image: '/images/reno.jpeg', alt: 'Piñata Rodolfo' },
  { type: 'pinatas', id: '017', name: 'Muñeco de nieve', category: 'Temporada', image: '/images/snow-man.jpeg', alt: 'Piñata Muñeco de nieve' },
  { type: 'pinatas', id: '018', name: 'Mi Bautizo', category: 'Temporada', image: '/images/bautizo.jpeg', alt: 'Piñata Mi Bautizo' },
  { type: 'pinatas', id: '019', name: 'Varios', category: 'Varios', image: '/images/varios-1.jpeg', alt: 'Piñata personalizada' },
  { type: 'pinatas', id: '020', name: 'Varios', category: 'Varios', image: '/images/varios-2.jpeg', alt: 'Piñata personalizada' },
];
