
const regexEmail = /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
const regexPhone = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

const valid = (key, value) => {
    if(key === 'required') {
        if(!(value.trim() === 'DEFAULT') && value.trim().length) {

            return {
                status: true,
                message: ''
            }

        } else {
            return {
                status: false,
                message: 'Nội dung không được trống'
            }
        }
    }

    if(key === 'email') {
        if(value.trim().toLowerCase().match(regexEmail)) {
            return {
                status: true,
                message: ''
            }
        } else {
            return {
                status: false,
                message: 'E-mail không hợp lệ'
            }
        }
    }

    if(key === 'password') {
        if(regexPassword.test(value)) {
            return {
                status: true,
                message: ''
            }
        } else {
            return {
                status: false,
                message: 'Mật khẩu có độ dài tối thiểu 6 ký tự và các ký tự đặc biệt */#/@!..'
            }
        }
    }

    if(key === 'phone') {
        if(regexPhone.test(value)) {
            return {
                status: true,
                message: ''
            }
        } else {
            return {
                status: false,
                message: 'Số điện thoại không hợp lệ'
            }
        }
    }
}


const validReducer = (value, action) => {
    if(action.type === "VALID") {

        if(action.options.length) {
            for(let key of action.options) {
                let inforValid = valid(key, value);
    
                if(!inforValid.status) {
                    inforValid['value'] = value;
                    return inforValid;
                }
            }
        }
        
        return {status: true, message: '', value};

    } else {
        return {status: true, message: '', value};
    }
}

const useValidator = (options = []) => {

    const blur = (event) => {
        let value = event.target.value;
        return validReducer(value, {type: options.length > 0? 'VALID' : 'INVALID', options});
    }

    return blur;
}

export default useValidator;