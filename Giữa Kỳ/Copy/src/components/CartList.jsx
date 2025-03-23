import React from "react";
import { CartItem } from "./CartItem";
import { ShopItem } from "./ShopItem";

export const CartList = ({ data, dispatch, total }) => {
  return (
    <div className="my-12">
      <h1 className="text-5xl font-bold pb-4 border-gray-300 border-b-2">
        Giỏ hàng của bạn
      </h1>
      <div className=" my-12 min-h-[200px]">
        {data.length === 0 && (
          <div className="min-h-[200px] flex justify-center items-center">
            <p className="text-5xl text-gray-500">GIỎ HÀNG TRỐNG...</p>
          </div>
        )}

        {data.length !== 0 &&
          data.map((item) => (
            <CartItem item={item} dispatch={dispatch} key={item.id} />
          ))}
      </div>

      <h3 className="text-3xl ">Tổng tiền: {total} VNĐ</h3>
    </div>
  );
};
