[範例連結](http://localhost:8080/demo/Position/)

## static

預設上，  
所有屬性都是 `position: static;`  
`static` 不會特別被排版，符合前面所有排版規則

## relative

```css
.relative{
    position: relative;
}
```

如果你不給他其他設定，  
`relative` 的行為其實跟 `static` 一模一樣，
但你可以使用 `top` 、 `left` 去偏移元素。

```css
.5em{
  top:5em;
  left:5em;
}
```

`relative` 會以自己左上角作為原點偏移，  
偏移不會影響其他的排版，  
就只是單單微調元素而已。

## absolute

這個比較難懂  
大概整堂課最難懂就這個吧

`absolute` 又稱作絕對定位  
就跟 `relative` 一樣，他需要一個原點  
但它的原點不是自己，而是父元素  
一個可以被定位的父元素作為定位範圍  
也就是第一個不是`position: static;` 的父元素  
可以使用 `top` 、 `left` 、 `right` 、`bottom`  
另外，它並 `不會參與排版（超級重要）`

## fixed

跟 `absolute` 一樣  
只是以瀏覽器作為定位範圍  
無論如何捲動，都會在同樣位置  
就像蓋板廣告的那種

這就是所有的 position 了  
只要融會貫通，排版輕輕鬆鬆

## 垂直置中

```css
.target{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  margin:auto;
  width:10em;
  height:10em;
}
```