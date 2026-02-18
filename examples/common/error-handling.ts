import Metronome from '@metronome/sdk';

const client = new Metronome();

/**
 * Handle API errors using try/catch with instanceof checks.
 *
 * All API errors extend Metronome.APIError, which provides access to
 * the HTTP status code, response headers, and error message. Use
 * specific error subclasses to handle different failure modes.
 *
 */
async function handleErrorsWithTryCatch(): Promise<void> {
  try {
    await client.v1.customers.retrieve({
      customer_id: 'non-existent-id',
    });
  } catch (err) {
    if (err instanceof Metronome.BadRequestError) {
      console.log('Bad request (400):', err.message);
    } else if (err instanceof Metronome.AuthenticationError) {
      console.log('Authentication failed (401):', err.message);
    } else if (err instanceof Metronome.PermissionDeniedError) {
      console.log('Permission denied (403):', err.message);
    } else if (err instanceof Metronome.NotFoundError) {
      console.log('Not found (404):', err.message);
    } else if (err instanceof Metronome.UnprocessableEntityError) {
      console.log('Validation error (422):', err.message);
    } else if (err instanceof Metronome.RateLimitError) {
      console.log('Rate limited (429):', err.message);
    } else if (err instanceof Metronome.InternalServerError) {
      console.log('Server error (5xx):', err.message);
    } else if (err instanceof Metronome.APIConnectionError) {
      console.log('Connection error:', err.message);
    } else if (err instanceof Metronome.APIError) {
      // Catch-all for any other API error
      console.log(`API error (${err.status}):`, err.message);
    } else {
      throw err;
    }
  }
}

/**
 * Access detailed error information from API errors.
 *
 * APIError instances provide the HTTP status code, response headers,
 * and the full error message for debugging and logging purposes.
 *
 */
async function accessErrorDetails(): Promise<void> {
  try {
    await client.v1.customers.retrieve({
      customer_id: 'non-existent-id',
    });
  } catch (err) {
    if (err instanceof Metronome.APIError) {
      console.log('Status code:', err.status);
      console.log('Error name:', err.name);
      console.log('Message:', err.message);
      console.log('Headers:', err.headers);
    }
  }
}

/**
 * Handle errors using promise .catch() chains.
 *
 * An alternative to try/catch for promise-based error handling.
 * Useful when composing multiple async operations.
 *
 */
async function handleErrorsWithPromiseCatch(): Promise<void> {
  await client.v1.customers
    .retrieve({ customer_id: 'non-existent-id' })
    .then((customer) => {
      console.log('Customer:', customer.data.name);
    })
    .catch((err: unknown) => {
      if (!(err instanceof Metronome.APIError)) throw err;
      console.log('Error:', err.status, err.message);
    });
}

// --- Run examples ---
async function main(): Promise<void> {
  await handleErrorsWithTryCatch();
  await accessErrorDetails();
  await handleErrorsWithPromiseCatch();
}

main().catch(console.error);
