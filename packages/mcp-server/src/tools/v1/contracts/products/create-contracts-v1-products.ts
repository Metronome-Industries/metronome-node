// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts.products',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contract-pricing/products/create',
  operationId: 'createProduct-v1',
};

export const tool: Tool = {
  name: 'create_contracts_v1_products',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new product\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        }\n      },\n      required: [        'id'\n      ]\n    }\n  },\n  required: [    'data'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'displayed on invoices',
      },
      type: {
        type: 'string',
        enum: ['FIXED', 'USAGE', 'COMPOSITE', 'SUBSCRIPTION', 'PROFESSIONAL_SERVICE', 'PRO_SERVICE'],
      },
      billable_metric_id: {
        type: 'string',
        description: 'Required for USAGE products',
      },
      composite_product_ids: {
        type: 'array',
        description: 'Required for COMPOSITE products',
        items: {
          type: 'string',
        },
      },
      composite_tags: {
        type: 'array',
        description: 'Required for COMPOSITE products',
        items: {
          type: 'string',
        },
      },
      exclude_free_usage: {
        type: 'boolean',
        description:
          'Beta feature only available for composite products. If true, products with $0 will not be included when computing composite usage. Defaults to false',
      },
      is_refundable: {
        type: 'boolean',
        description:
          "This field's availability is dependent on your client's configuration. Defaults to true.",
      },
      netsuite_internal_item_id: {
        type: 'string',
        description: "This field's availability is dependent on your client's configuration.",
      },
      netsuite_overage_item_id: {
        type: 'string',
        description: "This field's availability is dependent on your client's configuration.",
      },
      presentation_group_key: {
        type: 'array',
        description:
          'For USAGE products only. Groups usage line items on invoices. The superset of values in the pricing group key and presentation group key must be set as one compound group key on the billable metric.',
        items: {
          type: 'string',
        },
      },
      pricing_group_key: {
        type: 'array',
        description:
          'For USAGE products only. If set, pricing for this product will be determined for each pricing_group_key value, as opposed to the product as a whole. The superset of values in the pricing group key and presentation group key must be set as one compound group key on the billable metric.',
        items: {
          type: 'string',
        },
      },
      quantity_conversion: {
        type: 'object',
        description:
          'Optional. Only valid for USAGE products. If provided, the quantity will be converted using the provided conversion factor and operation. For example, if the operation is "multiply" and the conversion factor is 100, then the quantity will be multiplied by 100. This can be used in cases where data is sent in one unit and priced in another.  For example, data could be sent in MB and priced in GB. In this case, the conversion factor would be 1024 and the operation would be "divide".',
        properties: {
          conversion_factor: {
            type: 'number',
            description: 'The factor to multiply or divide the quantity by.',
          },
          operation: {
            type: 'string',
            description: 'The operation to perform on the quantity',
            enum: ['MULTIPLY', 'DIVIDE'],
          },
          name: {
            type: 'string',
            description: 'Optional name for this conversion.',
          },
        },
        required: ['conversion_factor', 'operation'],
      },
      quantity_rounding: {
        type: 'object',
        description:
          'Optional. Only valid for USAGE products. If provided, the quantity will be rounded using the provided rounding method and decimal places. For example, if the method is "round up" and the decimal places is 0, then the quantity will be rounded up to the nearest integer.',
        properties: {
          decimal_places: {
            type: 'number',
          },
          rounding_method: {
            type: 'string',
            enum: ['ROUND_UP', 'ROUND_DOWN', 'ROUND_HALF_UP'],
          },
        },
        required: ['decimal_places', 'rounding_method'],
      },
      tags: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['name', 'type'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v1.contracts.products.create(body)));
};

export default { metadata, tool, handler };
