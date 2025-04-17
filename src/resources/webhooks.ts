// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { createHmac } from 'crypto';
import { getRequiredHeader, HeadersLike } from '../core';

export class Webhooks extends APIResource {
  /**
   * Validates that the given payload was sent by Metronome and parses the payload.
   */
  unwrap(
    payload: string,
    headers: HeadersLike,
    secret: string | undefined | null = this._client.webhookSecret,
  ): Object {
    this.verifySignature(payload, headers, secret);
    return JSON.parse(payload);
  }

  private validateSecret(secret: string | null | undefined): asserts secret is string {
    if (typeof secret !== 'string') {
      throw new Error(
        "The webhook secret must either be set using the env var, METRONOME_WEBHOOK_SECRET, on the client class, Metronome({ webhook_secret: '123' }), or passed to this function",
      );
    }

    return;
  }

  private signPayload(payload: string, { date, secret }: { date: string; secret: string }) {
    const encoder = new TextEncoder();
    const toSign = encoder.encode(`${date}\n${payload}`);

    const hmac = createHmac('sha256', secret);
    hmac.update(toSign);

    return hmac.digest('hex');
  }

  /** Make an assertion, if not `true`, then throw. */
  private assert(expr: unknown, msg = ''): asserts expr {
    if (!expr) {
      throw new Error(msg);
    }
  }

  /** Compare to array buffers or data views in a way that timing based attacks
   * cannot gain information about the platform. */
  private timingSafeEqual(
    a: ArrayBufferView | ArrayBufferLike | DataView,
    b: ArrayBufferView | ArrayBufferLike | DataView,
  ): boolean {
    if (a.byteLength !== b.byteLength) {
      return false;
    }
    if (!(a instanceof DataView)) {
      a = new DataView(ArrayBuffer.isView(a) ? a.buffer : a);
    }
    if (!(b instanceof DataView)) {
      b = new DataView(ArrayBuffer.isView(b) ? b.buffer : b);
    }
    this.assert(a instanceof DataView);
    this.assert(b instanceof DataView);
    const length = a.byteLength;
    let out = 0;
    let i = -1;
    while (++i < length) {
      out |= a.getUint8(i) ^ b.getUint8(i);
    }
    return out === 0;
  }

  /**
   * Validates whether or not the webhook payload was sent by Metronome.
   *
   * An error will be raised if the webhook payload was not sent by Metronome.
   */
  verifySignature(
    body: string,
    headers: HeadersLike,
    secret: string | undefined | null = this._client.webhookSecret,
  ): void {
    this.validateSecret(secret);

    const msgDate = getRequiredHeader(headers, 'Date');
    const msgSignature = getRequiredHeader(headers, 'Metronome-Webhook-Signature');

    const now = Date.now();
    const timestampSeconds = Math.floor(new Date(msgDate).valueOf());

    if (isNaN(timestampSeconds)) {
      throw new Error(`Invalid timestamp header: ${msgDate}`);
    }

    if (typeof body !== 'string') {
      throw new Error(
        'Webhook body must be passed as the raw JSON string sent from the server (do not parse it first).',
      );
    }

    const webhook_tolerance_in_ms = 5 * 60 * 1000; // 5 minutes
    if (now - timestampSeconds > webhook_tolerance_in_ms) {
      throw new Error('Webhook timestamp is too old');
    }

    if (timestampSeconds > now + webhook_tolerance_in_ms) {
      throw new Error('Webhook timestamp is too new');
    }

    const expectedSignature = this.signPayload(body, { date: msgDate, secret });
    const encoder = new globalThis.TextEncoder();

    if (this.timingSafeEqual(encoder.encode(msgSignature), encoder.encode(expectedSignature))) {
      // valid!
      return;
    }

    throw new Error('The given webhook signature does not match the expected signature');
  }
}
