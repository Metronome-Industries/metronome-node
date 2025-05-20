// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.plans',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_customers_v1_plans',
  description:
    'Fetches a list of customers on a specific plan (by default, only currently active plans are included)',
  inputSchema: {
    type: 'object',
    properties: {
      plan_id: {
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
      status: {
        type: 'string',
        description:
          "Status of customers on a given plan. Defaults to `active`.\n\n* `all` - Return current, past, and upcoming customers of the plan.\n* `active` - Return current customers of the plan.\n* `ended` - Return past customers of the plan.\n* `upcoming` - Return upcoming customers of the plan.\n\nMultiple statuses can be OR'd together using commas, e.g. `active,ended`.\n**Note:** `ended,upcoming` combination is not yet supported.",
        enum: ['all', 'active', 'ended', 'upcoming'],
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.plans.listCustomers(body);
};

export default { metadata, tool, handler };
