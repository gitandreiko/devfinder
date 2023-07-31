import cls from './InfoItem.module.scss'

export interface InfoItemProps {
  icon: React.ReactNode
  text?: string | null
  isLink?: boolean
}

export const InfoItem = ({ icon, text, isLink }: InfoItemProps) => {
  const currentText = text || 'Not avaliable'
  let currentHref: string = ''

  if (isLink) {
    currentHref = text && text.startsWith('http') ? text : `https://${text}`
  }

  return (
    <div className={`${cls.infoItem}${text ? '' : `${cls.empty}`}} `}>
      {icon}
      <div>
        {isLink && text ? (
          <a
            href={currentHref}
            target="_blank"
            rel="noreferrer"
            className={cls.link}
          >
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  )
}
