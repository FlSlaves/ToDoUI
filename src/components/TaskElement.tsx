import {ITask, IUpdate} from "../models";
import React, {useState} from "react";
import {useDrag} from "react-dnd";
import {EditTask} from "./EditTask";

interface TaskElementProps{
    elem: ITask,
    onDelete: (task:ITask) =>void
    onUpdate: (id: number, UpdateJson:IUpdate[]) => void
}
export function TaskElement({elem, onDelete, onUpdate}:TaskElementProps)
{
    const [isHovered, setIsHovered] = useState(false);
    const [edit, setEdit] = useState(false)
    const [deleteTask, setDeleteTask] = useState(false)

    const sumbitHandler = (updateJson:IUpdate[]) => {
        setEdit(false)
        onUpdate(elem.id, updateJson)
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: {id: elem.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return(
        <>
            {edit && (
                <EditTask editDescription={elem.description} onUpdate={sumbitHandler} onClose={()=>setEdit(false)} />
            )}
            {
                deleteTask && (
                    <>
                        <div className="fixed bg-black/50 inset-0 z-30"/>

                        <div
                            className={"w-full sm:w-[250px] p-5 rounded-2xl bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40"}
                        >
                            <h1 className=" text-2xl text-center mb-2">Delete task?</h1>
                            <div
                                className={"flex justify-center pt-2"}
                            >
                                <button
                                    className={"py-2 px-4 border bg-green-400 hover:text-white"}
                                    onClick = {() => onDelete(elem)}
                                >Yes</button>
                                <button
                                    className={"py-2 px-4 ml-2 border bg-red-500 hover:text-white"}
                                    onClick = {() => setDeleteTask(false)}
                                >No</button>
                            </div>
                        </div>
                    </>
                )
            }
            <div
                ref = {drag}
                className={`rounded-xl m-2 bg-white bg-opacity-65 ${isDragging ? "opacity-25" : "opacity-100"} ${isHovered ? "bg-gray-400" : ""} whitespace-normal relative`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className = "flex justify-center"
                >
                    <p
                        className='font-mono font-bold text-center pt-1 text-lg'
                    >{elem.task}</p>
                    {isHovered && (
                        <div className="absolute top-1 right-1">
                            <button className=""
                                    onClick={()=> setEdit(true)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                    />
                                </svg>

                            </button>
                            <button className=""
                                    onClick={() =>setDeleteTask(true)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                            </button>
                        </div>
                    )}
                </div>

                <p
                    className="p-2 whitespace-normal break-words"
                >
                    {elem.description}
                </p>
            </div>
        </>
    )
}