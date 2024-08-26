"use client";

// import RectButton from "@/components/buttons/RectButton";
import { useSelector, useDispatch } from "react-redux";
import { FaStar, FaTrash } from "react-icons/fa6";
import { remove } from "@/store/slices/cartSlice";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart) || [];
  const totalPrice = []?.reduce((acc, currentItem) => {
    return acc + currentItem.price;
  }, 0);
  const dispatch = useDispatch();

  function handleRemove(item) {
    dispatch(remove(item));
  }

  return (
    <section className={`bg-cool-10 text-white`}>
      <div
        className={`wrapper-desk min-h-[calc(100vh-75px)] flex flex-col items-start`}
      >
        <div
          className={`w-full flex items-center justify-between py-5 bg-cool-10 sticky top-[75px] left-0 z-10`}
        >
          <span
            className={`self-center text-[20px] xs:text-[28px] tracking-tight`}
          >
            Your Cart
          </span>
          <div className={`flex items-center justify-end gap-8`}>
            <div className={`text-right`}>
              <h1 className={`text-[14px] xs:text-[16px] text-cool-80`}>
                Subtotal
              </h1>
              <h1
                className={`text-[24px] xs:text-[28px] font-semibold leading-[120%] tracking-tight italic`}
              >
                {totalPrice}$
              </h1>
            </div>
            <button
              className={`btnRect !text-[14px] xs:!text-[16px] !w-[100%] !rounded-md self-center justify-self-center`}
            >
              Buy Tickets
            </button>
          </div>
        </div>
        <div className={`w-[100%] gap-4`}>
          <div
            className={`w-[100%] flex flex-col justify-center gap-2 p-2 xs:p-3 border-[2px] border-cool-80/20 rounded-radius-md mb-8`}
          >
            {cartItems && cartItems.length
              ? cartItems?.map((item, index) => (
                  <CartItemList
                    key={index}
                    game={item.game}
                    gameTitle={item.gameTitle}
                    tickets={item.tickets}
                    entries={item.entries}
                    price={item.price}
                    onHandleRemove={() => handleRemove(item.id)}
                  />
                ))
              : null}
          </div>
          {/* <div
            className={`hidden fixed top-[85px] left-0 w-[100%] px-2 bg-cool-10 pt-6`}
          >
            <h1 className="mb-6 text-center text-h4">Welcome to your cart !</h1>
            <div className="h-fit border-[2px] border-cool-60/50 p-4 rounded-radius-md flex flex-col items-center justify-between gap-4 col-span-4 sm:col-span-1 order-first sm:order-last">
              <div className="text-center">
                <h1 className="mb-4">Subtotal</h1>
                <h1 className="text-h3">{totalPrice}$</h1>
              </div>
              <button className="button-rect !rounded-radius-sm w-[100%]">
                Buy Tickets
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

function CartItemList({ game, gameTitle, price, tickets, onHandleRemove }) {
  return (
    <div className={`rounded-radius-md bg-cool-20/50 overflow-hidden`}>
      <div className={`flex xs:grid grid-cols-2 p-4`}>
        <div className={`w-[100%] flex items-center gap-4`}>
          <div className={`bg-cool-40 p-3 xs:p-3 rounded-full`}>
            <FaStar className={`text-hl-bright`} />
          </div>

          <div>
            <p className={`text-sm capitalize text-cool-80 tracking-tight`}>
              {game}
            </p>
            <h6
              className={`text-[14px] uppercase text-cool-90 italic tracking-widest`}
            >
              {gameTitle}
            </h6>
            <div
              className={`w-max ${tickets.length > 3 ? "grid" : "block"} ${
                tickets.length > 9
                  ? "grid-cols-3 sm:grid-cols-4"
                  : tickets.length > 6
                  ? "grid-cols-3"
                  : "grid-cols-2"
              } gap-x-2`}
            >
              {tickets.map((item, index) => (
                <h6 key={index} className={`text-[16px]`}>
                  {item.join("-")}
                </h6>
              ))}
            </div>
          </div>
        </div>

        <div className={`flex items-center justify-end gap-3 xs:gap-8`}>
          <div
            className={`w-max text-[20px] xs:text-[24px] tracking-tight font-semibold italic`}
          >
            {price}$
          </div>

          <button
            onClick={onHandleRemove}
            className={`hidden xs:flex items-center gap-2 border-2 hover:bg-cool-50/50 border-cool-60/20 hover:border-transparent px-3 py-2 rounded-lg transition-all duration-75`}
          >
            <FaTrash className={`text-cool-80`} />
          </button>
        </div>
      </div>
      <button
        onClick={onHandleRemove}
        className={`flex xs:hidden items-center justify-end w-full  py-2 px-4 gap-2 bg-cool-50/20`}
      >
        <span className={`inline-block text-cool-80`}>Delete</span>
        <FaTrash className={`text-cool-80`} />
      </button>
    </div>
  );
}
