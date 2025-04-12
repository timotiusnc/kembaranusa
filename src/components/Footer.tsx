import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { InstagramSvg } from './logo/InstagramSvg'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto w-24" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="/about">Tentang Kami</NavLink>
              <NavLink href="/projects">Past Projects</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <a
              href="https://www.instagram.com/kembara.nusa/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram @kembara.nusa"
            >
              <InstagramSvg className="w-6 fill-gray-500" />
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Kembara Nusa. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
