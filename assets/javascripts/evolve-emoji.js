(function() {

  var customEmoji = {
    bucket_salute: "/uploads/default/1671/c81699e88dc01265.png",
    goliath_roar:  "/uploads/default/1673/00b4a3a8ea5a151c.png",
    val2:          "/uploads/default/1674/8aa876724f11d391.png",
    kraken_stare:  "/uploads/default/1675/3d1f80c8722c5287.png",
    lazarus2:      "/uploads/default/1676/518c95531699bbb0.png",
    griffin2:      "/uploads/default/1677/5bfd81f5661678b0.png",
    hank:          "/uploads/default/1679/8d8503b8e0e98ade.png",
    lazarus:       "/uploads/default/1680/a5173c8463f2ae9c.png",
    hyde2:         "/uploads/default/1334/9c62fe745e09798a.png",
    hank2:         "/uploads/default/1332/c67b3c8e6f493285.png",
    daisy:         "/uploads/default/1330/b7d16deadc04417d.png",
    bucket:        "/uploads/default/1324/bcba74a913608c27.png",
    maggie2:       "/uploads/default/1329/23e3048a9adc42ac.png",
    val:           "/uploads/default/1358/efa543ebf2c71513.png",
    hyde:          "/uploads/default/1681/922e6065ae76b7b9.png",
    maggie:        "/uploads/default/1682/eac1e9f6e39d11fb.png",
    griffin:       "/uploads/default/1683/82ade16498287c9d.png",
    markov:        "/uploads/default/132/7ce79e60e83164fe.png",
    assault:       "/uploads/default/7462/349fad39a4d83fa6.png",
    medic:         "/uploads/default/7463/6d49d7ef690f7513.png",
    monster:       "/uploads/default/7464/ac4b26e7ee4dcb02.png",
    support:       "/uploads/default/7465/97b42f33a2b24d82.png",
    trapper:       "/uploads/default/7466/d3c41d1b8d90e312.png"
  };

  Object.keys(customEmoji).forEach(function(key) {
    Discourse.Dialect.registerEmoji(key, customEmoji[key]);
  });

})();
