import models from '../../models';
import types from '../types';
const { mutationWithClientMutationId } = require('graphql-relay');

import {
    GraphQLString,
    GraphQLNonNull,
} from 'graphql';

const createDemo = mutationWithClientMutationId({
    name: 'createDemo',
    inputFields: {
        name: { type: new GraphQLNonNull(GraphQLString) },
    },
    outputFields: {
        demo: {
            type: types.DemoType,
            resolve: (payload: any) => payload,
        }
    },
    mutateAndGetPayload: async (params: {name: string}) => {
        const { name } = params;
        const result = await models.Demo.create({
            name
        });
        return result
    }
});

export default createDemo;