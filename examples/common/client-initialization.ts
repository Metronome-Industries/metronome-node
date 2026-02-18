import Metronome from '@metronome/sdk';

/**
 * Initialize the Metronome client using the default environment variable.
 *
 * The client automatically reads the METRONOME_BEARER_TOKEN environment
 * variable. This is the recommended approach for most use cases.
 *
 */
async function initializeWithEnvVar(): Promise<void> {
  const client = new Metronome();

  // Verify the client works by listing customers
  const customers = await client.v1.customers.list();
  console.log('Client initialized with env var');
  for await (const customer of customers) {
    console.log(`Customer: ${customer.name}`);
    break; // just verify it works
  }
}

/**
 * Initialize the Metronome client with an explicit bearer token.
 *
 * Use this approach when you need to pass the token programmatically,
 * for example when reading from a secrets manager or vault.
 *
 */
async function initializeWithExplicitToken(): Promise<void> {
  const client = new Metronome({
    bearerToken: 'my-bearer-token',
  });

  console.log('Client initialized with explicit token');
}

/**
 * Initialize the Metronome client with custom configuration options.
 *
 * Customize timeout, retry behavior, logging, and other options to
 * match your application's requirements.
 *
 */
async function initializeWithCustomOptions(): Promise<void> {
  const client = new Metronome({
    timeout: 30_000, // 30 second timeout (default is 60s)
    maxRetries: 5, // retry up to 5 times (default is 2)
    logLevel: 'debug', // enable debug logging
  });

  console.log('Client initialized with custom options');
}

/**
 * Create a modified copy of the client with different options.
 *
 * Use withOptions() to create a new client instance that inherits
 * all settings from the original but overrides specific options.
 * This is useful for one-off requests that need different timeouts
 * or retry behavior.
 *
 */
async function createModifiedClient(): Promise<void> {
  const client = new Metronome();

  // Create a copy with a longer timeout for a slow request
  const slowClient = client.withOptions({
    timeout: 120_000, // 2 minute timeout
  });

  console.log('Modified client created with extended timeout');
}

// --- Run examples ---
async function main(): Promise<void> {
  await initializeWithEnvVar();
  await initializeWithExplicitToken();
  await initializeWithCustomOptions();
  await createModifiedClient();
}

main().catch(console.error);
