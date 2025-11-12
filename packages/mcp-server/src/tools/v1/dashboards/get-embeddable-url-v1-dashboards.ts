// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.dashboards',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/dashboards/getEmbeddableUrl',
  operationId: 'embeddableDashboard-v1',
};

export const tool: Tool = {
  name: 'get_embeddable_url_v1_dashboards',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGenerate secure, embeddable dashboard URLs that allow you to seamlessly integrate Metronome's billing visualizations directly into your application. This endpoint creates authenticated iframe-ready URLs for customer-specific dashboards, providing a white-labeled billing experience without building custom UI.\n\n### Use this endpoint to:\n- Embed billing dashboards directly in your customer portal or admin interface\n- Provide self-service access to invoices, usage data, and credit balances\n- Build white-labeled billing experiences with minimal development effort\n\n### Key response fields:\n- A secure, time-limited URL that can be embedded in an iframe\n- The URL includes authentication tokens and configuration parameters\n- URLs are customer-specific and respect your security settings\n\n### Usage guidelines:\n- Dashboard types: Choose from `invoices`, `usage`, or `commits_and_credits`\n- Customization options:\n    - `dashboard_options`: Configure whether you want invoices to show zero usage line items\n    - `color_overrides`: Match your brand's color palette\n    - `bm_group_key_overrides`: Customize how dimensions are displayed (for the usage embeddable dashboard)\n- Iframe implementation: Embed the returned URL directly in an iframe element\n- Responsive design: Dashboards automatically adapt to container dimensions\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/dashboard_get_embeddable_url_response',\n  $defs: {\n    dashboard_get_embeddable_url_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            url: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      dashboard: {
        type: 'string',
        description: 'The type of dashboard to retrieve.',
        enum: ['invoices', 'usage', 'credits', 'commits_and_credits'],
      },
      bm_group_key_overrides: {
        type: 'array',
        description: 'Optional list of billable metric group key overrides',
        items: {
          type: 'object',
          properties: {
            group_key_name: {
              type: 'string',
              description: 'The name of the billable metric group key.',
            },
            display_name: {
              type: 'string',
              description: 'The display name for the billable metric group key',
            },
            value_display_names: {
              type: 'object',
              description:
                '<key, value> pairs of the billable metric group key values and their display names. e.g. {"a": "Asia", "b": "Euro"}',
              additionalProperties: true,
            },
          },
          required: ['group_key_name'],
        },
      },
      color_overrides: {
        type: 'array',
        description: 'Optional list of colors to override',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'The color to override',
              enum: [
                'Gray_dark',
                'Gray_medium',
                'Gray_light',
                'Gray_extralight',
                'White',
                'Primary_medium',
                'Primary_light',
                'UsageLine_0',
                'UsageLine_1',
                'UsageLine_2',
                'UsageLine_3',
                'UsageLine_4',
                'UsageLine_5',
                'UsageLine_6',
                'UsageLine_7',
                'UsageLine_8',
                'UsageLine_9',
                'Primary_green',
                'Primary_red',
                'Progress_bar',
                'Progress_bar_background',
              ],
            },
            value: {
              type: 'string',
              description: 'Hex value representation of the color',
            },
          },
        },
      },
      dashboard_options: {
        type: 'array',
        description: 'Optional dashboard specific options',
        items: {
          type: 'object',
          properties: {
            key: {
              type: 'string',
              description: 'The option key name',
            },
            value: {
              type: 'string',
              description: 'The option value',
            },
          },
          required: ['key', 'value'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['customer_id', 'dashboard'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.v1.dashboards.getEmbeddableURL(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
