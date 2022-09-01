import {IssueAccessTokenRequest} from 'liff-server-api'

export class IssueAccessTokenRequestAdapter extends IssueAccessTokenRequest {
  constructor(flags: {
        'client-id'?: string,
        'client-secret'?: string
    }) {
    if (!(flags['client-id'] && flags['client-secret'])) {
      throw new Error('client-id and client-secret are mandatory')
    }

    super({
      channelId: flags['client-id'],
      channelSecret: flags['client-secret'],
    })
  }
}
