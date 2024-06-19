import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  bio?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};