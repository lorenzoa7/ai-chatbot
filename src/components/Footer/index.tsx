import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className="absolute bottom-0 flex items-center justify-center w-full h-10 font-bold opacity-30 2xl:text-sm gap-1">
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
