import AttachMoney from "@material-ui/icons/AttachMoney";
import LocationOn from "@material-ui/icons/LocationOn";
import People from "@material-ui/icons/People";
import Home from "@material-ui/icons/Home";
import WalletIcon from "@material-ui/icons/AccountBalanceWallet";
// core components/views for Agency layout
// import Dashboard from "views/agency/common/dashboard";
import Dashboard from "views/agency/common/dashboard/agentDashboard";
import AgencyProfile from "views/agency/common/agencyProfile";
import UserProfile from "views/agency/common/userProfile";
import Bookings from "views/agency/common/bookings";
import Customer from "views/agency/common/customers";
import Voucher from "views/agency/agent/vouchers";
import Wallet from "views/agency/agent/wallet";
import HotelOffers from "views/agency/common/hotel/index";
import PackageOffers from "views/agency/common/package/index";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import HotelIcon from "@material-ui/icons/Hotel";

const agencyAgentRoutes = [{
        path: "/dashboard",
        name: "Dashboard",
        icon: Home,
        component: Dashboard,
        layout: "/agency",
    },
    {
        path: "/customer",
        name: "Customer",
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
        component: Voucher,
        layout: "/agency",
    },
    {
        path: "/wallet",
        name: "Wallet",
        icon: WalletIcon,
        component: Wallet,
        layout: "/agency",
    },
    {
        path: "/agency-profile",
        component: AgencyProfile,
        layout: "/agency",
    },
    {
        path: "/user-profile",
        component: UserProfile,
        layout: "/agency",
    },
];

export default agencyAgentRoutes;