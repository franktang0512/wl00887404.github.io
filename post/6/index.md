## 把設計圖化為程式碼

現在你可以拿到一張 [設計圖](http://localhost:8080/practice/Masonry%20Layouts/preview.html)  
這種排版叫做 `Masonry Layouts` 瀑布式排版  
像是 [巴哈姆特的下面](https://www.gamer.com.tw/) 和 [pinterest](https://pinterest.com/) 都是這種排版

剛剛學的技巧就足夠切出來喔  
大上的 HTML 大概長這樣

```html
<body>
  <div>{MY MEMORIES}</div>
  <div>{年份}</div>
  <div>
    <div class="直的">{圖片}</div>
    <div class="直的">{圖片}</div>
    <div class="直的">{圖片}</div>
    <div class="直的">{圖片}</div>
  </div>
</body>
```

## 開始之前

先引入 3 個 CSS

+ `/css/reset.css`  
  每個瀏覽器都也些許的自訂樣式  
  為了跨瀏覽器，所以要先用 `reset.css` 乾淨  
  詳細可以 google 看看，還有另一個 `normalize.css` 也有人用

+ `./styles.css`  
  實際寫的 code

通常一個網站，會先設定 `字體打小、字形、主色`  
所以先在 `/styles.css` 寫入

```css
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
* {
  box-sizing: border-box;
}

body {
  font-size: 15px;
  padding-top: 3em;
  background: #2c2d31;
  font-family: 'Roboto Mono', monospace;
}

a {
  color: inherit;
  text-decoration: none;
}

.primary {
  color: #e6629a;
}
```

## 標題

先來處理最簡單年份的部份吧

```html
<div class="title">
  <h1 class="primary">my memories</h1>
</div>
```

```css
.title {
  /*置中語法*/
  text-align: center;

  margin-bottom: 1em;
}

.title h1 {
  font-size: 1.2em;

  /*置中語法*/
  display: inline-block;

  /* 把所有字轉換成大寫 */
  text-transform: uppercase;

  /* 讓字寬一點 */
  letter-spacing: 0.2em;
  margin-right: -0.2em;
}
```

通常會把 .title 這個元素稱之為 `container` 或是 `wrapper`  
是用來 `定位或是微調元素`

## 年份

```html
<div class="nav">
  <ul>
    <li><a href="#">2012</a></li>
    <li><a href="#">2013</a></li>
    <li><a href="#">2014</a></li>
    <li><a href="#">2015</a></li>
    <li><a href="#">2016</a></li>
    <li><a class="selected" href="#">2017</a></li>
  </ul>
  <div class="clear"></div>
</div>
```

```css
.nav {
  text-align: center;
  margin-bottom: 1.5rem;
}

.nav ul {
  display: inline-block;
  color: #82888a;
}

.nav ul li {
  float: left;
  margin: 0 8px;
}


.nav ul a.selected {
  color: white;
}

/* :hover 是一種 selector*/
.nav ul a:hover {
  color: white;
}

.clear {
  clear: both;
}
```

## 圖片

其實就跟 `年份` 的是一樣的

```html
<div class="photo">
  <div class="col">
    <img src="./img/1.jpg" />
    <img src="./img/5.jpg" />
    <img src="./img/9.jpg" />
    <img src="./img/2.jpg" />
    <img src="./img/6.jpg" />
    <img src="./img/10.jpg" />
  </div>
  <div class="col">
    <img src="./img/2.jpg" />
    <img src="./img/6.jpg" />
    <img src="./img/10.jpg" />
    <img src="./img/3.jpg" />
    <img src="./img/7.jpg" />
    <img src="./img/11.jpg" />
  </div>
  <div class="col">
    <img src="./img/3.jpg" />
    <img src="./img/7.jpg" />
    <img src="./img/11.jpg" />
    <img src="./img/4.jpg" />
    <img src="./img/8.jpg" />
  </div>
  <div class="col">
    <img src="./img/4.jpg" />
    <img src="./img/8.jpg" />
    <img src=."/img/1.jpg" />
    <img src="./img/5.jpg" />
    <img src="./img/9.jpg" />
  </div>
  <div class="clear"></div>
</div>
```

```css
.photo {
    width: 1144px;
    margin:0 auto;
    margin-bottom: 5em;
}

.photo .col {
    float: left;
    padding: 0 8px;
}

.photo .col img {
    display: block;
    width: 270px;
    margin-bottom: 16px;

    /* 圓角 */
    border-radius: 2px;
}
```

## 頁尾

```html
<div class="footer">
  <div>
    all photo from 
    <a href="https://www.pexels.com">pexels</a>
     / web designe by 
    <a href="mailto:wl00887404@gmail.com">Max</a>
  </div>
</div>
```

```css
.footer {
    padding: 1em 0 0.5em 0;
    background: #44464c;
    color: white;
    text-align: center;
    font-size: 0.9em;
    /* 行高 */
    line-height: 1.6;
}

.footer div{
    display: inline-block;
    letter-spacing: 0.2em;
    margin-right: -0.2em;
}
```

## 完成

有沒有覺得很有趣呀？  
其實到教的技巧  
已經切出目前大部分網頁的版型了  