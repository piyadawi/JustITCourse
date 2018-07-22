<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="InterStudentCaculator.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title></title>
</head>
<body>
   
    <div class="container heading">
    <h1>International Student Expenses Calculator</h1>
            <h3>Enter your estimated  expenses per month below and click the calculate button at the bottom to get your total expense shown in a chart.
                You only need to fill in the details relevant to your expenses, everything else can be left blank.
            </h3>
    </div>

   <hr class="top"/>
    <form id="form1" runat="server" >
     <div class="container content">
           <br />
           <b />
            <div class="row">
                <asp:ValidationSummary ID="ValidationSummary1" runat="server"/>
                </div>
            <br />
        
            <div class="row">
                
                <label class="control-label">Accommodation</label>
                <asp:TextBox ID="tbAccommodation" runat="server"></asp:TextBox>
                <asp:CompareValidator ID="cvAccommodation" runat="server" ControlToValidate="tbAccommodation"  Type="Currency" Operator="DataTypeCheck" Text="*" ErrorMessage="Acommodation" Display="Static"></asp:CompareValidator>
            </div>
         <b />
         <b />

            <div class="row">
                <label class="control-label">Transportation</label>
                <asp:TextBox ID="tbTransportation" runat="server"></asp:TextBox>
                <asp:CompareValidator ID="cvTransportation" runat="server" ControlToValidate="tbTransportation"  Type="Currency" Operator="DataTypeCheck" Text="*" ErrorMessage="transportation"></asp:CompareValidator>
                </div>
         <b />
         <b />
         <div class="row">
                <label class="control-label">Food</label>
                <asp:TextBox ID="tbFood" runat="server"></asp:TextBox>
                <asp:CompareValidator ID="cvFood" runat="server" ControlToValidate="tbFood"  Type="Currency" Operator="DataTypeCheck" Text="*" ErrorMessage="Food"></asp:CompareValidator>
              </div>
         <b />

          <div class="row">
                <label class="control-label">Mobile Phone</label>
                <asp:TextBox ID="tbMobilePhone" runat="server"></asp:TextBox>
                <asp:CompareValidator ID="cvMobilePhone" runat="server" ControlToValidate="tbMobilePhone"  Type="Currency" Operator="DataTypeCheck" Text="*" ErrorMessage="Mobile Phone"></asp:CompareValidator>
              </div>
         <b />

         <div class="row">
                <label class="control-label">Internet</label>
                <asp:TextBox ID="tbInternet" runat="server"></asp:TextBox>
                <asp:CompareValidator ID="cvInternet" runat="server" ControlToValidate="tbInternet"  Type="Currency" Operator="DataTypeCheck" Text="*" ErrorMessage="Internet"></asp:CompareValidator>
              </div>
         <b />

         <div class="row">
                <label class="control-label">Book and Stationery</label>
                <asp:TextBox ID="tbBookAndStationery" runat="server"></asp:TextBox>
                <asp:CompareValidator ID="cvBookAndStationery" runat="server" ControlToValidate="tbBookAndStationery"  Type="Currency" Operator="DataTypeCheck" Text="*" ErrorMessage="Book and Stationery"></asp:CompareValidator>
              </div>
         <b />

         <div class="row">
                <label class="control-label">Utilities and Bills</label>
                <asp:TextBox ID="tbUtilitiesAndBills" runat="server"></asp:TextBox>
                <asp:CompareValidator ID="cvUtilitiesAndBills" runat="server" ControlToValidate="tbUtilitiesAndBills"  Type="Currency" Operator="DataTypeCheck" Text="*" ErrorMessage="Utilities and Bills"></asp:CompareValidator>
              </div>
         <b />

         <div class="row">
                <label class="control-label">Shopping</label>
                <asp:TextBox ID="tbShopping" runat="server"></asp:TextBox>
                <asp:CompareValidator ID="cvShopping" runat="server" ControlToValidate="tbShopping"  Type="Currency" Operator="DataTypeCheck" Text="*" ErrorMessage="Shopping"></asp:CompareValidator>
              </div>
         <b />

          <div class="row">
                <label class="control-label">Eating Out</label>
                <asp:TextBox ID="tbEatingOut" runat="server"></asp:TextBox>
                <asp:CompareValidator ID="cvEatingOut" runat="server" ControlToValidate="tbEatingOut"  Type="Currency" Operator="DataTypeCheck" Text="*" ErrorMessage="Eating out"></asp:CompareValidator>
              </div>
         <b />

         <div class="row">
                <label class="control-label">Laundry and Toiletries</label>
                <asp:TextBox ID="tbLaundryAndToiletries" runat="server"></asp:TextBox>
                <asp:CompareValidator ID="cvLaundryAndToiletries" runat="server" ControlToValidate="tbLaundryAndToiletries"  Type="Currency" Operator="DataTypeCheck" Text="*" ErrorMessage="Laundry and Toiletries"></asp:CompareValidator>
              </div>
         <b />

         <div class="row">
                <label class="control-label">Others</label>
                <asp:TextBox ID="tbOthers" runat="server"></asp:TextBox>
                <asp:CompareValidator ID="cvOthers" runat="server" ControlToValidate="tbOthers"  Type="Currency" Operator="DataTypeCheck" Text="*" ErrorMessage="Others"></asp:CompareValidator>
              </div>
         <b />
         <b />
         <b />
         <div class="row">
             <asp:Button ID="ButtonCaculator" runat="server" Text="Caculate" OnClick="ButtonCaculator_Click" />
         <b />
     </div>
    </form>
</body>
</html>
