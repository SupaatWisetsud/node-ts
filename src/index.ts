import { ApolloServer, AuthenticationError, ExpressContext } from 'apollo-server-express';
import express, { Application, Response } from 'express';
import { getProjects } from './handler/dataset';
import schema from './schema';
// import models from './models';

const app: Application = express();

app.disable("x-powered-by");

app.get('/dataset/projects', getProjects);
app.get('/schema', function (_, res: Response) {
    const file = __dirname + '/../schema.graphql';
    res.download(file);
});

const apollo: ApolloServer = new ApolloServer({
    schema: schema,
    context: async (context: ExpressContext) => {
        const { req } = context;
        const user_id = req.header('X-User');

        const user = true;

        if (!user) throw new AuthenticationError('you must be logged in');

        return {
            user_id: user_id
        }
    },
    introspection: true,
})

apollo.applyMiddleware({ app, path: '/graphql' });
app.listen(process.env.APP_PORT, () => {
    console.log('RCM Server start! type http://localhost:' + process.env.APP_PORT + '/graphql to run queries!');
});