import {LiffApiClient} from 'liff-server-api'

export abstract class LiffAppCommandProcessorBase {
    readonly client: LiffApiClient;

    constructor(baseUrl: string) {
      this.client = new LiffApiClient(baseUrl)
    }

    abstract process(): any;
}
