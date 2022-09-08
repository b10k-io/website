import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


function FAQModal() {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }


    return (
        <>
            <div className='text-center'>
                <button
                    type="button"
                    onClick={openModal}
                    className="p-1 text-white/50 underline hover:bg-white hover:text-black w-min outline-0"
                >
                    faq
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="font-mono w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-4 md:p-8 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl text-black font-semibold leading-6 text-gray-900 flex justify-between"
                                    >
                                        <div>faq</div>
                                        <button onClick={closeModal} className="text-xs text-black/50 hover:text-white p-1 hover:bg-black outline-0">[CLOSE]</button>
                                    </Dialog.Title>
                                    <div className="mt-4 text-sm text-black/50 flex flex-col gap-4">
                                        <p>work in progress</p>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default FAQModal;