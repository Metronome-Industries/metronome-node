// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.alerts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/alerts/create',
  operationId: 'createAlert-v1',
};

export const tool: Tool = {
  name: 'create_v1_alerts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new threshold notification to monitor customer spending, balances, and billing metrics in real-time. Metronome's notification system provides industry-leading speed with immediate evaluation capabilities, enabling you to proactively manage customer accounts and prevent revenue leakage.\n\nThis endpoint creates configurable threshold notifications that continuously monitor various billing thresholds including spend limits, credit balances, commitment utilization, and invoice totals. Threshold notifications can be configured globally for all customers or targeted to specific customer accounts.\n\n### Use this endpoint to:\n- Proactively monitor customer spending patterns to prevent unexpected overages or credit exhaustion\n- Automate notifications when customers approach commitment limits or credit thresholds\n- Enable real-time intervention for accounts at risk of churn or payment issues\n- Scale billing operations by automating threshold-based workflows and notifications\n\n### Key response fields: \nA successful response returns a CustomerAlert object containing:\n\n- The threshold notification configuration with its unique ID and current status\n- The customer's evaluation status (ok, in_alarm, or evaluating)\n- Threshold notification metadata including type, threshold values, and update timestamps\n\n### Usage guidelines:\n- Immediate evaluation: Set `evaluate_on_create` : `true` (default) for instant evaluation against existing customers\n- Uniqueness constraints: Each threshold notification must have a unique `uniqueness_key` within your organization. Use `release_uniqueness_key` : `true` when archiving to reuse keys\n- Notification type requirements: Different threshold notification types require specific fields (e.g., `billable_metric_id` for usage notifications, `credit_type_id` for credit-based threshold notifications)\n- Webhook delivery: Threshold notifications trigger webhook notifications for real-time integration with your systems. Configure webhook endpoints before creating threshold notifications\n- Performance at scale: Metronome's event-driven architecture processes threshold notification evaluations in real-time as usage events stream in, unlike competitors who rely on periodic polling or batch evaluation cycles\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/alert_create_response',\n  $defs: {\n    alert_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/id'\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    id: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        }\n      },\n      required: [        'id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      alert_type: {
        type: 'string',
        description: 'Type of the threshold notification',
        enum: [
          'low_credit_balance_reached',
          'spend_threshold_reached',
          'monthly_invoice_total_spend_threshold_reached',
          'low_remaining_days_in_plan_reached',
          'low_remaining_credit_percentage_reached',
          'usage_threshold_reached',
          'low_remaining_days_for_commit_segment_reached',
          'low_remaining_commit_balance_reached',
          'low_remaining_commit_percentage_reached',
          'low_remaining_days_for_contract_credit_segment_reached',
          'low_remaining_contract_credit_balance_reached',
          'low_remaining_contract_credit_percentage_reached',
          'low_remaining_contract_credit_and_commit_balance_reached',
          'invoice_total_reached',
          'low_remaining_seat_balance_reached',
        ],
      },
      name: {
        type: 'string',
        description: 'Name of the threshold notification',
      },
      threshold: {
        type: 'number',
        description:
          'Threshold value of the notification policy.  Depending upon the notification type, this number may represent a financial amount, the days remaining, or a percentage reached.',
      },
      billable_metric_id: {
        type: 'string',
        description:
          'For threshold notifications of type `usage_threshold_reached`, specifies which billable metric to track the usage for.',
      },
      credit_grant_type_filters: {
        type: 'array',
        description:
          'An array of strings, representing a way to filter the credit grant this threshold notification applies to, by looking at the credit_grant_type field on the credit grant. This field is only defined for CreditPercentage and CreditBalance notifications',
        items: {
          type: 'string',
        },
      },
      credit_type_id: {
        type: 'string',
        description:
          "ID of the credit's currency, defaults to USD. If the specific notification type requires a pricing unit/currency, find the ID in the [Metronome app](https://app.metronome.com/offering/pricing-units).",
      },
      custom_field_filters: {
        type: 'array',
        description:
          'A list of custom field filters for threshold notification types that support advanced filtering. Only present for contract invoices.',
        items: {
          type: 'object',
          properties: {
            entity: {
              type: 'string',
              enum: ['Contract', 'Commit', 'ContractCredit'],
            },
            key: {
              type: 'string',
            },
            value: {
              type: 'string',
            },
          },
          required: ['entity', 'key', 'value'],
        },
      },
      customer_id: {
        type: 'string',
        description:
          'If provided, will create this threshold notification for this specific customer. To create a notification for all customers, do not specify a `customer_id`.',
      },
      evaluate_on_create: {
        type: 'boolean',
        description:
          'If true, the threshold notification will evaluate immediately on customers that already meet the notification threshold. If false, it will only evaluate on future customers that trigger the threshold. Defaults to true.',
      },
      group_values: {
        type: 'array',
        description:
          'Only present for `spend_threshold_reached` notifications. Scope notification to a specific group key on individual line items.',
        items: {
          type: 'object',
          properties: {
            key: {
              type: 'string',
            },
            value: {
              type: 'string',
            },
          },
          required: ['key'],
        },
      },
      invoice_types_filter: {
        type: 'array',
        description:
          'Only supported for invoice_total_reached threshold notifications. A list of invoice types to evaluate.',
        items: {
          type: 'string',
        },
      },
      plan_id: {
        type: 'string',
        description:
          'If provided, will create this threshold notification for this specific plan. To create a notification for all customers, do not specify a `plan_id`.',
      },
      seat_filter: {
        type: 'object',
        description:
          'Required for `low_remaining_seat_balance_reached` notifications. The alert is scoped to this seat group key-value pair.',
        properties: {
          seat_group_key: {
            type: 'string',
            description: 'The seat group key (e.g., "seat_id", "user_id")',
          },
          seat_group_value: {
            type: 'string',
            description: 'Optional seat identifier the alert is scoped to.',
          },
        },
        required: ['seat_group_key'],
      },
      uniqueness_key: {
        type: 'string',
        description:
          'Prevents the creation of duplicates. If a request to create a record is made with a previously used uniqueness key, a new record will not be created and the request will fail with a 409 error.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['alert_type', 'name', 'threshold'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.v1.alerts.create(body)));
  } catch (error) {
    if (error instanceof Metronome.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
