const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
    getNumber:Int
    isOpen:Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "Praveen";
    },
    getNumber:()=>{
        return 20
    },
    isOpen:()=>{
        return true
    }
  },
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server is listening at ${url} `);
});
