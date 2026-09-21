export type Collection='AFFAIRES'|'ACTIONS'|'DECISIONS'|'DOCUMENTS'|'CONTACTS'|'EVENEMENTS'|'AUDIT_LOG'|'CONFIG';
export interface DataService{list<T>(c:Collection):Promise<T[]>;create<T>(c:Collection,r:T):Promise<T>;update<T>(c:Collection,idField:string,id:string,patch:Partial<T>):Promise<T>}
export interface StorageService{list(folderId?:string):Promise<unknown[]>;open(providerFileId:string):Promise<string>}
export interface IdentityService{signIn():Promise<unknown>;signOut():Promise<void>}
export interface ConfigService{get():Promise<unknown>;save(v:unknown):Promise<void>}
export interface MailService{isAvailable():boolean} export interface CalendarService{isAvailable():boolean} export interface NotificationService{isAvailable():boolean} export interface SearchService{isAvailable():boolean}
