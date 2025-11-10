import { create } from "zustand";

export const useCheckoutStore = create((set) => ({
  customerInfo: null,
  shipmentInfo: null,
  cart: [],
  lastOrderId: 0, 

  setCustomerInfo: (data) => set({ customerInfo: data }),
  setShipmentInfo: (data) => set({ shipmentInfo: data }),
  setCart: (items) => set({ cart: items }),
  incrementOrderId: () =>
    set((state) => ({ lastOrderId: state.lastOrderId + 1 })),
}));
