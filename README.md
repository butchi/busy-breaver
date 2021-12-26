# busy-breaver

## 実行例

### 例1:

#### 入力
```
node index.js '[1, 2, \"Fizz\", 4, \"Buzz\", \"Fizz\", 7, 8, \"Fizz\", \"Buzz\", 11, \"Fizz\", 13, 14, \"FizzBuzz\"]' '[1, 2, \"Fizz\", 4, \"Buzz\", \"Foo\", 7, 8, \"Fizz\"]'
```

#### 実行結果
```
target: [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"] // 要素数: 15, バイト数: 73バイト

input:  [1, 2, "Fizz", 4, "Buzz", "Foo", 7, 8, "Fizz"] // バイト数: 46バイト

output: [1,2,"Fizz",4,"Buzz","Foo",7,8,"Fizz"] // 要素数: 9

一致総数: 8要素
前方一致: 5要素
```


### 例2:
#### 入力
```
node index.js '[1, 2, \"Fizz\", 4, \"Buzz\", \"Fizz\", 7, 8, \"Fizz\", \"Buzz\", 11, \"Fizz\", 13, 14, \"FizzBuzz\"]' 'Array(9).fill(0).map((_, i) => (((++i % 
3) ? \"\" : \"Fizz\") + (i % 5 ? \"\" : \"Buzz\")) || i)'
```

#### 実行結果
```
target: [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"] // 要素数: 15, バイト数: 73バイト

input:  Array(9).fill(0).map((_, i) => (((++i % 
3) ? "" : "Fizz") + (i % 5 ? "" : "Buzz")) || i) // バイト数: 89バイト

output: [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz"] // 要素数: 9

一致総数: 9要素
前方一致: 9要素
```

### 例3:

#### 入力
```
node index.js '[1, 2, \"Fizz\", 4, \"Buzz\", \"Fizz\", 7, 8, \"Fizz\", \"Buzz\", 11, \"Fizz\", 13, 14, \"FizzBuzz\"]' 'Array(99).fill(0).map((_, i) => (((++i % 3) ? \"\" : \"Fizz\") + (i % 5 ? \"\" : \"Buzz\")) || i)'
```

#### 実行結果
```
target: [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"] // 要素数: 15, バイト数: 73バイト

input:  Array(99).fill(0).map((_, i) => (((++i % 3) ? "" : "Fizz") + (i % 5 ? "" : "Buzz")) || i) // バイト数: 89バイト

output: [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz","Buzz",86,"Fizz",88,89,"FizzBuzz",91,92,"Fizz",94,"Buzz","Fizz",97,98,"Fizz"] // 要素数: 99

一致総数: 15要素
前方一致: 15要素
```
