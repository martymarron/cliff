import {ListCommandProcessor} from '../processors/list-command-processor'
import BaseCommand from './base'

export default class ListCommand extends BaseCommand {
    static description = 'Display LIFF apps which belong to your channel.';
    static usage = 'list'
    static examples = [
      'hoge'
    ]

    static hidden = false;

    static flags = {
      ...BaseCommand.flags,
    };

    async run() {
      const {flags} = this.parse(ListCommand)
      const processor = new ListCommandProcessor(
        {
          accessToken: this.accessToken,
          baseUrl: this.baseUrl,
        },
      )
      const result = await processor.process()
      this.log('%s', JSON.stringify(result, null, 4))
    }
}
