// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/getSubscriptionQuantityHistory',
  operationId: 'getSubscriptionQuantityHistory-v1',
};

export const tool: Tool = {
  name: 'retrieve_subscription_quantity_history_v1_contracts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch the quantity and price for a subscription over time. End-point does not return future scheduled changes.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        fiat_credit_type_id: {\n          type: 'string'\n        },\n        history: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              data: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    quantity: {\n                      type: 'number'\n                    },\n                    total: {\n                      type: 'number'\n                    },\n                    unit_price: {\n                      type: 'number'\n                    }\n                  },\n                  required: [                    'quantity',\n                    'total',\n                    'unit_price'\n                  ]\n                }\n              },\n              starting_at: {\n                type: 'string',\n                format: 'date-time'\n              }\n            },\n            required: [              'data',\n              'starting_at'\n            ]\n          }\n        },\n        subscription_id: {\n          type: 'string'\n        }\n      }\n    }\n  },\n  required: [    'data'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      contract_id: {
        type: 'string',
      },
      customer_id: {
        type: 'string',
      },
      subscription_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['contract_id', 'customer_id', 'subscription_id'],
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.v1.contracts.retrieveSubscriptionQuantityHistory(body)),
  );
};

export default { metadata, tool, handler };
