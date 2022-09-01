import {flags} from '@oclif/command'
import {DeleteCommandProcessor} from '../processors/delete-command-processor'
import BaseCommand from './base'

export class DeleteCommand extends BaseCommand {
    static description = 'Delete the LIFF app by specifying the LIFF ID';
    static usage = 'delete --liff-id [LIFF_ID]'
    static hidden = false;

    static flags = {
      ...BaseCommand.flags,
      'liff-id': flags.string({
        description: "liffId to delete."
      }),
    };

    async run() {
      const {flags} = this.parse(DeleteCommand)
      const processor = new DeleteCommandProcessor(
        {
          accessToken: this.accessToken,
          baseUrl: this.baseUrl,
        },
        flags,
      )
      await processor.process()
    }
}
