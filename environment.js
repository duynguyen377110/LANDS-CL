const environment = {
    dev: {
        url: "http://localhost:8083/api/v1/common/",
        product: {
            root: 'product',
            all: 'product/all'
        }
    },
    pro: {
        url: "https://lands-be.onrender.com/api/v1/common/",
        product: {
            root: 'product',
            all: 'product/all'
        }
    }
}

export default environment['pro'];