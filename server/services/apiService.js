const fetch = require('isomorphic-unfetch')
const { UZ_HOST, API_VERSION } = require('server/constants/globals')

class Api {
  constructor (props) {
    const { baseUrl, headers } = props
    this.baseUrl = baseUrl
    this.headers = {
      'Accept': 'application/json, text/javascript, image/*; q=0.9, */*; q=0.6',
      'Accept-Encoding': 'gzip, deflate, br',
      'Content-Type': 'application/json'
    }

    if (headers) {
      Object.keys(headers).forEach(key => {
        if (headers[key] === null) {
          delete this.headers[key]
        } else {
          this.headers[key] = headers[key]
        }
      })
    }
  }

  request (url, options) {
    return fetch(url, options)
      .then(response => {
        if (response.ok) {
          // No-content handling
          if (response.status === 204) {
            throw response
          }

          const textFormats = ['image/png', 'image/jpeg', 'text/csv']
          const contentType = response.headers.get('content-type')

          if (textFormats.indexOf(contentType) !== -1) {
            return response.text()
          } else {
            return response.json()
          }
        } else {
          throw response
        }
      })
      .catch(err => {
        throw new Error(err)
      })
  }

  post (url, data) {
    const options = {
      headers: this.headers,
      body: this.headers['Content-Type'] === 'application/json' ? JSON.stringify(data) : data,
      method: 'POST',
      mode: 'cors'
    }

    return this.request(`${this.baseUrl}/${url}`, options)
  }

  get (url) {
    const options = {
      headers: this.headers,
      method: 'GET',
      mode: 'cors'
    }

    return this.request(`${this.baseUrl}/${url}`, options)
  }

  put (url, data) {
    const options = {
      headers: this.headers,
      body: this.headers['Content-Type'] === 'application/json' ? JSON.stringify(data) : data,
      method: 'PUT',
      mode: 'cors'
    }

    return this.request(`${this.baseUrl}/${url}`, options)
  }

  delete (url) {
    const options = {
      headers: this.headers,
      method: 'DELETE',
      mode: 'cors'
    }

    return this.request(`${this.baseUrl}/${url}`, options)
  }
}

const api = new Api({ baseUrl: API_VERSION })
const uzApi = new Api({ baseUrl: UZ_HOST })

module.exports = {
  api,
  uzApi
}
