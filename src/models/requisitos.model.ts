import {Entity, model, property} from '@loopback/repository';

@model()
export class Requisitos extends Entity {
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
  bachillerato: string;

  @property({
    type: 'string',
    required: true,
  })
  antecedentesPenales: string;

  @property({
    type: 'string',
    required: true,
  })
  antecedentesPoliciales: string;

  @property({
    type: 'string',
    default: "Si",
  })
  experiencia?: string;

  @property({
    type: 'number',
    required: true,
  })
  dni: number;

  @property({
    type: 'string',
    required: true,
  })
  hojaVida: string;


  constructor(data?: Partial<Requisitos>) {
    super(data);
  }
}

export interface RequisitosRelations {
  // describe navigational properties here
}

export type RequisitosWithRelations = Requisitos & RequisitosRelations;
