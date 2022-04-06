import { nodeInterface } from '../../models'

import {
    GraphQLInt,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';

const DemoType = new GraphQLObjectType({
    name: "DemoType",
    fields: {
        id: {
           type: new GraphQLNonNull(GraphQLInt) 
        },
        name: {type: GraphQLString}
    },
    interfaces: [nodeInterface]
});

export default DemoType;