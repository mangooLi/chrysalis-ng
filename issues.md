# Issues 
## ch-sidebar []
优化：
<ol>
<li>子组件sidebarItem 不采用JQ方法去隐藏下拉框。用angular自带API获取dom元素。</li>
<li>采用angular API获取DOM元素，编写个slideToggle()的指令替换jq方法。</li>
<li>用ngrx保存sidbar状态（实现不依赖组件之间通讯来缩放ch-sidebar组件）</li>
</ol>

## ch-navMenu [x]
<ol>
<li>采用angularAPI操作DOM，切换下拉，编写显示隐藏下拉组件</li>
</ol>

## AutoComplete []
AutoComplete组件用Rx `switchMap` 操作符取消无用http请求
