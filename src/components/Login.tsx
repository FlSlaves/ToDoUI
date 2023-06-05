import { useState } from 'react';
import { loginFields } from "../formFields";
import {FormAction} from "./FormAction";
import {FormExtra} from "./FormExtra";
import {Input} from "./Input";
import {ErrorMessage} from "./ErrorMessage";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));


export function Login() {
    const [loginState, setLoginState] = useState(fieldsState);
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
    console.log(loginState)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authenticateUser();
  };

  const authenticateUser = () => {
  };

  return (
      <>
      {isError &&  <ErrorMessage error={errorMessage}/>}
          <form className="mt-0 space-y-6" onSubmit={handleSubmit}>
              <div className="-space-y-px">
                  {fields.map((field) => (
                      <Input
                          key={field.id}
                          handleChange={handleChange}
                          value={loginState[field.id]}
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
                  ))}
              </div>

              <FormExtra />
              <FormAction handleSubmit={handleSubmit} text="Login"  data={loginState} singUpBoolean={true} isError={setIsError} errorMessage={setErrorMessage}/>
          </form>
      </>

  );
}
