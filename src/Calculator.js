import React, { useState, useEffect } from "react";
// import { Button } from "react-aria-menubutton";
import styles from "./styles.css";
import Button from "@mui/material/Button";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { makeStyles } from "@material-ui/core/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { ListItemIcon } from "@material-ui/core";
import ListSubheader from "@mui/material/ListSubheader";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Row from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import InboxIcon from "@mui/icons-material/Inbox";
import PersonIcon from "@mui/icons-material/Person";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { Section, SectionHeading, Grid, Article } from "./newsFeed.style";
import Heading from "./common/components/Heading";
import Text from "./common/components/Text";
import { fontSize, lineHeight } from "styled-system";
const firebaseConfig = {
  apiKey: "AIzaSyACyiB2f-Sl8fbez4sjwBxJwn-eGadnXcg",
  authDomain: "auth-44578.firebaseapp.com",
  projectId: "auth-44578",
  storageBucket: "auth-44578.appspot.com",
  messagingSenderId: "595971213871",
  appId: "1:595971213871:web:432717a56846feb84a14da",
  measurementId: "G-BJWWD8H4BX",
  //   apiKey: "AIzaSyCnlpD5DSecqNQzgwwUUbW-BZyz-FuIlb0",
  //   authDomain: "foodey-63192.firebaseapp.com",
  //   databaseURL: "https://foodey-63192-default-rtdb.firebaseio.com",
  //   projectId: "foodey-63192",
  //   storageBucket: "foodey-63192.appspot.com",
  //   messagingSenderId: "1056375278651",
  //   appId: "1:1056375278651:web:5784ec975990b10c65a01e",
  //   measurementId: "G-G77NTF3JMK",
};
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

