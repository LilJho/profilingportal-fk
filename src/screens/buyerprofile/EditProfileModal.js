import TextField from "../../components/UI/TextField";
import SelectField from "../../components/UI/SelectField";
import Button from "../../components/UI/Button/Button";

const EditProfileModal = ({ buyer }) => {
  let [firstname, ...lastname] = buyer.full_name.split(" ");
  return (
    <div className="space-y-4 ">
      <div className="flex gap-2">
        <TextField size={"sm"} value={firstname} label="First name"></TextField>
        <TextField size={"sm"} label="Middle name"></TextField>
        <TextField size={"sm"} value={lastname} label="Last name"></TextField>
        <SelectField
          size={"sm"}
          label="Suffix"
          data={["Jr", "Sr", "III"]}
        ></SelectField>
      </div>
      <div className="flex gap-2">
        <TextField
          size={"sm"}
          value={buyer.birthdate}
          label="Birthdate"
        ></TextField>
        <TextField
          size={"sm"}
          value={buyer.contact_no}
          label="Contact No."
        ></TextField>
        <TextField
          size={"sm"}
          value={buyer.address}
          label="Address"
        ></TextField>
      </div>
      <div className="flex gap-2">
        <TextField
          size={"sm"}
          value={buyer.email}
          label="Email address"
        ></TextField>
        <SelectField
          size={"sm"}
          label="Citizenship"
          data={["Filipino", "Korean", "American"]}
        ></SelectField>
        <SelectField
          size={"sm"}
          label="Civil Status"
          data={["Single", "Married", "Widow"]}
        ></SelectField>
      </div>
      <div className="flex justify-end w-full gap-2 pt-[4rem]">
        <Button size={"sm"} color={"gray"}>
          Cancel
        </Button>
        <Button size={"sm"} color={"blue"}>
          Save Edit
        </Button>
      </div>
    </div>
  );
};

export default EditProfileModal;
