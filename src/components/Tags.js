import React from 'react'

const Tags = () => {
    return (
        <>
            <div
                class="inline-flex divide-x overflow-hidden rounded-md border bg-white shadow-sm dark:divide-gray-800 dark:border-gray-800 bg-transparent"
            >
                <button
                    class="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative dark:text-gray-200 dark:hover:bg-gray-800"
                    title="Edit Product">
                        HelloFaizan
                </button>

                <button
                    class="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative dark:text-gray-200 dark:hover:bg-gray-800"
                    title="Delete Product">
                        Next JS
                </button>

                <button
                    class="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative dark:text-gray-200 dark:hover:bg-gray-800"
                    title="Delete Product">
                        Next JS
                </button>
            </div>

        </>
    )
}

export default Tags