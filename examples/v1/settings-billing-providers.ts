import Metronome from '@metronome/sdk';

const client = new Metronome();

/**
 * Create a billing provider configuration.
 *
 * Sets up a billing provider integration (e.g., Stripe, AWS
 * Marketplace, Azure) for your Metronome account. This is a
 * one-time setup for each billing provider you use.
 *
 */
async function createBillingProvider(): Promise<void> {
  const provider = await client.v1.settings.billingProviders.create({
    billing_provider: 'aws_marketplace',
    configuration: {
      aws_external_id: '47b4f6b7-e297-42e8-b175-331d933b402c',
      aws_iam_role_arn: 'arn:aws:iam::test',
    },
    delivery_method: 'direct_to_billing_provider',
  });

  console.log('Billing provider created:', provider.data);
}

/**
 * List configured billing providers.
 *
 * Returns all billing providers that have been set up for your
 * Metronome account with their configuration details.
 *
 */
async function listBillingProviders(): Promise<void> {
  const providers = await client.v1.settings.billingProviders.list();

  console.log('Billing providers:', providers.data);
}

// --- Run examples ---
async function main(): Promise<void> {
  await createBillingProvider();
  await listBillingProviders();
}

main().catch(console.error);
