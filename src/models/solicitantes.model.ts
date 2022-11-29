import {Entity, model, property} from '@loopback/repository';

@model()
export class Solicitantes extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idSolicitante?: string;

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
  puestoSolicitado: string;


  constructor(data?: Partial<Solicitantes>) {
    super(data);
  }
}

export interface SolicitantesRelations {
  // describe navigational properties here
}

export type SolicitantesWithRelations = Solicitantes & SolicitantesRelations;
