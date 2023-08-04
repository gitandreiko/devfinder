import { Blocks } from 'react-loader-spinner'
import cls from './Loader.module.scss'

export const Loader = () => {
  return (
    <div className={cls.loader}>
      <Blocks
        visible={true}
        height="120"
        width="120"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </div>
  )
}
