const {ApolloServer, gql}=require("apollo-server");
const { printIntrospectionSchema } = require("graphql");

const posts=[
    {
        id:'1',text:'post1'
    },
    {
        id:'2', text:'post2'
    }
]
//Schema Definitions
const typeDefs=gql`
type Post{
    id:String
    text:String
}
type Query{
    posts:[Post]
}
type Mutation{
    createPost(text:String!):Post
}
`;

const resolvers={
    Query:{
        posts:()=>posts,
    },
    Mutation:{
        createPost:(_,{text})=>{
            posts.push({id:posts.length+1,text});
            return [...posts].pop()
        },
    }
};

const server=new ApolloServer({
    resolvers,typeDefs
})

server.listen(2000,()=>{
    console.log("Server has been started on port 2000")
})