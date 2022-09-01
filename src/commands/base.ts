import {
  MessageApiClient,
  IssueAccessTokenRequest,
  MessageApiResponse,
} from 'liff-server-api'
import Command, {flags} from '@oclif/command'
import {IssueAccessTokenRequestAdapter} from '../adapters/message-api-request-adapter'
import {Input, OutputFlags} from '@oclif/parser'
import dotenv = require('dotenv')
dotenv.config()

export default abstract class BaseCommand extends Command {
    static hidden = true;

    static flags = {
      'client-id': flags.string({
        env: 'LINE_CLIENT_ID',
        description: 'Channel ID retrieved from the developer console.'
      }),
      'client-secret': flags.string({
        env: 'LINE_CLIENT_SECRET',
        description: 'Channel secret retrieved from the developer console.'
      }),
      'access-token': flags.string({
        env: 'CHANNEL_ACCESS_TOKEN',
      }),
      'base-url': flags.string({
        env: 'BASE_URL',
        description: 'Base URL of the LIFF Server API.'
      }),
      json: flags.string({
        description: 'JSON string to create/update the LIFF app'
      }),
      'json-file': flags.string({
        hidden: true
      }),
    };

    private _accessToken?: string;
    private _baseUrl?: string;

    protected parsedFlags?: OutputFlags<typeof BaseCommand.flags>;

    async init() {
      const {flags} = this.parse(this.constructor as Input<typeof BaseCommand.flags>)
      this.parsedFlags = flags as OutputFlags<typeof BaseCommand.flags>

      if (!flags['base-url']) {
        throw new Error('args.flags\' requires containing \'base-url\' as its member.')
      }

      this._baseUrl = this.parsedFlags['base-url']

      if (flags['access-token']) {
        this._accessToken = this.parsedFlags['access-token']
      } else {
        const client = new MessageApiClient(this.baseUrl)
        const request: IssueAccessTokenRequest =
                new IssueAccessTokenRequestAdapter(this.parsedFlags)
        const response: MessageApiResponse = await client.issueAccessToken(request)
        this._accessToken = response.access_token
      }
    }

    get baseUrl() {
      return this._baseUrl!
    }

    get accessToken() {
      return this._accessToken!
    }
}
