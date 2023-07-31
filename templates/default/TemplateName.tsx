import cls from './TemplateName.module.scss'

interface TemplateNameProps {}

export const TemplateName = ({}: TemplateNameProps) => {
  return <div className={cls.templateName}>TemplateName Component</div>
}
