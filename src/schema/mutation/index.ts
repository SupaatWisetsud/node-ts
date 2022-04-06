import {GraphQLObjectType} from 'graphql';

import createDemo from './createDemo';


let mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        createDemo
    })
});

export default mutationType;