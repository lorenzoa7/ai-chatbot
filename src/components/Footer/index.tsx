import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'

type FooterProps = {
  invisible?: boolean
}

export default function Footer({ invisible = false }: FooterProps) {
  return (
    <footer
      data-invisible={invisible}
      className="flex items-center justify-center w-full h-10 font-bold opacity-30 2xl:text-sm gap-1 data-[invisible=true]:invisible"
    >
      <Link
        href="https://github.com/lorenzoa7"
        className="flex items-center justify-center gap-1 duration-150 hover:text-zinc-500 underline underline-offset-4"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
        Lorenzo Aceti
      </Link>
      <span>- AI Chatbot</span>
      <span>- 2023</span>
    </footer>
  )
}
