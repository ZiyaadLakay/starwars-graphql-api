const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Person {
    name: String!
    height: String!
    mass: String!
    gender: String!
    homeworld: String!
  }
  type People {
    count: Int!
    next: String!
    previous: String
    results: [Person!]
  }

  type Homeworld {
    name: String!
  }
  #Queries
  type Query {
    getPeople: People
    getPage(page: Int!): People
    getHomeworld(url: String!): Homeworld
    searchPeople(person: String!): People
    nextPage: People
    prevPage: People
  }

  #Mutations
`;

module.exports = { typeDefs };
