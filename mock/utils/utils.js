const Utils = {
    awaitTime: function(ms) {
        return new Promise((rsv) => {
            setTimeout(() => {
                rsv()
            }, ms)
        })
    }
}

module.exports = Utils;