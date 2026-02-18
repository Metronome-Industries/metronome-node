/**
 * @deprecated Plans are deprecated. New integrations should use the Contracts API
 * instead. See examples/v1/contracts.ts for the recommended approach.
 */

import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_PLAN_ID = 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc';

/**
 * @deprecated Use Contracts instead.
 *
 * List all available plans.
 *
 * Returns a paginated list of all plans configured in your
 * Metronome account.
 *
 */
async function listPlans(): Promise<void> {
  for await (const plan of client.v1.plans.list()) {
    console.log(`Plan: ${plan.id} - ${plan.name}`);
  }
}

/**
 * @deprecated Use Contracts instead.
 *
 * Get detailed information about a specific plan.
 *
 * Returns the plan's configuration including name, description,
 * and associated charges.
 *
 */
async function getDetails(): Promise<void> {
  const response = await client.v1.plans.getDetails({
    plan_id: SAMPLE_PLAN_ID,
  });

  console.log('Plan details:', response.data);
}

/**
 * @deprecated Use Contracts instead.
 *
 * List charges for a specific plan.
 *
 * Returns all charges configured on the plan, including
 * pricing details and charge types.
 *
 */
async function listCharges(): Promise<void> {
  for await (const charge of client.v1.plans.listCharges({
    plan_id: SAMPLE_PLAN_ID,
  })) {
    console.log('Charge:', charge);
  }
}

/**
 * @deprecated Use Contracts instead.
 *
 * List customers on a specific plan.
 *
 * Returns all customers currently subscribed to the plan,
 * optionally filtered by status.
 *
 */
async function listCustomers(): Promise<void> {
  for await (const customer of client.v1.plans.listCustomers({
    plan_id: SAMPLE_PLAN_ID,
  })) {
    console.log('Customer on plan:', customer);
  }
}

// --- Run examples ---
async function main(): Promise<void> {
  await listPlans();
  await getDetails();
  await listCharges();
  await listCustomers();
}

main().catch(console.error);