const Calculator = () => {
  const [blogs, setBlogs] = React.useState([]);
  const [expanded, setExpanded] = React.useState(false);
  const [selectedblog, setSelectedBlog] = React.useState();
  const [calci, setCalci] = useState([]);
  const [selectedCalci, setSelectedCalci] = React.useState();

  // const selectCalci = (calci) => {
  //   setSelectedCalci(calci);
  //   database
  //     .collection("calci")
  //     .doc(calci.id)
  //     .get()
  //     .then((response) => {
  //       const fetchedCalci = [];
  //       fetchedCalci.push({
  //         ...response.data(),
  //         id: response.id,
  //       });
  //       setCalci(fetchedCalci);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     });
  // };

  const selectblog = (blog) => {
    setSelectedBlog(blog);
    database
      .collection("calci")
      .doc(blog.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setSelectedBlog(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };
  const selectCalci = (calci) => {
    setSelectedCalci(calci);
    database
      .collection("calci")
      .doc(calci.id)
      .get()
      .then((response) => {
        const fetchedCalci = [];
        fetchedCalci.push({
          ...response.data(),
          id: response.id,
        });
        setCalci(fetchedCalci);
      })
      .catch((error) => {
        setError(error);
      });
    console.log(calci);
  };

  React.useEffect(() => {
    database.collection("calci").onSnapshot((snapshot) => {
      const blogs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogs);
    }),
      () => {
        console.log(blogs);
      };
  }),
    () => {
      console.log(blogs);
    };

  React.useEffect(() => {
    database.collection("calci").onSnapshot((snapshot) => {
      const calci = snapshot.docs.map((doc) => ({
        id: doc.id,

        ...doc.data(),
      }));
      setCalci(calci);
    }),
      () => {
        console.log(calci);
      };
  }),
    () => {
      console.log(calci);
    };

  // React.useEffect(() => {
  //   database
  //     .collection("calci")
  //     .get()
  //     .then((response) => {
  //       const fetchedblogs = [];
  //       response.docs.forEach((document) => {
  //         const fetchedblog = {
  //           id: document.id,
  //           ...document.data(),
  //         };
  //         fetchedblogs.push(fetchedblog);
  //       });
  //       setBlogs(fetchedblogs);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     });
  // }, []);
  const sc = selectedCalci;
  // const grade =
  //   selectedCalci.Maths === "O"
  //     ? 10
  //     : selectedCalci.Maths === "A+"
  //     ? 9
  //     : selectedCalci.Maths === "A"
  //     ? 8
  //     : selectedCalci.Maths === "B+"
  //     ? 7
  //     : 0;

  // read the grade from selectedCalci.Maths and assign marks to it

  // const grade1 = {
  //   return (
  //     {calci.map((calci) => {
  //       {calci.Maths === "O"
  //         ? 10
  //         : calci.Maths === "A+"
  //         ? 9
  //         : calci.Maths === "A"
  //         ? 8
  //         : calci.Maths === "B+"
  //         ? 7
  //         : 0}
  //   })}
  // }
  var Mcredits, Mecredits, Ecredits, Cpcredits, Ccredits, Acredits, Tcredits;

  return (
    <>
      <div className="App">
        <List
          sx={{
            borderRadius: 5,
            mt: 4,
            display: "flex",
            flexDirection: "column",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <>
              <ListSubheader
                sx={{ fontSize: "1.5rem" }}
                disableSticky
                component="div"
                id="nested-list-subheader"
              >
                Name
              </ListSubheader>
              <ListSubheader
                sx={{
                  fontSize: "16px",
                  lineHeight: "28px",
                  mb: "5px",
                  mt: "5px",
                }}
                disableSticky
                component="div"
                id="nested-list-subheader"
              >
                Click on the created calculator to view the details
              </ListSubheader>
            </>
          }
        >
          {calci.map((data) => (
            <ListItem
              sx={{
                border: 0.5,
                borderRadius: "8px",
                borderColor: "primary",
                mb: 2,
                alignItems: "center",
              }}
              button
              divider
              key={data.id}
              selected={selectedCalci === data}
              onClick={() => selectCalci(data)}
            >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={data.name} />
            </ListItem>
          ))}
        </List>
      </div>
      {/* show only the name of selcected calci */}
      {sc && (
        <>
          <div>
            <h3>Showing Marks Table for {sc.name}</h3>
          </div>
          <div>
            <div>
              <TableContainer
                sx={{
                  borderRadius: 4,
                  boxShadow: 4,
                  mt: 2,
                  mb: 4,
                  display: "flex",
                  flexDirection: "column",
                }}
                component={Paper}
              >
                <Table aria-label="collapsible table">
                  <TableHead>
                    <TableRow
                      sx={{
                        align: "center",
                        textAlign: "center",
                        boxShadow: 4,
                      }}
                    >
                      {/* <TableCell /> */}
                      <TableCell component="th" scope="row">
                        <b>Subjects</b>
                      </TableCell>
                      <TableCell>For O</TableCell>
                      <TableCell>For A+</TableCell>
                      <TableCell>For A</TableCell>
                      <TableCell>For B+</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <>
                      <TableRow
                        key={selectedCalci.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          bgcolor: "background.paper",
                          boxShadow: 1,
                          borderRadius: 2,
                          p: 2,
                          minWidth: 300,
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <b>Maths:</b>
                          {selectedCalci.Maths}
                          <hr class="line1"></hr>
                          <b>Mechanical:</b>
                          {selectedCalci.Mechanical}
                          <hr class="line1"></hr>
                          <b>Electronics:</b>
                          {selectedCalci.Electronics}
                          <hr class="line1"></hr>
                          <b>C:</b>
                          {selectedCalci.CProgramming}
                          <hr class="line1"></hr>
                          <b>Chemistry:</b>
                          {selectedCalci.Chemistry}
                          <hr class="line1"></hr>
                          <b>AEC:</b>
                          {selectedCalci.AEC}
                          <hr class="line1"></hr>
                        </TableCell>
                        <TableCell align="centre">
                          {(90 - selectedCalci.Maths) * 2}
                          <hr class="line1"></hr>
                          {(90 - selectedCalci.Mechanical) * 2}
                          <hr class="line1"></hr>
                          {(90 - selectedCalci.Electronics) * 2}
                          <hr class="line1"></hr>
                          {(90 - selectedCalci.CProgramming) * 2}
                          <hr class="line1"></hr>
                          {(90 - selectedCalci.Chemistry) * 2}
                          <hr class="line1"></hr>
                          {90 - selectedCalci.AEC}
                          <hr class="line1"></hr>
                        </TableCell>
                        <TableCell align="centre">
                          {(80 - selectedCalci.Maths) * 2}
                          <hr class="line1"></hr>
                          {(80 - selectedCalci.Mechanical) * 2}
                          <hr class="line1"></hr>
                          {(80 - selectedCalci.Electronics) * 2}
                          <hr class="line1"></hr>
                          {(80 - selectedCalci.CProgramming) * 2}
                          <hr class="line1"></hr>
                          {(80 - selectedCalci.Chemistry) * 2}
                          <hr class="line1"></hr>
                          {80 - selectedCalci.AEC}
                          <hr class="line1"></hr>
                        </TableCell>
                        <TableCell align="centre">
                          {(70 - selectedCalci.Maths) * 2}
                          <hr class="line1"></hr>
                          {(70 - selectedCalci.Mechanical) * 2}
                          <hr class="line1"></hr>
                          {(70 - selectedCalci.Electronics) * 2}
                          <hr class="line1"></hr>
                          {(70 - selectedCalci.CProgramming) * 2}
                          <hr class="line1"></hr>
                          {(70 - selectedCalci.Chemistry) * 2}
                          <hr class="line1"></hr>
                          {70 - selectedCalci.AEC}
                          <hr class="line1"></hr>
                        </TableCell>
                        <TableCell align="centre">
                          {(60 - selectedCalci.Maths) * 2}
                          <hr class="line1"></hr>
                          {(60 - selectedCalci.Mechanical) * 2}
                          <hr class="line1"></hr>
                          {(60 - selectedCalci.Electronics) * 2}
                          <hr class="line1"></hr>
                          {(60 - selectedCalci.CProgramming) * 2}
                          <hr class="line1"></hr>
                          {(60 - selectedCalci.Chemistry) * 2}
                          <hr class="line1"></hr>
                          {60 - selectedCalci.AEC}
                          <hr class="line1"></hr>
                        </TableCell>
                      </TableRow>
                    </>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div>
              {
                (Mcredits =
                  sc.MathsGrade === "O"
                    ? 10
                    : sc.MathsGrade === "A+"
                    ? 9
                    : sc.MathsGrade === "A"
                    ? 8
                    : sc.MathsGrade === "B+"
                    ? 7
                    : 0)
              }
              {sc.MechanicalGrade === "O"
                ? (Mecredits = 10)
                : sc.MechanicalGrade === "A+"
                ? (Mecredits = 9)
                : sc.MechanicalGrade === "A"
                ? (Mecredits = 8)
                : sc.MechanicalGrade === "B+"
                ? (Mecredits = 7)
                : (Mecredits = 0)}
              {sc.ElectronicsGrade === "O"
                ? (Ecredits = 10)
                : sc.ElectronicsGrade === "A+"
                ? (Ecredits = 9)
                : sc.ElectronicsGrade === "A"
                ? (Ecredits = 8)
                : sc.ElectronicsGrade === "B+"
                ? (Ecredits = 7)
                : (Ecredits = 0)}
              {sc.CProgrammingGrade === "O"
                ? (Cpcredits = 10)
                : sc.CProgrammingGrade === "A+"
                ? (Cpcredits = 9)
                : sc.CProgrammingGrade === "A"
                ? (Cpcredits = 8)
                : sc.CProgrammingGrade === "B+"
                ? (Cpcredits = 7)
                : (Cpcredits = 0)}
              {sc.ChemistryGrade === "O"
                ? (Ccredits = 10)
                : sc.ChemistryGrade === "A+"
                ? (Ccredits = 9)
                : sc.ChemistryGrade === "A"
                ? (Ccredits = 8)
                : sc.ChemistryGrade === "B+"
                ? (Ccredits = 7)
                : (Ccredits = 0)}
              {sc.AECGrade === "O"
                ? (Acredits = 10)
                : sc.AECGrade === "A+"
                ? (Acredits = 9)
                : sc.AECGrade === "A"
                ? (Acredits = 8)
                : sc.AECGrade === "B+"
                ? (Acredits = 7)
                : (Acredits = 0)}
            </div>
            <div>
              {
                (Tcredits =
                  Mcredits * 4 +
                  Ecredits * 3 +
                  Mecredits * 3 +
                  Cpcredits * 3 +
                  Ccredits * 3 +
                  Acredits +
                  30)
              }
            </div>
            <div>
              <Typography
                sx={{
                  mt: 2,
                  mb: 2,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                <b>Your Expected CGPA is: {Tcredits / 20}</b>
              </Typography>
            </div>
            <div>
              <Typography
                sx={{
                  mt: 2,
                  mb: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
                variant="h6"
                component="div"
              >
                <b>Note down the expected grade and update here</b>
              </Typography>
              <Button
                sx={{
                  mt: 2,
                  mb: 4,
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                href="#/calci"
              >
                Update Grade
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Calculator;
// {blogs.map((post, index) => (
//     <Article key={`post-key-${index}`}>
//       <Heading as="h3" content={post.name} />
//       {/* <Text content={post.Timestamp} /> */}
//       <Text lable="Maths: " content={(90 - post.Maths) * 2} />
//       <Text
//         lable="Electronics: "
//         content={(90 - post.Electronics) * 2}
//       />
//       <Text lable="C Programming: " content={post.CProgramming} />
//       <Text lable="Mechanical: " content={post.Mechanical} />
//       <Text lable="Chemistry: " content={post.Chemistry} />
//       <Text lable="AEC: " content={post.AEC} />
//       <br></br>
//     </Article>
//   ))}
