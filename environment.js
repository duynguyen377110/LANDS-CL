const environment = {
    dev: {
        url: "http://localhost:8083/api/v1/common/",
        access: {
            signup: "access/signup",
            signin: "access/signin",
            signout: "access/signout",
        },
        product: {
            root: 'product',
            all: 'product/all',
            amount: 'product/amount'
        },
        flatform: {
            android: {
                v1: 'application/android/v1'
            },
            ios: {
                v1: 'application/ios'
            }
        }
    },
    pro: {
        url: "https://lands-be.onrender.com/api/v1/common/",
        access: {
            signup: "access/signup",
            signin: "access/signin",
            signout: "access/signout",
        },
        product: {
            root: 'product',
            all: 'product/all',
            amount: 'product/amount'
        },
        flatform: {
            android: {
                v1: 'application/android/v1'
            },
            ios: {
                v1: 'application/ios'
            }
        }
    }
}

export default environment['pro'];