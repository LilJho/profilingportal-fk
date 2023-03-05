import React, { useState } from "react"
import Button from "components/UI/Button/Button"
import Disclosure from "components/UI/Disclosure"
import Modal from "components/UI/Modal/Modal"
import useToggle from "components/hooks/useToggle"
import { AiOutlineEye } from "react-icons/ai"

export default function OrderDetailsModal() {
  const [show, toggle] = useToggle(true) // for modal
  const [selectAll, setSelectAll] = useState(false) // select all checkbox
  const [isCheck, setIsCheck] = useState([]) // each checkbox
  const [isExpandAll, setIsExpandAll] = useState(true)
  const [isOpen, setIsOpen] = useState([])
  const [isAccepted, setIsAccepted] = useState([])
  const [isDeny, setIsDeny] = useState([])

  /**
   *  SELECT ALL HANDLER
   */
  function handleSelectAll(e) {
    setSelectAll(!selectAll)
    setIsCheck(dummyData.orders.map(li => li.id))
    if (selectAll) {
      setIsCheck([])
    }
  }

  /**
   *  EXPAND ALL HANDlER
   */
  function expandHandler() {
    setIsExpandAll(prev => !prev)
  }

  /**
   *  ITEM CHECK HANDLER
   */
  function checkClick(e) {
    const { id, checked } = e.target
    setIsCheck([...isCheck, id])
    if (!checked) {
      setSelectAll(!isCheck)
      setIsCheck(isCheck.filter(item => item !== id))
    }
    if (isCheck.length == dummyData.orders.length - 1) {
      setSelectAll(isCheck)
      if (!checked) {
        setSelectAll(!isCheck)
      }
    }
    console.log(isAccepted)
  }

  const dummyData = {
    buyerName: " Juans S. Darwin",
    buyerID: "000432",
    orderID: "000432",
    deliveryAddress: "San Pedro Puerto Princesa City, Palawan 5300",
    paymentMethod: "cash",
    orders: [
      {
        id: "0",
        productName: "Squash",
        tagalogName: "Kalabasa",
        variety: "any",
        volume: "100",
        unit: "kg",
        dateNeeded: "Dec 3, 2022",
        note: ""
      },
      {
        id: "1",
        productName: "Eggplant",
        tagalogName: "Talong",
        variety: "Green",
        volume: "350",
        unit: "kg",
        dateNeeded: "Dec 20, 2022",
        note: "Denied due to no available crops"
      },
      {
        id: "2",
        productName: "Eggplant",
        tagalogName: "Talong",
        variety: "Green",
        volume: "350",
        unit: "kg",
        dateNeeded: "Dec 20, 2022",
        note: "Denied due to no available crops"
      },
      {
        id: "3",
        productName: "Eggplant",
        tagalogName: "Talong",
        variety: "Green",
        volume: "350",
        unit: "kg",
        dateNeeded: "Dec 20, 2022",
        note: "Denied due to no available crops"
      }
    ]
  }

  return (
    <div>
      <Modal
        isOpen={show}
        toggle={toggle}
        closeButton={true}
        title="Order's Details"
      >
        {/* BODY */}
        <div>
          {/* head details */}
          <div className="flex items-center gap-12">
            <div>
              <h3 className="text-gray-500">Buyer</h3>
              <h3 className="text-secondary-500">Juan S. Darwin</h3>
            </div>
            <div>
              <h3 className="text-gray-500">Buyer ID</h3>
              <h3>000423</h3>
            </div>
            <div>
              <h3 className="text-gray-500">Order ID</h3>
              <h3>000123</h3>
            </div>
          </div>
          {/* Product area */}
          <div className="mt-4 ">
            <div className="flex gap-2">
              <div className="flex items-center gap-2 px-1">
                <input
                  type="checkbox"
                  id="selectAll"
                  className="cursor-pointer"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
                <label htmlFor="selectAll" className="cursor-pointer">
                  Select All {selectAll ? "(3)" : ""}
                </label>
              </div>
              {selectAll ? (
                <>
                  <Button size={"xs"} variant="light" color="gray">
                    Deny All
                  </Button>
                  <Button size={"xs"}>Accept All</Button>
                </>
              ) : isCheck.length > 0 ? (
                <>
                  <Button size={"xs"} variant="light" color="gray">
                    Deny ({isCheck.length})
                  </Button>
                  <Button size={"xs"}>Accept ({isCheck.length})</Button>
                </>
              ) : (
                ""
              )}

              <Button
                variant={"light"}
                color={"gray"}
                size={"xs"}
                onClick={expandHandler}
                className="ml-auto"
              >
                {isExpandAll ? "Minimize All" : "Expand All"}
              </Button>
            </div>
            {/* Disclosure */}
            <div className="max-h-80 overflow-y-auto mt-2">
              {dummyData.orders.map(i => (
                <Disclosure
                  key={i.id}
                  isCheck={isCheck.includes(i.id)}
                  handleClick={checkClick}
                  selectAll={selectAll}
                  id={i.id}
                  productName={i.productName}
                  tagalogName={i.tagalogName}
                  variety={i.variety}
                  volume={i.volume}
                  unit={i.unit}
                  dateNeeded={i.dateNeeded}
                  note={i.note}
                  isExpandAll={isExpandAll}
                  setIsExpandAll={setIsExpandAll}
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                  orderLength={dummyData.orders.length}
                  setIsAccepted={setIsAccepted}
                  isAccepted={isAccepted}
                  setIsDeny={setIsDeny}
                />
              ))}
            </div>
            {/* Address */}
            <div className="flex justify-between my-6 text-sm">
              <div>
                <h3 className="text-gray-500">Delivery Address</h3>
                <h3 className="font-medium">
                  San Pedro Puerto Princesa City, Palawan 5300
                </h3>
              </div>
              <div>
                <h3 className="text-gray-500">Payment Method</h3>
                <h3 className="font-medium">Cash</h3>
              </div>
            </div>
            {/* buttons */}
            <div className="flex justify-end gap-2 mt-6">
              <Button size="sm" variant="light" color="gray" onClick={toggle}>
                Close
              </Button>
              <Button size="sm">Quote Order</Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
