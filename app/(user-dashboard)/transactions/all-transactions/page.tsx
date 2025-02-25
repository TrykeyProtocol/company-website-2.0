import FilterDrawer from "@/library/components/molecules/filter-drawer";
import DashboardLayout from "@/library/components/templates/dashboard-layout-wrapper";
import { Dialog } from "@radix-ui/react-dialog";
import {
  ChevronLeft,
  MoveDownLeft,
  MoveUpRight
} from "lucide-react";
import Link from "next/link";

const Page = () => {
  const transactions = [
    {
      name: "Sarah Doe",
      vehicle_no: "234-6573-ABJ",
      date: "3rd Nov, 2023",
      amount: 25000,
      type: "receive",
    },
    {
      name: "John Smith",
      vehicle_no: "234-6573-ABJ",
      date: "4th Nov, 2023",
      amount: 30000,
      type: "receive",
    },
    {
      name: "Michael Brown",
      vehicle_no: "234-6573-ABJ",
      date: "7th Nov, 2023",
      amount: 35000,
      type: "send",
    },
    {
      name: "Emma Johnson",
      vehicle_no: "234-6573-ABJ",
      date: "5st Nov, 2023",
      amount: 28000,
      type: "receive",
    },
    {
      name: "Michael Brown",
      vehicle_no: "234-6573-ABJ",
      date: "7th Nov, 2023",
      amount: 35000,
      type: "receive",
    },
    {
      name: "Michael Brown",
      vehicle_no: "234-6573-ABJ",
      date: "7th Nov, 2023",
      amount: 35000,
      type: "send",
    },
  ];
  return (
    <DashboardLayout hideNotification={true}>
      <Dialog>
        <div className=" flex justify-between items-center">
          <Link href="/transactions" className=" flex gap-5 ">
            <ChevronLeft width={24} />
            <p>Transactions</p>
          </Link>
          <FilterDrawer />
        </div>
        <div className="w-full pt-6">
          {transactions.map((transaction, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3 border-b last:border-b-0"
            >
              <div className="flex gap-4 items-center">
                <div
                  className={` ${
                    transaction.type === "receive"
                      ? " bg-green-100"
                      : "bg-red-100"
                  } p-1.5 rounded-full`}
                >
                  {transaction.type === "receive" ? (
                    <MoveDownLeft
                      strokeWidth={3}
                      className=" w-3 h-3 text-green-500"
                    />
                  ) : (
                    <MoveUpRight
                      strokeWidth={3}
                      className=" w-3 h-3 text-red-500"
                    />
                  )}
                </div>
                <div>
                  <p className="font-medium text-sm">
                    {transaction.name} paid to{" "}
                    <span className=" font-light">
                      {transaction.vehicle_no}
                    </span>{" "}
                  </p>
                  <p className="text-xs text-gray-400">{transaction.date}</p>
                </div>
              </div>
              <p
                className={`font-semibold text-sm ${
                  transaction.type === "receive"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {transaction.type === "receive" ? "+" : "-"}₦
                {transaction.amount.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </Dialog>
    </DashboardLayout>
  );
};

export default Page;
