import { useReducer } from "react";
import { CartList } from "./components/CartList";
import { Shop } from "./components/Shop";

const initialState = {
  cart: [],
  total: 0,
};

// {type: "ADD", payload: {
//   id: 0,
//   tieude: "Lập trình JavaScript nâng cao",
//   tacgia: "Nguyễn Văn A",
//   mota: "Cuốn sách cung cấp kiến thức chuyên sâu về JavaScript, từ cơ bản đến nâng cao.",
//   gia: 250000,
//   img: "/book1.jpg",
// }}

// {type: "REMOVE", payload: {id: 10}}

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      // TH1: Nếu chưa có vật phẩm trong giỏ hàng, thì thêm vào giỏ hàng và set giá trị + 1
      // TH2: Nếu có rồi thì tăng giá trị lên 1

      const index = state.cart.findIndex((x) => x.id === action.payload.id);

      if (index !== -1) {
        // TH2: Có vật phẩm rồi
        const item = state.cart[index];
        const newCart = [...state.cart];
        newCart[index] = { ...item, quantity: item.quantity + 1 };

        return {
          ...state,
          cart: newCart,
          total: state.total + item.gia,
        };
      } else {
        // TH1: Chưa có vật phẩm
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.gia,
        };
      }
    }
    case "REMOVE": {
      // TH1: nếu quantity >1 thì giảm 1
      // Th2: nếu quantity = 1 thì xóa khỏi giỏi hàng

      const index = state.cart.findIndex((x) => x.id === action.payload.id);

      if (index === -1) return { ...state };

      const item = state.cart[index];
      if (item.quantity > 1) {
        const newCart = [...state.cart];
        newCart[index] = { ...item, quantity: item.quantity - 1 };

        return {
          ...state,
          cart: newCart,
          total: state.total - item.gia,
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter((x) => x.id !== action.payload.id),
          total: state.total - item.gia,
        };
      }
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <>
      <div className="my-12 w-11/12 mx-auto">
        <CartList data={state.cart} dispatch={dispatch} total={state.total} />
        <Shop dispatch={dispatch} />
      </div>
    </>
  );
}

export default App;
