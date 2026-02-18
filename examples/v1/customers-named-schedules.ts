import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_CUSTOMER_ID = '9b85c1c1-5238-4f2a-a409-61412905e1e1';

/**
 * Retrieve a named schedule for a customer.
 *
 * Returns the schedule configuration and values for the specified
 * schedule name. Optionally filter by a specific covering date.
 *
 */
async function retrieveNamedSchedule(): Promise<void> {
  const schedule = await client.v1.customers.namedSchedules.retrieve({
    customer_id: SAMPLE_CUSTOMER_ID,
    schedule_name: 'my-schedule',
    covering_date: '2024-02-15T00:00:00Z',
  });

  console.log('Named schedule:', schedule.data);
}

/**
 * Update a named schedule for a customer.
 *
 * Sets or modifies the schedule value for a specific time period.
 * The value can be any JSON object and is associated with the
 * schedule's time range.
 *
 */
async function updateNamedSchedule(): Promise<void> {
  await client.v1.customers.namedSchedules.update({
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
