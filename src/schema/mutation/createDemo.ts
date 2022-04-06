import models from '../../models';
import types from '../types';
import { mutationWithClientMutationId } from 'graphql-relay';

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
        project: {
            type: types.DemoType,
            resolve: (payload) => payload,
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