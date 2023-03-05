import React, { useState } from "react"
import SelectField from "../SelectField"
import Modal from "./Modal"
import useToggle from "components/hooks/useToggle"
import Button from "../Button/Button"
import { RiSave3Fill } from "react-icons/ri"

export default function AddProductModal() {
  const [show, toggle] = useToggle(true)
  const [selectedProduct, setSelectedProduct] = useState("Product")
  const [selectedVariety, setSelectedVariety] = useState("Any")
  const [selectedVolume, setSelectedVolume] = useState(0)
  const [selectedUnit, setSelectedUnit] = useState("Kg")
  const [selectedLocation, setSelectedLocation] = useState("All")

  function Save() {
    toggle(!show)
  }

  return (
    <div>
      <Modal
        isOpen={show}
        toggle={toggle}
        closeButton={true}
        title="Add Product"
      >
        <div className="grid grid-cols-4 gap-4 mt-4">
          <SelectField
            label="Product"
            fullWidth={true}
            data={["Hello", "hi"]}
            selected={selectedProduct}
            setSelected={setSelectedProduct}
            size="lg"
          />
          <SelectField
            label="Variety"
            fullWidth={true}
            data={["Hello", "hi"]}
            selected={selectedVariety}
            setSelected={setSelectedVariety}
            size="lg"
          />
          <SelectField
            label="Volume"
            fullWidth={true}
            data={["Hello", "hi"]}
            selected={selectedVolume}
            setSelected={setSelectedVolume}
            size="lg"
          />
          <SelectField
            label="Unit"
            fullWidth={true}
            data={["Hello", "hi"]}
            selected={selectedUnit}
            setSelected={setSelectedUnit}
            size="lg"
          />
          <SelectField
            label="Location"
            fullWidth={true}
            data={["Hello", "hi"]}
            selected={selectedLocation}
            setSelected={setSelectedLocation}
            size="lg"
          />
        </div>
        {/* Buttons */}
        <div className="flex justify-end gap-2 pt-4">
          <Button variant="light" color="gray">
            Cancel
          </Button>
          <Button icon={<RiSave3Fill />} onClick={Save}>
            Save
          </Button>
        </div>
      </Modal>
    </div>
  )
}
