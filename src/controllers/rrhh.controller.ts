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
import {Rrhh} from '../models';
import {RrhhRepository} from '../repositories';

export class RrhhController {
  constructor(
    @repository(RrhhRepository)
    public rrhhRepository : RrhhRepository,
  ) {}

  @post('/rrhh')
  @response(200, {
    description: 'Rrhh model instance',
    content: {'application/json': {schema: getModelSchemaRef(Rrhh)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rrhh, {
            title: 'NewRrhh',
            exclude: ['idEmpleado'],
          }),
        },
      },
    })
    rrhh: Omit<Rrhh, 'id'>,
  ): Promise<Rrhh> {
    return this.rrhhRepository.create(rrhh);
  }

  @get('/rrhh/count')
  @response(200, {
    description: 'Rrhh model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Rrhh) where?: Where<Rrhh>,
  ): Promise<Count> {
    return this.rrhhRepository.count(where);
  }

  @get('/rrhh')
  @response(200, {
    description: 'Array of Rrhh model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Rrhh, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Rrhh) filter?: Filter<Rrhh>,
  ): Promise<Rrhh[]> {
    return this.rrhhRepository.find(filter);
  }

  @patch('/rrhh')
  @response(200, {
    description: 'Rrhh PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rrhh, {partial: true}),
        },
      },
    })
    rrhh: Rrhh,
    @param.where(Rrhh) where?: Where<Rrhh>,
  ): Promise<Count> {
    return this.rrhhRepository.updateAll(rrhh, where);
  }

  @get('/rrhh/{id}')
  @response(200, {
    description: 'Rrhh model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Rrhh, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Rrhh, {exclude: 'where'}) filter?: FilterExcludingWhere<Rrhh>
  ): Promise<Rrhh> {
    return this.rrhhRepository.findById(id, filter);
  }

  @patch('/rrhh/{id}')
  @response(204, {
    description: 'Rrhh PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rrhh, {partial: true}),
        },
      },
    })
    rrhh: Rrhh,
  ): Promise<void> {
    await this.rrhhRepository.updateById(id, rrhh);
  }

  @put('/rrhh/{id}')
  @response(204, {
    description: 'Rrhh PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() rrhh: Rrhh,
  ): Promise<void> {
    await this.rrhhRepository.replaceById(id, rrhh);
  }

  @del('/rrhh/{id}')
  @response(204, {
    description: 'Rrhh DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.rrhhRepository.deleteById(id);
  }
}
