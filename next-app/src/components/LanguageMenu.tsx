import React from 'react'

export interface LanguageMenuProps {
  onLanguageChange: (locale:string) => void
}
const LanguageMenu: React.FC<LanguageMenuProps> = ({onLanguageChange}) => {
  const locales = [{label:"EN", icon:"gb"}, {label:"ES", icon:"es"}]
  return (
      <ul className="flex gap-2 justify-center mt-2">
        {locales.map((locale, index) => (
          <li key={index} onClick={() => onLanguageChange(locale.label.toLowerCase())} className="p-2 bg-blue-300 rounded text-black hover:bg-blue-500 hover:text-white cursor-pointer"><span className={`fi fis fi-${locale.icon}`} /> {locale.label} </li>
        ))}
      </ul>
  )
}
export default LanguageMenu