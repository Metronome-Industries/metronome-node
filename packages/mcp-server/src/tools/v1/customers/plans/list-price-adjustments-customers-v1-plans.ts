// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.plans',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/customers/{customer_id}/plans/{customer_plan_id}/priceAdjustments',
  operationId: 'getPlanPriceAdjustments-v1',
};

export const tool: Tool = {
  name: 'list_price_adjustments_customers_v1_plans',
  description:
    'Lists a customer plans adjustments. See the [price adjustments documentation](https://plans-docs.metronome.com/pricing/managing-plans/#price-adjustments) for details.',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      customer_plan_id: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'Max number of results that should be returned',
      },
      next_page: {
        type: 'string',
        description: 'Cursor that indicates where the next page of results should start.',
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.customers.plans.listPriceAdjustments(body);
};

export default { metadata, tool, handler };
