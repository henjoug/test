import type { InstanceConfig } from '../domain/types.js';
import type { DataService, SequenceService } from './contracts.js';
import { LocalStorageDataConnector } from '../connectors/local/LocalStorageDataConnector.js';
import { GoogleSheetsConnector } from '../connectors/google/GoogleSheetsConnector.js';
import { TableSequenceService } from '../core/ids.js';
export type ProviderMode='local'|'google'; export interface ProviderBundle{data:DataService;sequence:SequenceService;mode:ProviderMode}
export class ProviderFactory { static create(config:InstanceConfig,tokenRef:{current?:string}):ProviderBundle{let data:DataService;let mode:ProviderMode;if(config.DATA_PROVIDER==='google'){if(!config.DATA_SOURCE_ID)throw new Error('DATA_SOURCE_ID manquant pour une instance Google');data=new GoogleSheetsConnector(config.DATA_SOURCE_ID,()=>tokenRef.current);mode='google';}else if(config.DATA_PROVIDER==='local'){data=new LocalStorageDataConnector(config.INSTANCE_ID);mode='local';}else throw new Error(`DATA_PROVIDER non supporté dans CA OS V0.1: ${config.DATA_PROVIDER}`);return{data,sequence:new TableSequenceService(data,config.INSTANCE_ID),mode};} }
