import {LiffApiCreateResponse, LiffAppCreateRequest} from 'liff-server-api'
import {LiffAppCreateRequestAdapter} from '../adapters/liff-api-request-adapter'
import {LiffAppCommandProcessorBase} from './liff-app-command-processor'

export class CreateCommandProcessor extends LiffAppCommandProcessorBase {
    readonly request: LiffAppCreateRequest;

    constructor(
      options: {
            accessToken: string,
            baseUrl: string,
        },
      flags: {
            [name: string]: string | number | boolean | undefined,
        },
    ) {
      super(options.baseUrl)
      this.request = new LiffAppCreateRequestAdapter(
        {
          accessToken: options.accessToken,
        },
        flags,
      )
    }

    async process() {
      const response: LiffApiCreateResponse =
            await this.client.create(this.request)
    }
}
