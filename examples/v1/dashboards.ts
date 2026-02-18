import Metronome from '@metronome/sdk';

const client = new Metronome();

/**
 * Generate an embeddable dashboard URL.
 *
 * Creates a secure, time-limited URL that can be embedded in your
 * application to show customers their usage and billing data.
 * Supports customizing display names, colors, and dashboard options.
 *
 */
async function getEmbeddableURL(): Promise<void> {
  const response = await client.v1.dashboards.getEmbeddableURL({
    customer_id: '4db51251-61de-4bfe-b9ce-495e244f3491',
    dashboard: 'invoices',
    bm_group_key_overrides: [
      {
        group_key_name: 'tenant_id',
        display_name: 'Org ID',
        value_display_names: {
          '48ecb18f358f': 'Cluster EU',
          e358f3ce242d: 'Cluster APAC',
        },
      },
    ],
    color_overrides: [{ name: 'Gray_dark', value: '#1a1a2e' }],
    dashboard_options: [
      { key: 'show_zero_usage_line_items', value: 'false' },
      { key: 'hide_voided_invoices', value: 'true' },
    ],
  });

  console.log('Embeddable URL:', response.data);
}

// --- Run examples ---
async function main(): Promise<void> {
  await getEmbeddableURL();
}

main().catch(console.error);
