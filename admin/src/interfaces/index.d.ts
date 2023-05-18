import { Dayjs } from "dayjs";

export interface IOrderChart {
  count: number;
  status:
  | "waiting"
  | "ready"
  | "on the way"
  | "delivered"
  | "could not be delivered";
}

export interface IOrderTotalCount {
  total: number;
  totalDelivered: number;
}

export interface ISalesChart {
  date: string;
  title: "Order Count" | "Order Amount";
  value: number;
}



export interface IBookingStatus {
  id: number;
  title: "Pending" | "Booking" | 'Cancel' | 'Done'
}
// export interface IUser {
//   id: number;
//   fullName: string;
//   gender: string;
//   gsm: string;
//   createAt: string;
//   isActive: boolean;
//   avatar: IFile[];
//   addresses: IAddress[];
// }

export interface IUser {
  id: number;
  fullname: string;
  phonenumber: string;
  username: string;
  role: string;
  email: string;
  addresses: IAddress[]
  createAt: string;
  avatar: string
}

export interface IIdentity {
  id: number;
  name: string;
  avatar: string;
}

export interface IAddress {
  text: string;
  coordinate: [string, string];
}

export interface IFile {
  name: string;
  percent: number;
  size: number;
  status: "error" | "success" | "done" | "uploading" | "removed";
  type: string;
  uid: string;
  url: string;
}

export interface IEvent {
  date: string;
  status: string;
}

export interface IStore {
  id: number;
  title: string;
  isActive: boolean;
  createdAt: string;
  address: IAddress;
  products: IProduct[];
}

export interface ICourier {
  id: number;
  name: string;
  surname: string;
  email: string;
  gender: string;
  gsm: string;
  createdAt: string;
  accountNumber: string;
  licensePlate: string;
  address: string;
  avatar: IFile[];
  store: IStore;
}
export interface IOrder {
  id: number;
  user: IUser;
  createdAt: string;
  products: IProduct[];
  status: IOrderStatus;
  adress: IAddress;
  store: IStore;
  courier: ICourier;
  events: IEvent[];
  orderNumber: number;
  amount: number;
}
export interface IBooking {
  id: number;
  user: IUser
  nameuser: string;
  room: string;
  namehotel: IHotel;
  bookingdate: string;
  checkindate: string;
  checkoutdate: string;
  payment: string;
  status: IBookingStatus
}
export interface IHotel {
  id: number;
  name: string;
  desreption: string;
  address: string;
  city: ICity;
  starRating: number;
  phonenumber: string;
  avatar: string;
  price: number;
  categories: ICategory[];
  rooms: IRoom[];
  stock: number;
}

export interface IRoom {
  id: number;
  nameRoom: string;
  numberRoom: string[];
  price: number
}
export interface IProduct {
  id: number;
  name: string;
  isActive: boolean;
  description: string;
  images: IFile[];
  createdAt: string;
  price: number;
  category: ICategory;
  stock: number;
}

export interface ICategory {
  id: number;
  title: string;
}
export interface ICity {
  id: number;
  city: string;
}

export interface IOrderFilterVariables {
  q?: string;
  store?: string;
  user?: string;
  createdAt?: [Dayjs, Dayjs];
  status?: string;
}

export interface IUserFilterVariables {
  q: string;
  status: boolean;
  createdAt: [Dayjs, Dayjs];
  gender: string;
  isActive: boolean;
}

export interface ICourier {
  id: number;
  name: string;
  surname: string;
  gender: string;
  gsm: string;
  createdAt: string;
  isActive: boolean;
  avatar: IFile[];
}

export interface IReview {
  id: number;
  order: IOrder;
  user: IUser;
  star: number;
  createDate: string;
  status: "pending" | "approved" | "rejected";
  comment: string[];
}
