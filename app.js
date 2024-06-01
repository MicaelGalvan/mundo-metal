import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';
import { errorHandler, formatGraphQLError } from './app/middlewares/errorHandler.js';
import typeDefs from './app/graphql/schemas/index.js';
import resolvers from './app/graphql/resolvers/index.js';
import routes from './app/routes/index.js';
import './app/config/dotenv.js';

const app = express();

app.use(cors())
app.use(express.json())


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api', routes);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (err) => formatGraphQLError(err),
});
await server.start();
server.applyMiddleware({ app, path: '/graphql' });

app.use(errorHandler);

export default app;
