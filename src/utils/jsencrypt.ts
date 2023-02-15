import JSEncrypt from 'jsencrypt/bin/jsencrypt.min'
import {
  PRIVATE_KEY as privateKey,
  PUBLICK_KEY as publicKey
} from '@/constance/index'

// 密钥对生成 http://web.chacuo.net/netrsakeypair

// 加密
export function encrypt(txt: string) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对数据进行加密
}

// 解密
export function decrypt(txt: string) {
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(privateKey) // 设置私钥
  return encryptor.decrypt(txt) // 对数据进行解密
}
