# 识别并提取JSX

### 解析并渲染以下JSX

```jsx
function Test() {
  const header = '头部';
  const footer = '尾部';
  const list = ['星期一', '星期二', '星期三', '星期四', '星期五'];
  return (
    <div>
      <div className="header">{header}</div>
      <hr />
      <ul>
        {list.map((str, index) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
      <div className="footer">{footer}</div>
    </div>
  );
}

```

### 先转换成AST

> 思路：利用函数的调用栈
>
> ()
>
> {}
>
> <>
>
> 以下内容的共性是都会成对出现
>
> 遇到左括号入栈，右括号出栈，记录中间值，递归

