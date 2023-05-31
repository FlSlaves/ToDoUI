export interface ITask {
    id: number
    task: string
    description : string
    status: string
    owner: string
}

export interface IUpdate{
    op: string
    path: string
    value: string
}