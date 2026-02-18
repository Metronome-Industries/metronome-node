import Metronome from '@metronome/sdk';

const client = new Metronome();

/**
 * Set Avalara tax provider credentials.
 *
 * Configures Avalara integration for automated tax calculation
 * on invoices. Supports both sandbox and production environments.
 *
 */
async function upsertAvalaraCredentials(): Promise<void> {
  const response = await client.v1.settings.upsertAvalaraCredentials({
    avalara_environment: 'PRODUCTION',
    avalara_password: 'my_password_123',
    avalara_username: 'test@metronome.com',
    delivery_method_ids: ['9a906ebb-fbc7-42e8-8e29-53bfd2db3aca'],
    commit_transactions: true,
  });

  console.log('Avalara credentials set');
}

// --- Run examples ---
async function main(): Promise<void> {
  await upsertAvalaraCredentials();
}

main().catch(console.error);
