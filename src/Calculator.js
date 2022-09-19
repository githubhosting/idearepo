import React, { useState, useEffect } from "react";
import { Button } from "react-aria-menubutton";
import styles from "./styles.css";

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

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                {/* <TableCell /> */}
                <TableCell component="th" scope="row">
                  <b>Subjects</b>
                </TableCell>
                <TableCell align="centre">For O</TableCell>
                <TableCell align="centre">For A+</TableCell>
                <TableCell align="centre">For A</TableCell>
                <TableCell align="centre">For B+</TableCell>
                {/* <TableCell align="centre">For B</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {blogs.map((post, index) => (
                <>
                  <div>
                    <br></br>
                    <b>{post.name}</b>
                  </div>
                  <TableRow
                    key={post.name}
                    sx={{
                      bgcolor: "background.paper",
                      boxShadow: 1,
                      borderRadius: 2,
                      p: 2,
                      minWidth: 300,
                    }}
                  >
                    <TableCell component="th" scope="row">
                      <b>Maths:</b>
                      {post.Maths}
                      <hr class="line1"></hr>
                      <b>Mechanical:</b>
                      {post.Mechanical}
                      <hr class="line1"></hr>
                      <b>Electronics:</b>
                      {post.Electronics}
                      <hr class="line1"></hr>
                      <b>C:</b>
                      {post.CProgramming}
                      <hr class="line1"></hr>
                      <b>Chemistry:</b>
                      {post.Chemistry}
                      <hr class="line1"></hr>
                      <b>AEC:</b>
                      {post.AEC}
                      <hr class="line1"></hr>
                    </TableCell>
                    <TableCell align="centre">
                      {(90 - post.Maths) * 2}
                      <hr class="line1"></hr>
                      {(90 - post.Mechanical) * 2}
                      <hr class="line1"></hr>
                      {(90 - post.Electronics) * 2}
                      <hr class="line1"></hr>
                      {(90 - post.CProgramming) * 2}
                      <hr class="line1"></hr>
                      {(90 - post.Chemistry) * 2}
                      <hr class="line1"></hr>
                      {90 - post.AEC}
                      <hr class="line1"></hr>
                    </TableCell>
                    <TableCell align="centre">
                      {(80 - post.Maths) * 2}
                      <hr class="line1"></hr>
                      {(80 - post.Mechanical) * 2}
                      <hr class="line1"></hr>
                      {(80 - post.Electronics) * 2}
                      <hr class="line1"></hr>
                      {(80 - post.CProgramming) * 2}
                      <hr class="line1"></hr>
                      {(80 - post.Chemistry) * 2}
                      <hr class="line1"></hr>
                      {80 - post.AEC}
                      <hr class="line1"></hr>
                    </TableCell>
                    <TableCell align="centre">
                      {(70 - post.Maths) * 2}
                      <hr class="line1"></hr>
                      {(70 - post.Mechanical) * 2}
                      <hr class="line1"></hr>
                      {(70 - post.Electronics) * 2}
                      <hr class="line1"></hr>
                      {(70 - post.CProgramming) * 2}
                      <hr class="line1"></hr>
                      {(70 - post.Chemistry) * 2}
                      <hr class="line1"></hr>
                      {70 - post.AEC}
                      <hr class="line1"></hr>
                    </TableCell>
                    <TableCell align="centre">
                      {(60 - post.Maths) * 2}
                      <hr class="line1"></hr>
                      {(60 - post.Mechanical) * 2}
                      <hr class="line1"></hr>
                      {(60 - post.Electronics) * 2}
                      <hr class="line1"></hr>
                      {(60 - post.CProgramming) * 2}
                      <hr class="line1"></hr>
                      {(60 - post.Chemistry) * 2}
                      <hr class="line1"></hr>
                      {60 - post.AEC}
                      <hr class="line1"></hr>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
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
