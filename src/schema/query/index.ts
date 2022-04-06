import { nodeField } from '../../models';
import { GraphQLObjectType } from 'graphql';

import demo from './demo';

export default new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...demo,
    node: nodeField
  }
})