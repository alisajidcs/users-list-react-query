import Avatar from '../avatar/avatar'

import IUser from '../../types/User'

import './user.scss'

interface Props extends IUser {}

const User = (props: Props) => {
  const { avatar, firstName, lastName } = props
  return (
    <div className="user">
      <Avatar url={avatar} />
      {[firstName, lastName].join(' ').trim()}
    </div>
  )
}

export default User
