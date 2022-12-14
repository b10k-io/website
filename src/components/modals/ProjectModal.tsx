import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IProject, IProp } from "../../projects"
import { useParams } from 'react-router-dom'
import GroupedLinks from '../links/GroupedLinks'
import shortEnglishHumanizer from "../../helpers/shortEnglishHumanizer"

interface ProjectModalProps {
    project: IProject
}

function ProjectModal({ project }: ProjectModalProps) {

    let { projectId } = useParams()

    let [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (projectId === project.symbol) {
            setIsOpen(true);
        }
    }, [projectId, project.symbol])

    function closeModal() {
        setIsOpen(false)
    }

    //   function openModal() {
    //     setIsOpen(true)
    //   }


    return (
        <>
            {/* <button
                type="button"
                onClick={openModal}
                className="p-1 hover:bg-black hover:text-white"
            >
                Details
            </button> */}

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
                                        className="text-2xl font-semibold leading-6 text-gray-900 flex justify-between"
                                    >
                                        <div>{project.name}</div>
                                        <button onClick={closeModal} className="text-xs text-black/50 hover:text-white p-1 hover:bg-black outline-0">[CLOSE]</button>
                                    </Dialog.Title>
                                    <div className="mt-2 text-sm text-black/50 flex flex-col gap-4">
                                        <p>{project.tags.join(", ")}</p>
                                        <p>{project.description}</p>
                                        <div className='flex justify-between'>
                                            <div>symbol:</div>
                                            <div>{project.symbol}</div>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div>resources:</div>
                                            <GroupedLinks links={project.links} modal={true} />
                                        </div>
                                        {project.properties.map((property: IProp, i: number) => (
                                            <div className='flex flex-row justify-between' key={i}>
                                                <div>{property.key}</div>
                                                <div>{property.value}</div>
                                            </div>
                                        ))}
                                        { project.tax ? (
                                        <div className='flex gap-8'>
                                            <div className='basis-1/2'>
                                                <div className='flex justify-between underline'>
                                                    <div>buy tax:</div>
                                                    <div>{project.tax.buy.reduce((sum: number, { value }: IProp) => (sum + (value as number || 0)), 0)}%</div>
                                                </div>
                                                {project.tax.buy.map((property: IProp, i: number) => (
                                                    <div className='flex justify-between' key={i}>
                                                        <div>{property.key}:</div>
                                                        <div>{property.value}%</div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className='basis-1/2'>
                                                <div className='flex justify-between underline'>
                                                    <div>sell tax:</div>
                                                    <div>{project.tax.sell.reduce((sum: number, { value }: IProp) => (sum + (value as number || 0)), 0)}%</div>
                                                </div>
                                                {project.tax.sell.map((property: IProp, i: number) => (
                                                    <div className='flex justify-between' key={i}>
                                                        <div>{property.key}:</div>
                                                        <div>{property.value}%</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>) : <div className='flex justify-between'>
                                            <div>tax:</div>
                                            <div>0%</div>
                                        </div>}
                                        {project.allocation ? (
                                            <>
                                                <h4>initial allocation:</h4>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <td className="border-0 underline px-0 py-1">who</td>
                                                            <td className="text-right border-0 underline px-0 py-1">% supply</td>
                                                            <td className="text-right border-0 underline px-0 py-1">unlock</td>
                                                            <td className="text-right border-0 underline px-0 py-1">cliff</td>
                                                            <td className="text-right border-0 underline px-0 py-1">vesting</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {project.allocation.map((alloc, i) => (
                                                            <tr key={i}>
                                                                <td className="border-0 px-0 py-1">{alloc.key}</td>
                                                                <td className="text-right border-0 px-0 py-1">{alloc.value}%</td>
                                                                <td className="text-right border-0 px-0 py-1">{alloc.initialUnlock}%</td>
                                                                <td className="text-right border-0 px-0 py-1">{shortEnglishHumanizer(alloc.cliff, alloc.config)}</td>
                                                                <td className="text-right border-0 px-0 py-1">{shortEnglishHumanizer(alloc.vesting, alloc.config)}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </>
                                        ) : <></>}
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

export default ProjectModal;