import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AtlasConDataSource} from '../datasources';
import {Solicitantes, SolicitantesRelations} from '../models';

export class SolicitantesRepository extends DefaultCrudRepository<
  Solicitantes,
  typeof Solicitantes.prototype.idSolicitante,
  SolicitantesRelations
> {
  constructor(
    @inject('datasources.AtlasCon') dataSource: AtlasConDataSource,
  ) {
    super(Solicitantes, dataSource);
  }
}
