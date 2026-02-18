import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_RATE_CARD_ID = 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc';

/**
 * Retrieve a named schedule on a rate card.
 *
 * Returns the schedule configuration for a specific rate card.
 * Optionally filter by a covering date to see the active schedule
 * at a point in time.
 *
 */
async function retrieveNamedSchedule(): Promise<void> {
  const schedule = await client.v1.contracts.namedSchedules.retrieve({
    rate_card_id: SAMPLE_RATE_CARD_ID,
    schedule_name: 'my-schedule',
    covering_date: '2024-02-15T00:00:00Z',
  });

  console.log('Named schedule:', schedule.data);
}

/**
 * Update a named schedule on a rate card.
 *
 * Sets or modifies the schedule value for a specific time period
 * on the rate card.
 *
 */
async function updateNamedSchedule(): Promise<void> {
  await client.v1.contracts.namedSchedules.update({
    rate_card_id: SAMPLE_RATE_CARD_ID,
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
