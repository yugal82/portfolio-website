'use client';
import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Tabs = ({ categories, getSelectedTabIndex }) => {

    return (
        <div className="w-full max-w-md mx-auto px-2 py-8 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    {categories.map((category, index) => (
                        <Tab
                            onClick={() => getSelectedTabIndex(index)}
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm md:text-base font-bold',
                                    selected
                                        ? 'bg-white text-blue-700 shadow outline-none'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
            </Tab.Group>
        </div>
    )
}

export default Tabs;
