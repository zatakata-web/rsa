function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function encode(x) {
  let public_key = {}
  let private_key = {}

  let simple_numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
  let p = simple_numbers[1],
      q = simple_numbers[5],
      mod = p * q
      
  let f = (p - 1) * (q - 1)

  let e = simple_numbers.filter(n => n < f && f % n !== 0)
  e = e[0]

  public_key = {e, mod}

  let d
  let i = 1
  while ((i * e) % f !== 1) {
    i++
    d = i
  }
  private_key = {d, mod}

  let crypted = x ** public_key.e % mod
  let decrypted = crypted ** private_key.d % mod

  return {crypted, decrypted}
}

console.log(encode(11))