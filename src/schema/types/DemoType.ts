import models, { nodeInterface } from '../../models'
import {
    GraphQLInt,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';

const { globalIdField } = require('graphql-relay');

const DemoType = new GraphQLObjectType({
    name: "DemoType",
    fields: {
        id: globalIdField(models.Demo.tableName),
        demo_no: {
            type: new GraphQLNonNull(GraphQLInt),
            resolve:(obj)=>obj.id
        },
        name: { type: GraphQLString }
    },
    interfaces: [nodeInterface]
});

export default DemoType;