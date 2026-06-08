# Metronome TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export METRONOME_BEARER_TOKEN="My Bearer Token"
export METRONOME_WEBHOOK_SECRET="My Webhook Secret"
npx -y @metronome/mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "metronome_sdk_api": {
      "command": "npx",
      "args": ["-y", "@metronome/mcp"],
      "env": {
        "METRONOME_BEARER_TOKEN": "My Bearer Token",
        "METRONOME_WEBHOOK_SECRET": "My Webhook Secret"
      }
    }
  }
}
```

### Cursor

If you use Cursor, you can install the MCP server by using the button below. You will need to set your environment variables
in Cursor's `mcp.json`, which can be found in Cursor Settings > Tools & MCP > New MCP Server.

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40metronome%2Fmcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBtZXRyb25vbWUvbWNwIl0sImVudiI6eyJNRVRST05PTUVfQkVBUkVSX1RPS0VOIjoiTXkgQmVhcmVyIFRva2VuIiwiTUVUUk9OT01FX1dFQkhPT0tfU0VDUkVUIjoiTXkgV2ViaG9vayBTZWNyZXQifX0)

### VS Code

If you use MCP, you can install the MCP server by clicking the link below. You will need to set your environment variables
in VS Code's `mcp.json`, which can be found via Command Palette > MCP: Open User Configuration.

[Open VS Code](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40metronome%2Fmcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40metronome%2Fmcp%22%5D%2C%22env%22%3A%7B%22METRONOME_BEARER_TOKEN%22%3A%22My%20Bearer%20Token%22%2C%22METRONOME_WEBHOOK_SECRET%22%3A%22My%20Webhook%20Secret%22%7D%7D)

### Claude Code

If you use Claude Code, you can install the MCP server by running the command below in your terminal. You will need to set your
environment variables in Claude Code's `.claude.json`, which can be found in your home directory.

```
claude mcp add metronome_mcp_api --env METRONOME_BEARER_TOKEN="My Bearer Token" METRONOME_WEBHOOK_SECRET="My Webhook Secret" -- npx -y @metronome/mcp
```

## Code Mode

This MCP server is built on the "Code Mode" tool scheme. In this MCP Server,
your agent will write code against the TypeScript SDK, which will then be executed in an
isolated sandbox. To accomplish this, the server will expose two tools to your agent:

- The first tool is a docs search tool, which can be used to generically query for
  documentation about your API/SDK.

- The second tool is a code tool, where the agent can write code against the TypeScript SDK.
  The code will be executed in a sandbox environment without web or filesystem access. Then,
  anything the code returns or prints will be returned to the agent as the result of the
  tool call.

Using this scheme, agents are capable of performing very complex tasks deterministically
and repeatably.

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Your Metronome API credentials can be provided to the server via the `Authorization` header using the Bearer scheme, or via the following headers:

| Header | Equivalent client option | Security scheme |
| -------------------------- | ------------------------ | --------------- |
| `x-metronome-bearer-token` | `bearerToken` | bearerAuth |

These headers forward your Metronome API token to the upstream Metronome API. They are **not** authentication to the MCP server itself — the HTTP transport has no built-in access control.

**Security notice:** Do not expose the HTTP transport directly to the public internet. Because the server has no built-in authentication layer, any client that can reach the HTTP port can issue tool calls. Place the server behind a network-level control (VPN, firewall rule, or an authenticating reverse proxy) that restricts access to trusted clients only. This applies whether credentials are supplied by the client via headers or stored server-side via environment variables.

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "metronome_sdk_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

### Local code execution over HTTP

The `--code-execution-mode=local` flag runs agent-supplied code directly on the MCP server host using a local Deno process. Use this setting with caution, especially when combined with other configuration options. For example, when combined with `--transport=http`, any client that can reach the HTTP port can execute arbitrary code on the server machine.
