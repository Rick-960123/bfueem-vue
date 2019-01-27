export function TMap (key) {
  return new Promise(function (resolve, reject) {
    window.init = function () {
      resolve(qq)
    }
    let script = document.createElement('script')
    let key = 'IISBZ-J2OR5-5BDID-QDNGI-2G5U6-FYBJA'
    script.type = 'text/javascript'
    script.src = 'http://map.qq.com/api/js?v=2.exp&&libraries=drawing,geometry&callback=init&key=' + key
    script.onerror = reject
    document.head.appendChild(script)
  })
}
