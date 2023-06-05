import { useState } from 'react';
import { signupFields } from "../formFields"
import {FormAction} from "./FormAction";
import {Input} from "./Input";
import {ErrorMessage} from "./ErrorMessage";

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');
const Error =  {
  isError: false,
  message: ""
}
export function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
  }


    return(
        <>
          {isError && <p className={"ml-2 mr-2"}><ErrorMessage error={errorMessage}/> </p>}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="">
              {
                fields.map(field=>
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={signupState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                        maxLength={field.maxLength}
                        customClass=""
                    />

                )
              }
              <FormAction handleSubmit={handleSubmit} text="Signup"  data={signupState} singUpBoolean={false} isError={setIsError} errorMessage={setErrorMessage}/>
            </div>
          </form>
        </>

    )
}