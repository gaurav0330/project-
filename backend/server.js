const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const authMiddleware = require("./middleware/authmiddleware");

dotenv.config();

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const authContext = await authMiddleware({ req });
    console.log("Context in ApolloServer:", authContext);
    return authContext;
  },
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app, cors: { origin: FRONTEND_URL, credentials: true } });

  await mongoose.connect(process.env.MONGO_URI);
  console.log("✅ MongoDB Connected Successfully");

  app.listen(5000, () => {
    console.log(`🚀 Server running on http://localhost:5000/graphql`);
    console.log(`🌍 CORS enabled for ${FRONTEND_URL}`);
  });
}

startServer();
