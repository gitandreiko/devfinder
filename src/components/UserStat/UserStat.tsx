import { LocalGithubUser } from 'types'
import cls from './UserStat.module.scss'

export interface UserStatProps
  extends Pick<LocalGithubUser, 'repos' | 'followers' | 'following'> {}

export const UserStat = ({ repos, followers, following }: UserStatProps) => {
  return (
    <div className={cls.userStat}>
      <div className={cls.info}>
        <div className={cls.infoTitle}>Repos</div>
        <div className={cls.infoNumber}>{repos}</div>
      </div>
      <div className={cls.info}>
        <div className={cls.infoTitle}>Following</div>
        <div className={cls.infoNumber}>{following}</div>
      </div>
      <div className={cls.info}>
        <div className={cls.infoTitle}>Repos</div>
        <div className={cls.infoNumber}>{followers}</div>
      </div>
    </div>
  )
}
