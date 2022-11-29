import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Puestos} from '../models';
import {PuestosRepository} from '../repositories';

export class PuestosController {
  constructor(
    @repository(PuestosRepository)
    public puestosRepository : PuestosRepository,
  ) {}

  @post('/puestos')
  @response(200, {
    description: 'Puestos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Puestos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Puestos, {
            title: 'NewPuestos',
            exclude: ['idPuesto'],
          }),
        },
      },
    })
    puestos: Omit<Puestos, 'id'>,
  ): Promise<Puestos> {
    return this.puestosRepository.create(puestos);
  }

  @get('/puestos/count')
  @response(200, {
    description: 'Puestos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Puestos) where?: Where<Puestos>,
  ): Promise<Count> {
    return this.puestosRepository.count(where);
  }

  @get('/puestos')
  @response(200, {
    description: 'Array of Puestos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Puestos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Puestos) filter?: Filter<Puestos>,
  ): Promise<Puestos[]> {
    return this.puestosRepository.find(filter);
  }

  @patch('/puestos')
  @response(200, {
    description: 'Puestos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Puestos, {partial: true}),
        },
      },
    })
    puestos: Puestos,
    @param.where(Puestos) where?: Where<Puestos>,
  ): Promise<Count> {
    return this.puestosRepository.updateAll(puestos, where);
  }

  @get('/puestos/{id}')
  @response(200, {
    description: 'Puestos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Puestos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Puestos, {exclude: 'where'}) filter?: FilterExcludingWhere<Puestos>
  ): Promise<Puestos> {
    return this.puestosRepository.findById(id, filter);
  }

  @patch('/puestos/{id}')
  @response(204, {
    description: 'Puestos PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Puestos, {partial: true}),
        },
      },
    })
    puestos: Puestos,
  ): Promise<void> {
    await this.puestosRepository.updateById(id, puestos);
  }

  @put('/puestos/{id}')
  @response(204, {
    description: 'Puestos PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() puestos: Puestos,
  ): Promise<void> {
    await this.puestosRepository.replaceById(id, puestos);
  }

  @del('/puestos/{id}')
  @response(204, {
    description: 'Puestos DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.puestosRepository.deleteById(id);
  }
}
