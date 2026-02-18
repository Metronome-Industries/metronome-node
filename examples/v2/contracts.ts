import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_CUSTOMER_ID = '13117714-3f05-48e5-a6e9-a66093f13b4d';
const SAMPLE_CONTRACT_ID = 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc';

/**
 * Retrieve a contract using the V2 API.
 *
 * Returns the full contract details including pricing, terms,
 * credits, and commitments using the enhanced V2 contract format.
 *
 */
async function retrieveContract(): Promise<void> {
  const contract = await client.v2.contracts.retrieve({
    contract_id: SAMPLE_CONTRACT_ID,
    customer_id: SAMPLE_CUSTOMER_ID,
  });

  console.log('Contract:', contract.data.id);
  console.log('Starts at:', contract.data.starting_at);
}

/**
 * List all contracts for a customer using the V2 API.
 *
 * Returns contracts with the enhanced V2 format that includes
 * additional details compared to the V1 endpoint.
 *
 */
async function listContracts(): Promise<void> {
  const contracts = await client.v2.contracts.list({
    customer_id: SAMPLE_CUSTOMER_ID,
  });

  for (const contract of contracts.data) {
    console.log(`Contract: ${contract.id} (starts: ${contract.starting_at})`);
  }
}

/**
 * Edit a contract's terms.
 *
 * Modifies an existing contract by adding overrides, scheduled
 * charges, or other changes. Metronome tracks all edits for
 * auditability via the getEditHistory endpoint.
 *
 */
async function editContract(): Promise<void> {
  const response = await client.v2.contracts.edit({
    contract_id: SAMPLE_CONTRACT_ID,
    customer_id: SAMPLE_CUSTOMER_ID,
    add_overrides: [
      {
        type: 'MULTIPLIER',
        starting_at: '2024-11-02T00:00:00Z',
        product_id: 'd4fc086c-d8e5-4091-a235-fbba5da4ec14',
        multiplier: 2,
        priority: 100,
      },
    ],
    add_scheduled_charges: [
      {
        product_id: '2e30f074-d04c-412e-a134-851ebfa5ceb2',
        schedule: {
          schedule_items: [
            {
              timestamp: '2024-02-15T00:00:00.000Z',
              unit_price: 1000000,
              quantity: 1,
            },
          ],
        },
      },
    ],
  });

  console.log('Contract edited:', response.data);
}

/**
 * Edit a specific commit on a contract.
 *
 * Modifies the details of a contract-level or customer-level
 * commit, such as its access schedule or other properties.
 *
 */
async function editCommit(): Promise<void> {
  const response = await client.v2.contracts.editCommit({
    commit_id: '5e7e82cf-ccb7-428c-a96f-a8e4f67af822',
    customer_id: '4c91c473-fc12-445a-9c38-40421d47023f',
    access_schedule: {
      update_schedule_items: [
        {
          id: 'd5edbd32-c744-48cb-9475-a9bca0e6fa39',
          ending_before: '2025-03-12T00:00:00Z',
        },
      ],
    },
  });

  console.log('Commit edited:', response.data);
}

/**
 * Edit a specific credit on a contract.
 *
 * Modifies the details of a contract-level or customer-level
 * credit, such as its access schedule or other properties.
 *
 */
async function editCredit(): Promise<void> {
  const response = await client.v2.contracts.editCredit({
    credit_id: '5e7e82cf-ccb7-428c-a96f-a8e4f67af822',
    customer_id: '4c91c473-fc12-445a-9c38-40421d47023f',
    access_schedule: {
      update_schedule_items: [
        {
          id: 'd5edbd32-c744-48cb-9475-a9bca0e6fa39',
          ending_before: '2025-03-12T00:00:00Z',
        },
      ],
    },
  });

  console.log('Credit edited:', response.data);
}

/**
 * Get the edit history for a contract.
 *
 * Returns all edits made to a contract over time, providing
 * a complete audit trail of changes to terms, overrides,
 * charges, commits, and credits.
 *
 */
async function getEditHistory(): Promise<void> {
  const response = await client.v2.contracts.getEditHistory({
    contract_id: SAMPLE_CONTRACT_ID,
    customer_id: SAMPLE_CUSTOMER_ID,
  });

  console.log('Edit history:', response.data);
}

// --- Run examples ---
async function main(): Promise<void> {
  await retrieveContract();
  await listContracts();
  await editContract();
  await editCommit();
  await editCredit();
  await getEditHistory();
}

main().catch(console.error);
