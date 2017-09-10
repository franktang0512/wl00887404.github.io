## Carousel

先來看 [Demo](http://localhost:8080/demo/Carousel/)  
這種 Carousel 網站中相當常見吧  

> 寫動畫的東西的時候  
  先把過度前，過度後寫出來  
  再去寫中間的動畫

## 先來完成其中一頁畫框

```html
<div class="carousel">
  <div class="items">
    <div class="item show">
      <div>
        <img src="http://cw1.tw/CW/images/article/C1418099215473.jpg">
        <h2>在熱鬧街道想起我 在夜深人靜想起我</h2>
      </div>
    </div>
  </div>
</div>
```

```css
.carousel{
  height: 40em;
}

.carousel .items {
    width: 100%;
    height: 100%;
}

.carousel .items .item {
    width: 100%;
    height: 100%;
    text-align: center;
}

.carousel .items .item div {
    height: 100%;
    display: inline-block;
    position: relative;
}

.carousel .items .item img {
    height: 100%;
}

.carousel .items .item h2 {
    position: absolute;
    left:0;
    bottom: 0;
    width: 100%;
    font-size: 1.8em;
    padding: 1em;
    padding-top: 5em;
    color: white;
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .87));
}
```

如果把 `.item` 新增兩個  
就會發現第二個柯文哲掉下去了  
用 `position:absolute` 把他們拉回來

```css
.carousel .items {
    position:relative;
}

.carousel .items .item {
    position:absolute;
    top:0;
    left:0;
}
```

## 按鈕

```html
<div class="carousel">
  <button id="prev">
    <img src="./arrow.svg"/>
  </button>
  <div class="items">
    <!-- 省略 -->
  </div>
  <button id="next">
    <img src="./arrow.svg"/>
  </button>
</div>
```

```css
.carousel{
  position:relative;
}

.carousel button {
    position: absolute;
    width: 2em;
    height: 100%;
    background-color: transparent;
    color: white;
    border: none;
    font-size: 1.4em;
    z-index: 100;
    top: 0;
}

.carousel button img {
    width: 1em;
    height: 1em;

    /* 水平垂直置中 */
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
}

.carousel button#prev {
    left: 0;
}

.carousel button#prev img{
    transform: rotate(180deg);
}

.carousel button#next {
    right: 0;
}
```

## 過場

現在正被播放的元素  
給他一個 `.show`  
剩下的元素要藏起來才行

```css
.carousel .items .item {
    /*
      展示過的元素
      移至最右邊
    */
    transform: translate(100%);
    transition: transform 0.5s;
}

.carousel .items .item.show {
    /*
      正在顯示的元素
      在正中間
    */
    transform: translate(0%);
    z-index: 10;
}

.carousel .items .item.show~.item {
    /*
      尚未展示的元素
      移至最左邊
    */
    transform: translate(-100%);
}
```

## 背景

最後加入背景就完成了  
背景完全是裝飾用的

```html
<div class="carousel">
  <div class="background"></div>
</div>
```

```css
.carousel .background {
  width: 100%;
  height: 100%;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  filter: blur(25px);
  transform: scale(1.5);
}
```
