import express from 'express'

const app = express()

const gcd = (a, b) => {
	while (b !== 0n) {
		;[a, b] = [b, a % b]
	}
	return a
}

app.get('/app/mazurkevich_mikhail_14_gmail_com', (req, res) => {
	const { x, y } = req.query

	if (!/^[1-9]\d*$/.test(x) || !/^[1-9]\d*$/.test(y)) {
		return res.send('NaN')
	}

	const a = BigInt(x)
	const b = BigInt(y)

	const lcm = (a * b) / gcd(a, b)

	res.send(lcm.toString())
})

app.listen(process.env.PORT || 3000)