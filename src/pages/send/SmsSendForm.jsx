
import { useContext, useEffect, useState } from "react";
import { collection, addDoc, serverTimestamp, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { Button, Card, Grid, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Autocomplete from '@mui/material/Autocomplete';
import SendIcon from '@mui/icons-material/Send';
import { Formik } from 'formik';
import { sendSmsSchema } from "../validation/Validation";
import { async } from "@firebase/util";

const SmsSendForm = () => {
    const [sms, setSMS] = useState('');
    const [option, setOption] = useState([]);
    const [sender, setSender] = useState('Go WIFI');
    const user = JSON.parse(localStorage.getItem('user'));

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    useEffect(async () => {
        const querySnapshot = await getDocs(collection(db, "sms"), orderBy('createdAt'));
        const data = querySnapshot.docs;
        const options = data.map((d) => ({
            value: d.id,
            label: d.get("sms")
        }));
        setOption(options);
    }, []);

    return (
        <Formik
            validationSchema={sendSmsSchema}
            initialValues={{ phoneNumber: '970' }}
            onSubmit={async (values, { setSubmitting }) => {
                if (!sms) {
                    alert('Please Select At Least One SMS Message')
                } else {
                    var requestOptions = {
                        method: 'GET',
                        redirect: 'follow',
                        mode: 'cors',
                    };

                    try {
                        fetch(`https://sms.htd.ps/API/SendSMS.aspx?id=c5c37af3cdafa4937f5fac57f17a74d4&sender=${sender}&to=${values.phoneNumber}&msg=${sms}`, requestOptions)
                            .then(response => response.text())
                            .catch(error => console.log('error'));
                        const docRef = await addDoc(collection(db, "SendSms"), {
                            email: user.email,
                            sms: sms,
                            number: values.phoneNumber,
                            sender: sender,
                            createdAt: serverTimestamp()
                        });
                        values.phoneNumber = '970';
                    } catch (e) {

                    }

                }
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
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit} style={{ padding: "18px" }}>
                    <Card padding={3} elevation={3} >
                        <Grid container spacing={2} padding={3}>
                            <Grid item xs={12} >
                                <Item style={{ backgroundColor: "#A5A3A3", color: "white", fontWeight: 'bold', fontSize: '25px' }}><label>Send SMS Messages</label></Item>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth
                                    type="number"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    value={values.phoneNumber}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    helperText={!errors.phoneNumber || !touched.phoneNumber ? "" : errors.phoneNumber}
                                    error={errors.phoneNumber && touched.phoneNumber}
                                    label="Phone Number"
                                    variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={option}
                                    onInputChange={(event, newInputValue) => {
                                        setSMS(newInputValue);
                                    }}
                                    value={sms}
                                    renderInput={(params) => <TextField {...params} label="Please Select SMS Message" />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Item style={{ backgroundColor: "#A5A3A3", color: "white", fontWeight: 'bold', fontSize: '18px' }}>
                                    <div className="message-filed">
                                        <div className="message-header">Selected Message:</div>
                                        <div className="message-sms">{sms}</div>
                                    </div>
                                </Item>
                            </Grid>
                            <Grid item xs={12}>
                                <Button style={{ backgroundColor: "#f48fb1", color: "white", fontWeight: 'bold', fontSize: '18px' }} fullWidth type="submit" variant="contained" endIcon={<SendIcon />}>Send SMS</Button>
                            </Grid>
                        </Grid>
                    </Card>
                </form>
            )}
        </Formik>
    )
}

export default SmsSendForm;