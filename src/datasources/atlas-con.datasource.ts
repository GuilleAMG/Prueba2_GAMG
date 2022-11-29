import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'AtlasCon',
  connector: 'mongodb',
  url: 'mongodb+srv://Grupo4DEV:jdqueMvc9ENuz8hD@cluster0.ffh2x84.mongodb.net/spbauchers',
  host: 'cluster0.ffh2x84.mongodb.net',
  port: 27017,
  user: 'Grupo4DEV',
  password: 'jdqueMvc9ENuz8hD',
  database: 'spbauchers',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class AtlasConDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'AtlasCon';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.AtlasCon', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
