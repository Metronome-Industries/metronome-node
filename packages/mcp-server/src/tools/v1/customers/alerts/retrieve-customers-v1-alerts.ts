// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.alerts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customer-alerts/get',
  operationId: 'getCustomerAlert-v1',
};

export const tool: Tool = {
  name: 'retrieve_customers_v1_alerts',
  description:
    "Retrieve the real-time evaluation status for a specific threshold notification-customer pair. This endpoint provides instant visibility into whether a customer has triggered a threshold notification condition, enabling you to monitor account health and take proactive action based on current threshold notification states.\n\n### Use this endpoint to:\n- Check if a specific customer is currently violating an threshold notification (`in_alarm` status)\n- Verify threshold notification configuration details and threshold values for a customer\n- Monitor the evaluation state of newly created or recently modified threshold notification\n- Build dashboards or automated workflows that respond to specific threshold notification conditions\n- Validate threshold notification behavior before deploying to production customers\n- Integrate threshold notification status checks into customer support tools or admin interfaces\n\n### Key response fields: \nA CustomerAlert object containing:\n\n- `customer_status`: The current evaluation state\n\n- `ok` - Customer is within acceptable thresholds\n- `in_alarm` - Customer has breached the threshold for the notification\n- `evaluating` - Notification is currently being evaluated (typically during initial setup)\n- `null` - Notification has been archived\n- `triggered_by`: Additional context about what caused the notification to trigger (when applicable)\n- alert: Complete threshold notification configuration including:\n  - Notification ID, name, and type\n  - Current threshold values and credit type information\n  - Notification status (enabled, disabled, or archived)\n  - Last update timestamp\n  - Any applied filters (credit grant types, custom fields, group values)\n\n### Usage guidelines:\n- Customer status: Returns the current evaluation state, not historical data. For threshold notification history, use webhook notifications or event logs\n- Required parameters: Both customer_id and alert_id must be valid UUIDs that exist in your organization\n- Archived notifications: Returns null for customer_status if the notification has been archived, but still includes the notification configuration details\n- Performance considerations: This endpoint queries live evaluation state, making it ideal for real-time monitoring but not for bulk status checks\n- Integration patterns: Best used for on-demand status checks in response to user actions or as part of targeted monitoring workflows\n- Error handling: Returns 404 if either the customer or alert_id doesn't exist or isn't accessible to your organization\n",
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
      group_values: {
        type: 'array',
        description:
          'Only present for `spend_threshold_reached` notifications. Retrieve the notification for a specific group key-value pair.',
        items: {
          type: 'object',
          description:
            'Scopes threshold notification evaluation to a specific presentation group key on individual line items. Only present for spend notifications.',
          properties: {
            key: {
              type: 'string',
            },
            value: {
              type: 'string',
            },
          },
          required: ['key', 'value'],
        },
      },
      plans_or_contracts: {
        type: 'string',
        description:
          'When parallel threshold notifications are enabled during migration, this flag denotes whether to fetch notifications for plans or contracts.',
        enum: ['PLANS', 'CONTRACTS'],
      },
      seat_filter: {
        type: 'object',
        description:
          'Only allowed for `low_remaining_seat_balance_reached` notifications. This filters alerts by the seat group key-value pair.',
        properties: {
          seat_group_key: {
            type: 'string',
            description: 'The seat group key (e.g., "seat_id", "user_id")',
          },
          seat_group_value: {
            type: 'string',
            description: 'The specific seat identifier to filter by',
          },
        },
        required: ['seat_group_key', 'seat_group_value'],
      },
    },
    required: ['alert_id', 'customer_id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.v1.customers.alerts.retrieve(body));
  } catch (error) {
    if (error instanceof Metronome.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
