import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_CUSTOMER_ID = '13117714-3f05-48e5-a6e9-a66093f13b4d';
const SAMPLE_CONTRACT_ID = 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc';
const SAMPLE_RATE_CARD_ID = 'f3d51ae8-f283-44e1-9933-a3cf9ad7a6fe';
const SAMPLE_PRODUCT_ID = 'd6300dbb-882e-4d2d-8dec-5125d16b65d0';
const SAMPLE_CREDIT_TYPE_ID = '2714e483-4ff1-48e4-9e25-ac732e8f24f2';

/**
 * Create a new contract for a customer.
 *
 * Contracts define a customer's products, pricing, discounts, access
 * duration, and billing configuration. This is the central billing
 * agreement for both PLG and Enterprise customers.
 *
 */
async function createContract(): Promise<void> {
  const contract = await client.v1.contracts.create({
    customer_id: SAMPLE_CUSTOMER_ID,
    starting_at: '2024-01-01T00:00:00.000Z',
    rate_card_id: SAMPLE_RATE_CARD_ID,
    billing_provider_configuration: {
      billing_provider: 'stripe',
      delivery_method: 'direct_to_billing_provider',
    },
  });

  console.log('Created contract:', contract.data.id);
}

/**
 * Retrieve a contract by ID.
 *
 * Returns the full contract details including pricing, terms, credits,
 * and commitments.
 *
 */
async function retrieveContract(): Promise<void> {
  const contract = await client.v1.contracts.retrieve({
    contract_id: SAMPLE_CONTRACT_ID,
    customer_id: SAMPLE_CUSTOMER_ID,
  });

  console.log('Contract:', contract.data.id);
  console.log('Starts at:', contract.data.current.starting_at);
}

/**
 * List all contracts for a customer.
 *
 * Returns all contracts associated with a customer, including pricing,
 * terms, credits, and commitments.
 *
 */
async function listContracts(): Promise<void> {
  const contracts = await client.v1.contracts.list({
    customer_id: SAMPLE_CUSTOMER_ID,
  });

  for (const contract of contracts.data) {
    console.log(`Contract: ${contract.id} (starts: ${contract.current.starting_at})`);
  }
}

/**
 * Add a manual balance entry to a commit or credit.
 *
 * Manually adjust the available balance by appending a new ledger entry.
 * Use this to correct usage burn-down errors, account for outages, or
 * issue credits to customers.
 *
 */
async function addManualBalanceEntry(): Promise<void> {
  await client.v1.contracts.addManualBalanceEntry({
    id: '6162d87b-e5db-4a33-b7f2-76ce6ead4e85',
    amount: -1000,
    customer_id: SAMPLE_CUSTOMER_ID,
    reason: 'Credit for service outage on 2024-01-15',
    segment_id: '66368e29-3f97-4d15-a6e9-120897f0070a',
    contract_id: SAMPLE_CONTRACT_ID,
  });

  console.log('Manual balance entry added');
}

/**
 * @deprecated Use v2.contracts.edit() instead. Amendments are being replaced
 * by contract editing. See the migration guide for details.
 *
 * Amend an existing contract.
 *
 */
async function amendContract(): Promise<void> {
  const response = await client.v1.contracts.amend({
    contract_id: SAMPLE_CONTRACT_ID,
    customer_id: SAMPLE_CUSTOMER_ID,
    starting_at: '2024-07-01T00:00:00.000Z',
  });

  console.log('Amendment created:', response.data.id);
}

/**
 * Archive a contract.
 *
 * Permanently ends and archives a contract. Draft invoices are canceled
 * and upcoming scheduled invoices are voided. Finalized invoices can
 * optionally be voided as well.
 *
 */
async function archiveContract(): Promise<void> {
  const response = await client.v1.contracts.archive({
    contract_id: SAMPLE_CONTRACT_ID,
    customer_id: SAMPLE_CUSTOMER_ID,
    void_invoices: true,
  });

  console.log('Archived contract:', response.data.id);
}

/**
 * Create historical usage invoices for past billing periods.
 *
 * Generate retroactive invoices with custom usage line items, quantities,
 * and date ranges. Supports preview mode to validate before creation.
 * Ideal for billing migrations or correcting past billing periods.
 *
 */
async function createHistoricalInvoices(): Promise<void> {
  const response = await client.v1.contracts.createHistoricalInvoices({
    invoices: [
      {
        customer_id: SAMPLE_CUSTOMER_ID,
        contract_id: SAMPLE_CONTRACT_ID,
        credit_type_id: SAMPLE_CREDIT_TYPE_ID,
        inclusive_start_date: '2024-01-01T00:00:00.000Z',
        exclusive_end_date: '2024-02-01T00:00:00.000Z',
        issue_date: '2024-02-01T00:00:00.000Z',
        usage_line_items: [
          {
            product_id: SAMPLE_PRODUCT_ID,
            inclusive_start_date: '2024-01-01T00:00:00.000Z',
            exclusive_end_date: '2024-02-01T00:00:00.000Z',
            quantity: 100,
          },
        ],
      },
    ],
    preview: false,
  });

  console.log('Created historical invoices:', response.data.length);
}

