<?php 
    require_once('connection.php');

    if (isset($_REQUEST['delete_id'])) {
        $id = $_REQUEST['delete_id'];

        $select_stmt = $db->prepare("SELECT * FROM data WHERE id = :id");
        $select_stmt->bindParam(':id', $id);
        $select_stmt->execute();
        $row = $select_stmt->fetch(PDO::FETCH_ASSOC);

        // Delete an original record from db
        $delete_stmt = $db->prepare('DELETE FROM data WHERE id = :id');
        $delete_stmt->bindParam(':id', $id);
        $delete_stmt->execute();

        header('Location:indexData.php');
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="bootstrap/bootstrap.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="css/back-end.css">
</head>
<body>

    <nav>
        <div class="nav-container">
            <div class="logonav">
                <img src="Group 1.png" >
                <a href="#" class="logo">KM<span class="name"> การจัดการข้อมูล</span></a> 
            </div> 
            <div class="navber">
                <a href="indexLink.php"><i class="fa-solid fa-link"></i><br>Link</a>
                <a href="indexInfo.php"><i class="fa-solid fa-circle-info"></i><br>Info</a>
                <a href="indexData.php"><i class="fa-solid fa-database"></i><br>Data</a>   
                <a href="indexShop.php"><i class="fa-solid fa-shop"></i><br>Shop</a>
            </div>
        </div>
    </nav>

    <div class="container alot">
    <div class="display-3 text-center">Update Data Page</div>
    <a href="addData.php" class="btn btn-success mb-3">Add Data</a>
    <table class="table table-striped table-bordered table-hover">
        <thead>
            <tr>
                <th>Icon</th>
                <th>Name Data</th>
                <th>Type of Data</th>
                <th>Description</th>
                <th>Link Web</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>

        <tbody>
            <?php 
                $select_stmt = $db->prepare("SELECT * FROM data");
                $select_stmt->execute();

                while ($row = $select_stmt->fetch(PDO::FETCH_ASSOC)) {
            ?>

                <tr>
                    <td><?php echo $row["icon"]; ?></td>
                    <td><?php echo $row["name"]; ?></td>
                    <td><?php echo $row["typedata"]; ?></td>
                    <td><?php echo $row["description"]; ?></td>
                    <td><?php echo $row["web"]; ?></td>
                    <td><a href="editData.php?update_id=<?php echo $row["id"]; ?>" class="btn btn-warning">Edit</a></td>
                    <td><a href="?delete_id=<?php echo $row["id"]; ?>" class="btn btn-danger">Delete</a></td>
                </tr>

            <?php } ?>
        </tbody>
    </table>
    </div>
    
    

    <script src="js/slim.js"></script>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.js"></script>
</body>
</html>