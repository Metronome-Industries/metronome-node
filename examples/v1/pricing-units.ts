import Metronome from '@metronome/sdk';

const client = new Metronome();

/**
 * List all pricing units.
 *
 * Returns all available pricing units including fiat currencies
 * and custom pricing units. Pricing units are used for credit
 * types and pricing configuration.
 *
 */
async function listPricingUnits(): Promise<void> {
  for await (const unit of client.v1.pricingUnits.list()) {
    console.log(`Pricing unit: ${unit.name} (${unit.id})`);
  }
}

// --- Run examples ---
async function main(): Promise<void> {
  await listPricingUnits();
}

main().catch(console.error);
