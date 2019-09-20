const configs = {
  qiniu: {
    accessKey:"8I49daxpSoFK8ABjf6O55ES-5guBOnq4XFAGoH9_",
    secretKey:'JiFFObJzyFY1wPe52Kvrp5oxh62Q6xugZPsN5yzK'
  },
  name:'image_url',
  size:500,
  accept: 'image/png, image/gif, image/jpeg',// 可选 可上传的图片格式
  TOKEN_API:'http://localhost:3000/api/qiniu-upload',
  QINIU_API:'http://upload-z2.qiniup.com'
}

module.exports = configs