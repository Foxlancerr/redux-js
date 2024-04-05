import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatchType, RootStateType } from "../store";
import {
  addProductInTable,
  removeProductFromTable,
} from "../features/createInvioce/PracticeSlice";

function Home() {
  const dispatch = useDispatch<AppDispatchType>();
  const content = useSelector(
    (state: RootStateType) => state.practiceSlice.Content
  );

  if (!content) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div>
      <button
        className="bg-blue-600 py-2 px-4 text-white text-2xl mr-5"
        onClick={() => {
          dispatch(
            addProductInTable({
              category: "Category",
              id: content.length + 1,
              name: "name",
            })
          );
        }}
      >
        ADD
      </button>
      <button
        className="bg-red-600 py-2 px-4 text-white text-2xl"
        onClick={() => {
          if (content.length == 0) {
            alert("Empty list");
          } else {
            dispatch(
              removeProductFromTable({
                id: content.length,
              })
            );
          }
        }}
      >
        REMOVE
      </button>

      {content?.map((item) => {
        return (
          <div key={item.id}>
            <h1>Id: {item?.id}</h1>
            <h1>name: {item?.name}</h1>
            <h1>Categery: {item?.category}</h1>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
