import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_INVOICE_ID = '6a37bb88-8538-48c5-b37b-a41c836328bd';

/**
 * Regenerate a voided invoice.
 *
 * Re-creates a previously voided invoice with updated data. Use
 * this after corrections have been made to ensure accurate billing.
 *
 */
async function regenerateInvoice(): Promise<void> {
  const response = await client.v1.invoices.regenerate({
    id: SAMPLE_INVOICE_ID,
  });

  console.log('Regenerated invoice:', response.data);
}

/**
 * Void an invoice.
 *
 * Permanently cancels an invoice so it is no longer collectible.
 * Use this for invoices that were created in error or need to
 * be replaced.
 *
 */
async function voidInvoice(): Promise<void> {
  const response = await client.v1.invoices.void({
    id: SAMPLE_INVOICE_ID,
  });

  console.log('Voided invoice:', response.data);
}

// --- Run examples ---
async function main(): Promise<void> {
  await regenerateInvoice();
  await voidInvoice();
}

main().catch(console.error);
