// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
  description: 'Create a new alert',
  inputSchema: {
    type: 'object',
    properties: {
      alert_type: {
        type: 'string',
        description: 'Type of the alert',
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
        ],
      },
      name: {
        type: 'string',
        description: 'Name of the alert',
      },
      threshold: {
        type: 'number',
        description:
          'Threshold value of the alert policy.  Depending upon the alert type, this number may represent a financial amount, the days remaining, or a percentage reached.',
      },
      billable_metric_id: {
        type: 'string',
        description:
          'For alerts of type `usage_threshold_reached`, specifies which billable metric to track the usage for.',
      },
      credit_grant_type_filters: {
        type: 'array',
        description:
          'An array of strings, representing a way to filter the credit grant this alert applies to, by looking at the credit_grant_type field on the credit grant. This field is only defined for CreditPercentage and CreditBalance alerts',
        items: {
          type: 'string',
        },
      },
      credit_type_id: {
        type: 'string',
      },
      custom_field_filters: {
        type: 'array',
        description:
          'A list of custom field filters for alert types that support advanced filtering. Only present for contract invoices.',
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
          'If provided, will create this alert for this specific customer. To create an alert for all customers, do not specify a `customer_id`.',
      },
      evaluate_on_create: {
        type: 'boolean',
        description:
          'If true, the alert will evaluate immediately on customers that already meet the alert threshold. If false, it will only evaluate on future customers that trigger the alert threshold. Defaults to true.',
      },
      group_key_filter: {
        type: 'object',
        description:
          'Scopes alert evaluation to a specific presentation group key on individual line items. Only present for spend alerts.',
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
      invoice_types_filter: {
        type: 'array',
        description: 'Only supported for invoice_total_reached alerts. A list of invoice types to evaluate.',
        items: {
          type: 'string',
        },
      },
      plan_id: {
        type: 'string',
        description:
          'If provided, will create this alert for this specific plan. To create an alert for all customers, do not specify a `plan_id`.',
      },
      uniqueness_key: {
        type: 'string',
        description:
          'Prevents the creation of duplicates. If a request to create a record is made with a previously used uniqueness key, a new record will not be created and the request will fail with a 409 error.',
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.alerts.create(body);
};

export default { metadata, tool, handler };
