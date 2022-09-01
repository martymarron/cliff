import {LiffAppDeleteRequest} from 'liff-server-api'
import {LiffAppDeleteRequestAdapter} from '../adapters/liff-api-request-adapter'
import {LiffAppCommandProcessorBase} from './liff-app-command-processor'

export class DeleteCommandProcessor extends LiffAppCommandProcessorBase {
    readonly request: LiffAppDeleteRequest;

    constructor(
      options: {
            accessToken: string,
            baseUrl: string,
        },
      flags: {
            [name: string]: string | number | boolean | undefined
        },
    ) {
      super(options.baseUrl)
      this.request = new LiffAppDeleteRequestAdapter(
        {
          accessToken: options.accessToken,
        },
        flags,
      )
    }

    async process() {
      await this.client.delete(this.request)
    }
}
