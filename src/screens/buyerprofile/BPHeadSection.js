import Link from "next/link";
import { GrPrevious } from "react-icons/gr";
import { RiPencilLine } from "react-icons/ri";
import Modal from "../../components/UI/Modal/Modal";
import useToggle from "../../components/hooks/useToggle";
import EditProfileModal from "../../screens/buyerprofile/EditProfileModal";

const BPHeadSection = ({ buyer }) => {
  const [show, toggle] = useToggle();
  return (
    <div className="w-full h-[13rem] bg-[#DDDEDE] rounded-t-2xl">
      <div className="flex justify-between p-4">
        <Link href={"/"} className="flex items-center">
          <GrPrevious />
          Back
        </Link>
        <button
          onClick={toggle}
          className="flex items-center p-2 text-blue-600 bg-white rounded-md"
        >
          <RiPencilLine />
          Edit Profile
        </button>
      </div>
      {show && (
        <Modal
          isOpen={show}
          toggle={toggle}
          title={<span>Edit Profile</span>}
          closeButton={true}
        >
          <EditProfileModal buyer={buyer} />
        </Modal>
      )}
    </div>
  );
};

export default BPHeadSection;
