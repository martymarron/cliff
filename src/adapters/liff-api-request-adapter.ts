import {LiffApp, LiffAppCreateRequest, LiffAppDeleteRequest, LiffAppUpdateRequest} from 'liff-server-api'

export class LiffAppCreateRequestAdapter extends LiffAppCreateRequest {
  constructor(
    args: {
            accessToken: string,
        },
    flags: {
            'json'?: string,
        },
  ) {
    if (!flags.json) {
      throw new Error('args.flags\' requires containing \'json\' as its member.')
    }

    const liffApp: LiffApp = JSON.parse(flags.json)

    super({
      channelAccessToken: args.accessToken,
      liffApp: liffApp,
    })
  }
}

export class LiffAppUpdateRequestAdapter extends LiffAppUpdateRequest {
  constructor(
    args: {
            accessToken: string,
        },
    flags: {
            'json'?: string,
        },
  ) {
    if (!flags.json) {
      throw new Error('args.flags\' requires containing \'json\' as its member.')
    }

    const liffApp: LiffApp = JSON.parse(flags.json)

    super({
      channelAccessToken: args.accessToken,
      liffApp: liffApp,
    })
  }
}

export class LiffAppDeleteRequestAdapter extends LiffAppDeleteRequest {
  constructor(
    args: {
            accessToken: string,
        },
    flags: {
            'liff-id'?: string,
        },
  ) {
    if (!flags['liff-id']) {
      throw new Error('args.flags\' requires containing \'liff-id\' as its member.')
    }

    const liffId: string = flags['liff-id'] as string

    super({
      channelAccessToken: args.accessToken,
      liffId: liffId,
    })
  }
}
