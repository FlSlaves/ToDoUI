import {useNavigate} from "react-router-dom";
import axios from "axios";


export function FormAction({
    type = 'Button',
    action = 'submit' as 'submit' | 'button' | 'reset' | undefined,
    text,
    data,
    singUpBoolean,
    isError,
    errorMessage
  }: {
    handleSubmit;
    type?: 'Button';
    action?: 'submit' | 'button' | 'reset';
    text: string;
    data
    singUpBoolean: boolean
    isError: (boolean) => void
    errorMessage: (string) => void
  }) {
    const nav = useNavigate();
    const handleSubmit=async () => {
        if(singUpBoolean)
        {
            const response = await axios.post(`https://localhost:7256/api/Authorize/SignIn`, data)
            if(response.data.status != "Error")
            {
                nav('/ToDo', { state: { owner: data.userName } });
            }
            else
            {
                isError(true)
                errorMessage(response.data.message)
            }
        }
        else
        {
            const response = await axios.post(`https://localhost:7256/api/Authorize/Register`, data)
            console.log(response.data)
            if(response.data.status != "Error")
            {
                nav('/ToDo', { state: { owner: data.userName } });
            }
            else
            {
                isError(true)
                errorMessage(response.data.message)
            }
        }
    }

    return (
      <div className="flex justify-center">
        {type === 'Button' ? (
          <button
            type={action}
            className="group relative py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10 mb-5"
            onClick={handleSubmit}
            style={{ width: '500px' }}
          >
            {text}
          </button>
        ) : (
          <></>
        )}
      </div>
    );
  }
  