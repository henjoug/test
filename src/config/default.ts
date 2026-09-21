import type {InstanceConfig} from '../domain/types';
export const demoConfig=(id='INSTANCE-DEMO'):InstanceConfig=>({INSTANCE_ID:id,INSTANCE_NAME:id==='INSTANCE-DEMO'?'DÉMO LOCALE':id,INSTANCE_SCHEMA_VERSION:1,CA_OS_VERSION:'0.1.0',COMPANY_ID:'ORG-000001',STORAGE_PROVIDER:'local',DATA_PROVIDER:'local',MAIL_PROVIDER:'none',CALENDAR_PROVIDER:'none',DOCUMENT_PROVIDER:'local',FEATURES:{AFFAIRES:true,ACTIONS:true,DECISIONS:true,DOCUMENTS:true,CONTACTS:true,EVENEMENTS:true}});
export const configKey='caos:active-config';
