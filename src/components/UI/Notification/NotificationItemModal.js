import React from "react"

export default function NotificationItemModal() {
  return (
    <div>
      <div className="border  border-blue-500 flex items-center justify-between py-4 px-6 rounded-xl cursor-pointer hover:scale-95 transition-all duration-150 hover:shadow-md my-2">
        <div className="flex items-center gap-4">
          {/* image */}
          <div>
            <div className="bg-gray-400 w-12 h-12  border-2 border-primary-500  rounded-full"></div>
          </div>
          {/* Details */}
          <div>
            <h3 className="font-medium">Marlo Roxas</h3>
            <h4 className="truncate w-52">ordered 300kg of Kalabasa</h4>
            <h5 className="text-xs text-primary"> 2 minutes ago</h5>
          </div>
        </div>
        {/* Circle */}
        <div className="w-5 h-5 animate-pulse bg-blue-500 rounded-full"></div>
      </div>
    </div>
  )
}
