## id、class

> 所有 HTML tag 有兩個屬性 `id` 、 `class`  
> tag 、 id 、 class ，通常藉由這三種作法找到元素

+ id︰  
  是唯一不重複的，像跟身份證一樣  
  ```html
  <p id="main_article" />
  ```
+ class︰  
  可以重複使用，一個類別的概念  
  一個元素可以有很多個 class ，以空白隔開  
  ```html
  <p class="comment" />
  <p class="comment introduce" />
  <p class="comment hidden" />
  ```

CSS 選擇元素最基本的方法如下

```css
/*
* 直接取 `tag`
* 字體大小為 1.5字寬
*/

p{
  font-size:1.5em;
}

/*
* 設定 `id` 為 `main_article`
* 字體顏色為紅色
*/

#main_article{
  color:red;
}

/*
* 加上 `.` 取 `class`
* 文字靠右對齊
*/

.comment{
  text-align:right;
}
```

## 更詳細的用法

等實做的時候，會在用到的時候會在跟各位介紹  
比較常用的像是選子級

```css
target div{
  /*選取所有的子級，包含孫子*/
}

target > div{
  /*選取所有的子級，只有兒子*/
}
```

請參照 [CSS Selectors (MDN)](https://developer.mozilla.org/zh-TW/docs/Web/CSS/CSS_Selectors)