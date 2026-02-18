import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_CUSTOMER_ID = '13117714-3f05-48e5-a6e9-a66093f13b4d';
const SAMPLE_COMMIT_ID = '6162d87b-e5db-4a33-b7f2-76ce6ead4e85';
const SAMPLE_CREDIT_TYPE_ID = '2714e483-4ff1-48e4-9e25-ac732e8f24f2';

/**
 * Create a prepaid commit on a customer.
 *
 * Commits represent prepaid or postpaid spending commitments where
 * customers agree to spend a certain amount. This creates a commit
 * with an access schedule defining when the funds are available and
 * an invoice schedule for billing.
 *
 */
async function createCommit(): Promise<void> {
  const commit = await client.v1.customers.commits.create({
    access_schedule: {
      credit_type_id: SAMPLE_CREDIT_TYPE_ID,
      schedule_items: [
        {
          amount: 1000,
          starting_at: '2024-01-01T00:00:00.000Z',
          ending_before: '2024-07-01T00:00:00.000Z',
        },
      ],
    },
    customer_id: SAMPLE_CUSTOMER_ID,
    priority: 100,
    product_id: 'f14d6729-6a44-4b13-9908-9387f1918790',
    type: 'PREPAID',
    invoice_contract_id: 'e57d6929-c2f1-4796-a9a8-63cedefe848d',
    invoice_schedule: {
      credit_type_id: SAMPLE_CREDIT_TYPE_ID,
      schedule_items: [
        {
          unit_price: 10000000,
          quantity: 1,
          timestamp: '2024-01-01T00:00:00.000Z',
        },
      ],
    },
    name: 'Annual Prepaid Commit',
  });

  console.log('Created commit:', commit.data.id);
}

/**
 * List commits for a customer.
 *
 * Returns all commits associated with a customer, with optional
 * filtering and ledger details.
 *
 */
async function listCommits(): Promise<void> {
  for await (const commit of client.v1.customers.commits.list({
    customer_id: SAMPLE_CUSTOMER_ID,
    include_ledgers: true,
  })) {
    console.log(`Commit: ${commit.id} - Type: ${commit.type}`);
  }
}

/**
 * Update the end date of a commit.
 *
 * Modify when a commit's access period and invoices end. Useful
 * for extending or shortening commitment periods.
 *
 */
async function updateEndDate(): Promise<void> {
  const response = await client.v1.customers.commits.updateEndDate({
    commit_id: SAMPLE_COMMIT_ID,
    customer_id: SAMPLE_CUSTOMER_ID,
    access_ending_before: '2024-12-01T00:00:00.000Z',
    invoices_ending_before: '2024-12-01T00:00:00.000Z',
  });

  console.log('Updated commit:', response.data);
}

// --- Run examples ---
async function main(): Promise<void> {
  await createCommit();
  await listCommits();
  await updateEndDate();
}

main().catch(console.error);
