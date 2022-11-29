import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AtlasConDataSource} from '../datasources';
import {Rrhh, RrhhRelations} from '../models';

export class RrhhRepository extends DefaultCrudRepository<
  Rrhh,
  typeof Rrhh.prototype.idEmpleado,
  RrhhRelations
> {
  constructor(
    @inject('datasources.AtlasCon') dataSource: AtlasConDataSource,
  ) {
    super(Rrhh, dataSource);
  }
}
