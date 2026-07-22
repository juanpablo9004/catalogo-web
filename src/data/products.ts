import type { Product } from '../types/product'

const camisetas = ['XS', 'SM', 'LXL', 'XXL']
const buzos = ['SM', 'LXL']
const productImagePath = (folder: string, images: number[]) => images.map((image) => `/products/${folder}/${image}.jpeg`)

export const products: Product[] = [
  { id: 'camiseta-estrella', name: 'Estrella', category: 'Camisetas', price: 0, images: productImagePath('1-camiseta-estrella', [1]), description: 'Camiseta personalizable con estampado Estrella.', sizes: camisetas, featured: true },
  { id: 'camiseta-frutas', name: 'Frutas', category: 'Camisetas', price: 0, images: productImagePath('2-camiseta-frutas', [1]), description: 'Camiseta personalizable con estampado Frutas.', sizes: camisetas, featured: true },
  { id: 'camiseta-perrito', name: 'Perrito', category: 'Camisetas', price: 0, images: productImagePath('3-camiseta-perrito', [1]), description: 'Camiseta personalizable con estampado Perrito.', sizes: camisetas, featured: true },
  { id: 'camiseta-bolsillo', name: 'Bolsillo', category: 'Camisetas', price: 0, images: productImagePath('4-prenda-camiseta-bolsillo', [1, 2, 3, 4]), description: 'Camiseta personalizable con detalle de bolsillo.', sizes: camisetas, featured: true },
  { id: 'camiseta-instinto', name: 'Instinto', category: 'Camisetas', price: 0, images: productImagePath('5-camiseta-instinto', [1, 2, 3]), description: 'Camiseta personalizable con estampado Instinto.', sizes: camisetas, featured: true },
  { id: 'camiseta-leopardo', name: 'Leopardo', category: 'Camisetas', price: 0, images: productImagePath('6-camiseta-leopardo', [1, 2, 3]), description: 'Camiseta personalizable con estampado Leopardo.', sizes: camisetas, featured: true },
  { id: 'camiseta-lluvia-corazones', name: 'Lluvia corazones', category: 'Camisetas', price: 0, images: productImagePath('7-camiseta-lluvia-corazones', [1, 2]), description: 'Camiseta personalizable con estampado Lluvia corazones.', sizes: camisetas, featured: true },
  { id: 'buzo-latido-creativo', name: 'Latido creativo', category: 'Buzos', price: 0, images: productImagePath('8-buzo-latido-creativo', [1, 2, 3, 4]), description: 'Buzo personalizable con estampado Latido creativo.', sizes: buzos, featured: true },
  { id: 'camiseta-pequenos-detalles', name: 'Pequeños detalles', category: 'Camisetas', price: 0, images: productImagePath('9-camiseta-pequeños-detalles', [1, 2, 3, 4, 5, 6]), description: 'Camiseta personalizable con estampado Pequeños detalles.', sizes: camisetas, featured: true },
  { id: 'camiseta-is-love', name: 'Is love', category: 'Camisetas', price: 0, images: productImagePath('10-camiseta-is-love', [1, 2, 3]), description: 'Camiseta personalizable con estampado Is love.', sizes: camisetas, featured: true },
  { id: 'camiseta-eso-te-hace-feliz', name: 'Eso te hace feliz', category: 'Camisetas', price: 0, images: productImagePath('11-camiseta-eso-te-hace-feliz', [1, 2, 3, 4]), description: 'Camiseta personalizable con estampado Eso te hace feliz.', sizes: camisetas, featured: true },
  { id: 'camiseta-dulce-encanto', name: 'Dulce encanto', category: 'Camisetas', price: 0, images: productImagePath('12-camiseta-dulce-encanto', [1, 2, 3]), description: 'Camiseta personalizable con estampado Dulce encanto.', sizes: camisetas, featured: true },
  { id: 'camiseta-esencia-luelo', name: 'Esencia Luelo', category: 'Camisetas', price: 0, images: productImagePath('13-camiseta-esencia-luelo', [1, 2, 3, 4, 5, 6, 7]), description: 'Camiseta personalizable con estampado Esencia Luelo.', sizes: camisetas, featured: true },
  { id: 'camiseta-amor-luelo', name: 'Amor Luelo', category: 'Camisetas', price: 0, images: productImagePath('14-camiseta-amor-luelo', [1, 2, 3, 4, 5, 6, 7]), description: 'Camiseta personalizable con estampado Amor Luelo.', sizes: camisetas, featured: true },
  { id: 'camiseta-made-with-love', name: 'Made with love', category: 'Camisetas', price: 0, images: productImagePath('15-camiseta-made-with-love', [1, 2, 3, 4, 5]), description: 'Camiseta personalizable con estampado Made with love.', sizes: camisetas, featured: true },
]
