import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from '@material-ui/styles';
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import ApartmentIcon from '@mui/icons-material/Apartment';

// import DateRange from "@material-ui/icons/DateRange";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardIcon from "../../../components/Card/CardIcon.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import { useSnackbar } from "notistack";

///// IMPORTING STUFF /////
import { useSelector, useDispatch } from "react-redux";
import {
  getSpecificUser,
  getAllBookings,
  getSpecificWallet,
  getAllUsers,
  getAllCustomers,
} from "crud";

import { bugs, website, server } from "../../../variables/general";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "../../../variables/charts";

import styles from "../../../assets/jss/material-dashboard-react/views/dashboardStyle";
import Typography from '@mui/material/Typography'

export default function AdminDashboard() {
  const muiStyles = makeStyles(styles);
  const [type, setType] = useState("");
  const [render, setRender] = useState("all");
  const history = useHistory();
  const classes = muiStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  ///// STATES FOR DISPLAYING NAME /////
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  /// STATES FOR DISPLAYING VALUE (FLIGHTS && TRAVEL_PACKAGES && HOTEL) /////
  const [listBookings, setListBookings] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [totalRecord, setTotalRecord] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  ///// STATES FOR DISPLAYING ACCOUNT BALANCE /////
  const [balance, setBalance] = useState(0);

  ///// STATES FOR DISPLAYING ALL USERS /////
  const [listUsers, setListUsers] = useState([]);

  ///// STATES FOR DISPLAYING ALL CUSTOMERS /////
  const [listCustomers, setListCustomers] = useState([]);

  ///// USER ID /////
  const userId = useSelector(
    ({
      user: {
        user: { sub },
      },
    }) => sub
  );

  ///// DISPLAYING DATA AFTER THE COMPONENT RENDERED PERFECTLY /////
  useEffect(() => {
    fetchAllBookings();
    fetchingAllUsers();
    fetchingAllCustomers();
  }, []);

  ///// DISPLAYING APIs DATA WHEN COMPONENT RENDER COMPLETLY /////
  useEffect(() => {
    const bookingType = localStorage.getItem("bookingType");
    const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));
    if (bookingDetails && bookingType) {
      history.push("/customer/booking");
    }

    ////// USER DATA /////
    getSpecificUser(userId)
      .then((res) => {
        loadValuesHandler(res.data.data.user);
      })
      .catch((error) => {
        console.log(error);
        if (error?.response?.status === 401) {
          history.push("/401");
        } else {
          console.log(error.response.data);
          console.log(error.response.status);
          enqueueSnackbar("Unable to fetch data.", {
            variant: "error",
          });
        }
      });
  }, []);

  ///// DISPLAYING USER ACCOUNT BALANCE /////
  getSpecificWallet(userId)
    .then((res) => {
      setBalance(res?.data?.data?.wallet?.balance);
    })
    .catch((error) => {
      if (error?.response?.status === 401) {
        history.push("/401");
      } else {
        console.log(error?.response?.data);
        console.log(error?.response?.status);
        enqueueSnackbar("Unable to fetch data.", {
          variant: "error",
        });
      }
    });

  ///// DISPLAYING NUMBER OF BOOKINGS ////
  const fetchAllBookings = () => {
    const params = {
      search: {
        query: search,
      },
      sort: "_id",
      page,
      pageSize: 10000,
    };
    getAllBookings(params)
      .then((res) => {
        setListBookings(res.data.data.bookings);
        setTotalPage(res.data.data.totalPages);
        setTotalRecord(res.data.data.totalRecords);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          history.push("/401");
        } else {
          console.log(error.response.data);
          console.log(error.response.status);
          enqueueSnackbar("Unable to fetch data.", {
            variant: "error",
          });
        }
      });
  };

  ///// DISPLAYING NUMBER OF USERS ////
  const fetchingAllUsers = () => {
    const params = {
      search: {
        query: search,
      },
      sort: "name",
      page,
      pageSize: 100000,
    };
    getAllUsers(params)
      .then((res) => {
        setListUsers(res.data.data.users);
        setTotalPage(res.data.data.totalPages);
        setTotalRecord(res.data.data.totalRecords);
      })
      .catch((error) => {
        enqueueSnackbar("Unable to fetch data.", {
          variant: "error",
        });

        console.log(error);
        if (error?.response?.status === 401) {
          history.push("/401");
        } else {
          console.log(error?.response.data);
          console.log(error.response.status);
        }
      });
  };

  const fetchingAllCustomers = () => {
    const params = {
      search: {
        query: search,
      },
      sort: "name",
      page,
      pageSize: 100000,
    };
    getAllCustomers(params)
      .then((res) => {
        setListCustomers(res.data.data.customers);
        setTotalPage(res.data.data.totalPages);
        setTotalRecord(res.data.data.totalRecords);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          history.push("/401");
        } else {
          console.log(error.response.data);
          console.log(error.response.status);
          enqueueSnackbar("Unable to fetch data.", {
            variant: "error",
          });
        }
      });
  };

  //// FETCHING USER DATA /////
  const loadValuesHandler = (user) => {
    setFirstName(user.firstName ? user.firstName : "");
    setMiddleName(user.middleName ? user.middleName : "");
    setLastName(user.lastName ? user.lastName : "");
  };

  ///// FORMATTING THE NUMBER THAT /////
  ///// IF THE Value LENGTH IS IN THOUSANDS /////
  ///// THE VALUE WILL HAVE A K OR MILLION /////
  ///// WITH IT /////
  const formatNumber = (num) => {
    if (num >= 1000 && num < 1000000) {
      return (num / 1000).toFixed(1) + "k";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "m";
    } else {
      return num;
    }
  };

  return (
    <div>
      <h3 className="capitalize">
        Welcome {firstName} {middleName} {lastName}!
      </h3>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                 <ApartmentIcon />
              </CardIcon>
              <Typography variant="body1"  className={classes.cardCategory}>
                All Agencies
              </Typography>
              <h3 className={classes.cardTitle}>
                
                {listUsers
                  .filter(
                    (user) =>
                      user.systemRole !== "SUPER_ADMIN" &&
                      user.systemRole !== "AGENT"
                  )
                  .map((user) => (
                    <button onClick={() => setRender(user._id)} key={user._id}>
                      
                      {user._id}
                    </button>
                  )).length && listUsers.length === 0
                  ? `No Agencies Found`
                  : formatNumber(listUsers.length)}
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}> All Agencies Are Listed </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
              <PeopleAltIcon />
              </CardIcon>
              <Typography variant="body1"  className={classes.cardCategory}>
                All Agents
              </Typography>
              <h3 className={classes.cardTitle}>
                
                {listUsers
                  .filter(
                    (user) =>
                      user.systemRole !== "SUPER_ADMIN" &&
                      user.systemRole !== "OWNER"
                  )
                  .map((user) => (
                    <button onClick={() => setRender(user._id)} key={user._id}>
                      
                      {user._id}
                    </button>
                  )).length && listUsers.length === 0
                  ? `No Agents Found`
                  : formatNumber(listUsers.length)}
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}> All Agents are Listed </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <PeopleAltIcon />
              </CardIcon>
              <Typography variant="body1"  className={classes.cardCategory}>
                All Customers
              </Typography>
              <h3 className={classes.cardTitle}>
                
                {listCustomers.map((customer) => (
                  <button
                    className={classes.tr}
                    onClick={() => setRender(customer._id)}
                    key={customer._id}
                  >
                    {customer._id}
                  </button>
                )).length && listUsers.length === 0
                  ? `No Customers Found`
                  : formatNumber(listUsers.length)}
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}> All Customers are Listed </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
              <AirplaneTicketIcon />
              </CardIcon>
              <Typography variant="body1" className={classes.cardCategory}>
                All Bookings
              </Typography>
              <h3 className={classes.cardTitle}>
                
                {listBookings.map((bkg) => (
                  <p
                    className={classes.tr}
                    onClick={() => {
                      setType(bkg.lob);
                      setRender(bkg._id);
                    }}
                    key={bkg._id}
                  >
                    {bkg.lob}
                  </p>
                )).length && listBookings.length === 0
                  ? `No Bookings Found`
                  : formatNumber(listBookings.length)}
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}> All Time Bookings </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}> Daily Sales </h4>
              <p className={classes.cardCategory}>
                <p className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </p>
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}> Email Subscriptions </h4>
              <p className={classes.cardCategory}>
                
                Last Campaign Performance
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}> Completed Tasks </h4>
              <p className={classes.cardCategory}>
                
                Last Campaign Performance
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headercolor="secondary"
            tabs={[
              {
                tabName: "Bugs",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                ),
              },
              {
                tabName: "Website",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                ),
              },
              {
                tabName: "Server",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                ),
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}> Employees Stats </h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15 th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
