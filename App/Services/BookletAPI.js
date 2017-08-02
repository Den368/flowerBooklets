import apisauce from 'apisauce'

const create = (baseURL = 'http://52.51.81.191:85/') => {
  const api = apisauce.create({
    baseURL,
    headers: {},
    timeout: 10000
  })

  const getAllFlowers = () => api.get('getFlowers')
  const getTranlations = () => api.get('getTranslate')

  return {
    getAllFlowers,
    getTranlations
  }
}

export default {
  create
}
