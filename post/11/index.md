## 響應式網站

> 一個網站會依據 `device-width（設備寬度）` 變動
> 稱為 `響應式網頁設計 (Responsive Web Design)`，簡稱 `RWD`

一個響應式網站  
要先在 `meta` 設定 `width=device-width`

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

```css
@media (min-width:50em){
  /*
    當 50em < device-width
    才套用這些樣式
  */
}

@media (max-width:50em){
  /*
    當 device-width < 50em
    才套用這些樣式
  */
}

@media (min-width:50em) and (max-width:100em){
  /*
    當 50em < device-width < 100em
    才套用這些樣式
  */
}
```

## Mobile First

一個 RWD website，一律是 mobile first  
也就是先設計 mobile 版本的網站，再去寫其他大小的樣式  
moblie 螢幕較小，展示的元素最少也是最重要

## 讓 Masonry Layouts RWD 吧！

先偷改一下 `.photo` 的寫法

```html
<div class="photo">
  <img src="/img/1.jpg" />
  <img src="/img/5.jpg" />
  <img src="/img/9.jpg" />
  <img src="/img/2.jpg" />
  <img src="/img/6.jpg" />
  <img src="/img/10.jpg" />
  <img src="/img/2.jpg" />
  <img src="/img/6.jpg" />
  <img src="/img/10.jpg" />
  <img src="/img/3.jpg" />
  <img src="/img/7.jpg" />
  <img src="/img/11.jpg" />
  <img src="/img/3.jpg" />
  <img src="/img/7.jpg" />
  <img src="/img/11.jpg" />
  <img src="/img/4.jpg" />
  <img src="/img/8.jpg" />
  <img src="/img/4.jpg" />
  <img src="/img/8.jpg" />
  <img src="/img/1.jpg" />
  <img src="/img/5.jpg" />
  <img src="/img/9.jpg" />
</div>
```

```css
.photo {
    width: 1144px;
    margin: 0 auto;
    margin-bottom: 5em;
    column-gap: 0px;
}

.photo img {
    width: 286px; 
    padding: 0 8px;
    display: inline-block;
    margin-bottom: 16px;
}
```

## 加上 RWD

```css
@media (max-width:572px) {
  .photo {
    width: 286px;
  }
}

@media (min-width:572px) and (max-width:858px) {
  .photo {
    width: 572px;
    column-count: 2;
  }
}

@media (min-width:859px) and (max-width:1144px) {
  .photo {
    width: 858px;
    column-count: 3;
  }
}

@media (min-width:1144px) {
  .photo {
    width: 1144px;
    column-count: 4;
  }
}
```