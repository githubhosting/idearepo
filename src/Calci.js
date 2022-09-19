// import React from "react";
// import { Icon } from "react-icons-kit";
// import Fade from "react-reveal/Fade";
// import { arrowRight } from "react-icons-kit/feather/arrowRight";
// import Container from "./common/components/UI/Container";
// import Heading from "./common/components/Heading";
// // import NextImage from "common/components/NextImage";
// import Text from "./common/components/Text";
// import Link from "./common/components/Link";
// // import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// // import MoreVertIcon from "@mui/icons-material/MoreVert";

// // import { posts } from "common/data/WebAppMinimal";
// import { Section, SectionHeading, Grid, Article } from "./newsFeed.style";
// import "firebase/compat/firestore";
// import firebase from "firebase/compat/app";
// import { Button } from "react-aria-menubutton";

// const firebaseConfig = {
//   apiKey: "AIzaSyCnlpD5DSecqNQzgwwUUbW-BZyz-FuIlb0",
//   authDomain: "foodey-63192.firebaseapp.com",
//   databaseURL: "https://foodey-63192-default-rtdb.firebaseio.com",
//   projectId: "foodey-63192",
//   storageBucket: "foodey-63192.appspot.com",
//   messagingSenderId: "1056375278651",
//   appId: "1:1056375278651:web:5784ec975990b10c65a01e",
//   measurementId: "G-G77NTF3JMK",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const database = firebase.firestore();

// const Calci = () => {
//   const [blogs, setBlogs] = React.useState([]);
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };
//   React.useEffect(() => {
//     database.collection("Blogs").onSnapshot((snapshot) => {
//       const blogs = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setBlogs(blogs);
//     }),
//       () => {
//         console.log(blogs);
//       };
//   }),
//     () => {
//       console.log(blogs);
//     };
//   return (
//     <Section id="newsFeed">
//       <Container width="1440px">
//         <SectionHeading>
//           <Heading as="h2" content="Latest Blogs" />
//           <Link href="#">
//             View All <Icon icon={arrowRight} />
//           </Link>
//         </SectionHeading>
//         <Grid>
//           {blogs.map((post, index) => (
//             <Fade key={post.id} bottom delay={100 * index}>
//               <Article key={`post-key-${index}`}>
//                 <Heading as="h3" content={post.Heading} />
//                 <Text content={post.Timestamp} />
//                 <Text lable="Author: " content={post.Author} />
//               </Article>
//             </Fade>
//           ))}
//         </Grid>
//       </Container>
//     </Section>
//   );
// };
// export default Calci;
