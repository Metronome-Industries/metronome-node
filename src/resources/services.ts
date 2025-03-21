// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Services extends APIResource {
  /**
   * Fetches a list of services used by Metronome and the associated IP addresses. IP
   * addresses are not necessarily unique between services. In most cases, IP
   * addresses will appear in the list at least 30 days before they are used for the
   * first time.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ServiceListResponse> {
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
