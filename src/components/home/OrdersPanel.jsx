"use client";

import { CheckCircle2, Clock3, ArrowUpRight } from "lucide-react";

const orders = [
  {
    customer: "Olivia Martin",
    product: "Nike Air Max",
    amount: "$249",
    status: "Paid",
  },
  {
    customer: "James Wilson",
    product: "Apple Watch",
    amount: "$499",
    status: "Paid",
  },
  {
    customer: "Sophia Davis",
    product: "Sony XM5",
    amount: "$399",
    status: "Pending",
  },
  {
    customer: "Liam Brown",
    product: "MacBook Air",
    amount: "$1,299",
    status: "Paid",
  },
];

export default function OrdersPanel() {
  return (
    <div className="mt-8 rounded-[30px] border border-gray-200 bg-white p-8">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <p className="text-sm font-medium text-gray-500">
            Recent Orders
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#111827]">
            Latest Transactions
          </h2>
        </div>

        <button className="flex items-center gap-2 rounded-full bg-[#EEF3E5] px-4 py-2 text-sm font-semibold text-[#6E8B3D] transition hover:bg-[#E3ECD5]">
          View All
          <ArrowUpRight className="h-4 w-4" />
        </button>

      </div>

      <div className="space-y-4">

        {orders.map((order) => (

          <div
            key={order.customer}
            className="flex items-center justify-between rounded-2xl border border-gray-100 p-5 transition-all duration-300 hover:border-[#DCE8C6] hover:bg-[#FBFCF9]"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF3E5] font-bold text-[#6E8B3D]">
                {order.customer.charAt(0)}
              </div>

              <div>
                <h3 className="font-semibold text-[#111827]">
                  {order.customer}
                </h3>

                <p className="text-sm text-gray-500">
                  {order.product}
                </p>
              </div>

            </div>

            <div className="hidden md:block font-semibold text-[#111827]">
              {order.amount}
            </div>

            {order.status === "Paid" ? (
              <span className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                <CheckCircle2 className="h-4 w-4" />
                Paid
              </span>
            ) : (
              <span className="flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                <Clock3 className="h-4 w-4" />
                Pending
              </span>
            )}

          </div>

        ))}

      </div>

    </div>
  );
}