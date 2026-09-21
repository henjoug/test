export type Reliability = 'CONFIRMÉ' | 'À VÉRIFIER' | 'HYPOTHÈSE' | 'RECOMMANDATION' | 'ARBITRAGE NÉCESSAIRE';
export type Severity = 'INFO' | 'WARNING' | 'ERROR' | 'BLOCK';
export type RecordStatus = 'ACTIF' | 'ARCHIVÉ';

export interface InstanceConfig {
  INSTANCE_ID: string;
  INSTANCE_NAME: string;
  INSTANCE_SCHEMA_VERSION: number;
  CA_OS_VERSION: string;
  COMPANY_ID: string;
  STORAGE_PROVIDER: 'google' | 'microsoft' | 'local';
  DATA_PROVIDER: 'google' | 'microsoft' | 'local';
  MAIL_PROVIDER: 'google' | 'microsoft' | 'none';
  CALENDAR_PROVIDER: 'google' | 'microsoft' | 'none';
  DOCUMENT_PROVIDER: 'google' | 'microsoft' | 'local';
  ROOT_FOLDER_ID?: string;
  DATA_SOURCE_ID?: string;
  DOCUMENTS_FOLDER_ID?: string;
  PHOTOS_FOLDER_ID?: string;
  PLANS_FOLDER_ID?: string;
  GENERATED_FOLDER_ID?: string;
  GOOGLE_OAUTH_CLIENT_ID?: string;
  FEATURES: Record<string, boolean>;
}

export interface User { USER_ID:string; INSTANCE_ID:string; EMAIL:string; DISPLAY_NAME:string; ROLE:'ADMIN'|'USER'; STATUS:'ACTIF'|'INACTIF'; CREATED_AT?:string; UPDATED_AT?:string; }
export interface Organisation { ID_ORGANISATION:string; INSTANCE_ID:string; NOM:string; TYPE:string; STATUT:RecordStatus; }
export interface Affaire { ID_AFFAIRE:string; INSTANCE_ID:string; REFERENCE_AFFAIRE:string; NOM_AFFAIRE:string; ID_ORGANISATION_CLIENT?:string; CLIENT_NOM?:string; DESCRIPTION?:string; ETAT:string; PHASE:string; RESPONSABLE_USER_ID?:string; DATE_CREATION:string; DATE_DEBUT?:string; DATE_FIN_PREVUE?:string; MONTANT?:number|string; MARGE?:number|string; AVANCEMENT?:number|string; ENJEUX?:string; RISQUES?:string; PROCHAINE_ECHEANCE?:string; FIABILITE_INFORMATION:Reliability; DATE_MODIFICATION:string; ARCHIVED_AT?:string; }
export interface ActionItem { ID_ACTION:string; INSTANCE_ID:string; ID_AFFAIRE:string; TITRE:string; DESCRIPTION?:string; PRIORITE:'BASSE'|'NORMALE'|'HAUTE'|'CRITIQUE'; STATUT:'OUVERTE'|'EN_COURS'|'CLOTUREE'; RESPONSABLE_USER_ID?:string; DATE_CREATION:string; ECHEANCE?:string; DATE_CLOTURE?:string; WHY?:string; DATE_MODIFICATION:string; ARCHIVED_AT?:string; }
export interface Decision { ID_DECISION:string; INSTANCE_ID:string; ID_AFFAIRE:string; SUJET:string; CONTEXTE?:string; OPTIONS?:string; DECISION?:string; JUSTIFICATION?:string; VALIDATEUR_USER_ID?:string; STATUT:'A_PRENDRE'|'PRISE'; DATE_DECISION?:string; DATE_MODIFICATION:string; ARCHIVED_AT?:string; FAIT?:string; RISQUE?:string; IMPACT?:string; INFORMATION_MANQUANTE?:string; FIABILITE?:Reliability; RECOMMANDATION?:string; ACTION?:string; RESPONSABLE_USER_ID?:string; ECHEANCE?:string; }
export interface DocumentRef { DOCUMENT_ID:string; INSTANCE_ID:string; ID_AFFAIRE:string; TITRE:string; PROVIDER:string; PROVIDER_FILE_ID?:string; DOCUMENT_URL?:string; DOCUMENT_LOCATION?:string; MIME_TYPE?:string; VERSION?:string; STATUT:string; DATE_AJOUT:string; DATE_MODIFICATION:string; ARCHIVED_AT?:string; }
export interface Contact { ID_CONTACT:string; INSTANCE_ID:string; ID_AFFAIRE:string; ID_ORGANISATION?:string; NOM:string; PRENOM?:string; EMAIL?:string; TELEPHONE?:string; FONCTION?:string; STATUT:RecordStatus; DATE_CREATION:string; DATE_MODIFICATION:string; ARCHIVED_AT?:string; }
export interface Evenement { ID_EVENEMENT:string; INSTANCE_ID:string; ID_AFFAIRE:string; TYPE:string; TITRE:string; DESCRIPTION?:string; DATE_EVENEMENT:string; SOURCE:string; CREATED_BY_USER_ID?:string; DATE_CREATION:string; DATE_MODIFICATION:string; ARCHIVED_AT?:string; }
export interface AuditEntry { AUDIT_ID:string; INSTANCE_ID:string; WHAT:string; WHO:string; WHEN:string; WHY?:string; SOURCE:string; ENTITY_TYPE?:string; ENTITY_ID?:string; LEVEL:Severity; DETAIL?:string; }
export interface DiagnosticResult { code:string; level:Severity; label:string; detail:string; }
