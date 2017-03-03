/* eslint-disable prefer-arrow-callback */

import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'
import NoMod256 from '../src/NoMod256'

describe('NoMod256', function () {

  let sandbox

  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    this.sinon = sandbox
  })

  afterEach(function () {
    sandbox.restore()
  })

  describe('getNoMod()', function () {
    it('should be is 254 < 256 = 254', function () {
      return expect(NoMod256.getNoMod(254))
        .to.be.equal(254)
    })
    it('should be is 256 % 256 = 0', function () {
      return expect(NoMod256.getNoMod(256))
        .to.be.equal(0)
    })
    it('should be is 258 % 256 = 2', function () {
      return expect(NoMod256.getNoMod(258))
        .to.be.equal(2)
    })
    it('should be is -258 % 256 = -2', function () {
      return expect(NoMod256.getNoMod(258))
        .to.be.equal(2)
    })
    it('should be is -254 % 256 = -254', function () {
      return expect(NoMod256.getNoMod(-254))
        .to.be.equal(-254)
    })
  })
})
