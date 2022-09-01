import { CreateCommandProcessor } from '../../src/processors/create-command-processor'
import { LiffAppCreateRequestAdapter } from '../../src/adapters/liff-api-request-adapter'
import { LiffApiClient, LiffApp } from 'liff-server-api'

describe('When the CreateCommandProcessor object is instanciated', () => {
    
    const options = {
        accessToken: 'dummy_token',
        baseUrl: 'https://api.example.com'
    }
    const liffApp: LiffApp = {
        view: {
            type: 'full',
            url: 'https://example.com'
        }
    }
    const flags = {
        json: JSON.stringify(liffApp)
    }

    let processor: CreateCommandProcessor;
    beforeAll(() => {
        processor = new CreateCommandProcessor(options, flags)
    })

    test(`Then the LiffApiClient is instanciated as a super class's member`, () => {
        expect(processor.client).toBeInstanceOf(LiffApiClient)
    })

    test(`Then the LiffApiClient instance contains the given options.baseUrl`, () => {
        expect(processor.client.baseUrl).toBe(options.baseUrl)
    })

    test(`Then the LiffAppCreateRequestAdapter is instanciated as CreateCommandProcessor's member`, () => {
        expect(processor.request).toBeInstanceOf(LiffAppCreateRequestAdapter)
    })

    test(`Then the LiffAppCreateRequestAdapter instance contains the given options.accessToken`, () => {
        expect(processor.request.headers.Authorization).toContain(options.accessToken)
    })

    test(`Then the LiffAppCreateRequestAdapter instance contains the given flags`, () => {
        expect(processor.request.liffApp).toEqual(liffApp)
    })
})
