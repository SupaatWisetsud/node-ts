import query from  './query'
import mutation from  './mutation'
import typeMapper from './typeMapper';
import {
    GraphQLSchema,
} from 'graphql';

typeMapper();

const schema = new GraphQLSchema({
  query: query,
  mutation:mutation,
});

export default schema;