import { LegacyRef, forwardRef } from 'react'

import './loadingNextPage.scss'

interface Props {
  isFetching: boolean
  hasNext: boolean | undefined
}

export const loadNewUsersInfo = (
  isFetching: boolean,
  hasNext: boolean | undefined,
) =>
  isFetching
    ? 'Loading More Users...'
    : hasNext
    ? 'Load Newer'
    : 'Nothing more to load'

const LoadingNextPage = forwardRef(
  (props: Props, ref: LegacyRef<HTMLParagraphElement> | undefined) => {
    const { isFetching, hasNext } = props
    return (
      <p className="loading-next-page" ref={ref}>
        {loadNewUsersInfo(isFetching, hasNext)}
      </p>
    )
  },
)

export default LoadingNextPage
