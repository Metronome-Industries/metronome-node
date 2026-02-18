import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_CUSTOMER_ID = '9b85c1c1-5238-4f2a-a409-61412905e1e1';
const SAMPLE_ALERT_ID = '8deed800-1b7a-495d-a207-6c52bac54dc9';

/**
 * Retrieve a specific alert for a customer.
 *
 * Returns the alert configuration and the customer's current
 * evaluation status (ok, in_alarm, or evaluating).
 *
 */
async function retrieveAlert(): Promise<void> {
  const alert = await client.v1.customers.alerts.retrieve({
    alert_id: SAMPLE_ALERT_ID,
    customer_id: SAMPLE_CUSTOMER_ID,
  });

  console.log('Alert:', alert.data);
}

/**
 * List all alerts for a customer.
 *
 * Returns all threshold notifications configured for the specified
 * customer, including their current evaluation status.
 *
 */
async function listAlerts(): Promise<void> {
  for await (const alert of client.v1.customers.alerts.list({
    customer_id: SAMPLE_CUSTOMER_ID,
  })) {
    console.log(`Alert: ${alert.alert.id} - Status: ${alert.customer_status}`);
  }
}

/**
 * Reset a customer's alert status.
 *
 * Clears the alert evaluation state for a specific customer,
 * allowing it to be re-evaluated from scratch. Useful after
 * resolving the underlying condition that triggered the alert.
 *
 */
async function resetAlert(): Promise<void> {
  await client.v1.customers.alerts.reset({
    alert_id: '5e8691bf-b22a-4672-922d-f80eee940f01',
    customer_id: '4c83caf3-8af4-44e2-9aeb-e290531726d9',
  });

  console.log('Alert reset');
}

// --- Run examples ---
async function main(): Promise<void> {
  await retrieveAlert();
  await listAlerts();
  await resetAlert();
}

main().catch(console.error);
