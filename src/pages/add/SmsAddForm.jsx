
import { useContext, useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { Button, Card, Grid, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Formik } from 'formik';
import { addSmsSchema } from "../validation/Validation";
const SmsAddForm = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (

    <Formik
      initialValues={{ sms: '' }}
      validationSchema={addSmsSchema}
      onSubmit={async (values, { setSubmitting }) => {
        const docRef = await addDoc(collection(db, "sms"), {
          email: user.email,
          sms: values.sms,
          createdAt: serverTimestamp()
        });
        setSubmitting(true);
        values.sms = '';

      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} style={{ padding: "18px" }}>
          <Card padding={3} elevation={3} >
            <Grid container spacing={2} padding={3}>
              <Grid item xs={12} >
                <Item style={{ backgroundColor: "#A5A3A3", color: "white", fontWeight: 'bold', fontSize: '25px' }}><label>Add SMS Content</label></Item>
              </Grid>
              <Grid item xs={12}>
                <TextField error={errors.sms && touched.sms} multiline maxRows={10} fullWidth
                  helperText={!errors.sms || !touched.sms ? "" : errors.sms}
                  name="sms" id="sms"
                  type={"text"} value={values.sms} onBlur={handleBlur} onChange={handleChange} label="SMS" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <Button style={{ backgroundColor: "#f48fb1", color: "white", fontWeight: 'bold', fontSize: '18px' }} fullWidth type="submit"
                  variant="contained" endIcon={<AddIcon />}>Add SMS Message</Button>
              </Grid>
            </Grid>
          </Card>
        </form>
      )}
    </Formik>

  )
}

export default SmsAddForm;