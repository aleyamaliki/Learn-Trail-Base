import React from 'react'

const Progress = () => {
  return (
    <div>
        <h2 class="sr-only">Steps</h2>

        <div
            class="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100"
        >
            <ol class="relative z-10 flex justify-between text-sm font-medium text-gray-500">
            <li class="flex items-center gap-2 bg-white p-2">
                <span class="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold"> 1 </span>

                <span class="hidden sm:block"> Details </span>
            </li>

            <li class="flex items-center gap-2 bg-white p-2">
                <span
                class="size-6 rounded-full bg-blue-600 text-center text-[10px]/6 font-bold text-white"
                >
                2
                </span>

                <span class="hidden sm:block"> Address </span>
            </li>

            <li class="flex items-center gap-2 bg-white p-2">
                <span class="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold"> 3 </span>

                <span class="hidden sm:block"> Payment </span>
            </li>
            </ol>
        </div>
    </div>
  )
}

export default Progress