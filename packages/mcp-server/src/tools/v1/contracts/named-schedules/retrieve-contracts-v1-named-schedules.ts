// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts.named_schedules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contract-pricing/rate-cards/getNamedSchedule',
  operationId: 'getRateCardNamedSchedule-v1',
};

export const tool: Tool = {
  name: 'retrieve_contracts_v1_named_schedules',
  description:
    "Get a named schedule for the given rate card. This endpoint's availability is dependent on your client's configuration.",
  inputSchema: {
    type: 'object',
    properties: {
      rate_card_id: {
        type: 'string',
        description: 'ID of the rate card whose named schedule is to be retrieved',
      },
      schedule_name: {
        type: 'string',
        description: 'The identifier for the schedule to be retrieved',
      },
      covering_date: {
        type: 'string',
        description:
          'If provided, at most one schedule segment will be returned (the one that covers this date). If not provided, all segments will be returned.',
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.contracts.namedSchedules.retrieve(body);
};

export default { metadata, tool, handler };
