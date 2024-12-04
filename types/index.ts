export enum EnumStatus {
  'todo' = 'todo',
  'inProgress' = 'inProgress',
  'produced' = 'produced',
  'done' = 'done'
}

export interface IBaseField {
  $createdAt: string
  $id: string
}

export interface IComment extends IBaseField {
  text: string
}

export interface IDeal extends IBaseField {
  name: string
  status: EnumStatus
  description: string
  comments?: IComment[]
}

export interface IColumn {
  id: EnumStatus
  name: string
  items: IDeal[]
}