import { isValidateEmail } from ".";

export const isFormValidation = (formObj)=> {
    let errorList = [];

    Object.keys(formObj).forEach((key)=>{
        const value = formObj[key];

        if(!value || value.length === 0){
            errorList.push(key + " is missing");
        }

        if(value && key === "Email" && !isValidateEmail(formObj[key])){
            errorList.push("Email is not valid");
        }

        if(value && key === "Password" && formObj[key].length < 8){
            errorList.push("Password should be 8 character or more");
        }
    })

    return errorList.join(", ");
}