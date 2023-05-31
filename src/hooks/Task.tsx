import axios, {AxiosError} from "axios";
import {ITask, IUpdate} from "../models";
import {useEffect, useState} from "react";


export function useTask(Owner:string){
    const [tasks, setTasks] = useState<ITask[]>([])
    const [error, setError] = useState('')
    const [owner, setOwner] = useState(Owner)
    async function addTask(elem: ITask) {
        try {
            await axios.post<ITask>('https://localhost:7256/api/ToDo/InsertTask/', elem)
            await fetchTask()
        }
        catch (e) {
            const error = e as AxiosError
            setError(error.message)
        }
    }
    async function deleteTask(elem: ITask) {
        try {
            await axios.delete(`https://localhost:7256/api/ToDo/DeleteTask/${elem.id}`)
            await fetchTask()
        }
        catch (e) {
            const error = e as AxiosError
            setError(error.message)
        }
    }
    async function updateTask(id:number, updateJson:IUpdate[])
    {
        try {
            await axios.patch(`https://localhost:7256/api/ToDo/UpdateTask/${id}/`, updateJson)
            await fetchTask();
        }
        catch (e) {
            const error = e as AxiosError
            setError(error.message)
        }

    }
    async function fetchTask() {
        try {
            setError('')
            const response = await axios.get<ITask[]>(`https://localhost:7256/api/ToDo/GetTask/${owner}`)
            setTasks(response.data)
        }
        catch (e){
            const error = e as AxiosError
            setError(error.message)
        }
    }
    useEffect(()=> {
        fetchTask().then()
    }, [])
    return {tasks, error, addTask, deleteTask, updateTask}
}
