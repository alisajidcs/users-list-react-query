import { sleep } from './sleep'

describe('sleep', () => {
  it('should sleep for the desired duration', async () => {
    const startTime = Date.now()
    const sleepTime = 3000
    await sleep(sleepTime)
    const endTime = Date.now()

    const elapsedTime = endTime - startTime
    const marginOfError = 50
    expect(elapsedTime).toBeGreaterThanOrEqual(sleepTime - marginOfError)
    expect(elapsedTime).toBeLessThanOrEqual(sleepTime + marginOfError)
  })
})
