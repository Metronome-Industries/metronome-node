// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.plans',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/planDetails/{plan_id}/charges',
  operationId: 'getPlanCharges-v1',
};

export const tool: Tool = {
  name: 'list_charges_v1_plans',
  description: 'Fetches a list of charges of a specific plan.',
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
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.plans.listCharges(body));
};

export default { metadata, tool, handler };
