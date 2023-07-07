import HomeIcon from "@material-ui/icons/Home";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WalletIcon from "@material-ui/icons/AccountBalanceWallet";
import Dashboard from "../views/customer/dashboard/index";
import Booking from "../views/customer/bookings/index";
import Wallet from "../views/customer/wallet";
import Profile from "../views/customer/profile";
import HotelOffers from "../views/customer/hotel/index";
import PackageOffers from "../views/customer/package/index";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import HotelIcon from "@material-ui/icons/Hotel";

const customerRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: HomeIcon,
    component: Dashboard,
    layout: "/customer",
  },
  {
    path: "/booking",
    name: "Booking",
    icon: LocationOnIcon,
    component: Booking,
    layout: "/customer",
  },
  {
    path: "/hotels",
    name: "Hotels",
    icon: HotelIcon,
    component: HotelOffers,
    layout: "/customer",
  },
  {
    path: "/packages",
    name: "Packages",
    icon: LocalOfferIcon,
    component: PackageOffers,
    layout: "/customer",
  },
  {
    path: "/wallet",
    name: "Wallet",
    icon: WalletIcon,
    component: Wallet,
    layout: "/customer",
  },
  {
    path: "/profile",
    component: Profile,
    layout: "/customer",
  },
];

export default customerRoutes;
