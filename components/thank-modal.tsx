import Modal from "./modal";

export default function ThankModal({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="flex items-center justify-center flex-col py-24 lg:py-32">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mb-4 lg:mb-6">
          Дякуємо!
        </h2>
        <p className="text-base md:text-lg lg:text-xl max-w-96 text-center text-balance">Ми отримали повідомлення і звʼяжемося з Вами найближчим часом.</p>
      </div>
    </Modal>
  )
}