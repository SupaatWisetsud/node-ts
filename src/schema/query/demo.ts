import models from '../../models';
import types from '../types';

const {resolver} = require('graphql-sequelize');

import {
    GraphQLList
} from 'graphql';

const {
    Demo,
} = models;
const {
    DemoType
} = types;
console.log(models)
export default {
    demo: {
        type: new GraphQLList(DemoType),
        resolve: resolver(Demo)
    }
};  