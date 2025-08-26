// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.custom_fields',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customFields/setValues',
  operationId: 'setCustomFields-v1',
};

export const tool: Tool = {
  name: 'set_values_v1_custom_fields',
  description:
    'Sets custom field values on a specific Metronome entity instance. Overwrites existing values for matching keys while preserving other fields. All updates are transactional—either all values are set or none are. Custom field values are limited to 200 characters each.\n',
  inputSchema: {
    type: 'object',
    properties: {
      custom_fields: {
        type: 'object',
        description: 'Custom fields to be added eg. { "key1": "value1", "key2": "value2" }',
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
      entity_id: {
        type: 'string',
      },
    },
    required: ['custom_fields', 'entity', 'entity_id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.customFields.setValues(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
