// import React from 'react';
// import PropTypes from 'prop-types';
//
// import FormControl from '@material-ui/core/FormControl';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import pink from '@material-ui/core/colors/pink';
// import green from '@material-ui/core/colors/green';
// import yellow from '@material-ui/core/colors/yellow';
// import orange from '@material-ui/core/colors/orange';
// import blue from '@material-ui/core/colors/blue';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
//
// const styles = {
//   submitButton: {
//     paddingTop: 20,
//     textAlign: 'center',
//   },
//   button1: {
//     backgroundColor: yellow[500],
//   },
//   button2: {
//     backgroundColor: orange[500],
//   },
//   button3: {
//     backgroundColor: pink[500],
//   },
//   button4: {
//     backgroundColor: green[500],
//   },
//   button5: {
//     backgroundColor: blue[500],
//   },
//   card: {
//     margin: 20,
//     height: 'auto',
//     minWidth: 'auto',
//   },
//   grid: {
//     marginTop: 20,
//   },
// };
//
// const UpdateMemo = ({
//   onUpdateMemo, onUpdateTitle, onChangeDescription, onUpdateColor, stateMemoUpdateColor,
// }) => (
//   <Card style={styles.card}>
//     <CardContent>
//       <form onSubmit={onUpdateMemo}>
//         <FormControl>
//           <input
//             onChange={onUpdateTitle}
//             maxLength="15"
//             className="form-control"
//             placeholder="Update Title"
//           />
//           <textarea
//             required
//             onChange={onChangeDescription}
//             className="form-control mt-2"
//             rows="5"
//             placeholder="Update Description *"
//           />
//           <Grid
//             container
//             direction="row"
//             alignItems="center"
//             spacing={8}
//             style={styles.grid}
//           >
//             <Grid item>
//               <Button variant="fab" mini style={styles.button1} onClick={onUpdateColor} value="yellow">{stateMemoUpdateColor === 'yellow' ? '✗' : ' '}</Button>
//             </Grid>
//             <Grid item>
//               <Button variant="fab" mini style={styles.button2} onClick={onUpdateColor} value="orange">{stateMemoUpdateColor === 'orange' ? '✗' : ' '}</Button>
//             </Grid>
//             <Grid item>
//               <Button variant="fab" mini style={styles.button3} onClick={onUpdateColor} value="pink">{stateMemoUpdateColor === 'pink' ? '✗' : ' '}</Button>
//             </Grid>
//             <Grid item>
//               <Button variant="fab" mini style={styles.button4} onClick={onUpdateColor} value="green">{stateMemoUpdateColor === 'green' ? '✗' : ' '}</Button>
//             </Grid>
//             <Grid item>
//               <Button variant="fab" mini style={styles.button5} onClick={onUpdateColor} value="blue">{stateMemoUpdateColor === 'blue' ? '✗' : ' '}</Button>
//             </Grid>
//           </Grid>
//           <div style={styles.submitButton}>
//             <Button variant="contained" type="submit">
//               Update Memo
//             </Button>
//           </div>
//         </FormControl>
//       </form>
//     </CardContent>
//   </Card>
// );
//
// UpdateMemo.propTypes = {
//   onUpdateMemo: PropTypes.func.isRequired,
//   onUpdateTitle: PropTypes.func.isRequired,
//   onChangeDescription: PropTypes.func.isRequired,
//   onUpdateColor: PropTypes.func.isRequired,
//   stateMemoUpdateColor: PropTypes.string.isRequired,
// };
//
// export default UpdateMemo;
