import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_RATE_CARD_ID = 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc';

/**
 * Move products to new positions on a rate card.
 *
 * Reorders specific products within the rate card's product list
 * by specifying target positions. Other products shift to
 * accommodate the moves.
 *
 */
async function updateProductOrder(): Promise<void> {
  const response = await client.v1.contracts.rateCards.productOrders.update({
    product_moves: [
      {
        product_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
        position: 0,
      },
      {
        product_id: 'b086f2f4-9851-4466-9ca0-30d53e6a42ac',
        position: 1,
      },
    ],
    rate_card_id: SAMPLE_RATE_CARD_ID,
  });

  console.log('Product order updated:', response.data);
}

/**
 * Set the complete product order on a rate card.
 *
 * Replaces the entire product ordering with a new sequence.
 * Products are listed in the order they should appear.
 *
 */
async function setProductOrder(): Promise<void> {
  const response = await client.v1.contracts.rateCards.productOrders.set({
    product_order: [
      '13117714-3f05-48e5-a6e9-a66093f13b4d',
      'b086f2f4-9851-4466-9ca0-30d53e6a42ac',
    ],
    rate_card_id: SAMPLE_RATE_CARD_ID,
  });

  console.log('Product order set:', response.data);
}

// --- Run examples ---
async function main(): Promise<void> {
  await updateProductOrder();
  await setProductOrder();
}

main().catch(console.error);
