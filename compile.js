function compile(str) {
  const left = '<[{(';
  const right = '>]})';
  const stacks = [];
  let count = 0;
  let last = {};
  for (let j = 0; j < str.length; j++) {
    const s = str[j];
    const l = left.indexOf(s);
    const r = right.indexOf(s);
    if (l !== -1) {
      last = {
        i: j,
        l
      };
      stacks.push(last);
    }
    if (r !== -1 && last.l === r) {
      console.log(++count, str.substring(last.i, j + 1));
      stacks.pop();
      last = stacks[stacks.length - 1];
    }
  }
}

(function test1() {
  const jsx = `<div>
  <div className="header">{header}</div>
  <hr />
  <ul>
    {list.map((str, index) => (
      <li key={index}>{str}</li>
    ))}
  </ul>
  <div className="footer">{footer}</div>
</div>`;
  compile(jsx);
})();

(function test() {
  const str = `
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
`;
  compile(str);
})();
