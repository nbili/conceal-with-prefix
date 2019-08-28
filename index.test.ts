import concealWithPrefix from './index'

describe('conceal-with-prefix', () => {

  test('no conceal', () => {
    const target = { _secret: 'secret', text: 'text' }
    interface p {
      _secret?: string
      text?: string
    }
    const proxy = concealWithPrefix(target)
    function setSecret() {
      (proxy as p).text = 'text change'
    }
    setSecret()
    expect(target).toEqual({ _secret: 'secret', text: 'text change' })
  })

  test('conceal with prefix _ ', () => {
    const target = { _secret: 'secret', text: 'text' }
    interface p {
      _secret?: string
    }
    const proxy = concealWithPrefix(target)
    function setSecret() {
      (proxy as p)._secret = 'secret change'
    }
    function getSecret() {
      (proxy as p)._secret
    }
    expect(setSecret).toThrow(Error)
    expect(getSecret).toThrow(Error)
  })

})
