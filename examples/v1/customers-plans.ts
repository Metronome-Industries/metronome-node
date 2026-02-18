/**
 * @deprecated Plans are deprecated. New integrations should use the Contracts API
 * instead. See examples/v1/contracts.ts for the recommended approach.
 */

import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_CUSTOMER_ID = 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc';

/**
 * @deprecated Use Contracts instead.
 *
 * List plans assigned to a customer.
 *
 * Returns all plans currently active on the customer account.
 *
 */
async function listPlans(): Promise<void> {
  for await (const plan of client.v1.customers.plans.list({
    customer_id: SAMPLE_CUSTOMER_ID,
  })) {
    console.log('Plan:', plan);
  }
}

/**
 * @deprecated Use Contracts instead.
 *
 * Add a plan to a customer.
 *
 * Associates a plan with the customer, defining the billing period
 * with starting and optional ending dates.
 *
 */
async function addPlan(): Promise<void> {
  const response = await client.v1.customers.plans.add({
    customer_id: SAMPLE_CUSTOMER_ID,
    plan_id: 'd2c06dae-9549-4d7d-bc04-b78dd3d241b8',
    starting_on: '2024-01-01T00:00:00Z',
    ending_before: '2025-01-01T00:00:00Z',
  });

  console.log('Plan added:', response.data);
}

/**
 * @deprecated Use Contracts instead.
 *
 * End a customer's plan.
 *
 * Terminates the specified plan on the customer account at the
 * given end date.
 *
 */
async function endPlan(): Promise<void> {
  const response = await client.v1.customers.plans.end({
    customer_id: SAMPLE_CUSTOMER_ID,
    customer_plan_id: '7aa11640-0703-4600-8eb9-293f535a6b74',
    ending_before: '2024-06-01T00:00:00Z',
  });

  console.log('Plan ended');
}

/**
 * @deprecated Use Contracts instead.
 *
 * List price adjustments for a customer's plan.
 *
 * Returns all price adjustments applied to the specified plan,
 * such as discounts or custom pricing overrides.
 *
 */
async function listPriceAdjustments(): Promise<void> {
  for await (const adjustment of client.v1.customers.plans.listPriceAdjustments({
    customer_id: SAMPLE_CUSTOMER_ID,
    customer_plan_id: '7aa11640-0703-4600-8eb9-293f535a6b74',
  })) {
    console.log('Price adjustment:', adjustment);
  }
}

// --- Run examples ---
async function main(): Promise<void> {
  await listPlans();
  await addPlan();
  await endPlan();
  await listPriceAdjustments();
}

main().catch(console.error);
