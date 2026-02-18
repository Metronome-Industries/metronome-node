import Metronome from '@metronome/sdk';

const client = new Metronome();

// ============================================================================
// CursorPage pagination (query-based cursor with limit)
// Used by: customers.list, billableMetrics.list, auditLogs.list, contracts.products.list, etc.
// ============================================================================

/**
 * Auto-paginate through all results using async iteration.
 *
 * The SDK automatically fetches subsequent pages as you iterate. This
 * is the simplest and recommended approach for most use cases.
 *
 */
async function autoPaginateCustomers(): Promise<void> {
  for await (const customer of client.v1.customers.list()) {
    console.log(`Customer: ${customer.name} (${customer.id})`);
  }
}

/**
 * Manually iterate page by page for fine-grained control.
 *
 * Use this pattern when you need to process results in page-sized
 * batches or need access to pagination metadata between pages.
 *
 */
async function manualPaginateCustomers(): Promise<void> {
  let page = await client.v1.customers.list();

  for (const customer of page.data) {
    console.log(`Customer: ${customer.name}`);
  }

  while (page.hasNextPage()) {
    page = await page.getNextPage();
    for (const customer of page.data) {
      console.log(`Customer: ${customer.name}`);
    }
  }
}

/**
 * Collect all paginated results into a single array.
 *
 * Use auto-pagination to accumulate all items. Be mindful of memory
 * usage for very large result sets.
 *
 */
async function collectAllCustomers(): Promise<void> {
  const allCustomers = [];
  for await (const customer of client.v1.customers.list()) {
    allCustomers.push(customer);
  }
  console.log(`Total customers: ${allCustomers.length}`);
}

// ============================================================================
// BodyCursorPage pagination (body-based cursor with limit)
// Used by: payments.list, contracts.listBalances, etc.
// ============================================================================

const SAMPLE_INVOICE_ID = '6a37bb88-8538-48c5-b37b-a41c836328bd';

/**
 * Auto-paginate through body cursor pages.
 *
 * Some endpoints use cursor pagination in the request body rather than
 * query parameters. The auto-pagination API is the same regardless.
 *
 */
async function autoPaginatePayments(): Promise<void> {
  for await (const payment of client.v1.payments.list({
    customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
    invoice_id: SAMPLE_INVOICE_ID,
  })) {
    console.log(`Payment: ${payment.id} - ${payment.status}`);
  }
}

// ============================================================================
// CursorPageWithoutLimit pagination (cursor-based, no limit parameter)
// Used by: usage.list, customers.alerts.list, customFields.listKeys, etc.
// ============================================================================

/**
 * Auto-paginate through usage data.
 *
 * Some endpoints use cursor pagination without a limit parameter.
 * Auto-pagination works the same way across all pagination types.
 *
 */
async function autoPaginateUsage(): Promise<void> {
  for await (const usage of client.v1.usage.list({
    ending_before: '2024-01-03T00:00:00Z',
    starting_on: '2024-01-01T00:00:00Z',
    window_size: 'DAY',
  })) {
    console.log(
      `Usage: ${usage.billable_metric_name} = ${usage.value} ` +
        `(${usage.start_timestamp} to ${usage.end_timestamp})`,
    );
  }
}

// --- Run examples ---
async function main(): Promise<void> {
  await autoPaginateCustomers();
  await manualPaginateCustomers();
  await collectAllCustomers();
  await autoPaginatePayments();
  await autoPaginateUsage();
}

main().catch(console.error);
