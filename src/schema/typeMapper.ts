import models,{nodeTypeMapper} from '../models';
import types from './types'

const {
    Demo,
} = models;

export default () => {
    nodeTypeMapper.mapTypes({
        [Demo.tableName]: types.DemoType,
    })
}