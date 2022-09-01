import { ListCommandProcessor } from '../../src/processors/list-command-processor'
import { LiffApiClient, LiffAppGetRequest } from 'liff-server-api'

describe('When the ListCommandProcessor object is instanciated', () => {
    
    const options = {
        accessToken: 'dummy_token',
        baseUrl: 'https://api.example.com'
    }

    let processor: ListCommandProcessor;
    beforeAll(() => {
        processor = new ListCommandProcessor(options)
    })

    test(`Then the LiffApiClient is instanciated as a super class's member`, () => {
        expect(processor.client).toBeInstanceOf(LiffApiClient)
    })

    test(`Then the LiffApiClient instance contains the given options.baseUrl`, () => {
        expect(processor.client.baseUrl).toBe(options.baseUrl)
    })

    test(`Then the LiffAppGetRequest is instanciated as ListCommandProcessor's member`, () => {
        expect(processor.request).toBeInstanceOf(LiffAppGetRequest)
    })

    test(`Then the LiffAppGetRequest instance contains the given options.accessToken`, () => {
        expect(processor.request.headers.Authorization).toContain(options.accessToken)
    })
})