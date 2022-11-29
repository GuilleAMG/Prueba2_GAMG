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
import {Solicitantes} from '../models';
import {SolicitantesRepository} from '../repositories';

export class SolicitantesController {
  constructor(
    @repository(SolicitantesRepository)
    public solicitantesRepository : SolicitantesRepository,
  ) {}

  @post('/solicitantes')
  @response(200, {
    description: 'Solicitantes model instance',
    content: {'application/json': {schema: getModelSchemaRef(Solicitantes)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitantes, {
            title: 'NewSolicitantes',
            exclude: ['idSolicitante'],
          }),
        },
      },
    })
    solicitantes: Omit<Solicitantes, 'id'>,
  ): Promise<Solicitantes> {
    return this.solicitantesRepository.create(solicitantes);
  }

  @get('/solicitantes/count')
  @response(200, {
    description: 'Solicitantes model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Solicitantes) where?: Where<Solicitantes>,
  ): Promise<Count> {
    return this.solicitantesRepository.count(where);
  }

  @get('/solicitantes')
  @response(200, {
    description: 'Array of Solicitantes model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Solicitantes, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Solicitantes) filter?: Filter<Solicitantes>,
  ): Promise<Solicitantes[]> {
    return this.solicitantesRepository.find(filter);
  }

  @patch('/solicitantes')
  @response(200, {
    description: 'Solicitantes PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitantes, {partial: true}),
        },
      },
    })
    solicitantes: Solicitantes,
    @param.where(Solicitantes) where?: Where<Solicitantes>,
  ): Promise<Count> {
    return this.solicitantesRepository.updateAll(solicitantes, where);
  }

  @get('/solicitantes/{id}')
  @response(200, {
    description: 'Solicitantes model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Solicitantes, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Solicitantes, {exclude: 'where'}) filter?: FilterExcludingWhere<Solicitantes>
  ): Promise<Solicitantes> {
    return this.solicitantesRepository.findById(id, filter);
  }

  @patch('/solicitantes/{id}')
  @response(204, {
    description: 'Solicitantes PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitantes, {partial: true}),
        },
      },
    })
    solicitantes: Solicitantes,
  ): Promise<void> {
    await this.solicitantesRepository.updateById(id, solicitantes);
  }

  @put('/solicitantes/{id}')
  @response(204, {
    description: 'Solicitantes PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() solicitantes: Solicitantes,
  ): Promise<void> {
    await this.solicitantesRepository.replaceById(id, solicitantes);
  }

  @del('/solicitantes/{id}')
  @response(204, {
    description: 'Solicitantes DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.solicitantesRepository.deleteById(id);
  }
}
