import {IssueAccessTokenRequestAdapter} from '../../src/adapters/message-api-request-adapter'

describe('Given the flag object contains both client-id and client-secret,', () => {
  const flags = {
    'client-id': 'dummy_client_id',
    'client-secret': 'dummy_secret',
  }
  describe('When IssueAccessTokenRequestAdapter is instanciated,', () => {
    let adapter: IssueAccessTokenRequestAdapter
    beforeAll(() => {
      adapter = new IssueAccessTokenRequestAdapter(flags)
    })
    test('Then the instanciated object has the value client_id.', () => {
      expect(adapter.body.get('client_id')).toEqual(flags['client-id'])
    })
    test('Then the instanciated object has the value client_secret.', () => {
      expect(adapter.body.get('client_secret')).toEqual(flags['client-secret'])
    })
  })
})

describe('Given the flag object does\'t contain both client-id and client-secret,', () => {
  const flags = {}
  describe('When IssueAccessTokenRequestAdapter is instanciated,', () => {
    test('Then the error is thrown', () => {
      expect(() => {
        const request = new IssueAccessTokenRequestAdapter(flags)
      }).toThrow('client-id and client-secret are mandatory')
    })
  })
})
