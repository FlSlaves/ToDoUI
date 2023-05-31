import {useTask} from "../hooks/Task";
import React, {useState} from "react";
import {ITask} from "../models";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {ErrorMessage} from "../components/ErrorMessage";
import {TaskTable} from "../components/TaskTable";
import {TaskElement} from "../components/TaskElement";
import {CreateTask} from "../components/CreateTask";

export function TaskPages() {
    const [owner, setOwner] = useState('Flaxy')
    const { tasks, error, addTask, deleteTask , updateTask} = useTask(owner);

    const [create, setCreate] = useState(false)

    const createHandler = async (elem: ITask) => {
        setCreate(false)
        await addTask(elem);
    };
    function filterTasksByStatus(status: string): ITask[] {
        return tasks.filter((task) => task.status === status);
    }
    return (
        <DndProvider backend={HTML5Backend}>
            {error &&  <ErrorMessage error={error} />}
            <button
                className="fixed border border-black bottom-5 left-5 rounded-full bg-white text-2xl px-4 py-4 z-20"
                onClick={() => {setCreate(true);
                }}
            >
                <div className = "flex">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                    </svg>
                </div>
            </button>
            <div className="sm:flex justify-center">
                {["ToDo", "In Progress", "Complete"].map((status) => (
                    <TaskTable status={status} name={status}  Update = {updateTask} key={status}>
                        {filterTasksByStatus(status).map((task) => (
                            <TaskElement elem={task} onDelete={deleteTask}  onUpdate= {updateTask} key={task.id} />
                        ))}
                    </TaskTable>
                ))}
            </div>
            {create && (
                <CreateTask taskOwner={owner} onCreate={createHandler} onClose={() => setCreate(false)}/>
            )}
        </DndProvider>
    );
}