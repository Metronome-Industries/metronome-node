// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch all customer alert statuses and alert information for a customer\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          alert: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'the Metronome ID of the alert'\n              },\n              name: {\n                type: 'string',\n                description: 'Name of the alert'\n              },\n              status: {\n                type: 'string',\n                description: 'Status of the alert',\n                enum: [                  'enabled',\n                  'archived',\n                  'disabled'\n                ]\n              },\n              threshold: {\n                type: 'number',\n                description: 'Threshold value of the alert policy'\n              },\n              type: {\n                type: 'string',\n                description: 'Type of the alert',\n                enum: [                  'low_credit_balance_reached',\n                  'spend_threshold_reached',\n                  'monthly_invoice_total_spend_threshold_reached',\n                  'low_remaining_days_in_plan_reached',\n                  'low_remaining_credit_percentage_reached',\n                  'usage_threshold_reached',\n                  'low_remaining_days_for_commit_segment_reached',\n                  'low_remaining_commit_balance_reached',\n                  'low_remaining_commit_percentage_reached',\n                  'low_remaining_days_for_contract_credit_segment_reached',\n                  'low_remaining_contract_credit_balance_reached',\n                  'low_remaining_contract_credit_percentage_reached',\n                  'low_remaining_contract_credit_and_commit_balance_reached',\n                  'invoice_total_reached'\n                ]\n              },\n              updated_at: {\n                type: 'string',\n                description: 'Timestamp for when the alert was last updated',\n                format: 'date-time'\n              },\n              credit_grant_type_filters: {\n                type: 'array',\n                description: 'An array of strings, representing a way to filter the credit grant this alert applies to, by looking at the credit_grant_type field on the credit grant. This field is only defined for CreditPercentage and CreditBalance alerts',\n                items: {\n                  type: 'string'\n                }\n              },\n              credit_type: {\n                type: 'object',\n                properties: {\n                  id: {\n                    type: 'string'\n                  },\n                  name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'id',\n                  'name'\n                ]\n              },\n              custom_field_filters: {\n                type: 'array',\n                description: 'A list of custom field filters for alert types that support advanced filtering',\n                items: {\n                  type: 'object',\n                  properties: {\n                    entity: {\n                      type: 'string',\n                      enum: [                        'Contract',\n                        'Commit',\n                        'ContractCredit'\n                      ]\n                    },\n                    key: {\n                      type: 'string'\n                    },\n                    value: {\n                      type: 'string'\n                    }\n                  },\n                  required: [                    'entity',\n                    'key',\n                    'value'\n                  ]\n                }\n              },\n              group_key_filter: {\n                type: 'object',\n                description: 'Scopes alert evaluation to a specific presentation group key on individual line items. Only present for spend alerts.',\n                properties: {\n                  key: {\n                    type: 'string'\n                  },\n                  value: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'key',\n                  'value'\n                ]\n              },\n              group_values: {\n                type: 'array',\n                description: 'Only present for `spend_threshold_reached` alerts. Scope alert to a specific group key on individual line items.',\n                items: {\n                  type: 'object',\n                  properties: {\n                    key: {\n                      type: 'string'\n                    },\n                    value: {\n                      type: 'string'\n                    }\n                  },\n                  required: [                    'key',\n                    'value'\n                  ]\n                }\n              },\n              invoice_types_filter: {\n                type: 'array',\n                description: 'Only supported for invoice_total_reached alerts. A list of invoice types to evaluate.',\n                items: {\n                  type: 'string'\n                }\n              },\n              uniqueness_key: {\n                type: 'string',\n                description: 'Prevents the creation of duplicates. If a request to create a record is made with a previously used uniqueness key, a new record will not be created and the request will fail with a 409 error.'\n              }\n            },\n            required: [              'id',\n              'name',\n              'status',\n              'threshold',\n              'type',\n              'updated_at'\n            ]\n          },\n          customer_status: {\n            type: 'string',\n            description: 'The status of the customer alert. If the alert is archived, null will be returned.',\n            enum: [              'ok',\n              'in_alarm',\n              'evaluating'\n            ]\n          },\n          triggered_by: {\n            type: 'string',\n            description: 'If present, indicates the reason the alert was triggered.'\n          }\n        },\n        required: [          'alert',\n          'customer_status'\n        ]\n      }\n    },\n    next_page: {\n      type: 'string'\n    }\n  },\n  required: [    'data',\n    'next_page'\n  ]\n}\n```",
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
        description: 'Optionally filter by alert status. If absent, only enabled alerts will be returned.',
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v1.customers.alerts.list(body)));
};

export default { metadata, tool, handler };
