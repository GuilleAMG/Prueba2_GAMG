import {Entity, model, property} from '@loopback/repository';

@model()
export class Puestos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idPuesto?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombrePuesto: string;

  @property({
    type: 'number',
    required: true,
  })
  salarioBase: number;

  @property({
    type: 'string',
    required: true,
  })
  tipoContrato: string;

  @property({
    type: 'string',
    required: true,
  })
  departamento: string;


  constructor(data?: Partial<Puestos>) {
    super(data);
  }
}

export interface PuestosRelations {
  // describe navigational properties here
}

export type PuestosWithRelations = Puestos & PuestosRelations;
