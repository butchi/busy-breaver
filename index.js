if (process.argv.length === 0) {
} else if (process.argv.length >= 3) {
    const targetObjStr = process.argv[2]
    const inputObjStr = process.argv[3]

    try {
        const targetObj = JSON.parse(targetObjStr)
        const outputObj = eval(inputObjStr)

        if (targetObj == null || outputObj == null) {
        } else if (!(targetObj instanceof Array)) {
            console.log("第1引数には配列のJSON文字列を入力してください")
        } else if (!(outputObj instanceof Array)) {
            console.log("第2引数には配列を返す関数文字列を入力してください")
        } else {
            const targetArr = targetObj
            const outputArr = outputObj
            const targetJSON = JSON.stringify(targetArr)
            const outputJSON = JSON.stringify(outputObj)

            const fullMatchLen = targetArr.filter((item, i) => item === outputArr[i]).length
            const prefixMatchIdx = targetArr.map((item, i) => item === outputArr[i]).indexOf(false)
            const prefixMatchLen = prefixMatchIdx === -1 ? targetArr.length : prefixMatchIdx

            console.log(`target: ${targetJSON} // 要素数: ${targetArr.length}, バイト数: ${targetJSON.length}バイト\n`)
            console.log(`input:  ${inputObjStr} // バイト数: ${inputObjStr.length}バイト\n`)
            console.log(`output: ${outputJSON} // 要素数: ${outputObj.length}\n`)
            console.log(`一致総数: ${fullMatchLen}要素`)
            console.log(`前方一致: ${prefixMatchLen}要素`)
        }
    } catch (err) {
        console.log("ターゲットのJSONが不正です")
    }
} else {
    console.log(`example 1:\nnode index.js '[1, 2, \\"Fizz\\", 4, \\"Buzz\\", \\"Fizz\\", 7, 8, \\"Fizz\\", \\"Buzz\\", 11, \\"Fizz\\", 13, 14, \\"FizzBuzz\\", 16, 17, \\"Fizz\\", 19, \\"Buzz\\", \\"Fizz\\", 22, 23, \\"Fizz\\", \\"Buzz\\", 26, \\"Fizz\\", 28, 29, \\"FizzBuzz\\", 31, 32, \\"Fizz\\", 34, \\"Buzz\\", \\"Fizz\\", 37, 38, \\"Fizz\\", \\"Buzz\\", 41, \\"Fizz\\", 43, 44, \\"FizzBuzz\\"]' '[1, 2, \\"Fizz\\", 4, \\"Buzz\\", \\"Foo\\", 7, 8, \\"Fizz\\"]'\n`)
    console.log(`example 2:\nnode index.js '[1, 2, \\"Fizz\\", 4, \\"Buzz\\", \\"Fizz\\", 7, 8, \\"Fizz\\", \\"Buzz\\", 11, \\"Fizz\\", 13, 14, \\"FizzBuzz\\", 16, 17, \\"Fizz\\", 19, \\"Buzz\\", \\"Fizz\\", 22, 23, \\"Fizz\\", \\"Buzz\\", 26, \\"Fizz\\", 28, 29, \\"FizzBuzz\\", 31, 32, \\"Fizz\\", 34, \\"Buzz\\", \\"Fizz\\", 37, 38, \\"Fizz\\", \\"Buzz\\", 41, \\"Fizz\\", 43, 44, \\"FizzBuzz\\"]' 'Array(9).fill(0).map((_, i) => (((++i % 3) ? \\"\\" : \\"Fizz\\") + (i % 5 ? \\"\\" : \\"Buzz\\")) || i)'\n`)
    console.log(`example 3:\nnode index.js '[1, 2, \\"Fizz\\", 4, \\"Buzz\\", \\"Fizz\\", 7, 8, \\"Fizz\\", \\"Buzz\\", 11, \\"Fizz\\", 13, 14, \\"FizzBuzz\\", 16, 17, \\"Fizz\\", 19, \\"Buzz\\", \\"Fizz\\", 22, 23, \\"Fizz\\", \\"Buzz\\", 26, \\"Fizz\\", 28, 29, \\"FizzBuzz\\", 31, 32, \\"Fizz\\", 34, \\"Buzz\\", \\"Fizz\\", 37, 38, \\"Fizz\\", \\"Buzz\\", 41, \\"Fizz\\", 43, 44, \\"FizzBuzz\\"]' 'Array(99).fill(0).map((_, i) => (((++i % 3) ? \\"\\" : \\"Fizz\\") + (i % 5 ? \\"\\" : \\"Buzz\\")) || i)'`)
}
