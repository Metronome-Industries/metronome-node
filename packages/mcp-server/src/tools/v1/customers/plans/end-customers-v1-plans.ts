// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
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
  description: "Change the end date of a customer's plan.",
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
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.customers.plans.end(body);
};

export default { metadata, tool, handler };
