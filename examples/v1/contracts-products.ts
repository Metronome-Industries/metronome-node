import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_PRODUCT_ID = 'd6300dbb-882e-4d2d-8dec-5125d16b65d0';
const SAMPLE_BILLABLE_METRIC_ID = '13117714-3f05-48e5-a6e9-a66093f13b4d';

/**
 * Create a new product on a rate card.
 *
 * Products represent your company's individual offerings and appear as
 * line items on invoices. Give the product a meaningful name as it will
 * be visible to customers.
 *
 */
async function createProduct(): Promise<void> {
  const product = await client.v1.contracts.products.create({
    name: 'API Requests',
    type: 'USAGE',
    billable_metric_id: SAMPLE_BILLABLE_METRIC_ID,
  });

  console.log('Created product:', product.data.id);
}

/**
 * Retrieve a product by ID.
 *
 * Returns the full product configuration including metadata and
 * historical changes.
 *
 */
async function retrieveProduct(): Promise<void> {
  const product = await client.v1.contracts.products.retrieve({
    id: SAMPLE_PRODUCT_ID,
  });

  console.log('Product:', product.data);
}

/**
 * Update a product's configuration.
 *
 * Modifies product settings while maintaining billing continuity.
 * Changes are scheduled using the starting_at timestamp. Product
 * type cannot be changed after creation.
 *
 */
async function updateProduct(): Promise<void> {
  const product = await client.v1.contracts.products.update({
    product_id: SAMPLE_PRODUCT_ID,
    starting_at: '2024-01-01T00:00:00.000Z',
    name: 'API Requests (Updated)',
  });

  console.log('Updated product:', product.data.id);
}

/**
 * List all products with auto-pagination.
 *
 * Returns all products with their configurations and version history.
 * Excludes archived products by default.
 *
 */
async function listProducts(): Promise<void> {
  for await (const product of client.v1.contracts.products.list({
    archive_filter: 'NOT_ARCHIVED',
  })) {
    console.log(`Product: ${product.id}`);
  }
}

/**
 * Archive a product.
 *
 * Archived products can no longer be used for new rates but existing
 * rate cards continue to function. Archived products can still be
 * retrieved but cannot be unarchived.
 *
 */
async function archiveProduct(): Promise<void> {
  const response = await client.v1.contracts.products.archive({
    product_id: SAMPLE_PRODUCT_ID,
  });

  console.log('Archived product:', response.data.id);
}

// --- Run examples ---
async function main(): Promise<void> {
  await createProduct();
  await retrieveProduct();
  await updateProduct();
  await listProducts();
  await archiveProduct();
}

main().catch(console.error);
