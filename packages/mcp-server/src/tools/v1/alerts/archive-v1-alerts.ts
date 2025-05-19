// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.alerts',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'archive_v1_alerts',
  description: 'Archive an existing alert',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The Metronome ID of the alert',
      },
      release_uniqueness_key: {
        type: 'boolean',
        description: 'If true, resets the uniqueness key on this alert so it can be re-used',
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.alerts.archive(body);
};

export default { metadata, tool, handler };
