// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts.rateCards',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contract-pricing/rate-cards/create',
  operationId: 'createRateCard-v1',
};

export const tool: Tool = {
  name: 'create_contracts_v1_rate_cards',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nIn Metronome, the rate card is the central location for your pricing. Rate cards were built with new product launches and pricing changes in mind - you can update your products and pricing in one place, and that change will be automatically propagated across your customer cohorts. Most clients need only maintain one or a few rate cards within Metronome.\n\n### Use this endpoint to:\n- Create a rate card with a name and description\n- Define the rate card's single underlying fiat currency, and any number of conversion rates between that fiat currency and custom pricing units. You can then add products and associated rates in the fiat currency or custom pricing unit for which you have defined a conversion rate. \n- Set aliases for the rate card. Aliases are human-readable names that you can use in the place of the id of the rate card when provisioning a customer's contract. By using an alias, you can easily create a contract and provision a customer by choosing the paygo rate card, without storing the rate card id in your internal systems. This is helpful when launching a new rate card for paygo customers, you can update the alias for paygo to be scheduled to be assigned to the new rate card without updating your code.\n\n### Key response fields:\n- The ID of the rate card you just created\n\n### Usage guidelines:\n- After creating a rate card, you can now use the addRate or addRates endpoints to add products and their prices to it\n- A rate card alias can only be used by one rate card at a time. If you create a contract with a rate card alias that is already in use by another rate card, the original rate card's alias schedule will be updated. The alias will reference the rate card to which it was most recently assigned.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/id'\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    id: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        }\n      },\n      required: [        'id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Used only in UI/API. It is not exposed to end customers.',
      },
      aliases: {
        type: 'array',
        description:
          'Reference this alias when creating a contract. If the same alias is assigned to multiple rate cards, it will reference the rate card to which it was most recently assigned. It is not exposed to end customers.',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            ending_before: {
              type: 'string',
              format: 'date-time',
            },
            starting_at: {
              type: 'string',
              format: 'date-time',
            },
          },
          required: ['name'],
        },
      },
      credit_type_conversions: {
        type: 'array',
        description: 'Required when using custom pricing units in rates.',
        items: {
          type: 'object',
          properties: {
            custom_credit_type_id: {
              type: 'string',
            },
            fiat_per_custom_credit: {
              type: 'number',
            },
          },
          required: ['custom_credit_type_id', 'fiat_per_custom_credit'],
        },
      },
      custom_fields: {
        type: 'object',
        description: 'Custom fields to be added eg. { "key1": "value1", "key2": "value2" }',
        additionalProperties: true,
      },
      description: {
        type: 'string',
      },
      fiat_credit_type_id: {
        type: 'string',
        description:
          'The Metronome ID of the credit type to associate with the rate card, defaults to USD (cents) if not passed.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['name'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.v1.contracts.rateCards.create(body)));
};

export default { metadata, tool, handler };
