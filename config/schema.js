export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        description: String!
        image: [String!]!
        price: Float!
        stock: Int!
    }

    type Query {
        games: [Game]
    }
`