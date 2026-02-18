import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_CUSTOMER_ID = '13117714-3f05-48e5-a6e9-a66093f13b4d';
const SAMPLE_INVOICE_ID = '6162d87b-e5db-4a33-b7f2-76ce6ead4e85';

/**
 * List payment attempts for an invoice.
 *
 * Fetches all payment attempts for a specific invoice, optionally
 * filtered by status. Useful for tracking payment progress and
 * identifying failed payments that need intervention.
 *
 */
async function listPayments(): Promise<void> {
  for await (const payment of client.v1.payments.list({
    customer_id: SAMPLE_CUSTOMER_ID,
    invoice_id: SAMPLE_INVOICE_ID,
    statuses: ['pending', 'requires_intervention'],
  })) {
    console.log(`Payment: ${payment.id} - Status: ${payment.status}`);
  }
}

/**
 * Trigger a new payment attempt for an invoice.
 *
 * Retries payment collection for an invoice that previously failed
 * or requires a new attempt.
 *
 */
async function attemptPayment(): Promise<void> {
  const response = await client.v1.payments.attempt({
    customer_id: SAMPLE_CUSTOMER_ID,
    invoice_id: SAMPLE_INVOICE_ID,
  });

  console.log('Payment attempt:', response.data);
}

/**
 * Cancel a payment attempt.
 *
 * Cancels an existing payment attempt that is pending or in
 * progress. Useful when payment needs to be re-attempted through
 * a different method.
 *
 */
async function cancelPayment(): Promise<void> {
  const response = await client.v1.payments.cancel({
    customer_id: SAMPLE_CUSTOMER_ID,
    invoice_id: SAMPLE_INVOICE_ID,
  });

  console.log('Payment cancelled:', response.data);
}

// --- Run examples ---
async function main(): Promise<void> {
  await listPayments();
  await attemptPayment();
  await cancelPayment();
}

main().catch(console.error);
