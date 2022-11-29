import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AtlasConDataSource} from '../datasources';
import {Puestos, PuestosRelations} from '../models';

export class PuestosRepository extends DefaultCrudRepository<
  Puestos,
  typeof Puestos.prototype.idPuesto,
  PuestosRelations
> {
  constructor(
    @inject('datasources.AtlasCon') dataSource: AtlasConDataSource,
  ) {
    super(Puestos, dataSource);
  }
}
