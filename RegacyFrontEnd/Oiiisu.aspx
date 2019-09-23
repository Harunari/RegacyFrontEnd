<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Oiiisu.aspx.cs" Inherits="RegacyFrontEnd.Oiiisu" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="Scripts/RegacyJs.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <div id="testElement" for="target"></div>
        </div>
    </form>
    <script src="Scripts/global.js"></script>
    <script
        type="text/javascript"
        data-main="Scripts/Oiisu/main.js"
        src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js">
    </script>
</body>
</html>
