import Metronome from '@metronome/sdk';
import * as fs from 'fs';

const client = new Metronome();

const SAMPLE_CUSTOMER_ID = 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc';
const SAMPLE_INVOICE_ID = '6a37bb88-8538-48c5-b37b-a41c836328bd';

/**
 * Retrieve a specific invoice for a customer.
 *
 * Returns the full invoice details including line items, totals,
 * and status information.
 *
 */
async function retrieveInvoice(): Promise<void> {
  const invoice = await client.v1.customers.invoices.retrieve({
    customer_id: SAMPLE_CUSTOMER_ID,
    invoice_id: SAMPLE_INVOICE_ID,
  });

  console.log('Invoice:', invoice.data);
}

/**
 * List all invoices for a customer.
 *
 * Returns a paginated list of all invoices associated with the
 * specified customer, including draft and finalized invoices.
 *
 */
async function listInvoices(): Promise<void> {
  for await (const invoice of client.v1.customers.invoices.list({
    customer_id: SAMPLE_CUSTOMER_ID,
  })) {
    console.log(`Invoice: ${invoice.id} - Status: ${invoice.status}`);
  }
}

/**
 * Add a one-time charge to a customer's next invoice.
 *
 * Attaches an ad-hoc charge to the customer's upcoming billing
 * cycle. Useful for one-time fees, setup charges, or adjustments.
 *
 */
async function addCharge(): Promise<void> {
  const response = await client.v1.customers.invoices.addCharge({
    customer_id: SAMPLE_CUSTOMER_ID,
    charge_id: '5ae4b726-1ebe-439c-9190-9831760ba195',
    customer_plan_id: 'a23b3cf4-47fb-4c3f-bb3d-9e64f7704015',
    description: 'One time setup fee',
    invoice_start_timestamp: '2024-01-01T00:00:00Z',
    price: 250,
    quantity: 1,
  });

  console.log('Charge added:', response);
}

/**
 * List invoice breakdowns for a customer.
 *
 * Returns detailed line-item breakdowns across all invoices within
 * the specified date range.
 *
 */
async function listBreakdowns(): Promise<void> {
  for await (const breakdown of client.v1.customers.invoices.listBreakdowns({
    customer_id: SAMPLE_CUSTOMER_ID,
    ending_before: '2024-02-01T00:00:00.000Z',
    starting_on: '2024-01-01T00:00:00.000Z',
  })) {
    console.log('Breakdown:', breakdown);
  }
}

/**
 * Download an invoice as a PDF.
 *
 * Retrieves the PDF version of an invoice. The response is a raw
 * Response object that you can save to a file or stream.
 *
 */
async function retrievePdf(): Promise<void> {
  const response = await client.v1.customers.invoices.retrievePdf({
    customer_id: SAMPLE_CUSTOMER_ID,
    invoice_id: SAMPLE_INVOICE_ID,
  });

  // Save the PDF to a file
  const blob = await response.blob();
  const buffer = Buffer.from(await blob.arrayBuffer());
  fs.writeFileSync('invoice.pdf', buffer);
  console.log('Invoice PDF saved to invoice.pdf');
}

// --- Run examples ---
async function main(): Promise<void> {
  await retrieveInvoice();
  await listInvoices();
  await addCharge();
  await listBreakdowns();
  await retrievePdf();
}

main().catch(console.error);
