import {CreateCommandProcessor} from '../processors/create-command-processor'
import BaseCommand from './base'

export default class CreateCommand extends BaseCommand {
    static description = 'Create a LIFF app into your channel.'
    static usage = 'create --json [LIFF_APP]'
    static hidden = false

    static flags = {
      ...BaseCommand.flags,
    }

    async run() {
      const {flags} = this.parse(CreateCommand)
      const processor = new CreateCommandProcessor(
        {
          accessToken: this.accessToken,
          baseUrl: this.baseUrl,
        },
        flags,
      )
      await processor.process()
    }
}
