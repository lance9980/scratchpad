<?php
//url: http://localhost:8888/lfz/mboutique/index.php?page=page1
//file: change_page.php
$op = $_GET['page'];
if ($op == ''){
    include('assets/new_index.php');
}else if ($op == 'about'){
    include('assets/new_index.php');
}else if ($op == 'our_macarons'){
    include('assets/new_our_macarons.php');
}else if ($op == 'gifts_parties'){
    include('assets/new_gifts.php');
}else if ($op == 'contact'){
    include('assets/new_contact.php');
} else if ($op == 'contact_verified.php'){
    include('assets/contact_verified.php');
} else {
    include('assets/404.php');
}

?>