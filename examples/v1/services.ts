import Metronome from '@metronome/sdk';

const client = new Metronome();

/**
 * List Metronome's service registry.
 *
 * Returns Metronome's service endpoints and their IP addresses.
 * Useful for configuring firewall rules or network allowlists.
 *
 */
async function listServices(): Promise<void> {
  const services = await client.v1.services.list();

  for (const service of services.services) {
    console.log(`Service: ${service.name} - IPs: ${service.ips.join(', ')}`);
  }
}

// --- Run examples ---
async function main(): Promise<void> {
  await listServices();
}

main().catch(console.error);
