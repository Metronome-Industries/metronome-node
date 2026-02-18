/**
 * @deprecated Credit Grants are deprecated. New integrations should use
 * customer commits and credits instead. See examples/v1/customers-commits.ts
 * and examples/v1/customers-credits.ts for the recommended approach.
 */

import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_CREDIT_GRANT_ID = '9b85c1c1-5238-4f2a-a409-61412905e1e1';
const SAMPLE_CUSTOMER_ID = '9b85c1c1-5238-4f2a-a409-61412905e1e1';
const SAMPLE_CREDIT_TYPE_ID = '2714e483-4ff1-48e4-9e25-ac732e8f24f2';

/**
 * @deprecated Use customer commits/credits instead.
 *
 * Create a new credit grant.
 *
 * Gives a customer a credit grant with defined amounts, priority,
 * and expiration date.
 *
 */
async function createCreditGrant(): Promise<void> {
  const grant = await client.v1.creditGrants.create({
    customer_id: SAMPLE_CUSTOMER_ID,
    expires_at: '2025-04-01T00:00:00Z',
    grant_amount: {
      amount: 1000,
      credit_type_id: '5ae401dc-a648-4b49-9ac3-391bb5bc4d7b',
    },
    name: 'Acme Corp Promotional Credit Grant',
    paid_amount: {
      amount: 5000,
      credit_type_id: SAMPLE_CREDIT_TYPE_ID,
    },
    priority: 0.5,
    credit_grant_type: 'trial',
    effective_at: '2024-02-01T00:00:00Z',
    reason: 'Incentivize new customer',
  });

  console.log('Created credit grant:', grant.data.id);
}

/**
 * @deprecated Use customer commits/credits instead.
 *
 * List credit grants with optional filtering.
 *
 * Returns credit grants filtered by credit type, customer IDs,
 * and date ranges.
 *
 */
async function listCreditGrants(): Promise<void> {
  for await (const grant of client.v1.creditGrants.list({
    credit_type_ids: [SAMPLE_CREDIT_TYPE_ID],
    customer_ids: ['d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc'],
    effective_before: '2024-02-01T00:00:00Z',
    not_expiring_before: '2024-02-01T00:00:00Z',
  })) {
    console.log('Credit grant:', grant);
  }
}

/**
 * @deprecated Use customer commits/credits instead.
 *
 * Edit an existing credit grant.
 *
 * Update the name, expiration date, or credit grant type of
 * an existing credit grant.
 *
 */
async function editCreditGrant(): Promise<void> {
  const response = await client.v1.creditGrants.edit({
    id: SAMPLE_CREDIT_GRANT_ID,
    expires_at: '2025-04-01T00:00:00Z',
    name: 'Acme Corp Promotional Credit Grant (Updated)',
  });

  console.log('Edited credit grant:', response.data);
}

/**
 * @deprecated Use customer commits/credits instead.
 *
 * List credit ledger entries.
 *
 * Returns detailed transaction history for credit grants,
 * including credits, debits, and expirations.
 *
 */
async function listEntries(): Promise<void> {
  for await (const entry of client.v1.creditGrants.listEntries({
    credit_type_ids: [SAMPLE_CREDIT_TYPE_ID],
    customer_ids: ['6a37bb88-8538-48c5-b37b-a41c836328bd'],
    ending_before: '2024-02-01T00:00:00Z',
    starting_on: '2024-01-01T00:00:00Z',
  })) {
    console.log('Ledger entry:', entry);
  }
}

/**
 * @deprecated Use customer commits/credits instead.
 *
 * Void a credit grant.
 *
 * Permanently cancels a credit grant, removing any remaining
 * balance. Optionally release the uniqueness key.
 *
 */
async function voidCreditGrant(): Promise<void> {
  const response = await client.v1.creditGrants.void({
    id: SAMPLE_CREDIT_GRANT_ID,
  });

  console.log('Voided credit grant:', response.data);
}

// --- Run examples ---
async function main(): Promise<void> {
  await createCreditGrant();
  await listCreditGrants();
  await editCreditGrant();
  await listEntries();
  await voidCreditGrant();
}

main().catch(console.error);
