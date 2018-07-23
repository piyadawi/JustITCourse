<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="InterStudentVisaCalc.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title></title>
    <style type="text/css">
        .auto-style1 {
            font-size: small;
        }
    </style>
</head>
<body>
    <div class="container heading">
        <h1>International Student Application for UK visa Calculator 2019-2020</h1>
        <h3>Enter your estimated expenses below and click the calculate button at the bottom to get the the cost of your application shown in a chart.</h3>
    </div>
        <form id="form1" runat="server">
    <div style="font-size: small">

        <asp:Label ID="lbCourseFee" runat="server" Text="Course Fee" style="font-size: medium"></asp:Label>
        &nbsp;
        <asp:TextBox ID="tbCourseFee" runat="server"></asp:TextBox>
            <br />
            <br />

        <asp:Label ID="lbVisaFee" runat="server" Text="Visa Fee" style="font-size: medium"></asp:Label>
        &nbsp;
        <asp:TextBox ID="tbVisaFee" runat="server"></asp:TextBox>
            <br />
            <br />

        <asp:Label ID="lbIHealthS" runat="server" Text="Immigration Health Surcharge (IHS)" style="font-size: medium"></asp:Label>
        &nbsp;
        <asp:TextBox ID="tbIHealthS" runat="server"></asp:TextBox> 
        *<br />
        <asp:Label ID="Label1" runat="server" Text="*Currently £150 for each period of 12 months." style="font-size: small"></asp:Label>
             <br />
             <br />

        <asp:Label ID="lbIOMTest" runat="server" Text="I.O.M. Test Fee" style="font-size: medium"></asp:Label>
        &nbsp;
        <asp:TextBox ID="tbIOMTest" runat="server"></asp:TextBox>
        &nbsp;<span class="auto-style1">*<br />
        <asp:Label ID="Label3" runat="server" Text="*For a study period more than 6 months in some countries" style="font-size: small"></asp:Label>
        </span>
            <br />

        <asp:Label ID="lbFlight" runat="server" Text="Flight cost" style="font-size: medium"></asp:Label>
        s&nbsp;
        <asp:TextBox ID="tbFlight" runat="server"></asp:TextBox>
            <br />
            <br />
        <asp:Label ID="lbMisc" runat="server" Text="Miscellaneous" style="font-size: medium"></asp:Label>
        &nbsp;Costs&nbsp;
        <asp:TextBox ID="tbMisc" runat="server"></asp:TextBox>
            <br />
        <br />
        <asp:RadioButtonList ID="RadioButtonList1" runat="server" AutoPostBack="True" RepeatDirection="Horizontal" OnSelectedIndexChanged="RadioButtonList1_SelectedIndexChanged" style="font-size: medium">
            <asp:ListItem Selected="True">Leave To Enter</asp:ListItem>
            <asp:ListItem>Leave to Remain</asp:ListItem>
        </asp:RadioButtonList>

        <asp:Label ID="lbCostsOfLiving0" runat="server" Text="Costs of Living**" style="font-size: medium"></asp:Label>
            <asp:Panel ID="LeaveToEnterPanel" runat="server" Height="31px">
        <asp:DropDownList ID="ddListLeaveToRemain" runat="server">
            <asp:ListItem Value="InsideLondon">Living Inside London</asp:ListItem>
            <asp:ListItem Value="OutsideLondon">Living Outside London</asp:ListItem>
        </asp:DropDownList> 
        <asp:DropDownList ID="ddListMonths" runat="server">
            <asp:ListItem Value="1Month">1</asp:ListItem>
            <asp:ListItem Value="2Months">2</asp:ListItem>
            <asp:ListItem Value="3Months">3</asp:ListItem>
            <asp:ListItem Value="4Months">4</asp:ListItem>
            <asp:ListItem Value="5Months">5</asp:ListItem>
            <asp:ListItem Value="6Months">6</asp:ListItem>
            <asp:ListItem Value="7Months">7</asp:ListItem>
            <asp:ListItem Value="8Months">8</asp:ListItem>
            <asp:ListItem Value="9Months">9</asp:ListItem>
            <asp:ListItem Value="MoreThan9Months">More than 9</asp:ListItem>
        </asp:DropDownList>
                &nbsp;<asp:Label ID="lbMonth" runat="server" Text="Months"></asp:Label>
            </asp:Panel>

            <asp:Panel ID="LeaveToRemainPanel" runat="server"  Visible="false">

                <asp:DropDownList ID="ddListLeaveToEnter0" runat="server">
                    <asp:ListItem Value="InsideLondon">Living Inside London</asp:ListItem>
                    <asp:ListItem Value="OutsideLondon">Living Outside London</asp:ListItem>
                </asp:DropDownList>
                &nbsp;<br />
                <asp:Label ID="Label2" runat="server" style="font-size: small" Text="*The Home Office requires a minimum of 2 months of Living Costs for Leave to Remain Applicants"></asp:Label>
                </asp:Panel>

            <br />

        <div class="costsOfLiving" >

        <p>**Costs Of Living<br />
            -£1,265 per month for living costs if you are studying in London for the majority of your study (more than 50% of your study time)<br />
            -£1,015 per month for living costs if you are studying outside London or anywhere else in the UK for the majority of your study (more than 50% of your study time)<br />
            If in case your study time is more than 9 months, count just 9 months as maximum is required. 
        </p>
        </div>
            <br />
         
        <asp:Button ID="btCalculator" runat="server" Text="Calculate" OnClick="btCalculator_Click" />

    </div>
    </form>
</body>
</html>
