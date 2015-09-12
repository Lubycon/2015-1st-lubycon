<!doctype html public "-//w3c//dtd html 4.01 transitional//en" "http://www.w3.org/tr/html4/loose.dtd">

<html>

<head>

<title> Ajax Upload Sample </title>

<meta charset="UTF-8">

<meta http-equiv="X-UA-Compatible" content="IE=edge">

<meta name="viewport" content="width=device-width, initial-scale=1">

<style>

body, div, td {font-family:"Courier New","³ª´®°íµñ","¸¼Àº°íµñ","µ¸¿ò";font-size:10pt;}

</style>

<script src="jquery.js"></script>
<script src="jquery.form.min.js"></script>

</head>


<body>

    <form id="form1" name="form1">

    choose file<input type="file" id="formfile" name="formfile" value="File Select""><p>
    <span id="result"></span>

    </form>

</body>

</html> 


<script type="text/javascript">
    $(function ()
    {
        $('#formfile').change(function ()
        {
            uploadFile();
        });
    });

    function uploadFile()
    {
        $('#submit').hide();
        $('#result').html("Sending... Please wait...");
        var form = $("form")[0];
        var formData = new FormData(form);
        $.ajax(
        {
            url: "ajax_upload_ok.php",
            processData: false,
            contentType: false,
            data: formData,
            type: "POST",
            cache: false,
            success: function (args)
            {
                $('#submit').show();
                $('#result').html("<img src='./upload/" + args + "'>");
                $('#form1').trigger("reset");
            },
            error: function (args)
            {
                $('#submit').show();
                $('#result').html("File upload failed.");
                $('#result').append("!!!");
                $('#form1').trigger("reset");
            },
        })
    }

</script>