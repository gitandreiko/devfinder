import cls from './Loader.module.scss'

interface LoaderProps {}

export const Loader = ({}: LoaderProps) => {
  return <div className={cls.loader}>Loader Component</div>
}
