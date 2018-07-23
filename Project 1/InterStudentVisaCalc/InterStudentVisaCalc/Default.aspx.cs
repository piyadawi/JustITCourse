using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace InterStudentVisaCalc
{
    public partial class Default : System.Web.UI.Page
    {
        double courseFee;
        double visaFee;
        double IHealthSurcharge;
        double iomTest;
        double flightCosts;
        double miscCosts;
        double costsOfLivingRemainInsideLondon = 2530;
        double costsOfLivingRemainOutsideLondon = 2030;
        double costsOfLivingEnterinInsideLondon;
        double costsOfLivingEnterinOutsideLondon;
        double applicationFee;
        double total;

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void RadioButtonList1_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (RadioButtonList1.SelectedValue == "Leave To Enter")
            {
                LeaveToEnterPanel.Visible = true;
                LeaveToRemainPanel.Visible = false;
            }
            else
            {
                LeaveToRemainPanel.Visible = true;
                LeaveToEnterPanel.Visible = false;
            }
        }

        //protected void RadioButtonList1_SelectedIndexChanged(object sender, EventArgs e)
        //{
        //    switch (RadioButtonList1.SelectedValue)
        //    {
        //        case "Leave To Enter":
        //            LeaveToEnterPanel.Visible = true;
        //            LeaveToRemainPanel.Visible = false;
        //            break;
        //        case "Leave To Remain":
        //            LeaveToRemainPanel.Visible = true;
        //            LeaveToEnterPanel.Visible = false;
        //            break;
        //        default:
        //            break;
        //    }
        //}

        protected void btCalculator_Click(object sender, EventArgs e)
        {

        }

        private double parseValue(TextBox value)
        {
            if (!string.IsNullOrWhiteSpace(value.Text))
            {
                return double.Parse(value.Text);
            }
            else
            {
                value.Text = "0";
                return 0;
            }
        }

        private void drawChart(string chartType)
        {
            courseFee = parseValue(tbCourseFee);
            visaFee = parseValue(tbVisaFee);
            IHealthSurcharge = parseValue(tbIHealthS);
            iomTest = parseValue(tbIOMTest);
            flightCosts = parseValue(tbFlight);
            miscCosts = parseValue(tbMisc);


            applicationFee = visaFee + IHealthSurcharge + iomTest;

            total = applicationFee + courseFee + flightCosts + miscCosts;

            //ClientScript.RegisterStartupScript(GetType(), "draw", "draw('" + chartType + "','" + transportation + "','" + hotel + "','" +
            //                                    meal + "','" + activities + "','" + spendingMoney + "','" + misc + "','" + total + "');", true);
        }

    }
    }
