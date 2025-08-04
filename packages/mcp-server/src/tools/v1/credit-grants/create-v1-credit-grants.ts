// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.credit_grants',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/credits/createGrant',
  operationId: 'createGrant-v1',
};

export const tool: Tool = {
  name: 'create_v1_credit_grants',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new credit grant\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        }\n      },\n      required: [        'id'\n      ]\n    }\n  },\n  required: [    'data'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
        description: 'the Metronome ID of the customer',
      },
      expires_at: {
        type: 'string',
        description: 'The credit grant will only apply to usage or charges dated before this timestamp',
        format: 'date-time',
      },
      grant_amount: {
        type: 'object',
        description: 'the amount of credits granted',
        properties: {
          amount: {
            type: 'number',
          },
          credit_type_id: {
            type: 'string',
            description: 'the ID of the pricing unit to be used. Defaults to USD (cents) if not passed.',
          },
        },
        required: ['amount', 'credit_type_id'],
      },
      name: {
        type: 'string',
        description: 'the name of the credit grant as it will appear on invoices',
      },
      paid_amount: {
        type: 'object',
        description: 'the amount paid for this credit grant',
        properties: {
          amount: {
            type: 'number',
          },
          credit_type_id: {
            type: 'string',
            description: 'the ID of the pricing unit to be used. Defaults to USD (cents) if not passed.',
          },
        },
        required: ['amount', 'credit_type_id'],
      },
      priority: {
        type: 'number',
      },
      credit_grant_type: {
        type: 'string',
      },
      custom_fields: {
        type: 'object',
        description: 'Custom fields to attach to the credit grant.',
      },
      effective_at: {
        type: 'string',
        description: 'The credit grant will only apply to usage or charges dated on or after this timestamp',
        format: 'date-time',
      },
      invoice_date: {
        type: 'string',
        description: 'The date to issue an invoice for the paid_amount.',
        format: 'date-time',
      },
      product_ids: {
        type: 'array',
        description:
          'The product(s) which these credits will be applied to. (If unspecified, the credits will be applied to charges for all products.). The array ordering specified here will be used to determine the order in which credits will be applied to invoice line items',
        items: {
          type: 'string',
        },
      },
      reason: {
        type: 'string',
      },
      rollover_settings: {
        type: 'object',
        description:
          'Configure a rollover for this credit grant so if it expires it rolls over a configured amount to a new credit grant. This feature is currently opt-in only. Contact Metronome to be added to the beta.',
        properties: {
          expires_at: {
            type: 'string',
            description: 'The date to expire the rollover credits.',
            format: 'date-time',
          },
          priority: {
            type: 'number',
            description:
              'The priority to give the rollover credit grant that gets created when a rollover happens.',
          },
          rollover_amount: {
            anyOf: [
              {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    description: 'Rollover up to a percentage of the original credit grant amount.',
                    enum: ['MAX_PERCENTAGE'],
                  },
                  value: {
                    type: 'number',
                    description: 'The maximum percentage (0-1) of the original credit grant to rollover.',
                  },
                },
                required: ['type', 'value'],
              },
              {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    description: 'Rollover up to a fixed amount of the original credit grant amount.',
                    enum: ['MAX_AMOUNT'],
                  },
                  value: {
                    type: 'number',
                    description: 'The maximum amount to rollover.',
                  },
                },
                required: ['type', 'value'],
              },
            ],
            description: 'Specify how much to rollover to the rollover credit grant',
          },
        },
        required: ['expires_at', 'priority', 'rollover_amount'],
      },
      uniqueness_key: {
        type: 'string',
        description:
          'Prevents the creation of duplicates. If a request to create a record is made with a previously used uniqueness key, a new record will not be created and the request will fail with a 409 error.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['customer_id', 'expires_at', 'grant_amount', 'name', 'paid_amount', 'priority'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.v1.creditGrants.create(body)));
};

export default { metadata, tool, handler };
