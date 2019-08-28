export = function concealWithPrefix(original: object, prefix = '_') {
  function invariant(key: string, action: string) {
    if (key.startsWith(prefix))
      throw new Error(`Can't ${action} private "${key}"`)
  }
  const handler = {
    get(original: object, key: string) {
      invariant(key, 'get')
      return Reflect.get(original, key)
    },
    set(original: object, key: string, value: any) {
      invariant(key, 'set')
      return Reflect.set(original, key, value)
    }
  }
  return new Proxy(original, handler)
}
