export default function handler(req, res) {
  //   res.status(200).json({ name: null });
  if (req.method === 'POST') {
    // POST로 받아온다.
    res.setHeader('Set-Cookie', 'a_name=mike;Max-Age=3600;HttpOnly,Secure');
    // 쿠키를 지정 a_name: 쿠키명 / Max-Age: 3600초
    res.statusCode = 200;
    res.json({ message: 'ok' });
  }
}
