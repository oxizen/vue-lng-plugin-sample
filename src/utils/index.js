export const readNumber = value => {
  let n = parseFloat(value);
  if (Number.isNaN(n)) return '';
  n = Math.floor(n);
  if (n === 0) return '영';
  const phonemic = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
  const unit = ['', '', '십', '백', '천', '만', '십만', '백만', '천만', '억', '십억', '백억', '천억', '조', '십조', '백조'];

  let ret = '';
  let p;
  const part = [];
  for (let x = 0; x < String(n).length; x += 1) part[x] = String(n).substring(x, x + 1);
  for (let i = 0, cnt = String(n).length; cnt > 0; cnt -= 1, i += 1) {
    p = phonemic[part[i]];
    p += p ? (cnt > 4 && phonemic[part[i + 1]]) ? unit[cnt].substring(0, 1) : unit[cnt] : '';
    ret += p;
  }
  return ret;
}
