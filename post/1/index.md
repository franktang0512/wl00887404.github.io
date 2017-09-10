## Introducing

> HTML 一個網站基本的架構  
> 所有元素以 &lt;tag> &lt;/tag> 或是 &lt;tag/> 的形式表示

[範例連結](http://localhost:8080/demo/%E5%A5%B3%E5%AD%A9/)

```html
<!-- 檔案位置︰./0/demo/0.html -->

<!-- 我是 HTML 中的註解 -->
<!DOCTYPE html>
<html>
<!-- 我是註解，我不會出來 -->
<head>
  <!-- head 裡有一些設定的資訊如：標題、作者 -->
  <title>我是一個網頁</title>
  <meta name='author' content='wl00887404'>
  <link rel="stylesheet" href='./styles.css'/>
</head>

<body>
    <!-- body 裡會有網頁的內容 -->
    <img src='./img/cover.jpg'/>
    <h1>女孩</h1>
    <h2>
        詞：韋禮安<br/>
        曲：韋禮安
    </h2>
    <p>
        女孩&nbsp;&nbsp;不想看你受一樣的傷害<br/>
        所以學會溺愛 <br/>
        一而再 再而再 三而再 的錯怪<br/>

        到底要什麼姿態<br/>
        才不會顯得我在使壞<br/>
        來者不善 善者不來<br/>
        因為我也曾經站在門外
    </p>
</body>

</html>
```

`<html/>`之下會有兩個 tag ︰ `<head/>`與`<body/>`

+ `<head/>` ︰一些設定的資訊如：標題、作者
  + `<title/>` ︰瀏覽器最上面的標題
  + `<meta/>` ︰其他資訊設定，後面會介紹到
  + `<link />`︰連結外部資源，常用來連結CSS
+ `<body/>` ︰網頁的內容
  + `<img/>`︰image，圖片， `src` 為顯示的圖片位置
  + `<h[1|2|3|4|5|6]/>`︰Heading，標題，後面的數字越小表示標題越重要，通常一個頁面只會有一個 `<h1/>`
  + `<p/>`︰paragraph，段落

一個網頁是很簡單的，由兩種元素構成

+ 圖片、文字
+ 標題、段落、區塊

到目前為止
這個頁面看起來有點單調  
HTML 只用來定義該顯示些什麼元素  
但沒有定義元素要怎麼顯示，如「文字該是什麼顏色」、「段落是不是要置中」  
這些該由 CSS 來定義（如果你以前用過 `bgcolor` ，這不是個好做法）  
來寫點 CSS 讓畫面豐富一點吧

## 樹狀結構

![](./dom.svg)

在節點之上的部份稱為 `parent、父層`
在節點之下的部份稱為 `child、子層`

## 相對路徑設定

這邊看過即可，遇到 bug 再回來看

假設當前網址為 `http://wl0887404.github.io/article/1/`

+ `./` 為當前目錄  
  `./me.jpg` 為 `http://wl0887404.github.io/article/1/me.jpg`
+ `../` 為上一層  
  `../me.jpg` 為 `http://wl00887404.github.io/article/me.jpg`
+ `/` 為根目錄  
  `/me.jpg` 為 `http://wl00887404.github.io/me.jpg`
