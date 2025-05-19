// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.custom_fields',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'list_keys_v1_custom_fields',
  description: 'List all active custom field keys, optionally filtered by entity type.\n',
  inputSchema: {
    type: 'object',
    properties: {
      next_page: {
        type: 'string',
        description: 'Cursor that indicates where the next page of results should start.',
      },
      entities: {
        type: 'array',
        description: 'Optional list of entity types to return keys for',
        items: {
          type: 'string',
          enum: [
            'alert',
            'billable_metric',
            'charge',
            'commit',
            'contract_credit',
            'contract_product',
            'contract',
            'credit_grant',
            'customer_plan',
            'customer',
            'discount',
            'invoice',
            'plan',
            'professional_service',
            'product',
            'rate_card',
            'scheduled_charge',
            'subscription',
          ],
        },
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.customFields.listKeys(body);
};

export default { metadata, tool, handler };
