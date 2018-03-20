const driver = require('bigchaindb-driver')
let bdb = new driver.Connection('https://test.bigchaindb.com/api/v1/', { 
    app_id: '08552a0a',
    app_key: '206cff6c79c8d321404d1873aa3655f4'
})

module.exports = [driver,bdb];