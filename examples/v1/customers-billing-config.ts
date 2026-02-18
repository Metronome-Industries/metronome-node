import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_CUSTOMER_ID = 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc';

/**
 * Create a billing configuration for a customer.
 *
 * Sets up a billing provider integration (e.g., Stripe) for the
 * customer. This configuration determines where invoices are sent
 * and how payments are collected.
 *
 */
async function createBillingConfig(): Promise<void> {
  await client.v1.customers.billingConfig.create({
    customer_id: SAMPLE_CUSTOMER_ID,
    billing_provider_type: 'stripe',
    billing_provider_customer_id: 'cus_AJ6y20bjkOOayM',
    stripe_collection_method: 'charge_automatically',
  });

  console.log('Billing config created');
}

/**
 * Retrieve a customer's billing configuration.
 *
 * Returns the current billing provider configuration for the
 * specified provider type (e.g., Stripe, AWS Marketplace).
 *
 */
async function retrieveBillingConfig(): Promise<void> {
  const config = await client.v1.customers.billingConfig.retrieve({
    customer_id: SAMPLE_CUSTOMER_ID,
    billing_provider_type: 'stripe',
  });

  console.log('Billing config:', config.data);
}

/**
 * Delete a customer's billing configuration.
 *
 * Removes the billing provider integration for the specified
 * provider type. Use when migrating a customer between billing
 * providers.
 *
 */
async function deleteBillingConfig(): Promise<void> {
  await client.v1.customers.billingConfig.delete({
    customer_id: SAMPLE_CUSTOMER_ID,
    billing_provider_type: 'stripe',
  });

  console.log('Billing config deleted');
}

// --- Run examples ---
async function main(): Promise<void> {
  await createBillingConfig();
  await retrieveBillingConfig();
  await deleteBillingConfig();
}

main().catch(console.error);
