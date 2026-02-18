import Metronome from '@metronome/sdk';

// Initialize with webhook secret (reads METRONOME_WEBHOOK_SECRET from env)
const client = new Metronome();

/**
 * Verify a webhook signature and parse the payload.
 *
 * Use unwrap() to verify the webhook signature and parse the JSON
 * payload in a single call. This is the recommended approach for
 * handling incoming webhooks from Metronome.
 *
 */
async function verifyAndParseWebhook(): Promise<void> {
  // Simulated incoming webhook request
  const rawBody = '{"type":"invoice.finalized","data":{"id":"invoice-123"}}';
  const headers = {
    Date: new Date().toUTCString(),
    'Metronome-Webhook-Signature': 'expected-signature-here',
  };

  try {
    const event = client.webhooks.unwrap(
      rawBody,
      headers,
      // Optional: pass secret explicitly (otherwise uses METRONOME_WEBHOOK_SECRET env var)
      'whsec_your-webhook-secret',
    );

    console.log('Verified webhook event:', event);
  } catch (err) {
    console.error('Webhook verification failed:', err);
  }
}

/**
 * Verify a webhook signature without parsing.
 *
 * Use verifySignature() when you only need to validate authenticity
 * and want to handle parsing separately. Throws an error if the
 * signature is invalid.
 *
 */
async function verifySignatureOnly(): Promise<void> {
  const rawBody = '{"type":"invoice.finalized","data":{"id":"invoice-123"}}';
  const headers = {
    Date: new Date().toUTCString(),
    'Metronome-Webhook-Signature': 'expected-signature-here',
  };

  try {
    client.webhooks.verifySignature(rawBody, headers, 'whsec_your-webhook-secret');
    console.log('Webhook signature is valid');

    // Parse the body yourself
    const event = JSON.parse(rawBody);
    console.log('Event type:', event.type);
  } catch (err) {
    console.error('Invalid webhook signature:', err);
  }
}

/**
 * Handle webhooks in an Express.js middleware.
 *
 * Example of integrating Metronome webhook verification into an
 * Express.js application. The raw body must be passed as a string,
 * not a parsed object.
 *
 */
async function expressWebhookMiddleware(): Promise<void> {
  // This is a conceptual example showing how to use webhook
  // verification in an Express.js route handler:
  //
  // import express from 'express';
  // const app = express();
  //
  // // IMPORTANT: Use raw body parser for the webhook route
  // app.post('/webhooks/metronome',
  //   express.raw({ type: 'application/json' }),
  //   (req, res) => {
  //     try {
  //       const event = client.webhooks.unwrap(
  //         req.body.toString(),
  //         req.headers,
  //       );
  //       // Process the verified event
  //       console.log('Received event:', event);
  //       res.status(200).json({ received: true });
  //     } catch (err) {
  //       console.error('Webhook verification failed:', err);
  //       res.status(400).json({ error: 'Invalid signature' });
  //     }
  //   }
  // );

  console.log('See code comments for Express.js webhook middleware example');
}

// --- Run examples ---
async function main(): Promise<void> {
  await verifyAndParseWebhook();
  await verifySignatureOnly();
  await expressWebhookMiddleware();
}

main().catch(console.error);
