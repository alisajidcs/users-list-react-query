import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import useGetUser from './api/useGetUsers'
import Loading from '../../components/loading/loading'
import LoadingNextPage from './components/loadingNextPage/loadingNextPage'
import User from './components/user/user'

import './Users.scss'

const Users = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetUser()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])

  if (isLoading) return <Loading />

  return (
    <div className="users-list">
      {data?.pages.map(page =>
        page.data.map(user => <User key={user.id} {...user} />),
      )}
      <LoadingNextPage
        ref={ref}
        isFetching={isFetchingNextPage}
        hasNext={hasNextPage}
      />
    </div>
  )
}

export default Users
