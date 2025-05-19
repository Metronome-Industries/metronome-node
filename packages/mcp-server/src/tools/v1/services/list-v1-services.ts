// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.services',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_v1_services',
  description:
    'Fetches a list of services used by Metronome and the associated IP addresses. IP addresses are not necessarily unique between services. In most cases, IP addresses will appear in the list at least 30 days before they are used for the first time.\n',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  return client.v1.services.list();
};

export default { metadata, tool, handler };
