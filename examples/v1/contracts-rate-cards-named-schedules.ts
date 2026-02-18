import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_CONTRACT_ID = 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc';
const SAMPLE_CUSTOMER_ID = '9b85c1c1-5238-4f2a-a409-61412905e1e1';

/**
 * Retrieve a named schedule on a rate card (contract-scoped).
 *
 * Returns the schedule configuration for a specific contract and
 * customer. Optionally filter by a covering date to see the active
 * schedule at a point in time.
 *
 */
async function retrieveNamedSchedule(): Promise<void> {
  const schedule = await client.v1.contracts.rateCards.namedSchedules.retrieve({
    contract_id: SAMPLE_CONTRACT_ID,
    customer_id: SAMPLE_CUSTOMER_ID,
    schedule_name: 'my-schedule',
    covering_date: '2024-02-15T00:00:00Z',
  });

  console.log('Named schedule:', schedule.data);
}

/**
 * Update a named schedule on a rate card (contract-scoped).
 *
 * Sets or modifies the schedule value for a specific time period
 * within the context of a contract and customer.
 *
 */
async function updateNamedSchedule(): Promise<void> {
  await client.v1.contracts.rateCards.namedSchedules.update({
    contract_id: SAMPLE_CONTRACT_ID,
    customer_id: SAMPLE_CUSTOMER_ID,
    schedule_name: 'my-schedule',
    starting_at: '2024-02-01T00:00:00Z',
    value: { my_key: 'my_value' },
    ending_before: '2024-03-01T00:00:00Z',
  });

  console.log('Named schedule updated');
}

// --- Run examples ---
async function main(): Promise<void> {
  await retrieveNamedSchedule();
  await updateNamedSchedule();
}

main().catch(console.error);
