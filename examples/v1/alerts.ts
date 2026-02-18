import Metronome from '@metronome/sdk';

const client = new Metronome();

/**
 * Create a threshold notification.
 *
 * Creates a configurable threshold notification that monitors
 * customer spending, balances, and billing metrics in real-time.
 * Alerts can be global or targeted to specific customers.
 *
 */
async function createAlert(): Promise<void> {
  const alert = await client.v1.alerts.create({
    alert_type: 'spend_threshold_reached',
    name: '$100 spend threshold reached',
    threshold: 10000,
    credit_grant_type_filters: ['enterprise'],
    credit_type_id: '2714e483-4ff1-48e4-9e25-ac732e8f24f2',
    customer_id: '4db51251-61de-4bfe-b9ce-495e244f3491',
  });

  console.log('Created alert:', alert.data.id);
}

/**
 * Archive a threshold notification.
 *
 * Permanently disables the alert and stops all evaluations.
 * Optionally release the uniqueness key for reuse with a new alert.
 *
 */
async function archiveAlert(): Promise<void> {
  const response = await client.v1.alerts.archive({
    id: '8deed800-1b7a-495d-a207-6c52bac54dc9',
    release_uniqueness_key: true,
  });

  console.log('Archived alert:', response.data.id);
}

// --- Run examples ---
async function main(): Promise<void> {
  await createAlert();
  await archiveAlert();
}

main().catch(console.error);
