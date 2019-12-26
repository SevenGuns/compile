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
