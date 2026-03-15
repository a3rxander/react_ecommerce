export interface Product { 
  id: string
  name: string
  description: string
  price: number
  stock: number
  categoryId: string
  categoryName: string
  categoryDescription: string
  sellerId: string
  sellerName: string
  createdAt: string
  updatedAt: string
  image: string
}

export const products: Product[] = [  
  // Books
  {
    id: crypto.randomUUID(),
    name: "Harry Potter y la Piedra Filosofal",
    description: "Libro clásico de fantasía",
    price: 12.99,
    stock: 10,
    categoryId: "c4a760a4-5b63-4d3b-9c1a-2f8f3e6f7e6b",
    categoryName: "Books",
    categoryDescription: "Literature and educational materials",
    sellerId: "3fa0c84c-1729-40a4-9423-a566bdf6060c",
    sellerName: "Seller Person",
    createdAt: "2026-03-15T20:00:00",
    updatedAt: "2026-03-15T20:00:00",
    image: "https://picsum.photos/300/300?1"
  },
  {
    id: crypto.randomUUID(),
    name: "Clean Code",
    description: "Libro sobre buenas prácticas de programación",
    price: 29.99,
    stock: 8,
    categoryId: "c4a760a4-5b63-4d3b-9c1a-2f8f3e6f7e6b",
    categoryName: "Books",
    categoryDescription: "Literature and educational materials",
    sellerId: "3fa0c84c-1729-40a4-9423-a566bdf6060c",
    sellerName: "Seller Person",
    createdAt: "2026-03-15T20:00:00",
    updatedAt: "2026-03-15T20:00:00",
    image: "https://picsum.photos/300/300?2"
  },

  // Clothing
  {
    id: crypto.randomUUID(),
    name: "Camiseta básica negra",
    description: "Camiseta cómoda de algodón",
    price: 14.99,
    stock: 30,
    categoryId: "f7c3b1d8-3e2a-4f5b-9c6d-1e2f3a4b5c6d",
    categoryName: "Clothing",
    categoryDescription: "Apparel and fashion items",
    sellerId: "3fa0c84c-1729-40a4-9423-a566bdf6060c",
    sellerName: "Seller Person",
    createdAt: "2026-03-15T20:00:00",
    updatedAt: "2026-03-15T20:00:00",
    image: "https://picsum.photos/300/300?3"
  },
  {
    id: crypto.randomUUID(),
    name: "Jeans azul clásico",
    description: "Pantalón de mezclilla resistente",
    price: 39.99,
    stock: 15,
    categoryId: "f7c3b1d8-3e2a-4f5b-9c6d-1e2f3a4b5c6d",
    categoryName: "Clothing",
    categoryDescription: "Apparel and fashion items",
    sellerId: "3fa0c84c-1729-40a4-9423-a566bdf6060c",
    sellerName: "Seller Person",
    createdAt: "2026-03-15T20:00:00",
    updatedAt: "2026-03-15T20:00:00",
    image: "https://picsum.photos/300/300?4"
  },

  // Cuidado Personal
  {
    id: crypto.randomUUID(),
    name: "Shampoo Natural",
    description: "Shampoo sin sulfatos",
    price: 8.99,
    stock: 20,
    categoryId: "c288ae3b-2587-4a21-99c4-a8aca210caab",
    categoryName: "Cuidado Personal",
    categoryDescription: "string",
    sellerId: "3fa0c84c-1729-40a4-9423-a566bdf6060c",
    sellerName: "Seller Person",
    createdAt: "2026-03-15T20:00:00",
    updatedAt: "2026-03-15T20:00:00",
    image: "https://picsum.photos/300/300?5"
  },
  {
    id: crypto.randomUUID(),
    name: "Crema hidratante",
    description: "Crema para cuidado de la piel",
    price: 11.99,
    stock: 12,
    categoryId: "c288ae3b-2587-4a21-99c4-a8aca210caab",
    categoryName: "Cuidado Personal",
    categoryDescription: "string",
    sellerId: "3fa0c84c-1729-40a4-9423-a566bdf6060c",
    sellerName: "Seller Person",
    createdAt: "2026-03-15T20:00:00",
    updatedAt: "2026-03-15T20:00:00",
    image: "https://picsum.photos/300/300?6"
  },

  // Educación
  {
    id: crypto.randomUUID(),
    name: "Curso de Matemáticas",
    description: "Material educativo para aprender álgebra",
    price: 19.99,
    stock: 50,
    categoryId: "ca7c1c77-829f-4974-9940-96ecfee3b6f2",
    categoryName: "Educación",
    categoryDescription: "string",
    sellerId: "3fa0c84c-1729-40a4-9423-a566bdf6060c",
    sellerName: "Seller Person",
    createdAt: "2026-03-15T20:00:00",
    updatedAt: "2026-03-15T20:00:00",
    image: "https://picsum.photos/300/300?7"
  },
  {
    id: crypto.randomUUID(),
    name: "Guía de Física",
    description: "Libro educativo de física básica",
    price: 17.99,
    stock: 25,
    categoryId: "ca7c1c77-829f-4974-9940-96ecfee3b6f2",
    categoryName: "Educación",
    categoryDescription: "string",
    sellerId: "3fa0c84c-1729-40a4-9423-a566bdf6060c",
    sellerName: "Seller Person",
    createdAt: "2026-03-15T20:00:00",
    updatedAt: "2026-03-15T20:00:00",
    image: "https://picsum.photos/300/300?8"
  },

  // Electrónica
  {
    id: crypto.randomUUID(),
    name: "Audífonos Bluetooth",
    description: "Audífonos inalámbricos con cancelación de ruido",
    price: 49.99,
    stock: 18,
    categoryId: "a80f1b8f-ab46-4281-bc6b-3aa0c81aef08",
    categoryName: "Electrónica",
    categoryDescription: "string",
    sellerId: "3fa0c84c-1729-40a4-9423-a566bdf6060c",
    sellerName: "Seller Person",
    createdAt: "2026-03-15T20:00:00",
    updatedAt: "2026-03-15T20:00:00",
    image: "https://picsum.photos/300/300?9"
  },
  {
    id: crypto.randomUUID(),
    name: "Mouse Gamer",
    description: "Mouse de alta precisión para gaming",
    price: 35.99,
    stock: 14,
    categoryId: "a80f1b8f-ab46-4281-bc6b-3aa0c81aef08",
    categoryName: "Electrónica",
    categoryDescription: "string",
    sellerId: "3fa0c84c-1729-40a4-9423-a566bdf6060c",
    sellerName: "Seller Person",
    createdAt: "2026-03-15T20:00:00",
    updatedAt: "2026-03-15T20:00:00",
    image: "https://picsum.photos/300/300?10"
  }
 
]