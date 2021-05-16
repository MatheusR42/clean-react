import { HttpPostClient } from '../protocols/http/http-post-client'

// Spy is a test double, it puts fakes values in methods responses and create auxiliaries variables to compare
export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post (url: string): Promise<void> {
    this.url = url
    return await Promise.resolve()
  }
}
