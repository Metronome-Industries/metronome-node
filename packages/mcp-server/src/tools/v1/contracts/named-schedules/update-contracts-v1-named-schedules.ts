// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts.named_schedules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contract-pricing/rate-cards/updateNamedSchedule',
  operationId: 'updateRateCardNamedSchedule-v1',
};

export const tool: Tool = {
  name: 'update_contracts_v1_named_schedules',
  description:
    "Update a named schedule for the given rate card. This endpoint's availability is dependent on your client's configuration.",
  inputSchema: {
    type: 'object',
    properties: {
      rate_card_id: {
        type: 'string',
        description: 'ID of the rate card whose named schedule is to be updated',
      },
      schedule_name: {
        type: 'string',
        description: 'The identifier for the schedule to be updated',
      },
      starting_at: {
        type: 'string',
        format: 'date-time',
      },
      value: {
        type: 'object',
        description:
          'The value to set for the named schedule. The structure of this object is specific to the named schedule.',
      },
      ending_before: {
        type: 'string',
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.contracts.namedSchedules.update(body);
};

export default { metadata, tool, handler };
