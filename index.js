const {ApolloServer, gql}=require("apollo-server")

//Schema Definitions
const typeDefs=gql`
type Post{
    id:String
    text:String
}
type Query{
    posts:[Post]
}
`;

const resolvers={
    Query:{
        posts:()=>posts,
    }
};

const server=new ApolloServer({
    resolvers,typeDefs
})

server.listen(2000,()=>{
    console.log("Server has been started on port 2000")
})