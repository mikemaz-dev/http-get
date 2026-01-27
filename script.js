import express from 'express'

const app = express()
const PORT = 3000

const isNeutral = v => typeof v === 'string' && /^[1-9]\d*$/.test(v)

const gcd = (a, b) => {
	while (b) {
		;[a, b] = [b, a % b]
	}
	return a
}

const lcm = (a, b) => (a / gcd(a, b)) * b

app.get('/mazurkevich_mikhail_14_gmail_com', (req, res) => {
	const { x, y } = req.query
	if (!isNeutral(x) || !isNeutral(y)) {
		res.send('NaN')
		return
	}
	res.send(String(lcm(+x, +y)))
})

app.listen(PORT, () => {
	console.log('Server on http://localhost:' + PORT)
})
