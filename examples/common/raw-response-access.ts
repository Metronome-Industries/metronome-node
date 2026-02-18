import Metronome from '@metronome/sdk';

const client = new Metronome();

const SAMPLE_CUSTOMER_ID = 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc';

/**
 * Access the raw HTTP response using .asResponse().
 *
 * Use asResponse() when you need to inspect response headers,
 * status codes, or other HTTP-level metadata without the parsed body.
 *
 */
async function accessRawResponse(): Promise<void> {
  const response = await client.v1.customers
    .retrieve({ customer_id: SAMPLE_CUSTOMER_ID })
    .asResponse();

  console.log('Status:', response.status);
  console.log('Content-Type:', response.headers.get('content-type'));
  console.log('Request ID:', response.headers.get('x-request-id'));
}

/**
 * Access both parsed data and raw response using .withResponse().
 *
 * Use withResponse() when you need the parsed response data and
 * the raw HTTP response together, for example to log request IDs
 * alongside business data.
 *
 */
async function accessDataAndResponse(): Promise<void> {
  const { data, response } = await client.v1.customers
    .retrieve({ customer_id: SAMPLE_CUSTOMER_ID })
    .withResponse();

  console.log('Customer name:', data.data.name);
  console.log('Request ID:', response.headers.get('x-request-id'));
  console.log('Response status:', response.status);
}

// --- Run examples ---
async function main(): Promise<void> {
  await accessRawResponse();
  await accessDataAndResponse();
}

main().catch(console.error);
