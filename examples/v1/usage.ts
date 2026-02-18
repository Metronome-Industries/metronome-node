import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_CUSTOMER_ID = '13117714-3f05-48e5-a6e9-a66093f13b4d';
const SAMPLE_BILLABLE_METRIC_ID = '222796fd-d29c-429e-89b2-549fabda4ed6';

/**
 * Retrieve aggregated usage data across customers.
 *
 * Fetches usage data broken down by time windows. Useful for building
 * analytics dashboards, generating reports, and monitoring platform-wide
 * usage trends.
 *
 */
async function listUsage(): Promise<void> {
  for await (const usage of client.v1.usage.list({
    ending_before: '2024-01-03T00:00:00Z',
    starting_on: '2024-01-01T00:00:00Z',
    window_size: 'DAY',
  })) {
    console.log(
      `${usage.billable_metric_name}: ${usage.value} ` +
        `(${usage.start_timestamp} to ${usage.end_timestamp})`,
    );
  }
}

/**
 * Ingest usage events into Metronome.
 *
 * The primary method for sending usage events. This high-throughput
 * endpoint supports real-time streaming ingestion and backdating up
 * to 34 days. Events are automatically deduplicated by transaction_id.
 *
 */
async function ingestUsage(): Promise<void> {
  await client.v1.usage.ingest({
    usage: [
      {
        transaction_id: '2024-01-15T10:30:00Z_cluster42',
        customer_id: SAMPLE_CUSTOMER_ID,
        event_type: 'api_request',
        timestamp: '2024-01-15T10:30:00Z',
        properties: {
          endpoint: '/v1/users',
          method: 'POST',
          response_time_ms: 45,
          region: 'us-west-2',
        },
      },
      {
        transaction_id: '2024-01-15T10:31:00Z_cluster42',
        customer_id: SAMPLE_CUSTOMER_ID,
        event_type: 'api_request',
        timestamp: '2024-01-15T10:31:00Z',
        properties: {
          endpoint: '/v1/orders',
          method: 'GET',
          response_time_ms: 12,
          region: 'us-east-1',
        },
      },
    ],
  });

  console.log('Usage events ingested');
}

/**
 * Retrieve usage data with group breakdown.
 *
 * Fetches granular usage for a specific customer and billable metric,
 * segmented by custom dimensions like region, user, or model type.
 * Ideal for building detailed usage dashboards.
 *
 */
async function listUsageWithGroups(): Promise<void> {
  for await (const usage of client.v1.usage.listWithGroups({
    billable_metric_id: SAMPLE_BILLABLE_METRIC_ID,
    customer_id: SAMPLE_CUSTOMER_ID,
    window_size: 'DAY',
    ending_before: '2024-01-03T00:00:00Z',
    starting_on: '2024-01-01T00:00:00Z',
    group_by: {
      key: 'region',
      values: ['US-East', 'US-West', 'EU-Central'],
    },
  })) {
    console.log(
      `${usage.group_key}=${usage.group_value}: ${usage.value} ` +
        `(${usage.starting_on} to ${usage.ending_before})`,
    );
  }
}

/**
 * Search for specific usage events by transaction ID.
 *
 * Retrieves events by their transaction ID within the last 34 days.
 * Designed for sampling-based testing workflows to detect revenue
 * leakage by validating that events match expected billable metrics.
 *
 * Note: This endpoint is heavily rate limited and designed for sampling
 * workflows only.
 *
 */
async function searchUsage(): Promise<void> {
  const events = await client.v1.usage.search({
    transactionIds: ['2024-01-15T10:30:00Z_cluster42'],
  });

  for (const event of events) {
    console.log(`Event: ${event.event_type} at ${event.timestamp}`);
    console.log(`  Customer: ${event.customer_id}`);
    console.log(`  Matched metrics:`, event.matched_billable_metrics);
    console.log(`  Is duplicate:`, event.is_duplicate);
  }
}

// --- Run examples ---
async function main(): Promise<void> {
  await listUsage();
  await ingestUsage();
  await listUsageWithGroups();
  await searchUsage();
}

main().catch(console.error);
