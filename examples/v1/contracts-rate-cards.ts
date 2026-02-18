import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_RATE_CARD_ID = 'f3d51ae8-f283-44e1-9933-a3cf9ad7a6fe';
const SAMPLE_PRODUCT_ID = 'd6300dbb-882e-4d2d-8dec-5125d16b65d0';
const SAMPLE_CREDIT_TYPE_ID = '2714e483-4ff1-48e4-9e25-ac732e8f24f2';

/**
 * Create a new rate card.
 *
 * Rate cards store your usage-based products and their centralized
 * pricing. Products and price changes on a rate card can automatically
 * propagate to all associated contracts.
 *
 */
async function createRateCard(): Promise<void> {
  const rateCard = await client.v1.contracts.rateCards.create({
    name: 'My Rate Card',
    aliases: [{ name: 'my-rate-card' }],
    credit_type_conversions: [
      {
        custom_credit_type_id: SAMPLE_CREDIT_TYPE_ID,
        fiat_per_custom_credit: 2,
      },
    ],
    description: 'Standard pricing for API usage',
    fiat_credit_type_id: SAMPLE_CREDIT_TYPE_ID,
  });

  console.log('Created rate card:', rateCard.data.id);
}

/**
 * Retrieve a rate card by ID.
 *
 * Returns the full rate card configuration including name,
 * description, aliases, and credit type settings.
 *
 */
async function retrieveRateCard(): Promise<void> {
  const rateCard = await client.v1.contracts.rateCards.retrieve({
    id: SAMPLE_RATE_CARD_ID,
  });

  console.log('Rate card:', rateCard.data);
}

/**
 * Update a rate card's configuration.
 *
 * Modifies the rate card's name, description, or aliases without
 * affecting existing rates or associated contracts.
 *
 */
async function updateRateCard(): Promise<void> {
  const rateCard = await client.v1.contracts.rateCards.update({
    rate_card_id: SAMPLE_RATE_CARD_ID,
    description: 'Updated pricing for API usage',
    name: 'My Updated Rate Card',
  });

  console.log('Updated rate card:', rateCard.data.id);
}

/**
 * List all rate cards with auto-pagination.
 *
 * Returns all rate cards in your organization with their
 * configurations and metadata.
 *
 */
async function listRateCards(): Promise<void> {
  for await (const rateCard of client.v1.contracts.rateCards.list()) {
    console.log(`Rate card: ${rateCard.id}`);
  }
}

/**
 * Archive a rate card.
 *
 * Archives the rate card so it can no longer be used for new
 * contracts. Existing contracts using this rate card continue
 * to function.
 *
 */
async function archiveRateCard(): Promise<void> {
  const response = await client.v1.contracts.rateCards.archive({
    id: '12b21470-4570-40df-8998-449d0b0bc52f',
  });

  console.log('Archived rate card:', response.data.id);
}

/**
 * Retrieve the rate schedule for a rate card.
 *
 * Returns all rates on the rate card at or after the specified
 * starting date, optionally filtered by product and pricing group.
 *
 */
async function retrieveRateSchedule(): Promise<void> {
  const response = await client.v1.contracts.rateCards.retrieveRateSchedule({
    rate_card_id: SAMPLE_RATE_CARD_ID,
    starting_at: '2024-01-01T00:00:00.000Z',
    selectors: [
      {
        product_id: SAMPLE_PRODUCT_ID,
        partial_pricing_group_values: {
          region: 'us-west-2',
          cloud: 'aws',
        },
      },
    ],
  });

  console.log('Rate schedule:', response.data);
}

// --- Run examples ---
async function main(): Promise<void> {
  await createRateCard();
  await retrieveRateCard();
  await updateRateCard();
  await listRateCards();
  await archiveRateCard();
  await retrieveRateSchedule();
}

main().catch(console.error);
