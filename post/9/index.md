## transition

[範例連結](http://localhost:8080/demo/Transition/)

既然都說了 `transform`
那來做做看動畫吧

```css
svg{
  transition: transform 200ms ease-in-out;
}

svg:hover {
  transform: scale(1.2);
}
```

`transition` 適合做切換狀態、返回的動畫  
像是 hover ，當滑鼠移開，愛心必須回到原狀  
或是 menu ，分為展開、折疊兩種狀態  
另一個做動畫的元素叫做 `animate`  
用做更複雜、持續播放的動畫  
留給各位自己鑽研