/**
 * Get the net balance across credits and commits for a customer.
 *
 * Retrieves the combined current balance in a single API call. Useful
 * for displaying real-time available balance in billing dashboards or
 * validating expected vs. actual balance during reconciliation.
 *
 */
async function getNetBalance(): Promise<void> {
  const response = await client.v1.contracts.getNetBalance({
    customer_id: SAMPLE_CUSTOMER_ID,
    credit_type_id: SAMPLE_CREDIT_TYPE_ID,
    filters: [
      {
        balance_types: ['CREDIT'],
        custom_fields: { campaign: 'free-trial' },
      },
      {
        balance_types: ['PREPAID_COMMIT', 'POSTPAID_COMMIT'],
        custom_fields: { campaign: 'signup-promotion' },
      },
    ],
  });

  console.log('Net balance:', response.data.balance);
  console.log('Credit type:', response.data.credit_type_id);
}

/**
 * List all balances (commits and credits) for a customer.
 *
 * Provides a comprehensive view of prepaid funds, postpaid commitments,
 * and credits. Supports pagination and optional ledger details.
 *
 */
async function listBalances(): Promise<void> {
  for await (const balance of client.v1.contracts.listBalances({
    customer_id: SAMPLE_CUSTOMER_ID,
    include_ledgers: true,
  })) {
    console.log(`Balance: ${balance.id} - type: ${balance.type}`);
  }
}

/**
 * Get the rate schedule for a specific contract.
 *
 * Returns the rates at a specific point in time, including contract
 * overrides and rate card scheduled changes. Useful for showing
 * customers their current pricing.
 *
 */
async function retrieveRateSchedule(): Promise<void> {
  const response = await client.v1.contracts.retrieveRateSchedule({
    contract_id: SAMPLE_CONTRACT_ID,
    customer_id: SAMPLE_CUSTOMER_ID,
    at: '2024-01-01T00:00:00.000Z',
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

  for (const rate of response.data) {
    console.log(`Product: ${rate.product_name} - Entitled: ${rate.entitled}`);
  }
}

/**
 * Get the history of subscription quantities for a contract.
 *
 * Returns historical changes to subscription seat counts and prices.
 * Useful for building in-product experiences showing customers their
 * subscription history.
 *
 */
async function retrieveSubscriptionQuantityHistory(): Promise<void> {
  const response = await client.v1.contracts.retrieveSubscriptionQuantityHistory({
    contract_id: SAMPLE_CONTRACT_ID,
    customer_id: SAMPLE_CUSTOMER_ID,
    subscription_id: '1a824d53-bde6-4d82-96d7-6347ff227d5c',
  });

  console.log('Subscription history:', response.data);
}

/**
 * Schedule a Professional Services invoice.
 *
 * Creates a scheduled invoice for Professional Services terms on a
 * contract. Availability depends on your client's configuration.
 *
 */
async function scheduleProServicesInvoice(): Promise<void> {
  const response = await client.v1.contracts.scheduleProServicesInvoice({
    contract_id: SAMPLE_CONTRACT_ID,
    customer_id: SAMPLE_CUSTOMER_ID,
    issued_at: '2024-02-01T00:00:00.000Z',
    line_items: [
      {
        professional_service_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      },
    ],
  });

  console.log('Scheduled pro services invoices:', response.data.length);
}

/**
 * Set a usage filter for routing usage to a specific contract.
 *
 * When a customer has multiple contracts with overlapping rates,
 * usage filters route events to the correct contract based on a
 * group key. For example, route usage by project_id to different
 * contracts.
 *
 */
async function setUsageFilter(): Promise<void> {
  await client.v1.contracts.setUsageFilter({
    contract_id: SAMPLE_CONTRACT_ID,
    customer_id: SAMPLE_CUSTOMER_ID,
    group_key: 'project_id',
    group_values: ['project-alpha', 'project-beta'],
    starting_at: '2024-01-01T00:00:00.000Z',
  });

  console.log('Usage filter set');
}

/**
 * Update the end date of a contract.
 *
 * Extend or shorten a contract. Ending early will impact draft usage
 * statements, truncate terms, and remove upcoming scheduled invoices.
 * Extending only changes the contract length without extending terms.
 *
 */
async function updateEndDate(): Promise<void> {
  const response = await client.v1.contracts.updateEndDate({
    contract_id: SAMPLE_CONTRACT_ID,
    customer_id: SAMPLE_CUSTOMER_ID,
    ending_before: '2025-01-01T00:00:00.000Z',
  });

  console.log('Updated contract end date:', response.data);
}

// --- Run examples ---
async function main(): Promise<void> {
  await createContract();
  await retrieveContract();
  await listContracts();
  await addManualBalanceEntry();
  await amendContract();
  await archiveContract();
  await createHistoricalInvoices();
  await getNetBalance();
  await listBalances();
  await retrieveRateSchedule();
  await retrieveSubscriptionQuantityHistory();
  await scheduleProServicesInvoice();
  await setUsageFilter();
  await updateEndDate();
}

main().catch(console.error);
