import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_CUSTOMER_ID = '13117714-3f05-48e5-a6e9-a66093f13b4d';
const SAMPLE_CREDIT_ID = '6162d87b-e5db-4a33-b7f2-76ce6ead4e85';
const SAMPLE_CREDIT_TYPE_ID = '2714e483-4ff1-48e4-9e25-ac732e8f24f2';

/**
 * Create a credit on a customer.
 *
 * Credits provide free spending allowances, typically offered for
 * SLA violations, promotions, or as part of a subscription allotment.
 * Define an access schedule to control when the credit is available.
 *
 */
async function createCredit(): Promise<void> {
  const credit = await client.v1.customers.credits.create({
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
    name: 'Promotional Credit',
  });

  console.log('Created credit:', credit.data.id);
}

/**
 * List credits for a customer.
 *
 * Returns all credits associated with a customer, optionally
 * including ledger transaction history.
 *
 */
async function listCredits(): Promise<void> {
  for await (const credit of client.v1.customers.credits.list({
    customer_id: SAMPLE_CUSTOMER_ID,
    include_ledgers: true,
  })) {
    console.log(`Credit: ${credit.id} - Type: ${credit.type}`);
  }
}

/**
 * Update the end date of a credit.
 *
 * Modify when a credit's access period ends. Useful for extending
 * promotional credits or shortening expired ones.
 *
 */
async function updateEndDate(): Promise<void> {
  const response = await client.v1.customers.credits.updateEndDate({
    access_ending_before: '2024-12-01T00:00:00.000Z',
    credit_id: SAMPLE_CREDIT_ID,
    customer_id: SAMPLE_CUSTOMER_ID,
  });

  console.log('Updated credit:', response.data);
}

// --- Run examples ---
async function main(): Promise<void> {
  await createCredit();
  await listCredits();
  await updateEndDate();
}

main().catch(console.error);
