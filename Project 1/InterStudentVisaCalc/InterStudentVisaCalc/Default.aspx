<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="InterStudentVisaCalc.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="Content/bootstrap.css" rel="stylesheet" />
    <link href="Content/bootstrap.min.css" rel="stylesheet" />
    <link href="Content/Site.css" rel="stylesheet" />

    <title></title>
    </head>
<body>

    <div class="container heading">
        <div class="model text-center">
         <h1>International Student Application for UK visa Calculator 2019-2020</h1>
          <h3>Enter your estimated expenses below and click the calculate button at the bottom to get the the cost of your application shown in a chart.</h3>
        </div>
     </div>
        <br />
         <hr class="top"/>
            <form id="form1" runat="server"  class="form-horizontal">
                <div class="container content">
                    <br />
                    
                       <asp:ValidationSummary ID="vs" runat="server" CssClass="alert-danger" HeaderText="Enter only digits in the following fields:" 
                         BorderStyle="Solid" BorderWidth="2px" BorderColor="Pink" />
                          <br />
                        
                            
                                  
                        <%--<label class="control-label">Course Fee</label>--%>
                       <asp:Label ID="lbCourseFee" runat="server" Text="Course Fee"></asp:Label>
                       <asp:TextBox ID="tbCourseFee" runat="server"></asp:TextBox>
                        <br />
                        <br />
                         
                        
                       <%-- <label class="control-label">Visa Fee</label>--%>
                        <asp:Label ID="lbVisaFee" runat="server" Text="Visa Fee"></asp:Label>
                        <asp:TextBox ID="tbVisaFee" runat="server"></asp:TextBox>
                        <asp:CustomValidator ID="cvVisaFee" runat="server" controlToValidate="tbVisaFee"  Type="Currency"
                           Operator="DataTypeCheck" Text="" ErrorMessage="VisaFee"></asp:CustomValidator>
                     <br />
                     <br />

                         <asp:Label ID="lbIHealthS" runat="server" Text="Immigration Health Surcharge (IHS)" style="font-size: medium"></asp:Label>
                         <asp:TextBox ID="tbIHealthS" runat="server"></asp:TextBox> 
                         <asp:CustomValidator ID="cvIHealthS" runat="server" controlToValidate="tbIHealthS"  Type="Currency"
                           Operator="DataTypeCheck" Text="" ErrorMessage="International Health Surcharge"></asp:CustomValidator>
                    <br />
                         <asp:Label ID="Label1" runat="server" Text="*Currently £150 for each period of 12 months." style="font-size: small"></asp:Label>
                    <br />
                    <br />

                        <asp:Label ID="lbIOMTest" runat="server" Text="I.O.M. Test Fee" style="font-size: medium"></asp:Label>
                        <asp:TextBox ID="tbIOMTest" runat="server"></asp:TextBox>
                        <asp:CustomValidator ID="cvIOMTest" runat="server" controlToValidate="tbIOMTest"  Type="Currency"
                           Operator="DataTypeCheck" Text="" ErrorMessage="I.O.M. Fee"></asp:CustomValidator>
                    <br />
                        <asp:Label ID="Label3" runat="server" Text="*For a study period more than 6 months in some countries" style="font-size: small"></asp:Label>
                    <br />
                    <br />

                        <asp:Label ID="lbFlight" runat="server" Text="Flight cost" style="font-size: medium"></asp:Label>
                        <asp:TextBox ID="tbFlight" runat="server"></asp:TextBox>
                    <br />
                    <br />
                        <asp:Label ID="lbMisc" runat="server" Text="Miscellaneous" style="font-size: medium"></asp:Label>
                        <asp:TextBox ID="tbMisc" runat="server"></asp:TextBox>
                        <asp:CustomValidator ID="cvMisc" runat="server" controlToValidate="tbMisc"  Type="Currency"
                           Operator="DataTypeCheck" Text="" ErrorMessage="Miscellaneous"></asp:CustomValidator>
                    <br />
                    <br />

                <%--living cost section--%>
                        <asp:Label ID="lbCostsOfLiving0" runat="server" Text="Costs of Living**"></asp:Label>
                        <asp:RadioButtonList ID="RadioButtonList1" runat="server" AutoPostBack="True" RepeatDirection="Horizontal" OnSelectedIndexChanged="RadioButtonList1_SelectedIndexChanged" style="font-size: medium">
                        <asp:ListItem Selected="True">Leave To Enter</asp:ListItem> 
                        <asp:ListItem>Leave to Remain</asp:ListItem>
                        </asp:RadioButtonList>

                       
                            <asp:Panel ID="LeaveToEnterPanel" runat="server"
                                >
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
                                <asp:Label ID="lbMonth" runat="server" Text="Months"></asp:Label>
                                <br />
                                <asp:Label ID="Label4" runat="server" Text="*If in case your study time is more than 9 months, count just 9 months as maximum is required. "></asp:Label>
                           </asp:Panel>

                           <asp:Panel ID="LeaveToRemainPanel" runat="server"  Visible="false">
                             <asp:DropDownList ID="ddListLeaveToEnter0" runat="server">
                                <asp:ListItem Value="InsideLondon">Living Inside London</asp:ListItem>
                                <asp:ListItem Value="OutsideLondon">Living Outside London</asp:ListItem>
                           </asp:DropDownList>
                             <br />
                           <asp:Label ID="Label2" runat="server" Text="*The Home Office requires a minimum of 2 months of Living Costs for Leave to Remain Applicants"></asp:Label>
                           </asp:Panel>
                    <br />

        <p>**Costs Of Living<br />
            -£1,265 per month for living costs if you are studying in London for the majority of your study (more than 50% of your study time)<br />
            -£1,015 per month for living costs if you are studying outside London or anywhere else in the UK for the majority of your study (more than 50% of your study time)
             <br />
            "Requirement from Home Office"
        </p>
      
            <br />
         
        <asp:Button ID="btCalculator" runat="server" Text="Calculate" OnClick="btCalculator_Click" />
        </div>
    </form>
</body>
</html>
