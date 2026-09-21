import type { DataService, SequenceService } from '../services/contracts.js';

export const formatBusinessId = (prefix: string, n: number) => `${prefix}-${String(n).padStart(6, '0')}`;

/** Sequence provider independent from the storage implementation.
 * The authoritative counter lives in the ID_COUNTERS table for the active instance.
 */
export class TableSequenceService implements SequenceService {
  constructor(private readonly data: DataService, private readonly instanceId: string) {}
  async next(prefix: string): Promise<string> {
    const rows = await this.data.list<Record<string, unknown>>('ID_COUNTERS');
    const row = rows.find(r => String(r.ENTITY_PREFIX) === prefix && String(r.INSTANCE_ID) === this.instanceId);
    const current = Number(row?.LAST_NUMBER ?? 0);
    if (!Number.isFinite(current) || current < 0) throw new Error(`Compteur ID invalide pour ${prefix}`);
    const next = current + 1;
    const stamp = new Date().toISOString();
    if (row) {
      await this.data.update('ID_COUNTERS', 'ENTITY_PREFIX', prefix, { LAST_NUMBER: next, UPDATED_AT: stamp });
    } else {
      await this.data.create('ID_COUNTERS', { ENTITY_PREFIX: prefix, INSTANCE_ID: this.instanceId, LAST_NUMBER: next, UPDATED_AT: stamp });
    }
    return formatBusinessId(prefix, next);
  }
}

/** Test-only sequence implementation. */
export class InMemorySequenceService implements SequenceService {
  private counters = new Map<string, number>();
  constructor(private readonly namespace = 'INSTANCE-DEMO') {}
  async next(prefix: string): Promise<string> {
    const key = `${this.namespace}:${prefix}`;
    const next = (this.counters.get(key) ?? 0) + 1;
    this.counters.set(key, next);
    return formatBusinessId(prefix, next);
  }
}
