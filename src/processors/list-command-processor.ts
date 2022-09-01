import {LiffApp, LiffAppGetRequest} from 'liff-server-api'
import {LiffAppCommandProcessorBase} from './liff-app-command-processor'

export class ListCommandProcessor extends LiffAppCommandProcessorBase {
    readonly request: LiffAppGetRequest;

    constructor(options: {
        accessToken: string,
        baseUrl: string,
    }) {
      super(options.baseUrl)
      this.request = new LiffAppGetRequest({
        channelAccessToken: options.accessToken,
      })
    }

    async process(): Promise<LiffApp[]> {
      const response = await this.client.getAll(this.request)
      return response.apps
    }
}
