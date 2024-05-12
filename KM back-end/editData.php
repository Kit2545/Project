<?php 
    require_once('connection.php');

    if (isset($_REQUEST['update_id'])) {
        try {
            $id = $_REQUEST['update_id'];
            $select_stmt = $db->prepare("SELECT * FROM data WHERE id = :id");
            $select_stmt->bindParam(':id', $id);
            $select_stmt->execute();
            $row = $select_stmt->fetch(PDO::FETCH_ASSOC);
            extract($row);
        } catch(PDOException $e) {
            $e->getMessage();
        }
    }

    if (isset($_REQUEST['btn_update'])) {
        $icon = $_REQUEST['txt_icon'];
        $name = $_REQUEST['txt_name'];
        $typedata = $_REQUEST['txt_typedata'];
        $description = $_REQUEST['txt_description'];
        $web = $_REQUEST['txt_web'];

        if (empty($icon)) {
            $errorMsg = "Please enter Icon";
        } else if (empty($name)) {
            $errorMsg = "please Enter Name";
        } else if (empty($typedata)) {
            $errorMsg = "please Enter Type of Data";
        }else if (empty($description)) {
            $errorMsg = "please Enter Link Description";
        }else if (empty($web)) {
            $errorMsg = "please Enter Link Web";
        }else {
            try {
                if (!isset($errorMsg)) {
                    $update_stmt = $db->prepare("UPDATE data SET icon = :kmicon, name = :kmname, typedata = :kmtypedata, description = :kmdescription, web = :kmweb WHERE id = :id");
                    $update_stmt->bindParam(':kmicon', $icon);
                    $update_stmt->bindParam(':kmname', $name);
                    $update_stmt->bindParam(':kmtypedata', $typedata);
                    $update_stmt->bindParam(':kmdescription', $description);
                    $update_stmt->bindParam(':kmweb', $web);
                    $update_stmt->bindParam(':id', $id);

                    if ($update_stmt->execute()) {
                        $updateMsg = "Record update successfully...";
                        header("refresh:2;indexLink.php");
                    }
                }
            } catch(PDOException $e) {
                echo $e->getMessage();
            }
        }
    }


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="bootstrap/bootstrap.css">
</head>
<body>

    <div class="container">
    <div class="display-3 text-center">Edit Page</div>

    <?php 
         if (isset($errorMsg)) {
    ?>
        <div class="alert alert-danger">
            <strong>Wrong! <?php echo $errorMsg; ?></strong>
        </div>
    <?php } ?>
    

    <?php 
         if (isset($updateMsg)) {
    ?>
        <div class="alert alert-success">
            <strong>Success! <?php echo $updateMsg; ?></strong>
        </div>
    <?php } ?>

    <form method="post" class="form-horizontal mt-5">
            
    <div class="form-group text-center">
    <div class="form-group text-center">
    <div class="form-group text-center">
                <div class="row">
                    <label for="icon" class="col-sm-3 control-label">Icon</label>
                    <div class="col-sm-9">
                        <input type="text" name="txt_icon" class="form-control" placeholder="Enter Icon...">
                    </div>
                </div>
            </div>
            <div class="form-group text-center">
                <div class="row">
                    <label for="name" class="col-sm-3 control-label">Name Data</label>
                    <div class="col-sm-9">
                        <input type="text" name="txt_name" class="form-control" placeholder="Enter Data...">
                    </div>
                </div>
            </div>
            <div class="form-group text-center">
                <div class="row">
                    <label for="typedata" class="col-sm-3 control-label">Type of Data</label>
                    <div class="col-sm-9">
                        <input type="text" name="txt_typedata" class="form-control" placeholder="Enter type of data...">
                    </div>
                </div>
            </div>
            <div class="form-group text-center">
                <div class="row">
                    <label for="description" class="col-sm-3 control-label">Description</label>
                    <div class="col-sm-9">
                        <input type="text" name="txt_description" class="form-control" placeholder="Enter Description...">
                    </div>
                </div>
            </div>
            <div class="form-group text-center">
                <div class="row">
                    <label for="web" class="col-sm-3 control-label">Link Web</label>
                    <div class="col-sm-9">
                        <input type="text" name="txt_web" class="form-control" placeholder="Enter Link Web...">
                    </div>
                </div>
            </div>
            <div class="form-group text-center">
                <div class="col-md-12 mt-3">
                    <input type="submit" name="btn_update" class="btn btn-success" value="Update">
                    <a href="indexData.php" class="btn btn-danger">Cancel</a>
                </div>
            </div>


    </form>

    <script src="js/slim.js"></script>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.js"></script>
</body>
</html>