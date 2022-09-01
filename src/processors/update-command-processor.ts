import {LiffAppUpdateRequest} from 'liff-server-api'
import {LiffAppUpdateRequestAdapter} from '../adapters/liff-api-request-adapter'
import {LiffAppCommandProcessorBase} from './liff-app-command-processor'

export class UpdateCommandProcessor extends LiffAppCommandProcessorBase {
    readonly request: LiffAppUpdateRequest;

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
      this.request = new LiffAppUpdateRequestAdapter(
        {
          accessToken: options.accessToken,
        },
        flags,
      )
    }

    async process() {
      await this.client.update(this.request)
    }
}
