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
  httpPath: '/v1/planDetails/{plan_id}',
  operationId: 'getPlanDetails-v1',
};

export const tool: Tool = {
  name: 'get_details_v1_plans',
  description: 'Fetch high level details of a specific plan.',
  inputSchema: {
    type: 'object',
    properties: {
      plan_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.plans.getDetails(body));
};

export default { metadata, tool, handler };
