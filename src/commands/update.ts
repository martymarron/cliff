import {UpdateCommandProcessor} from '../processors/update-command-processor'
import BaseCommand from './base'

export class UpdateCommand extends BaseCommand {
    static description = 'Update the LIFF app.';
    static usage = 'update --json [LIFF_APP]'
    static hidden = false;

    static flags = {
      ...BaseCommand.flags,
    };

    async run() {
      const {flags} = this.parse(UpdateCommand)
      const processor = new UpdateCommandProcessor(
        {
          accessToken: this.accessToken,
          baseUrl: this.baseUrl,
        },
        flags,
      )
      await processor.process()
    }
}
