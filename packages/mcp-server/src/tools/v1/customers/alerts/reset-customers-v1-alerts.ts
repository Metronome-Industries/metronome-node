// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.alerts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customer-alerts/reset',
  operationId: 'resetCustomerAlerts-v1',
};

export const tool: Tool = {
  name: 'reset_customers_v1_alerts',
  description:
    'Force an immediate re-evaluation of a specific threshold notification for a customer, clearing any previous state and triggering a fresh assessment against current thresholds. This endpoint ensures threshold notification accuracy after configuration changes or data corrections.\n\n### Use this endpoint to:\n- Clear false positive threshold notifications after fixing data issues\n- Re-evaluate threshold notifications after adjusting customer balances or credits\n- Test threshold notification behavior during development and debugging\n- Resolve stuck threshold notification that may be in an incorrect state\n- Trigger immediate evaluation after threshold modifications\n\n### Key response fields: \n- 200 Success: Confirmation that the threshold notification has been reset and re-evaluation initiated\n- No response body is returned - the operation completes asynchronously\n\n### Usage guidelines:\n- Immediate effect: Triggers re-evaluation instantly, which may result in new webhook notifications if thresholds are breached\n- State clearing: Removes any cached evaluation state, ensuring a fresh assessment\n- Use sparingly: Intended for exceptional cases, not routine operations\n- Asynchronous processing: The reset completes immediately, but re-evaluation happens in the background\n',
  inputSchema: {
    type: 'object',
    properties: {
      alert_id: {
        type: 'string',
        description: 'The Metronome ID of the threshold notification',
      },
      customer_id: {
        type: 'string',
        description: 'The Metronome ID of the customer',
      },
    },
    required: ['alert_id', 'customer_id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.customers.alerts.reset(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
