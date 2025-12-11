// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.settings',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/upsertAvalaraCredentials',
  operationId: 'upsertAvalaraCredentials-v1',
};

export const tool: Tool = {
  name: 'upsert_avalara_credentials_v1_settings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSet the Avalara credentials for some specified `delivery_method_ids`, which can be found in the `/listConfiguredBillingProviders` response. This maps the Avalara credentials to the appropriate billing entity. These credentials are only used for PLG Invoicing today.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/setting_upsert_avalara_credentials_response',\n  $defs: {\n    setting_upsert_avalara_credentials_response: {\n      type: 'object',\n      properties: {}\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      avalara_environment: {
        type: 'string',
        description: 'The Avalara environment to use (SANDBOX or PRODUCTION).',
        enum: ['PRODUCTION', 'SANDBOX'],
      },
      avalara_password: {
        type: 'string',
        description: 'The password for the Avalara account.',
      },
      avalara_username: {
        type: 'string',
        description: 'The username for the Avalara account.',
      },
      delivery_method_ids: {
        type: 'array',
        description:
          'The delivery method IDs of the billing provider configurations to update, can be found in the response of the `/listConfiguredBillingProviders` endpoint.',
        items: {
          type: 'string',
        },
      },
      commit_transactions: {
        type: 'boolean',
        description:
          'Commit transactions if you want Metronome tax calculations used for reporting and tax filings.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['avalara_environment', 'avalara_password', 'avalara_username', 'delivery_method_ids'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.v1.settings.upsertAvalaraCredentials(body)),
    );
  } catch (error) {
    if (error instanceof Metronome.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
