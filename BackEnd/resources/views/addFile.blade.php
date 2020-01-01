<head>
    <meta charset="UTF-8">
    <title>Add Product</title>
</head>
<body>

<script>
    axios.post('http://localhost:8000/axios', {name: 'Alex', surname: 'Moran', email: 'alexmoran@bms.edu'}, {headers: {'Accept': 'application/json'}})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
</script>
</body>