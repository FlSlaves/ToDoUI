import {useNavigate} from "react-router-dom";

export function FormAction({
    type = 'Button',
    action = 'submit' as 'submit' | 'button' | 'reset' | undefined,
    text,
  }: {
    handleSubmit;
    type?: 'Button';
    action?: 'submit' | 'button' | 'reset';
    text: string;
  }) {
    const nav = useNavigate();
    const handleSubmit=()=>{
      nav('/ToDo');
     }

    return (
      <div className="flex justify-center">
        {type === 'Button' ? (
          <button
            type={action}
            className="group relative py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
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
  