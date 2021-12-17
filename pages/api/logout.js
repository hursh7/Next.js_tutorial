export default function handler(req, res) {
  res.setHeader('Set-Cookie', 'a_name=mike;Max-Age=0;HttpOnly,Secure');
  // Max-Age를 0으로 지정하면 쿠키가 즉시 소멸 된다.
  res.statusCode = 200;
  res.json({ message: 'ok' });
}
