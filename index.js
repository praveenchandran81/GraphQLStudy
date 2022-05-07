const { ApolloServer, gql } = require("apollo-server");

const products=[
    {
        id:1,
        name:'Product1',
        description:'Product 1 description',
        price:44.4,
        isSale:true,
        categoryId:'cat1'
    },
    {
        id:2,
        name:'Product2',
        description:'Product 2 description',
        price:22.4,
        isSale:true,
        categoryId:'cat1'
    },
    {
        id:3,
        name:'Product3',
        description:'Product 3 description',
        price:450.4,
        isSale:true,
        categoryId:'cat2'
    },
    {
        id:4,
        name:'Product4',
        description:'Product 4 description',
        price:4533.4,
        isSale:true,
        categoryId:'cat2'
    },
    {
        id:5,
        name:'Product5',
        description:'Product 5 description',
        price:4335.4,
        isSale:false,
        categoryId:'cat3'
    }
];

const categories=[
    {
        id:"cat1",
        name:"category1"
    },
    {
        id:"cat2",
        name:"category2"
    },
    {
        id:"cat3",
        name:"category3"
    },
]

const typeDefs = gql`
  type Query {
    hello: String
    products:[Product!]!
    product(id:ID!):Product
  }
  type Product {
        id: Int
        name:String
        description:String
        price:Float
        isSale:Boolean
  }
  type Category{
      id:String
      name:String
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "Praveen Chandran";
    },
    products:(parent,args,context)=>{
        
        return products;
    },
    product:(parent,args,context)=>{
        const productId=parseInt(args.id);
        console.log(args.id);
        const product=products.find(product=>product.id===productId);
        return product;
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
