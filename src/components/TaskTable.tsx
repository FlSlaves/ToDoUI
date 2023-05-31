import React from "react";
import {useDrop} from "react-dnd";
import {IUpdate} from "../models";

interface TableProps{
    children: React.ReactNode,
    status: string,
    name: string,
    Update: (item: number, UpdateJson:IUpdate[]) => void
}

const UpdateJson :IUpdate[] = [
    {
        op: "replace",
        path: "/Status",
        value: ""
    }
];
export function TaskTable({children, status,name, Update}:TableProps){

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item: { id: number }) => {
            UpdateJson[0].value = status
            Update(item.id, UpdateJson)
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    return(
        <div
            className={`lg:w-1/5 ml-10 mr-10 mt-4`}
        >
            <div
                ref = {drop}
                id={status}
                className={`border-2 border-black ${isOver ? "bg-slate-400" : ""} rounded-xl bg-gray-300 bg-opacity-30`}
            >
                <div id={status + 'Header'} className="p-4">
                    <p className="font-mono font-bold text-center text-2xl ">{name}</p>
                </div>
                <div id={status + 'List'}>
                    {children}
                </div>
            </div>
        </div>
    )

}