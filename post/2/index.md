## 什麼是 Promise

> **Promise**專門用來處理異步問題，像是某人承諾幫你完成某件事情
> 在他完成之前你可以繼續處理自己手邊的工作，當然你也可以選擇等他回來再繼續

## 在開始之前

先來看看在沒有 `Promise` 之前
是怎麼處理異步問題的吧！~~痛過之後你才會懂得他的好~~
如果你非常熟 `CallBack Hell` ，你可以選擇跳過這段

下面這是一段很尋常的代碼

```js
const Bark = () => {
    console.log("汪汪")
}

Bark()
console.log("我會在汪汪後執行")
```

但如果 `Bark` 是一個異步方法，情況就不同了

```js
// Bark還是上面那個喔

const Bark_Delay = () => {
  setTimeout(() => {
    Bark()
  },1000)
}

Bark_Delay()
console.log("我會在汪汪後執行")
```

為了讓程式碼能正確執行
我們把叫完之後要做的事包成 `CallBack`
等異步方法做完時呼叫

```js
const Bark_Delay_Callback = callBack => {
    setTimeout(() => {
        Bark()
        callBack()
    },1000)
}

Bark_Delay_Callback(() => {
    console.log("我會在汪汪後執行")
})
```

如此程式碼就可以正常執行了
但是如果情況越來越複雜
程式碼會越來越複雜,可讀性也會越來越低
以常見 Ajax 的狀況來說
程式碼可能長得像下面這樣
