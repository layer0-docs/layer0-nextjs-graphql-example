import { gql } from '@apollo/client'

export const CATEGORIES = gql`
  query Categories {
    categories {
      category
      categoryName
      href
    }
  }
`

export const PRODUCTS_BY_CATEGORY = gql`
  query ProductsOfCategory($name: String!) {
    productsOfCategory(name: $name) {
      description
      href
      name
      picture
      price
    }
  }
`

export const PRODUCT = gql`
  query Product($productId: String!) {
    product(id: $productId) {
      description
      href
      name
      picture
      price
      rating
      reviews
    }
  }
`
