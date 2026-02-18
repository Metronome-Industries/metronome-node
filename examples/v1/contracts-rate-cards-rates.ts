import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_RATE_CARD_ID = 'f3d51ae8-f283-44e1-9933-a3cf9ad7a6fe';
const SAMPLE_PRODUCT_ID = '13117714-3f05-48e5-a6e9-a66093f13b4d';
const SAMPLE_CREDIT_TYPE_ID = '2714e483-4ff1-48e4-9e25-ac732e8f24f2';

/**
 * List rates on a rate card.
 *
 * Returns all rates defined on a rate card at a specific point in
 * time. Optionally filter by product and pricing group values.
 *
 */
async function listRates(): Promise<void> {
  for await (const rate of client.v1.contracts.rateCards.rates.list({
    at: '2024-01-01T00:00:00.000Z',
    rate_card_id: SAMPLE_RATE_CARD_ID,
    selectors: [
      {
        product_id: SAMPLE_PRODUCT_ID,
        partial_pricing_group_values: {
          region: 'us-west-2',
          cloud: 'aws',
        },
      },
    ],
  })) {
    console.log('Rate:', rate);
  }
}

/**
 * Add a single rate to a rate card.
 *
 * Defines pricing for a product on the rate card. Rate types
 * include FLAT, PERCENTAGE, SUBSCRIPTION, TIERED, and CUSTOM.
 *
 */
async function addRate(): Promise<void> {
  const response = await client.v1.contracts.rateCards.rates.add({
    entitled: true,
    product_id: SAMPLE_PRODUCT_ID,
    rate_card_id: SAMPLE_RATE_CARD_ID,
    rate_type: 'FLAT',
    starting_at: '2024-01-01T00:00:00.000Z',
    credit_type_id: SAMPLE_CREDIT_TYPE_ID,
    price: 100,
  });

  console.log('Rate added:', response.data);
}

/**
 * Add multiple rates to a rate card at once.
 *
 * Batch-adds rates for a product with different pricing group
 * values. Useful for setting up region-specific or tier-specific
 * pricing in a single API call.
 *
 */
async function addManyRates(): Promise<void> {
  const response = await client.v1.contracts.rateCards.rates.addMany({
    rate_card_id: SAMPLE_RATE_CARD_ID,
    rates: [
      {
        product_id: SAMPLE_PRODUCT_ID,
        starting_at: '2024-01-01T00:00:00.000Z',
        entitled: true,
        rate_type: 'FLAT',
        price: 100,
        pricing_group_values: {
          region: 'us-west-2',
          cloud: 'aws',
        },
      },
      {
        product_id: SAMPLE_PRODUCT_ID,
        starting_at: '2024-01-01T00:00:00.000Z',
        entitled: true,
        rate_type: 'FLAT',
        price: 120,
        pricing_group_values: {
          region: 'us-east-1',
          cloud: 'aws',
        },
      },
    ],
  });

  console.log('Rates added:', response.data);
}

// --- Run examples ---
async function main(): Promise<void> {
  await listRates();
  await addRate();
  await addManyRates();
}

main().catch(console.error);
