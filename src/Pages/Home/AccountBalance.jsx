import React, { useState } from "react";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";

import Refresh from "@material-ui/icons/Refresh";
import PieChartIcon from "@material-ui/icons/PieChart";

import useMonetaryAccounts from "../../Hooks/useMonetaryAccounts";

import AccountBalancePieChart from "../../Components/Charts/AccountBalancePieChart";

const styles = () => ({
    paper: {
        padding: 16,
        height: 416
    },
    paperHeader: {
        display: "flex",
        margin: 8
    },
    paperHeaderText: {
        marginLeft: 8
    },
    paperHeaderFill: {
        flexGrow: 1
    }
});

const AccountBalance = ({ classes }) => {
    const [monetaryAccounts, updateMonetaryAccounts] = useMonetaryAccounts();

    return (
        <React.Fragment>
            <div className={classes.paperHeader}>
                <SvgIcon color="action">
                    <PieChartIcon />
                </SvgIcon>
                <Typography className={classes.paperHeaderText} variant="subtitle1">
                    Account balance
                </Typography>

                <span className={classes.paperHeaderFill} />
                <SvgIcon onClick={updateMonetaryAccounts} color="action">
                    <Refresh />
                </SvgIcon>
            </div>

            <Paper className={classes.paper}>
                <AccountBalancePieChart monetaryAccounts={monetaryAccounts} />
            </Paper>
        </React.Fragment>
    );
};

export default withTheme()(withStyles(styles)(AccountBalance));
