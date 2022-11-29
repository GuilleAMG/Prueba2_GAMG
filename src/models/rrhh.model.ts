import {Entity, model, property} from '@loopback/repository';

@model()
export class Rrhh extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idEmpleado?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  dni: number;

  @property({
    type: 'string',
    required: true,
  })
  fechaN: string;

  @property({
    type: 'string',
    required: true,
  })
  puesto: string;


  constructor(data?: Partial<Rrhh>) {
    super(data);
  }
}

export interface RrhhRelations {
  // describe navigational properties here
}

export type RrhhWithRelations = Rrhh & RrhhRelations;
