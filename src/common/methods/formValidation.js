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
    })

    return errorList.join(", ");
}