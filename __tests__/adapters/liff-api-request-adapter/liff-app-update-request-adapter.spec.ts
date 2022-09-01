import { LiffApp } from 'liff-server-api'
import {LiffAppUpdateRequestAdapter} from '../../../src/adapters/liff-api-request-adapter'

describe('Given the flag object contains json,', () => {
    const args = {
        accessToken: 'dummy_token'
    }
    const liffApp: LiffApp = {
        view: {
            type: "tall",
            url: "https://example.com"
        }
    }
    const flags = {
        json: JSON.stringify(liffApp)
    }
    describe('When LiffAppUpdateRequestAdapter is instanciated,', () => {
        let adapter: LiffAppUpdateRequestAdapter
        beforeAll(() => {
            adapter = new LiffAppUpdateRequestAdapter(args, flags)
        })
        test('Then the instanciated object has the LIFF app as its member.', () => {
            expect(adapter.liffApp).toEqual(liffApp);
        })
        test('Then the instanciated object has the accessToken.', () => {
            expect(adapter.headers.Authorization).toContain(args.accessToken);
        })
    })
})

describe('Given the flag object doesn\'t contain json,', () => {
    const args = {
        accessToken: 'dummy_token'
    }
    const flags = {}
    describe('When LiffAppUpdateRequestAdapter is instanciated,', () => {
        test('Then the error is thrown.', () => {
            expect(() => {
                const adapter = new LiffAppUpdateRequestAdapter(args, flags)
            }).toThrow()
        })
    })
})
