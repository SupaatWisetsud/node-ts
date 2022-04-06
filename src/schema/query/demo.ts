import models from '../../models';
import types from '../types';
import { resolver } from 'graphql-sequelize';
import {
    GraphQLList
} from 'graphql';

const {
    Demo,
} = models;
const {
    DemoType
} = types;


export default {
    demo_list: {
        type: new GraphQLList(DemoType),
        resolver: resolver(Demo)
    }
};  