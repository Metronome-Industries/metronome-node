// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.alerts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customer-alerts/list',
  operationId: 'listCustomerAlerts-v1',
};

export const tool: Tool = {
  name: 'list_customers_v1_alerts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve all threshold notification configurations and their current statuses for a specific customer in a single API call. This endpoint provides a comprehensive view of all threshold notification monitoring a customer account.\n\n### Use this endpoint to:\n- Display all active threshold notifications for a customer in dashboards or admin panels\n- Quickly identify which threshold notifications a customer is currently triggering\n- Audit threshold notification coverage for specific accounts\n- Filter threshold notifications by status (enabled, disabled, or archived)\n\n### Key response fields:\n- data: Array of CustomerAlert objects, each containing:\n  - Current evaluation status (`ok`, `in_alarm`, `evaluating`, or `null`)\n  - Complete threshold notification configuration and threshold details\n  - Threshold notification metadata including type, name, and last update time\n- next_page: Pagination cursor for retrieving additional results\n\n### Usage guidelines:\n- Default behavior: Returns only enabled threshold notifications unless `alert_statuses` filter is specified\n- Pagination: Use the `next_page` cursor to retrieve all results for customers with many notifications\n- Performance: Efficiently retrieves multiple threshold notification statuses in a single request instead of making individual calls\n- Filtering: Pass the `alert_statuses` array to include disabled or archived threshold notifications in results\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/customer_alert'\n      }\n    },\n    next_page: {\n      type: 'string'\n    }\n  },\n  required: [    'data',\n    'next_page'\n  ],\n  $defs: {\n    customer_alert: {\n      type: 'object',\n      properties: {\n        alert: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'the Metronome ID of the threshold notification'\n            },\n            name: {\n              type: 'string',\n              description: 'Name of the threshold notification'\n            },\n            status: {\n              type: 'string',\n              description: 'Status of the threshold notification',\n              enum: [                'enabled',\n                'archived',\n                'disabled'\n              ]\n            },\n            threshold: {\n              type: 'number',\n              description: 'Threshold value of the notification policy'\n            },\n            type: {\n              type: 'string',\n              description: 'Type of the threshold notification',\n              enum: [                'low_credit_balance_reached',\n                'spend_threshold_reached',\n                'monthly_invoice_total_spend_threshold_reached',\n                'low_remaining_days_in_plan_reached',\n                'low_remaining_credit_percentage_reached',\n                'usage_threshold_reached',\n                'low_remaining_days_for_commit_segment_reached',\n                'low_remaining_commit_balance_reached',\n                'low_remaining_commit_percentage_reached',\n                'low_remaining_days_for_contract_credit_segment_reached',\n                'low_remaining_contract_credit_balance_reached',\n                'low_remaining_contract_credit_percentage_reached',\n                'low_remaining_contract_credit_and_commit_balance_reached',\n                'low_remaining_seat_balance_reached',\n                'invoice_total_reached'\n              ]\n            },\n            updated_at: {\n              type: 'string',\n              description: 'Timestamp for when the threshold notification was last updated',\n              format: 'date-time'\n            },\n            credit_grant_type_filters: {\n              type: 'array',\n              description: 'An array of strings, representing a way to filter the credit grant this threshold notification applies to, by looking at the credit_grant_type field on the credit grant. This field is only defined for CreditPercentage and CreditBalance notifications',\n              items: {\n                type: 'string'\n              }\n            },\n            credit_type: {\n              $ref: '#/$defs/credit_type_data'\n            },\n            custom_field_filters: {\n              type: 'array',\n              description: 'A list of custom field filters for notification types that support advanced filtering',\n              items: {\n                type: 'object',\n                properties: {\n                  entity: {\n                    type: 'string',\n                    enum: [                      'Contract',\n                      'Commit',\n                      'ContractCredit'\n                    ]\n                  },\n                  key: {\n                    type: 'string'\n                  },\n                  value: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'entity',\n                  'key',\n                  'value'\n                ]\n              }\n            },\n            group_key_filter: {\n              type: 'object',\n              description: 'Scopes threshold notification evaluation to a specific presentation group key on individual line items. Only present for spend notifications.',\n              properties: {\n                key: {\n                  type: 'string'\n                },\n                value: {\n                  type: 'string'\n                }\n              },\n              required: [                'key',\n                'value'\n              ]\n            },\n            group_values: {\n              type: 'array',\n              description: 'Only present for `spend_threshold_reached` notifications. Scope notification to a specific group key on individual line items.',\n              items: {\n                type: 'object',\n                properties: {\n                  key: {\n                    type: 'string'\n                  },\n                  value: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'key'\n                ]\n              }\n            },\n            invoice_types_filter: {\n              type: 'array',\n              description: 'Only supported for invoice_total_reached threshold notifications. A list of invoice types to evaluate.',\n              items: {\n                type: 'string'\n              }\n            },\n            uniqueness_key: {\n              type: 'string',\n              description: 'Prevents the creation of duplicates. If a request to create a record is made with a previously used uniqueness key, a new record will not be created and the request will fail with a 409 error.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'status',\n            'threshold',\n            'type',\n            'updated_at'\n          ]\n        },\n        customer_status: {\n          type: 'string',\n          description: 'The status of the threshold notification. If the notification is archived, null will be returned.',\n          enum: [            'ok',\n            'in_alarm',\n            'evaluating'\n          ]\n        },\n        triggered_by: {\n          type: 'string',\n          description: 'If present, indicates the reason the threshold notification was triggered.'\n        }\n      },\n      required: [        'alert',\n        'customer_status'\n      ]\n    },\n    credit_type_data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
        description: 'The Metronome ID of the customer',
      },
      next_page: {
        type: 'string',
        description: 'Cursor that indicates where the next page of results should start.',
      },
      alert_statuses: {
        type: 'array',
        description:
          'Optionally filter by threshold notification status. If absent, only enabled notifications will be returned.',
        items: {
          type: 'string',
          enum: ['ENABLED', 'DISABLED', 'ARCHIVED'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['customer_id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.v1.customers.alerts.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
