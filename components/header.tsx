'use client'

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import company from "@/config/company"
import { removeWhitespaces } from "@/lib/utils"
import Link from "next/link"

const navigation = [
  { name: 'Про компанію', href: '#about' },
  { name: 'Послуги', href: '#services' },
  { name: 'Співпраця та Партнерство', href: '#cooperation' },
  { name: 'Контакти', href: '#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const close = () => setMobileMenuOpen(false)
  const open = () => setMobileMenuOpen(true)

  return (
    <header className="absolute inset-x-0 top-0 z-10 lg:bg-[#111D28]/[.9]">
      <nav className="mx-auto flex max-w-5xl lg:max-w-6xl items-center justify-between p-4 px-7 md:p-8 md:px-16 lg:py-0 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/">
            <span className="sr-only">Onyx</span>
            <Image
              className="h-8 md:h-12 lg:h-10 w-auto"
              src="/images/logo.svg"
              width={100}
              height={33}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={open}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="size-6 md:size-8" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-xs font-semibold leading-[54px] text-white hover:text-[#478CCB] hover:border-b hover:border-[#478CCB]">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href={`tel:${company.phone}`} className="text-xs font-semibold leading-[14px] text-white flex items-center">
            <Image className="mr-[6px]" src="/images/phone.svg" width={13} height={13} alt="Phone" />
            {company.phone}
          </Link>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-7 py-4 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-8 w-auto"
                src="/images/logo.svg"
                width={100}
                height={33}
                alt="Logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={close}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="size-6 md:size-8" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={close}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal text-white hover:bg-gray-800"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href={'tel:' + removeWhitespaces(company.phone)}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal text-white hover:bg-gray-800"
              >
                {company.phone}
              </Link>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}