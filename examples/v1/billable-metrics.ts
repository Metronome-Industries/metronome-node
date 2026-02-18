import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_BILLABLE_METRIC_ID = '13117714-3f05-48e5-a6e9-a66093f13b4d';

/**
 * Create a new billable metric.
 *
 * Defines a customizable query that filters and aggregates events from
 * your event stream. These metrics drive pricing calculations as usage
 * data flows through the ingestion pipeline.
 *
 */
async function createBillableMetric(): Promise<void> {
  const metric = await client.v1.billableMetrics.create({
    name: 'CPU Hours',
    aggregation_key: 'cpu_hours',
    aggregation_type: 'SUM',
    event_type_filter: { in_values: ['cpu_usage'] },
    group_keys: [['region'], ['machine_type']],
    property_filters: [
      { name: 'cpu_hours', exists: true },
      {
        name: 'region',
        exists: true,
        in_values: ['EU', 'NA'],
      },
    ],
  });

  console.log('Created billable metric:', metric.data.id);
}

/**
 * Retrieve a billable metric by ID.
 *
 * Returns the complete configuration including name, aggregation type,
 * filters, group keys, and custom fields. Archived metrics include an
 * archived_at timestamp.
 *
 */
async function retrieveBillableMetric(): Promise<void> {
  const metric = await client.v1.billableMetrics.retrieve({
    billable_metric_id: SAMPLE_BILLABLE_METRIC_ID,
  });

  console.log('Metric:', metric.data.name);
  console.log('Aggregation type:', metric.data.aggregation_type);
  console.log('Aggregation key:', metric.data.aggregation_key);
}

/**
 * List all billable metrics with auto-pagination.
 *
 * Retrieves all metrics with their configurations. Archived metrics
 * are excluded by default; use include_archived to include them.
 *
 */
async function listBillableMetrics(): Promise<void> {
  for await (const metric of client.v1.billableMetrics.list()) {
    console.log(`Metric: ${metric.name} (${metric.id}) - ${metric.aggregation_type}`);
  }
}

/**
 * Archive a billable metric.
 *
 * Retires a metric so it can no longer be used in new Products.
 * Existing Products using this metric continue to function normally.
 * Archived metrics remain accessible for historical reference.
 *
 */
async function archiveBillableMetric(): Promise<void> {
  const response = await client.v1.billableMetrics.archive({
    id: '8deed800-1b7a-495d-a207-6c52bac54dc9',
  });

  console.log('Archived metric:', response.data.id);
}

// --- Run examples ---
async function main(): Promise<void> {
  await createBillableMetric();
  await retrieveBillableMetric();
  await listBillableMetrics();
  await archiveBillableMetric();
}

main().catch(console.error);
