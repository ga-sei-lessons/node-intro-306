// module.exports -- an object that exposes out code to other node files (aka modules)
module.exports.sayHello = () => {
    console.log('hello from inside the module')
}

function notConnect() {
    console.log("can you see me?")
}

module.exports.randomRange = range => {
    return Math.random() * range
}