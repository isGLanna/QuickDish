const URL = 'https://localhost:4000/auth'

export class Authentication {
  login(user: { email: string, password: string}) {
    const result = fetch(URL, {
      'method': 'POST',
      'headers': {  'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    result.then(response => response.json()).then(data => {
      localStorage.setItem('token', data.token)
    })
  }
}