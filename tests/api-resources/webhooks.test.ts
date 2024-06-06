// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from 'metronome';

const metronome = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  const requestBody = `{
    "id": "b2c9e307-624e-4e7d-a5a4-1b74107d78c4",
    "type": "widget_created",
    "properties": {
      "customer_id": "5f794d50-085a-4db6-8d15-286e518b7225",
      "widget_id": "0891458d-b6f0-4fdd-a41e-380aae1a1e38"
    }
  }`;
  const payload = Buffer.from(requestBody).toString('utf8');
  const signature = 'b82652fa2246cf1d8a27e591f155c865f68b46c19b9213fd9c052f2419b4742b';
  const date = 'Mon, 02 Jan 2006 22:04:05 GMT';
  const headers = {
    Date: date,
    'Metronome-Webhook-Signature': signature,
  };
  const secret = 'correct-horse-battery-staple';
  const fakeNow = new Date(date).valueOf();

  beforeEach(() => {
    jest.spyOn(global.Date, 'now').mockImplementation(() => fakeNow);
  });

  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });

  describe('unwrap', () => {
    it('deserializes the payload object', () => {
      metronome.webhooks.unwrap(payload, headers, secret);
    });
  });

  it('should pass for valid signature', () => {
    metronome.webhooks.verifySignature(payload, headers, secret);
  });

  it('should throw for timestamp outside threshold', () => {
    jest.spyOn(global.Date, 'now').mockImplementation(() => fakeNow + 360000); // 6 minutes
    expect(() =>
      metronome.webhooks.verifySignature(payload, headers, secret),
    ).toThrowErrorMatchingInlineSnapshot(`"Webhook timestamp is too old"`);

    jest.spyOn(global.Date, 'now').mockImplementation(() => fakeNow - 360000); // 6 minutes
    expect(() =>
      metronome.webhooks.verifySignature(payload, headers, secret),
    ).toThrowErrorMatchingInlineSnapshot(`"Webhook timestamp is too new"`);
  });

  it('should throw an error for invalid secret format', () => {
    expect(() => {
      metronome.webhooks.verifySignature(payload, headers, 'invalid secret');
    }).toThrowErrorMatchingInlineSnapshot(
      `"The given webhook signature does not match the expected signature"`,
    );
  });

  it('should throw for invalid signature', () => {
    expect(() =>
      metronome.webhooks.verifySignature(payload, headers, Buffer.from('foo').toString('base64')),
    ).toThrowErrorMatchingInlineSnapshot(
      `"The given webhook signature does not match the expected signature"`,
    );
  });

  it('should throw for invalid timestamp', () => {
    expect(() =>
      metronome.webhooks.verifySignature(
        payload,
        {
          ...headers,
          Date: 'nan',
        },
        secret,
      ),
    ).toThrowErrorMatchingInlineSnapshot(`"Invalid timestamp header: nan"`);
  });

  it('should throw if payload is not a string', () => {
    expect(() =>
      metronome.webhooks.verifySignature({ payload: 'not a string' } as any, headers, secret),
    ).toThrowErrorMatchingInlineSnapshot(
      `"Webhook body must be passed as the raw JSON string sent from the server (do not parse it first)."`,
    );
  });
});
