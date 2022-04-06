import models,{nodeField} from '../../models';
import {GraphQLObjectType} from 'graphql';

import masterdata from './masterdata';

export default new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      ...masterdata,
      node: nodeField
    }
})