// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customers/{customer_id}/setIngestAliases',
  operationId: 'setIngestAliases-v1',
};

export const tool: Tool = {
  name: 'set_ingest_aliases_v1_customers',
  description:
    'Sets the ingest aliases for a customer. Use this endpoint to associate a Metronome customer with an internal ID for easier tracking between systems. Ingest aliases can be used in the customer_id field when sending usage events to Metronome. \n\nUsage guidelines:\n- This call is idempotent and fully replaces the set of ingest aliases for the given customer.\n- Switching an ingest alias from one customer to another will associate all corresponding usage to the new customer.\n- Use multiple ingest aliases to model child organizations within a single Metronome customer.\n',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      ingest_aliases: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
    required: ['customer_id', 'ingest_aliases'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.customers.setIngestAliases(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
