'use client'

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Modal({ open, setOpen, children }: { open: boolean, children: React.ReactNode, setOpen: (open: boolean) => void }) {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-[#111D28] bg-opacity-85 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center p-4 text-center items-center md:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden bg-[#F3F3F3] border border-[#C2C2C2] px-4 pb-4 pt-5 text-left transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in sm:my-8 w-full md:max-w-2xl lg:max-w-[800px] sm:p-6 sm:data-closed:translate-y-0 sm:data-closed:scale-95"
          >
            <div className="absolute right-0 top-0 pr-[18px] pt-4 block">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md text-[#505050] focus:outline-hidden"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon strokeWidth={1} aria-hidden="true" className="h-8 w-8" />
              </button>
            </div>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
