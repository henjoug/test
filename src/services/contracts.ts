import type { InstanceConfig } from '../domain/types.js';

export type CollectionName = 'INSTANCE' | 'USERS' | 'ORGANISATIONS' | 'AFFAIRES' | 'ACTIONS' | 'DECISIONS' | 'DOCUMENTS' | 'CONTACTS' | 'EVENEMENTS' | 'CONFIG' | 'AUDIT_LOG' | 'SCHEMA_VERSION' | 'MIGRATIONS' | 'ID_COUNTERS';
export type GenericRecord = Record<string, unknown>;
export interface DataService { list<T extends GenericRecord>(collection: CollectionName): Promise<T[]>; get<T extends GenericRecord>(collection: CollectionName,idField:string,id:string):Promise<T|null>; create<T extends GenericRecord>(collection:CollectionName,record:T):Promise<T>; update<T extends GenericRecord>(collection:CollectionName,idField:string,id:string,patch:Partial<T>):Promise<T>; search<T extends GenericRecord>(collection:CollectionName,predicate:(item:T)=>boolean):Promise<T[]>; archive(collection:CollectionName,idField:string,id:string):Promise<void>; }
export interface SequenceService { next(prefix:string):Promise<string>; }
export interface StoredFile { providerFileId:string; url:string; name:string; mimeType:string; location?:string; }
export interface StorageService { list(folderId?:string):Promise<StoredFile[]>; deposit(file:File,folderId?:string):Promise<StoredFile>; find(providerFileId:string):Promise<StoredFile|null>; open(providerFileId:string):Promise<string>; classify(providerFileId:string,folderId:string):Promise<void>; }
export interface IdentitySession { accountId:string; email:string; name:string; accessToken?:string; }
export interface IdentityService { signIn():Promise<IdentitySession>; current():Promise<IdentitySession|null>; signOut():Promise<void>; }
export interface ConfigService { get():Promise<InstanceConfig>; save(config:InstanceConfig):Promise<void>; }
export interface AuditService { log(what:string,entityType?:string,entityId?:string,why?:string):Promise<void>; }
export interface MailService { isAvailable():boolean; } export interface CalendarService { isAvailable():boolean; } export interface NotificationService { isAvailable():boolean; } export interface SearchService { isAvailable():boolean; }
