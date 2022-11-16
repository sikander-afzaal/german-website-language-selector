import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function Example(props) {

  return (
    <div className="mx-auto w-fit">
      <Switch
        checked={props.enabled}
        onChange={props.setEnabled}
        className={`${props.enabled ? 'bg-teal-900 border-[#FB5D1E] outline-orange' : 'bg-teal-700 border-[#FB5D1E] outline-orange'}
          relative inline-flex bg-orange h-[25px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-[#FB5D1E] transition-colors duration-200 ease-in-out outline-orange`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${props.enabled ? 'translate-x-[29px]' : 'translate-x-0'}
            pointer-events-none inline-block h-[21px] w-[21px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}