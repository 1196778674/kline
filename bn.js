(function (BN) {
  if (typeof module === 'object') {
    module.exports = BN()
  } else {
    window.utilsNum = BN()
  }
})(function (opts) {
  let intOrDecimal = /^[1-9]\d*$|^(0|[1-9]\d*).\d+$/

  let utils = {}

  let BN = function (v) {
    if (!intOrDecimal.test(v)) {
      v = 0
    }
    return new BigNumber((v || 0).toString())
  }
  utils.BN = BN

  // 加
  let add = function (v1, v2) {
    return BN(v1).add(BN(v2))
  }
  utils.add = add

  // 减
  let minus = function (v1, v2) {
    return BN(v1).minus(BN(v2))
  }
  utils.minus = minus

  // 乘
  let mul = function (v1, v2) {
    return BN(v1).mul(BN(v2))
  }
  utils.mul = mul

  // 除
  let div = function (v1, v2) {
    return BN(v1).div(BN(v2))
  }
  utils.div = div

  return utils
})
