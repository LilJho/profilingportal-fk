import React, { useEffect, useRef, useState } from "react"
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai"
import Button from "./Button/Button"
import useToggle from "components/hooks/useToggle"

export default function Disclosure({
  handleClick,
  isCheck,
  id,
  productName,
  tagalogName,
  variety,
  volume,
  unit,
  dateNeeded,
  note,
  isExpandAll,
  setIsExpandAll,
  setIsOpen,
  isOpen,
  orderLength,
  setIsAccepted,
  isAccepted,
  setIsDeny
}) {
  const [show, toggle] = useState(true)
  const test = useRef(null)

  useEffect(() => {
    if (isExpandAll) {
      if (!isOpen.length) {
        setIsOpen(prev => [...prev, id])
        toggle(() => true)
      }
      toggle(() => true)
    } else {
      toggle(() => false)
      setIsOpen([])
    }
  }, [isExpandAll])

  /**
   *  COLLAPSE HANDLER
   */
  function collapseHandler() {
    if (isOpen.includes(id)) {
      setIsOpen(prev => prev.filter(i => i !== id))
      if (isOpen.length == 1) {
        setIsExpandAll(false)
      }
    } else {
      setIsOpen(prev => [...prev, id])
      if (isOpen.length == orderLength - 1) {
        setIsExpandAll(true)
      }
    }
    toggle(prev => !prev)
  }

  /**
   *  ACCEPTED ORDER HANDLER
   */
  function AcceptOrder() {
    setIsAccepted(prev => [...prev, id])
  }

  /**
   *  Denied ORDER HANDLER
   */
  function DenyOrder() {
    setIsDeny(prev => [...prev, id])
  }

  // (test.current.checked = !test.current.checked)

  return (
    <div
      className={`bg-secondary-100/40 px-1 relative rounded-sm ${
        show ? "" : "my-3"
      } `}
    >
      {/* <label
        htmlFor={id}
        className={` h-8 w-11/12 left-0 absolute ${show ? "hidden" : ""}`}
      ></label> */}

      <div className="flex items-center gap-2 py-1">
        <input
          type="checkbox"
          id={id}
          className="cursor-pointer self-start mt-2 "
          checked={isCheck}
          onChange={handleClick}
          ref={test}
        />
        <div className={show ? "grid grid-cols-5 text-gray-500" : ""}>
          {show ? (
            <>
              <div>Product</div>
              <div>Variety</div>
              <div>Volume</div>
              <div>Unit</div>
              <div>Date neeeded</div>
            </>
          ) : (
            `${productName} (${tagalogName}) / ${variety} / ${volume} / ${unit} / ${dateNeeded}`
          )}
        </div>
        <button className="ml-auto" id={id} onClick={collapseHandler}>
          {show ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}
        </button>
      </div>

      <div className={show ? "" : "hidden"}>
        {/* Items */}
        <div className="flex items-center gap-2 py-2">
          <input type="checkbox" id="selectAll" className="invisible" />
          <div className="grid grid-cols-5  min-w-[494px]">
            <div className="text-black">{productName}</div>
            <div className="text-black">{variety}</div>
            <div className="text-black">{volume}</div>
            <div className="text-black">{unit}</div>
            <div className="text-black">{dateNeeded}</div>
          </div>
          <button className="invisible ml-auto">
            <AiOutlineMinusSquare />
          </button>
        </div>

        <div className="flex py-1 my-4 justify-between">
          {/* note */}
          <div className="py-1">
            {note ? (
              <>
                <h3 className="text-gray-500 pl-5">Note</h3>
                <p className="bg-red-400/90 px-4 py-1 rounded-md text-white max-w-1/2 text-sm">
                  Remarks: {note}
                </p>
              </>
            ) : (
              ""
            )}
          </div>
          {/* action buttons */}
          <div className="flex self-end gap-1 py-1">
            <Button
              size="xs"
              variant="subtle"
              color="gray"
              className="bg-transparent border-none"
              onClick={DenyOrder}
            >
              Deny Order
            </Button>
            <Button size="xs" className="border-none" onClick={AcceptOrder}>
              Accept Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
