// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * [Security](https://docs.metronome.com/developer-resources/security/) endpoints allow you to retrieve security-related data.
 */
export class Services extends APIResource {
  /**
   * Gets Metronome's service registry with associated IP addresses for security
   * allowlisting and firewall configuration. Use this endpoint to maintain an
   * up-to-date list of IPs that your systems should trust for Metronome
   * communications. Returns service names and their current IP ranges, with new IPs
   * typically appearing 30+ days before first use to ensure smooth allowlist
   * updates.
   *
   * @example
   * ```ts
   * const services = await client.v1.services.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ServiceListResponse> {
    return this._client.get('/v1/services', options);
  }
}

export interface ServiceListResponse {
  services: Array<ServiceListResponse.Service>;
}

export namespace ServiceListResponse {
  export interface Service {
    ips: Array<string>;

    name: string;

    usage: 'makes_connections_from' | 'accepts_connections_at';
  }
}

export declare namespace Services {
  export { type ServiceListResponse as ServiceListResponse };
}
