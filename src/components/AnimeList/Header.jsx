import Link from "next/link";

const Header = ({title, linkHref, linkTitle}) => {
  return (
    <div className="flex justify-between items-center p-3">
        <h1 className="text-2xl font-bold text-color-whitee">{title}</h1>
        {linkHref && linkTitle ? <Link href={linkHref} className="md:text-lg text-sm underline hover:text-color-bluee text-color-whitee transition-all">{linkTitle}</Link> : null }
    </div>
  )
}

export default Header;