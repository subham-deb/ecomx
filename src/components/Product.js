import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";

const Product = (props) => {
  const navigate = useNavigate();
  return (
    <div className="w-full relative group ">
      <div className="max-w-full sm:max-w-80 max-h-80 relative overflow-y-hidden border-[1px] hover:bg-slate-100">
        <div className="w-full h-full ">
          <img className="w-full h-full " alt="" src={props.img} />
        </div>
        {props.showMetaCard && (
          <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
            <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-sans px-2 border-l border-r">
              <li
                onClick={() => props.addToCartProduct(props)}
                className="text-[#767676] hover:text-black text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-black flex  items-center justify-start gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
              >
                Add to Cart
                <span>
                  <FaShoppingCart />
                </span>
              </li>
              <li
                onClick={() => navigate(`/${props.id}/product`)}
                className="text-[#767676] hover:text-black text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-black flex  items-center justify-start gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
              >
                View Details
                <span className="text-lg">
                  <MdOutlineLabelImportant />
                </span>
              </li>
              <li className="text-[#767676] hover:text-black text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-black flex  items-center justify-start gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
                Add to Wish List
                <span>
                  <BsSuitHeartFill />
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="max-w-full sm:max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4 hover:bg-slate-100">
        <div className="flex items-center justify-between ">
          <div className="flex flex-col">
            <h2 className="text-base text-black font-bold">
              {props.productName}
            </h2>
          </div>
          <p className="text-[#767676] text-[14px] self-start">
            ${props.price}
          </p>
        </div>
        <div className="flex items-center justify-between ">
          <div className="">
            <h2 className="text-base text-black font-bold">{"Total Rating"}</h2>
          </div>
          <p className="text-[#767676] text-[14px] self-start mt-1">
            {props.rating.count}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <h3 className="text-base text-black font-bold">Rating</h3>
          </div>
          <p className="text-[#767676] text-[14px] self-start mt-2">
            <Rating
              readOnly
              name="half-rating"
              defaultValue={props.rating.rate}
              precision={0.5}
            />
          </p>
        </div>
        {!props.showMetaCard && (
          <div className="flex flex-col ">
            <div className="">
              <h3 className="text-base text-black font-bold">Description</h3>
            </div>
            <p className="text-[#767676] text-[12px] self-start mt-2">
              {props.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
