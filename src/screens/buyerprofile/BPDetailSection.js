import Image from "next/image";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsCalendarEvent } from "react-icons/bs";

import Table, {
  TableColumn,
  TableHead,
  TableRow,
} from "../../components/UI/Table";
import UnstyledButton from "../../components/UI/Button/UnstyledButton";
import { RiPlayList2Fill } from "react-icons/ri";

const BPDetailSection = ({ buyer }) => {
  return (
    <main className="w-full bg-white rounded-b-2xl">
      <figure className="flex flex-col items-center relative top-[-7rem]">
        <div className="p-2 bg-white rounded-full">
          <Image
            src={"/images/profile.webp"}
            width={200}
            height={200}
            alt={"profile image"}
            className="rounded-full"
          />
        </div>
        <figcaption className="text-center">
          <h4>{buyer.full_name}</h4>
          <p>{buyer.id}</p>
        </figcaption>
      </figure>
      <section className="relative top-[-4rem] px-8">
        <article className="flex items-center gap-5 my-2">
          <GoLocation />
          <span>{buyer.address}</span>
        </article>
        <article className="flex items-center gap-5 my-2">
          <BsTelephone />
          <span>{buyer.contact_no}</span>
        </article>
        <article className="flex items-center gap-5 my-2">
          <HiOutlineMail />
          <span>{buyer.email}</span>
        </article>
        <article className="flex items-center gap-5 my-2">
          <BsCalendarEvent />
          <span>{buyer.birthdate}</span>
        </article>
      </section>

      <div className="relative top-[-2rem]">
        <h4 className="text-2xl font-bold">Transactions</h4>
        <Table
          header={
            <>
              <TableHead>Order #</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Variety</TableHead>
              <TableHead>Volume</TableHead>
              <TableHead>Date Needed</TableHead>
              <TableHead>Date Completed</TableHead>
              <TableHead>Action</TableHead>
            </>
          }
        >
          <TableRow>
            <TableColumn>0123</TableColumn>
            <TableColumn>Squash</TableColumn>
            <TableColumn>Any</TableColumn>
            <TableColumn>500kg</TableColumn>
            <TableColumn>Dec. 2, 2022</TableColumn>
            <TableColumn>Dec. 2, 2022hh</TableColumn>
            <TableColumn>
              <UnstyledButton onClick={() => console.log(i)}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary-100/70 text-secondary">
                  <RiPlayList2Fill />
                </div>
              </UnstyledButton>
            </TableColumn>
          </TableRow>
        </Table>
      </div>
    </main>
  );
};

export default BPDetailSection;
