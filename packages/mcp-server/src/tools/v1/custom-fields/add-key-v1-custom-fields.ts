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
  httpPath: '/v1/customFields/addKey',
  operationId: 'addCustomFieldKey-v1',
};

export const tool: Tool = {
  name: 'add_key_v1_custom_fields',
  description:
    'Add a key to the allow list for a given entity. There is a 100 character limit on custom field keys.\n',
  inputSchema: {
    type: 'object',
    properties: {
      enforce_uniqueness: {
        type: 'boolean',
      },
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
      key: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.customFields.addKey(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
