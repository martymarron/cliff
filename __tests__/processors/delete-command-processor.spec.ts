import { DeleteCommandProcessor } from '../../src/processors/delete-command-processor'
import { LiffAppDeleteRequestAdapter } from '../../src/adapters/liff-api-request-adapter'
import { LiffApiClient } from 'liff-server-api'

describe('When the DeleteCommandProcessor object is instanciated', () => {
    
    const options = {
        accessToken: 'dummy_token',
        baseUrl: 'https://api.example.com'
    }
    const flags = {
        'liff-id': 'dummy-id'
    }

    let processor: DeleteCommandProcessor;
    beforeAll(() => {
        processor = new DeleteCommandProcessor(options, flags)
    })

    test(`Then the LiffApiClient is instanciated as a super class's member`, () => {
        expect(processor.client).toBeInstanceOf(LiffApiClient)
    })

    test(`Then the LiffApiClient instance contains the given options.baseUrl`, () => {
        expect(processor.client.baseUrl).toBe(options.baseUrl)
    })

    test(`Then the LiffAppDeleteRequestAdapter is instanciated as DeleteCommandProcessor's member`, () => {
        expect(processor.request).toBeInstanceOf(LiffAppDeleteRequestAdapter)
    })

    test(`Then the LiffAppDeleteRequestAdapter instance contains the given options.accessToken`, () => {
        expect(processor.request.headers.Authorization).toContain(options.accessToken)
    })

    test(`Then the LiffAppDeleteRequestAdapter instance contains the given flags`, () => {
        expect(processor.request.endpoint).toContain(flags['liff-id'])
    })
})