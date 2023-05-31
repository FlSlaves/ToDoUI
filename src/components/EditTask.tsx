import React, {useState} from "react";
import {IUpdate} from "../models";


interface EditTaskProps{
    editDescription: string
    onUpdate: (UpdateJson:IUpdate[]) => void
    onClose: () => void
}
const UpdateJson :IUpdate[] = [
    {
        op: "replace",
        path: "/Description",
        value: ""
    }
];

export function EditTask({editDescription, onUpdate, onClose}:EditTaskProps)
{
    const [description, setDescription] = useState(editDescription)
    const [isProcessing, setIsProcessing] = useState(false);

    const sumbitHandler = async (event : React.FormEvent) => {
        event.preventDefault()
        if (isProcessing) {
            return;
        }
        UpdateJson[0].value = description
        setIsProcessing(true)
        onUpdate(UpdateJson)
    }
    const changeHandlerDesc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value)
    }
    return(
        <>
            <div className="fixed bg-black/50 inset-0 z-30"/>

            <div
                className={"w-full sm:w-[500px] p-5 rounded-2xl bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40"}
            >
                <h1 className=" text-2xl text-center mb-2">Edit description</h1>
                <button
                    className="fixed top-2 right-2 rounded-full bg-white text-2xl"
                    onClick={onClose}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor" className="w-8 h-8">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </button>
                <form onSubmit={sumbitHandler}>
                <textarea
                    id="description"
                    className="border py-2 px-4 mb-2 w-full h-44 resize-none outline-0 "
                    placeholder="Enter description..."
                    maxLength={300}
                    value={description}
                    onChange={changeHandlerDesc}
                />
                    <div className="flex justify-center pt-2">
                        <button className="py-2 px-4 border bg-yellow-400 hover:text-white">Edit</button>
                    </div>
                </form>
            </div>
        </>
    )
}