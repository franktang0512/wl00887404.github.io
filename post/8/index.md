## transform

[範例連結](http://localhost:8080/demo/Transform/)

這個屬性不是用來排版的  
只是他在排版上很好用

`transform` 主要功能是 `變形`：  
`position` 的定位 `是父層為依據`  
`transform` 則是 `是自己為依據`  
改變 `transform` 並不會改變整體的排版  
`改變這個屬性，畫面不會重新 render，是個特別為了動畫存在的元素`

## translate 偏移

```css
.translate{
  transform: translateX(50%) translateY(50%);

  /* 縮寫 */
  transform: translate(50%,50%);
}
```

## scale 縮放

```css
.scale{
  transform: scaleX(50%) scaleY(50%);

  /* 縮寫 */
  transform: scale(50%,50%);
}
```

## rotate 旋轉

```css
.rotate{
  transform: rotate(90deg);
}
```

## skew 歪斜

```css
.skew{
  transform: skewX(10deg) skewY(10deg);

  /* 縮寫 */
  transform: skew(10deg,10deg);
}
```

## 垂直置中

```css
.target{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}
```