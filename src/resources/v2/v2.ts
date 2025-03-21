// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ContractsAPI from './contracts';
import {
  ContractEditCommitParams,
  ContractEditCommitResponse,
  ContractEditCreditParams,
  ContractEditCreditResponse,
  ContractEditParams,
  ContractEditResponse,
  ContractGetEditHistoryParams,
  ContractGetEditHistoryResponse,
  ContractListParams,
  ContractListResponse,
  ContractRetrieveParams,
  ContractRetrieveResponse,
  Contracts,
} from './contracts';

export class V2 extends APIResource {
  contracts: ContractsAPI.Contracts = new ContractsAPI.Contracts(this._client);
}

V2.Contracts = Contracts;

export declare namespace V2 {
  export {
    Contracts as Contracts,
    type ContractRetrieveResponse as ContractRetrieveResponse,
    type ContractListResponse as ContractListResponse,
    type ContractEditResponse as ContractEditResponse,
    type ContractEditCommitResponse as ContractEditCommitResponse,
    type ContractEditCreditResponse as ContractEditCreditResponse,
    type ContractGetEditHistoryResponse as ContractGetEditHistoryResponse,
    type ContractRetrieveParams as ContractRetrieveParams,
    type ContractListParams as ContractListParams,
    type ContractEditParams as ContractEditParams,
    type ContractEditCommitParams as ContractEditCommitParams,
    type ContractEditCreditParams as ContractEditCreditParams,
    type ContractGetEditHistoryParams as ContractGetEditHistoryParams,
  };
}
