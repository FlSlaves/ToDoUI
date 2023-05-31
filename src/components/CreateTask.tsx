import React, {useState} from "react";
import {ITask} from "../models";
import {ErrorMessage} from "./ErrorMessage";

const newTask:ITask = {
    id: 0,
    task: '',
    description: '',
    status: 'ToDo',
    owner: ''
}

interface CreateTaskProps{
    taskOwner: string
    onCreate: (newTask : ITask) => void
    onClose: () => void
}

export function CreateTask({taskOwner, onCreate, onClose}:CreateTaskProps)
{
    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('ToDo')

    const [error, setError] = useState('')
    const [isProcessing, setIsProcessing] = useState(false);
    const sumbitHandler = async (event : React.FormEvent) => {
        event.preventDefault()
        setError('')
        if (isProcessing) {
            return;
        }
        if(task.trim().length === 0)
        {
            setError('Please enter valid title')
            return
        }
        setIsProcessing(true)
        newTask.task = task
        newTask.description = description
        newTask.status = status
        newTask.owner = taskOwner
        onCreate(newTask)
    }
    const changeHandlerTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value)
    }
    const changeHandlerDesc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value)
    }
    const changeHandlerStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(event.target.value)
    }

    return(
        <>
            <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0 z-30" />

            <div
                className= {"w-full sm:w-[500px] p-5 rounded-2xl bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40"}
            >
                <h1 className=" text-2xl text-center mb-2">Create new task</h1>
                <button
                    className="fixed top-2 right-2 rounded-full bg-white text-2xl"
                    onClick = {onClose}
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
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                <form
                    onSubmit={sumbitHandler}>
                    <label htmlFor="task">Task</label>
                    <input
                        type="text"
                        id="task"
                        className="border py-2 px-4 mb-2 w-full outline-0"
                        placeholder="Enter task..."
                        maxLength={150}
                        value={task}
                        onChange={changeHandlerTask}
                    />
                    {error && <ErrorMessage error={error}/>}
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        className="border py-2 px-4 mb-2 w-full h-44 resize-none outline-0"
                        placeholder="Enter description..."
                        maxLength={300}
                        value={description}
                        onChange={changeHandlerDesc}
                    />

                    <label htmlFor="status">Status</label>
                    <select
                        id="status"
                        className="border py-2 px-4 mb-2 w-full outline-0"
                        value={status}
                        onChange={changeHandlerStatus}
                    >
                        <option value="ToDo">ToDo</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Complete">Complete</option>
                    </select>
                    <div className="flex justify-center pt-2">
                        <button className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
                    </div>
                </form>
            </div>
        </>

    )
}