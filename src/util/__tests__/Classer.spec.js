
import Classer from '../test-example/Classer'

describe('the class Classer', () => {
  const instance = new Classer()

  it('should allow to create an instance', () => {
    // const expected = instance instanceof Classer
    // expect(expected).toBe(true)
    expect(new Classer()).toBeInstanceOf(Classer)
  })

  it('returns resolved successful data from promise', async () => {
    expect.assertions(3)
    const data1 = await instance.method1()
    const data2 = await instance.method2()
    const data3 = await instance.method3()
    expect(data1).toEqual(1)
    expect(data2).toEqual(2)
    expect(data3).toEqual(3)
  })

  it('the instance should have prototype methods', () => {
    const allMethods = ['method1', 'method2', 'method3']

    for (let method of allMethods) {
      const result = instance[method]()
      expect(result).toBeDefined()
    }
  })
})
