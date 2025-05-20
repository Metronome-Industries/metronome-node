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
  name: 'set_values_v1_custom_fields',
  description:
    'Sets one or more custom fields on an instance of a Metronome entity. If a key/value pair passed in this request matches one already set on the entity, its value will be overwritten. Any key/value pairs that exist on the entity that do not match those passed in this request will remain untouched. This endpoint is transactional and will update all key/value pairs or no key/value pairs. Partial updates are not supported. There is a 200 character limit on custom field values.\n',
  inputSchema: {
    type: 'object',
    properties: {
      custom_fields: {
        type: 'object',
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
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.customFields.setValues(body);
};

export default { metadata, tool, handler };
