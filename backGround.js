self.onmessage = function(e) {
    // 引数の取得
    let param = e.data

    // ここで重い処理を実行 (2)

    // 結果を返す
    self.postMessage(param)
}