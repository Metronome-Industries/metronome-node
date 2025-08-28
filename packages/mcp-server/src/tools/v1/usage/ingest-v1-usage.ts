// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.usage',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/ingest',
  operationId: 'ingest-v1',
};

export const tool: Tool = {
  name: 'ingest_v1_usage',
  description:
    'The ingest endpoint is the primary method for sending usage events to Metronome, serving as the foundation for all billing calculations in your usage-based pricing model. This high-throughput endpoint is designed for real-time streaming ingestion, supports backdating 34 days, and is built to handle mission-critical usage data with enterprise-grade reliability. Metronome supports 100,000 events per second without requiring pre-aggregation or rollups and can scale up from there. See [Getting usage into Metronome](https://docs.metronome.com/connect-metronome/) to learn more about usage events.\n\n### Use this endpoint to:\nCreate a customer usage pipeline into Metronome that drives billable metrics, credit drawdown, and invoicing. Track customer behavior, resource consumption, and feature usage\n\nWhat happens when you send events:\n- Events are validated and processed in real-time\n- Events are matched to customers using customer IDs or customer ingest aliases\n- Events are matched to billable metrics and are immediately available for usage and spend calculations\n\n### Usage guidelines:\n- Historical events can be backdated up to 34 days and will immediately impact live customer spend\n- Duplicate events are automatically detected and ignored (34-day deduplication window)\n\nEvent structure:\nUsage events are simple JSON objects designed for flexibility and ease of integration:\n```json\n{\n  "transaction_id": "2021-01-01T00:00:00Z_cluster42",\n  "customer_id": "team@example.com",\n  "event_type": "api_request",\n  "timestamp": "2021-01-01T00:00:00Z",\n  "properties": {\n    "endpoint": "/v1/users",\n    "method": "POST",\n    "response_time_ms": 45,\n    "region": "us-west-2"\n  }\n}\n```\n\n- Transaction ID\\\n  The transaction_id serves as your idempotency key, ensuring events are processed exactly once. Metronome maintains a 34-day deduplication window - significantly longer than typical 12-hour windows - enabling robust backfill scenarios without duplicate billing.\n  - Best Practices:\n    - Use UUIDs for one-time events: uuid4()\n    - For heartbeat events, use deterministic IDs\n    - Include enough context to avoid collisions across different event sources\n\n- Customer ID\\\nIdentifies which customer should be billed for this usage. Supports two identification methods:\n  - Metronome Customer ID: The UUID returned when creating a customer\n  - Ingest Alias: Your system\'s identifier (email, account number, etc.) \n\nIngest aliases enable seamless integration without requiring ID mapping, and customers can have multiple aliases for flexibility.\n\n- Event Type:\nCategorizes the event type for billable metric matching. Choose descriptive names that aligns with the product surface area.\n\n- Properties:\nFlexible metadata also used to match billable metrics or to be used to serve as group keys to create multiple pricing dimensions or breakdown costs by novel properties for end customers or internal finance teams measuring underlying COGs.\n',
  inputSchema: {
    type: 'object',
    properties: {
      usage: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            customer_id: {
              type: 'string',
            },
            event_type: {
              type: 'string',
            },
            timestamp: {
              type: 'string',
              description: 'RFC 3339 formatted',
            },
            transaction_id: {
              type: 'string',
            },
            properties: {
              type: 'object',
              additionalProperties: true,
            },
          },
          required: ['customer_id', 'event_type', 'timestamp', 'transaction_id'],
        },
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.usage.ingest(body['usage']).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
