import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AtlasConDataSource} from '../datasources';
import {Requisitos, RequisitosRelations} from '../models';

export class RequisitosRepository extends DefaultCrudRepository<
  Requisitos,
  typeof Requisitos.prototype.idSolicitante,
  RequisitosRelations
> {
  constructor(
    @inject('datasources.AtlasCon') dataSource: AtlasConDataSource,
  ) {
    super(Requisitos, dataSource);
  }
}
