// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    'Creates a new custom field key for a given entity (e.g. billable metric, contract, alert).\n\nCustom fields are properties that you can add to Metronome objects to store metadata like foreign keys or other descriptors. This metadata can get transferred to or accessed by other systems to contextualize Metronome data and power business processes. For example, to service workflows like revenue recognition, reconciliation, and invoicing, custom fields help Metronome know the relationship between entities in the platform and third-party systems.\n\n### Use this endpoint to:\n- Create a new custom field key for Customer objects in Metronome. You can then use the Set Custom Field Values endpoint to set the value of this key for a specific customer. \n- Specify whether the key should enforce uniqueness. If the key is set to enforce uniqueness and you attempt to set a custom field value for the key that already exists, it will fail. \n\n### Usage guidelines:\n- Custom fields set on commits, credits, and contracts can be used to scope alert evaluation. For example, you can create a spend threshold alert that only considers spend associated with contracts with custom field key contract_type and value paygo\n- Custom fields set on products can be used in the Stripe integration to set metadata on invoices.\n- Custom fields for customers, contracts, invoices, products, commits, scheduled charges, and subscriptions are passed down to the invoice.\n',
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
    required: ['enforce_uniqueness', 'entity', 'key'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.customFields.addKey(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
