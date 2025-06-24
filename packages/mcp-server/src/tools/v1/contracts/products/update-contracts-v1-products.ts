// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts.products',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contract-pricing/products/update',
  operationId: 'updateProduct-v1',
};

export const tool: Tool = {
  name: 'update_contracts_v1_products',
  description: 'Update a product\n',
  inputSchema: {
    type: 'object',
    properties: {
      product_id: {
        type: 'string',
        description: 'ID of the product to update',
      },
      starting_at: {
        type: 'string',
        description:
          'Timestamp representing when the update should go into effect. It must be on an hour boundary (e.g. 1:00, not 1:30).',
        format: 'date-time',
      },
      billable_metric_id: {
        type: 'string',
        description:
          "Available for USAGE products only. If not provided, defaults to product's current billable metric.",
      },
      composite_product_ids: {
        type: 'array',
        description:
          "Available for COMPOSITE products only. If not provided, defaults to product's current composite_product_ids.",
        items: {
          type: 'string',
        },
      },
      composite_tags: {
        type: 'array',
        description:
          "Available for COMPOSITE products only. If not provided, defaults to product's current composite_tags.",
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
          "Defaults to product's current refundability status. This field's availability is dependent on your client's configuration.",
      },
      name: {
        type: 'string',
        description: "displayed on invoices. If not provided, defaults to product's current name.",
      },
      netsuite_internal_item_id: {
        type: 'string',
        description:
          "If not provided, defaults to product's current netsuite_internal_item_id. This field's availability is dependent on your client's configuration.",
      },
      netsuite_overage_item_id: {
        type: 'string',
        description:
          "Available for USAGE and COMPOSITE products only. If not provided, defaults to product's current netsuite_overage_item_id. This field's availability is dependent on your client's configuration.",
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
        description: "If not provided, defaults to product's current tags",
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.contracts.products.update(body));
};

export default { metadata, tool, handler };
