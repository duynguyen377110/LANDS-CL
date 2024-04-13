const useHttp = (url = '') => {

    const http = async (infor = {method: '', payload: null}, callback= null) => {
        try {
            let res = await fetch(url, {
                method: infor.method? infor.method : 'GET',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(infor.payload)
            })

            if(!res.ok) throw new Error("Request unsuccess");
            callback(await res.json());

        } catch (error) {
            callback({status: false, message: error.message});
        }
    }

    return {
        http
    }
}

export default useHttp;