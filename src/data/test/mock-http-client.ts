import { HttpPostClient, HttpPostParams } from '../protocols/http/http-post-client'

// Spy is a test double, it puts fakes values in methods responses and create auxiliaries variables to compare
export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post (params: HttpPostParams): Promise<void> {
    this.url = params.url
    return await Promise.resolve()
  }
}
