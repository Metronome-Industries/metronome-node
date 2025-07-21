// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.plans',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customers/{customer_id}/plans/{customer_plan_id}/end',
  operationId: 'endCustomerPlan-v1',
};

export const tool: Tool = {
  name: 'end_customers_v1_plans',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nChange the end date of a customer's plan.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      customer_plan_id: {
        type: 'string',
      },
      ending_before: {
        type: 'string',
        description:
          'RFC 3339 timestamp for when the plan ends (exclusive) for this customer. Must be at 0:00 UTC (midnight). If not provided, the plan end date will be cleared.',
        format: 'date-time',
      },
      void_invoices: {
        type: 'boolean',
        description:
          'If true, plan end date can be before the last finalized invoice date. Any invoices generated after the plan end date will be voided.',
      },
      void_stripe_invoices: {
        type: 'boolean',
        description:
          'Only applicable when void_invoices is set to true. If true, for every invoice that is voided we will also attempt to void/delete the stripe invoice (if any). Stripe invoices will be voided if finalized or deleted if still in draft state.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['customer_id', 'customer_plan_id'],
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v1.customers.plans.end(body)));
};

export default { metadata, tool, handler };
