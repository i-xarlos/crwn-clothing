enum ProductTypes {
  FETCH_COLLECTION_START = 'PRODUCT/FETCH_COLLECTION_START',
  FETCH_COLLECTION_SUCCESS = 'PRODUCT/FETCH_COLLECTION_SUCCESS',
  FETCH_COLLECTION_FAILURE = 'PRODUCT/FETCH_COLLECTION_FAILURE',
}

export type ProductItem = {
  id: number
  imageUrl: string
  name: string
  price: number
}

export type Product = {
  title: string
  imageUrl: string
  items: ProductItem[]
}

export type ProductMap = {
  [key: string]: ProductItem[]
}

export default ProductTypes
