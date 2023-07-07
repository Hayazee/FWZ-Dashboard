import Person from "@material-ui/icons/Person";
import AttachMoney from "@material-ui/icons/AttachMoney";
import LocationOn from "@material-ui/icons/LocationOn";
import People from "@material-ui/icons/People";
import Home from "@material-ui/icons/Home";
import WalletIcon from '@material-ui/icons/AccountBalanceWallet';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
// core components/views for Agency layout
// import Dashboard from "views/agency/common/dashboard";
import Dashboard from "views/agency/common/dashboard/agencyDashboard";
// import Booking from "views/agency/common/bookings"
import Bookings from "views/agency/common/bookings";
import Users from "views/agency/admin/users";
import Customer from "views/agency/common/customers"
// import Voucher from "views/agency/common/vouchers";
import Vouchers from "views/agency/admin/vouchers";
import Wallet from "views/agency/admin/wallet";
import TopupRequests from "views/agency/admin/topupRequests";
import HotelOffers from "views/agency/common/hotel/index";
import PackageOffers from "views/agency/common/package/index";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import HotelIcon from "@material-ui/icons/Hotel";


const agencyAdminRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Home,
    component: Dashboard,
    layout: "/agency",
  },
  {
    path: "/user",
    name: "Users",
    icon: Person,
    component: Users,
    layout: "/agency",
  },
  {
    path: "/customers",
    name: "Customers",
    icon: People,
    component: Customer,
    layout: "/agency",
  },
  {
    path: "/booking",
    name: "Booking",
    icon: LocationOn,
    component: Bookings,
    layout: "/agency",
},
{
    path: "/hotels",
    name: "Hotels",
    icon: HotelIcon,
    component: HotelOffers,
    layout: "/agency",
},
{
    path: "/packages",
    name: "Packages",
    icon: LocalOfferIcon,
    component: PackageOffers,
    layout: "/agency",
},
  {
    path: "/voucher",
    name: "Voucher",
    icon: AttachMoney,
    component: Vouchers,
    layout: "/agency",
  },
  {
    path: "/requests",
    name: "Topup Requests",
    icon: HourglassEmptyIcon,
    component: TopupRequests,
    layout: "/agency",
  },
  {
    path: "/wallet",
    name: "Wallet",
    icon: WalletIcon,
    component: Wallet,
    layout: "/agency",
  },
];

export default agencyAdminRoutes;
