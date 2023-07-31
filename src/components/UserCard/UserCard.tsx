import { UserStat } from 'components/UserStat'
import { LocalGithubUser } from 'types'
import cls from './UserCard.module.scss'
import { UserTitle } from 'components/UserTitle'
import { UserInfo } from 'components/UserInfo'

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={cls.userCard}>
      <img src={props.avatar} alt={props.login} className={cls.avatar} />
      <UserTitle
        created={props.created}
        login={props.login}
        name={props.name}
      />
      <p className={`${cls.bio}${props.bio ? '' : `${cls.empty}`}`}>
        {props.bio || 'This profile has no bio'}
      </p>
      <UserStat
        repos={props.repos}
        following={props.following}
        followers={props.followers}
      />
      <UserInfo
        blog={props.blog}
        company={props.company}
        location={props.location}
        twitter={props.twitter}
      />
    </div>
  )
}
