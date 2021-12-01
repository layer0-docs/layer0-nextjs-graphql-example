import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Category {
    category: String
    categoryName: String
    href: String
    items: [Product]
  }

  type Product {
    description: String
    href: String
    name: String
    picture: String
    price: String
    rating: String
    reviews: Int
  }

  type Query {
    categories: [Category]!
  }

  type Query {
    productsOfCategory(name: String!): [Product]
  }
`
