import Cookies from 'js-cookie'

export const useAuth = () => {
  const TokenKey = 'betterwe-key'

  const getToken = () => {
    return Cookies.get(TokenKey)
  }

  const setToken = (token: string) => {
    Cookies.set(TokenKey, token)
  }

  const removeToken = () => {
    Cookies.remove(TokenKey)
  }

  return {
    getToken,
    setToken,
    removeToken
  }
}
