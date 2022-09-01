import {LiffAppDeleteRequestAdapter} from '../../../src/adapters/liff-api-request-adapter'

describe('Given the flag object contains liff-id,', () => {
    const args = {
        accessToken: 'dummy_token'
    }
    const flags = {
        'liff-id': 'dummy_id'
    }
    describe('When LiffAppDeleteRequestAdapter is instanciated,', () => {
        let adapter: LiffAppDeleteRequestAdapter
        beforeAll(() => {
            adapter = new LiffAppDeleteRequestAdapter(args, flags)
        })
        test('Then the instanciated object has the LIFF app as its member.', () => {
            expect(adapter.endpoint).toMatch(flags['liff-id']);
        })
        test('Then the instanciated object has the accessToken.', () => {
            expect(adapter.headers.Authorization).toContain(args.accessToken);
        })
    })
})

describe('Given the flag object doesn\'t contain liff-id,', () => {
    const args = {
        accessToken: 'dummy_token'
    }
    const flags = {}
    describe('When LiffAppDeleteRequestAdapter is instanciated,', () => {
        test('Then the error is thrown.', () => {
            expect(() => {
                const adapter = new LiffAppDeleteRequestAdapter(args, flags)
            }).toThrow()
        })
    })
})
