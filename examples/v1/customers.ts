import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_CUSTOMER_ID = 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc';

/**
 * Create a new customer in Metronome.
 *
 * Creates a customer with billing provider configuration and ingest aliases.
 * This is typically the first step when onboarding a new customer. After
 * creating the customer, you can create a contract for them.
 *
 */
async function createCustomer(): Promise<void> {
  const customer = await client.v1.customers.create({
    name: 'Acme Corp',
    customer_billing_provider_configurations: [
      {
        billing_provider: 'stripe',
        delivery_method: 'direct_to_billing_provider',
        configuration: {
          stripe_customer_id: 'cus_AJ6y20bjkOOayM',
          stripe_collection_method: 'charge_automatically',
        },
      },
    ],
    ingest_aliases: ['acme-corp', 'team@acme.com'],
  });

  console.log('Created customer:', customer.data.id);
}

/**
 * Retrieve a customer by their Metronome ID.
 *
 * Returns the full customer profile including name, ingest aliases,
 * configuration settings, and custom fields.
 *
 */
async function retrieveCustomer(): Promise<void> {
  const customer = await client.v1.customers.retrieve({
    customer_id: SAMPLE_CUSTOMER_ID,
  });

  console.log('Customer:', customer.data.name);
  console.log('Ingest aliases:', customer.data.ingest_aliases);
  console.log('Created at:', customer.data.created_at);
}

/**
 * List all customers with auto-pagination.
 *
 * Retrieves all customers using auto-pagination. The SDK automatically
 * fetches subsequent pages as you iterate through the results.
 *
 */
async function listCustomers(): Promise<void> {
  for await (const customer of client.v1.customers.list()) {
    console.log(`Customer: ${customer.name} (${customer.id})`);
  }
}

/**
 * Archive a customer.
 *
 * Permanently deactivates a customer. This also archives all contracts
 * and voids all corresponding invoices. Use this if a customer was
 * onboarded by mistake. This action cannot be undone.
 *
 */
async function archiveCustomer(): Promise<void> {
  const response = await client.v1.customers.archive({
    id: '8deed800-1b7a-495d-a207-6c52bac54dc9',
  });

  console.log('Archived customer:', response.data.id);
}

/**
 * List billable metrics available for a customer.
 *
 * Returns all billable metrics that are being tracked for billing
 * calculations for the specified customer.
 *
 */
async function listBillableMetrics(): Promise<void> {
  for await (const metric of client.v1.customers.listBillableMetrics({
    customer_id: SAMPLE_CUSTOMER_ID,
  })) {
    console.log(`Metric: ${metric.name} (${metric.id})`);
  }
}

/**
 * List costs for a customer over a date range.
 *
 * Fetches daily pending costs broken down by credit type and line items.
 * Note: This is a Plans-based (deprecated) endpoint. New clients should
 * use Contracts instead.
 *
 */
async function listCosts(): Promise<void> {
  for await (const cost of client.v1.customers.listCosts({
    customer_id: SAMPLE_CUSTOMER_ID,
    ending_before: '2024-02-01T00:00:00.000Z',
    starting_on: '2024-01-01T00:00:00.000Z',
  })) {
    console.log('Cost entry:', cost);
  }
}

/**
 * Preview how usage events will affect a customer's invoices.
 *
 * Generates draft invoices using the customer's current contract
 * configuration and provided events. Useful for testing how new
 * events will impact billing before they are actually processed.
 *
 */
async function previewEvents(): Promise<void> {
  const response = await client.v1.customers.previewEvents({
    customer_id: SAMPLE_CUSTOMER_ID,
    events: [
      {
        event_type: 'heartbeat',
        timestamp: '2024-01-01T00:00:00Z',
        properties: { cpu_hours: 100, memory_gb_hours: 200 },
      },
    ],
    mode: 'replace',
  });

  console.log('Preview invoices:', response.data);
}

/**
 * Retrieve billing configurations for a customer.
 *
 * Returns all billing configurations previously set for the customer.
 * Use during contract provisioning to fetch the billing_provider_configuration_id
 * needed to set the contract billing configuration.
 *
 */
async function retrieveBillingConfigurations(): Promise<void> {
  const response = await client.v1.customers.retrieveBillingConfigurations({
    customer_id: '6a37bb88-8538-48c5-b37b-a41c836328bd',
  });

  console.log('Billing configurations:', response.data);
}

/**
 * Set billing configurations for a customer.
 *
 * Creates billing configurations that dictate which downstream system
 * to collect payment in or send invoices to. You can create multiple
 * configurations per customer for different billing providers.
 *
 */
async function setBillingConfigurations(): Promise<void> {
  const response = await client.v1.customers.setBillingConfigurations({
    data: [
      {
        customer_id: '4db51251-61de-4bfe-b9ce-495e244f3491',
        billing_provider: 'stripe',
        configuration: {
          stripe_customer_id: 'cus_AJ6y20bjkOOayM',
          stripe_collection_method: 'charge_automatically',
        },
        delivery_method: 'direct_to_billing_provider',
      },
    ],
  });

  console.log('Billing configurations set:', response.data);
}

/**
 * Set ingest aliases for a customer.
 *
 * Associates alternate identifiers with a customer so usage events
 * can reference the customer by your internal IDs instead of the
 * Metronome customer ID. This call fully replaces all existing aliases.
 *
 */
async function setIngestAliases(): Promise<void> {
  await client.v1.customers.setIngestAliases({
    customer_id: SAMPLE_CUSTOMER_ID,
    ingest_aliases: ['team@example.com', 'acme-corp-001'],
  });

  console.log('Ingest aliases updated');
}

/**
 * Set a customer's display name.
 *
 * Updates the customer's name across all billing documents and
 * interfaces. Use after a company rebrands or to correct errors.
 *
 */
async function setName(): Promise<void> {
  const response = await client.v1.customers.setName({
    customer_id: SAMPLE_CUSTOMER_ID,
    name: 'Acme Corporation',
  });

  console.log('Updated customer:', response.data);
}

/**
 * Update a customer's configuration settings.
 *
 * Modify customer-specific settings such as Salesforce account ID
 * without affecting core data like name or ingest aliases.
 *
 */
async function updateConfig(): Promise<void> {
  await client.v1.customers.updateConfig({
    customer_id: SAMPLE_CUSTOMER_ID,
    salesforce_account_id: '0015500001WO1ZiABL',
  });

  console.log('Customer config updated');
}

// --- Run examples ---
async function main(): Promise<void> {
  await createCustomer();
  await retrieveCustomer();
  await listCustomers();
  await archiveCustomer();
  await listBillableMetrics();
  await listCosts();
  await previewEvents();
  await retrieveBillingConfigurations();
  await setBillingConfigurations();
  await setIngestAliases();
  await setName();
  await updateConfig();
}

main().catch(console.error);
