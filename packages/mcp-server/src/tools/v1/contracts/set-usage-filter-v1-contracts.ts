// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/setUsageFilter',
  operationId: 'setUsageFilter-v1',
};

export const tool: Tool = {
  name: 'set_usage_filter_v1_contracts',
  description:
    'If a customer has multiple contracts with overlapping rates, the usage filter routes usage to the appropriate contract based on a predefined group key. \n\nAs an example, imagine you have a customer associated with two projects. Each project is associated with its own contract. You can create a usage filter with group key `project_id`\non each contract, and route usage for `project_1` to the first contract and `project_2` to the second contract. \n\n### Use this endpoint to:\n- Support enterprise contracting scenarios where multiple contracts are associated to the same customer with the same rates.\n- Update the usage filter associated with the contract over time. \n\n### Usage guidelines:\nTo use usage filters, the `group_key` must be defined on the billable metrics underlying the rate card on the contracts.\n',
  inputSchema: {
    type: 'object',
    properties: {
      contract_id: {
        type: 'string',
      },
      customer_id: {
        type: 'string',
      },
      group_key: {
        type: 'string',
      },
      group_values: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      starting_at: {
        type: 'string',
        format: 'date-time',
      },
    },
    required: ['contract_id', 'customer_id', 'group_key', 'group_values', 'starting_at'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.contracts.setUsageFilter(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
