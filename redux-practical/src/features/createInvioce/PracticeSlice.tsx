import { createSlice } from "@reduxjs/toolkit";
import {
  IContentProduct,
  IContentTotals,
  IFormbackendData,
} from "../../types/practice";

const Content: IContentProduct[] = [
  {
    category: "Category1",
    id: 1,
    name: "name1",
  },
  {
    category: "Category2",
    id: 2,
    name: "name2",
  },
  {
    category: "Category3",
    id: 3,
    name: "name3",
  },
  {
    category: "Category4",
    id: 4,
    name: "name4",
  },
  {
    category: "Category5",
    id: 5,
    name: "name5",
  },
  {
    category: "Category6",
    id: 6,
    name: "name6",
  },
  {
    category: "Category7",
    id: 7,
    name: "name7",
  },
  {
    category: "Category8",
    id: 8,
    name: "name8",
  },
  {
    category: "Category9",
    id: 9,
    name: "name9",
  },
];

const invioceTotals: IContentTotals = {
  totalAmount: 0,
  totalTax: 0,
  totalDiscount: 0,
};

// backend data recieved format
const formData: Partial<IFormbackendData> = {};

interface IInitialState {
  Content: IContentProduct[];
  isBtnActivated: boolean;
  invioceTotals: IContentTotals;
  formData: Partial<IFormbackendData>;
}

const initialState: IInitialState = {
  isBtnActivated: false,
  Content,
  invioceTotals,
  formData,
};

const createInvoiceSlice = createSlice({
  name: "invoice/createInvioce",
  initialState,
  reducers: {
    toggleBtn: (state) => {
      state.isBtnActivated = !state.isBtnActivated;
    },

    addProductInTable: (state, action) => {
      state.Content = [
        ...state.Content,
        {
          id: action.payload.id,
          category: action.payload.category + action.payload.id,
          name: action.payload.name + action.payload.id,
        },
      ];
    },

    removeProductFromTable: (state, action) => {
      state.Content = state.Content.filter(
        (item) => item.id !== action.payload.id
      );
    },

    // handleInputsChangeInTable: (state, action) => {
    //   const name = action.payload.name;
    //   const value = action.payload.value;
    //   let nameValue: string | number;

    //   switch (name) {
    //     case "rate":
    //     case "tax":
    //     case "quantity":
    //     case "discount":
    //       nameValue = Number(value);
    //       break;
    //     case "product":
    //     case "unit":
    //       nameValue = value;
    //       break;
    //   }

    //   const updatedTableData = [...state.Content];

    //   const rowIndex = updatedTableData.findIndex(
    //     (item) => item.id === action.payload.productId
    //   );

    //   if (rowIndex !== -1) {
    //     updatedTableData[rowIndex] = {
    //       ...updatedTableData[rowIndex], // Copy the previous object
    //       [name]: nameValue, // Update the specific property
    //     };
    //   }

    //   state.Content = updatedTableData;
    // },

    // calculateAllTotals: (state) => {
    //   // Calculate totals
    //   let totalAmount: number = 0;
    //   let totalTax: number = 0;
    //   let totalDiscount: number = 0;

    //   state.Content = state.Content.map((row) => {
    //     const amount =
    //       row.quantity * row.rate * (1 - row.discount / 100) + row.tax;
    //     totalAmount += amount;
    //     totalTax += parseFloat(row.tax);
    //     totalDiscount += parseFloat(row.discount);
    //     return { ...row, amount: amount };
    //   });

    //   state.invioceTotals.totalAmount = totalAmount;
    //   state.invioceTotals.totalTax = totalTax;
    //   state.invioceTotals.totalDiscount = totalDiscount;
    // },

    handleChangeCreateInvioceForm: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;
      if (name && value) {
        state.formData = {
          ...state.formData,
          [name]: value,
        };
      } else {
        state.formData = {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        };
      }
    },

    handleSubmitCreateInvioceForm: (state, action) => {
      console.log("submit form");
    },
  },
});

export const {
  toggleBtn,
  addProductInTable,
  removeProductFromTable,
  handleChangeCreateInvioceForm,
  handleSubmitCreateInvioceForm,
} = createInvoiceSlice.actions;

export default createInvoiceSlice.reducer;
