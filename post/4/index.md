## Display

+ 圖片、文字   
  最常見的元素是 `span` 、 `img`  
  ```css
    span{
      display:inline;
    }
  ```

+ 標題、段落、區塊  
  最常見的元素是 `div` 、 `p`  
  ```css
    div{
      display:block;
    }
  ```

`display` 屬性是可以自由被覆寫的（換言之，可能有 block 的 img）  
除此之外  
當你想讓一個元素 `同時擁有高度、又依照 inline 模式排版`  
你可以使用 `inline-block` （很直觀的命名吧）  

另外還有一個很常用的 `display:none`  
這類的元素並不會被顯示在畫面上  
用作把元素藏起來(這個很常用到)

## 置中語法

這也是一種置中語法  

+ 當元素沒有 width （給內部元素撐開）
+ 或 margin 有其他用途時

```css
.container{
  text-align:center;
}

.target{
  display:inline-block;
}
```