import React, { useState } from "react"
import SelectField from "../SelectField"
import Modal from "./Modal"
import useToggle from "components/hooks/useToggle"
import Button from "components/UI/Button/Button"
import { BsQuestionCircle } from "react-icons/bs"
import TextArea from "../TextArea"

export default function DenyOrderModal() {
  const [show, toggle] = useToggle(true)
  const [selected, setSelected] = useState("No available crops")

  function Save() {
    toggle(!show)
  }

  return (
    <div>
      <Modal isOpen={show} toggle={toggle} closeButton={true}>
        <div className="flex justify-center">
          <BsQuestionCircle className="text-tertiary-500 text-5xl" />
        </div>

        <p className="w-2/4 text-center mx-auto my-2">
          Are you sure you want to <b>deny order?</b> Please indicate reason/s.
        </p>

        <div className="w-1/3 mb-4">
          <SelectField
            fullWidth={true}
            data={["Hello", "hi"]}
            selected={selected}
            setSelected={setSelected}
            size="sm"
            label="Reason/s"
            required={true}
          />
        </div>
        <TextArea placeholder="Message" required label="Message" rows={5} />
        {/* Buttons */}
        <div className="flex justify-end gap-2 pt-4">
          <Button color={"gray"} variant="light">
            Cancel
          </Button>
          <Button color={"red"}>Submit</Button>
        </div>
      </Modal>
    </div>
  )
}
