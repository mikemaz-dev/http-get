import express from 'express'

const a = express(),
	p = process.env.PORT || 3000
const gcd = (x, y) => (y ? gcd(y, x % y) : x)
const lcm = (x, y) => (x * y) / gcd(x, y)
a.get('/mazurkevich_mikhail_14_gmail_com', (req, res) => {
	const x = +req.query.x,
		y = +req.query.y
	if (!Number.isInteger(x) || !Number.isInteger(y) || x < 1 || y < 1)
		return res.end('NaN')
	res.end(String(lcm(x, y)))
})
a.listen(p)