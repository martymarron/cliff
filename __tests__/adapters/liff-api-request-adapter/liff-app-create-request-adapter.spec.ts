import { LiffApp } from 'liff-server-api'
import {LiffAppCreateRequestAdapter} from '../../../src/adapters/liff-api-request-adapter'

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
    describe('When LiffAppCreateRequestAdapter is instanciated,', () => {
        let adapter: LiffAppCreateRequestAdapter
        beforeAll(() => {
            adapter = new LiffAppCreateRequestAdapter(args, flags)
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
    describe('When LiffAppCreateRequestAdapter is instanciated,', () => {
        test('Then the error is thrown.', () => {
            expect(() => {
                const adapter = new LiffAppCreateRequestAdapter(args, flags)
            }).toThrow()
        })
    })
})
