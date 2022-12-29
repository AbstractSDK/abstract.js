import { ManagerQueryClient, ProxyQueryClient } from "../core";
import { AbstractQueryClient } from "./AbstractClient";

interface IAbstractOsQueryClient {
  abstract: AbstractQueryClient
  osId: number
  managerAddress: string
  proxyAddress: string
}

/**
 * A class for interacting with an Abstract OS.
 */
export class AbstractOsQueryClient {
  osId: number
  managerClient: ManagerQueryClient
  proxyClient: ProxyQueryClient

  constructor({ abstract, osId, managerAddress, proxyAddress }: IAbstractOsQueryClient) {
    this.osId = osId
    this.managerClient = new ManagerQueryClient(abstract.client, managerAddress)
    this.proxyClient = new ProxyQueryClient(abstract.client, proxyAddress)
  }

  /**
   * Get the manager address.
   */
  get manager(): string {
    return this.managerClient.contractAddress
  }

  /**
   * Get the proxy address.
   */
  get proxy(): string {
    return this.proxyClient.contractAddress
  }
}
