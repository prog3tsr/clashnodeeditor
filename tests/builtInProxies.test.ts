import test from 'node:test'
import assert from 'node:assert/strict'
import { BUILT_IN_PROXIES, isBuiltInProxy } from '../src/types/clash.ts'

test('recognizes only the supported Mihomo built-in proxy-group members', () => {
  assert.deepEqual(BUILT_IN_PROXIES, ['DIRECT', 'REJECT'])
  assert.equal(isBuiltInProxy('DIRECT'), true)
  assert.equal(isBuiltInProxy('REJECT'), true)
  assert.equal(isBuiltInProxy('Proxies'), false)
})
