import DashboardIcon from "@material-ui/icons/Dashboard";
import LocationOn from "@material-ui/icons/LocationOn";
import HotelIcon from '@material-ui/icons/Hotel';
import WalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Person from "@material-ui/icons/Person";
import People from "@material-ui/icons/People";
import AttachMoney from "@material-ui/icons/AttachMoney";
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
// core components/views for Admin layout
import Dashboard from "views/admin/dashboard";
import Booking from "views/admin/bookings";
import Hotel from "views/admin/hotels";
import Package from "views/admin/packages";
import Wallet from "views/admin/wallet";
import Users from "views/admin/users";
import TopupRequests from "views/admin/topupRequests";
import Customers from "views/admin/customers";
import Vouchers from "views/admin/vouchers";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Users",
    icon: Person,
    component: Users,
    layout: "/admin",
  },
  {
    path: "/customers",
    name: "Customers",
    icon: People,
    component: Customers,
    layout: "/admin",
  },
  {
    path: "/booking",
    name: "Booking",
    icon: LocationOn,
    component: Booking,
    layout: "/admin",
  },
  {
    path: "/hotel",
    name: "Hotel",
    icon: HotelIcon,
    component: Hotel,
    layout: "/admin",
  },
  {
    path: "/package",
    name: "Package",
    icon: LocalOfferIcon,
    component: Package,
    layout: "/admin",
  },
  {
    path: "/voucher",
    name: "Voucher",
    icon: AttachMoney,
    component: Vouchers,
    layout: "/admin",
  },
  {
    path: "/requests",
    name: "Topup Requests",
    icon: HourglassEmptyIcon,
    component: TopupRequests,
    layout: "/admin",
  },
  {
    path: "/wallet",
    name: "Wallet",
    icon: WalletIcon,
    component: Wallet,
    layout: "/admin",
  },
];

export default dashboardRoutes;
