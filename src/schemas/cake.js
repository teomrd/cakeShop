import { Schema, arrayOf } from 'normalizr';
import uuid from 'uuid';

const cakeSchema = new Schema('cakes', { idAttribute: () => uuid.v4() });

export const Schemas = {
  CAKE: cakeSchema,
  CAKES: arrayOf(cakeSchema),
};
