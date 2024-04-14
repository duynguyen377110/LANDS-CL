const environment = {
    dev: {
        url: "http://localhost:8083/api/v1/common/",
        access: {
            signup: "access/signup",
            signout: "access/signout",
        },
        product: {
            root: 'product',
            all: 'product/all',
            amount: 'product/amount'
        }
    },
    pro: {
        url: "https://lands-be.onrender.com/api/v1/common/",
        access: {
            signup: "access/signup",
            signout: "access/signout",
        },
        product: {
            root: 'product',
            all: 'product/all',
            amount: 'product/amount'
        }
    }
}

export default environment['pro'];