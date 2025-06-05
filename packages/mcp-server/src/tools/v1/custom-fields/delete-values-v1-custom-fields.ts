// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.custom_fields',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customFields/deleteValues',
  operationId: 'deleteCustomFields-v1',
};

export const tool: Tool = {
  name: 'delete_values_v1_custom_fields',
  description: 'Deletes one or more custom fields on an instance of a Metronome entity.\n',
  inputSchema: {
    type: 'object',
    properties: {
      entity: {
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
      entity_id: {
        type: 'string',
      },
      keys: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  await client.v1.customFields.deleteValues(body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
