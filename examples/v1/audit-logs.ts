import Metronome from '@metronome/sdk';

const client = new Metronome();

/**
 * List audit log entries.
 *
 * Retrieves a comprehensive audit trail of all operations performed
 * in your Metronome account. Supports filtering by resource type,
 * resource ID, and date range.
 *
 */
async function listAuditLogs(): Promise<void> {
  for await (const entry of client.v1.auditLogs.list()) {
    console.log(`Audit log: ${entry.id} - ${entry.action}`);
  }
}

// --- Run examples ---
async function main(): Promise<void> {
  await listAuditLogs();
}

main().catch(console.error);
