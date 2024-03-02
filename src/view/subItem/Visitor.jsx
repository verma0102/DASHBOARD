import { CardContent, Typography, Card, Grid, TextField, Button, Stack } from "@mui/material";
const AddVisitor = () => {
    return (
            <div className="content">
                <Card>
                    <CardContent>
                        <form>
                            <Grid container spacing={2}>
                                <Grid xs={12} item>
                                    <Typography gutterBottom variant="h4" align="center">
                                        ADD VISITOR
                                    </Typography>
                                </Grid>

                                <Grid xs={12} sm={4} item>
                                    Visitor Name *
                                    <TextField variant="outlined" size="small" fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={4} item>
                                    Phone
                                    <TextField type="number" label="Phone" size="small" placeholder="Enter Your Mobile no" variant="outlined" fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={4} item>
                                    Id Card:
                                    <TextField variant="outlined" size="small" fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={6} item>
                                    Number Of Person
                                    <TextField variant="outlined" size="small" fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={6} item>
                                    Date
                                    <TextField type='date' variant="outlined" size="small" fullWidth required />
                                </Grid>


                                <Grid xs={12} item >
                                    <Stack direction='row' justifyContent={"flex-end"}>
                                        <Button type="Save" variant="contained" size="small" color="primary">Save</Button>
                                    </Stack>

                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </div>
    )
}
export default AddVisitor;