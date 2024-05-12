<?php 
    require_once('connection.php');

    if (isset($_REQUEST['update_id'])) {
        try {
            $id = $_REQUEST['update_id'];
            $select_stmt = $db->prepare("SELECT * FROM info WHERE id = :id");
            $select_stmt->bindParam(':id', $id);
            $select_stmt->execute();
            $row = $select_stmt->fetch(PDO::FETCH_ASSOC);
            extract($row);
        } catch(PDOException $e) {
            $e->getMessage();
        }
    }

    if (isset($_REQUEST['btn_update'])) {
        $img = $_REQUEST['txt_img'];
        $topic = $_REQUEST['txt_topic'];
        $description = $_REQUEST['txt_description'];
        $new = $_REQUEST['txt_new'];

        if (empty($img)) {
            $errorMsg = "Please enter Img";
        } else if (empty($topic)) {
            $errorMsg = "please Enter Topic New";
        } else if (empty($description)) {
            $errorMsg = "please Enter Description";
        }else if (empty($new)) {
            $errorMsg = "please Enter Link New";
        } else {
            try {
                if (!isset($errorMsg)) {
                    $update_stmt = $db->prepare("UPDATE info SET img = :kmimg, topic = :kmname, description = :kmdescription, new = :kmweb WHERE id = :id");
                    $update_stmt->bindParam(':kmimg', $img);
                    $update_stmt->bindParam(':kmname', $topic);
                    $update_stmt->bindParam(':kmdescription', $description);
                    $update_stmt->bindParam(':kmweb', $new);
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
                <div class="row">
                    <label for="img" class="col-sm-3 control-label">Img</label>
                    <div class="col-sm-9">
                        <input type="text" name="txt_img" class="form-control" placeholder="Enter img...">
                    </div>
                </div>
            </div>
            <div class="form-group text-center">
                <div class="row">
                    <label for="topic" class="col-sm-3 control-label">Topic</label>
                    <div class="col-sm-9">
                        <input type="text" name="txt_topic" class="form-control" placeholder="Enter Topic New...">
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
                    <label for="new" class="col-sm-3 control-label">Link New</label>
                    <div class="col-sm-9">
                        <input type="text" name="txt_new" class="form-control" placeholder="Enter Link New...">
                    </div>
                </div>
            </div>
            <div class="form-group text-center">
                <div class="col-md-12 mt-3">
                    <input type="submit" name="btn_update" class="btn btn-success" value="Update">
                    <a href="indexInfo.php" class="btn btn-danger">Cancel</a>
                </div>
            </div>


    </form>

    <script src="js/slim.js"></script>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.js"></script>
</body>
</html>