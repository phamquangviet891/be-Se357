public là tài nguyên mà ai cũng có thể truy cập được
protected là tài nguyên mà chỉ giới hạn 1 số người truy cập được
private là tài nguyên mà chỉ chủ nhân của nó mới truy cập được

LƯU Ý: Admin mới là chủ nhân thực sự của tất cả các tài nguyên

relationship:

route n<->1
controller 1<->n
service 1<->n DAO

đối với transaction sẽ diễn ra ở service chứ k diễn ra ở DAO, DAO thực hiện CRUD với cơ sở dữ liệu, NHƯNG KHÔNG THỰC HIỆN BUSINESS LOGIC VỚI DỮ LIỆU. Mọi business logic sẽ nằm ở Service  
