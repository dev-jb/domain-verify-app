const express = require('express')
const app = express()
const port = 80

app.get('/.well-known/pki-validation/AE5A67054ACCB43082EA6179326B79A1.txt', (req, res) => {
	// contents of DA166ED3C31BCF575FD416EE9835FCA6.txt file

	res.send(`50C4256DAE64FDC202FFF5B5BB5B3E5B57DE6B1166D693FE0E67C8344118D3C5
comodoca.com
47548a1b34bba96`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
