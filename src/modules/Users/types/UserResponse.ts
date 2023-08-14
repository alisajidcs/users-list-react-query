import IUser from './User'

export type IUserRaw = Omit<IUser, 'firstName' | 'lastName'> & {
  first_name: string
  last_name: string
}

interface IUserResponse {
  page: number
  perPage: number
  totalPages: number
  total: number
  data: IUser[]
}

export default IUserResponse
