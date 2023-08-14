import './avatar.scss'

interface Props {
  url: string
}

const Avatar = ({ url }: Props) => {
  return <img src={url} alt={url} className="avatar" />
}

export default Avatar
