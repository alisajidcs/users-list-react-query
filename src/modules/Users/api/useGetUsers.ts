import axios from 'axios'
import { useInfiniteQuery } from '@tanstack/react-query'

import { sleep } from '../../../utils/sleep'

import IUserResponse, { IUserRaw } from '../types/UserResponse'
import { API_URL } from '../constants'

export const fetchUsers = async ({ pageParam = 1 }) => {
  await sleep(3000)
  const response = await axios.get(API_URL + '?page=' + pageParam)
  const data = await response.data
  return {
    ...data,
    perPage: data.per_page,
    totalPages: data.total_pages,
    data: data.data.map((user: IUserRaw) => ({
      ...user,
      firstName: user.first_name,
      lastName: user.last_name,
    })),
  }
}

const getNextPageParam = (lastPageData: IUserResponse) =>
  lastPageData.page < lastPageData.totalPages && lastPageData.page + 1

const useGetUser = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<IUserResponse>(['user'], fetchUsers, {
      getNextPageParam,
    })

  return {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  }
}

export default useGetUser
