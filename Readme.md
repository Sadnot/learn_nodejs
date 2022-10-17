1. Cài đặt framework ExpressJS và khơi chạy dự án Hello World đầu tiên

* ExpressJS là gì ? là 1 framework của NodeJS.

* Môi trường cần có để làm việc với ExpressJS (nếu có rồi thì tua phần này nhé):
    - NodeJS: https://nodejs.org/en/download/

* Cách cài đặt:
    - Câu lệnh: npm install express (nguồn: https://expressjs.com/en/starter/installing.html)

* Tạo và khởi chạy dự án Hello World đầu tiên với NodeJS:
    - Tạo dự án đầu tiên với câu lệnh: npm init
    - Tạo file index.js trong thư mục "cha" với nội dung:

        const express = require('express')
        const app = express()
        const port = 3000

        app.get('/', (req, res) => {
        res.send('Hello World!')
        })

        app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
        })
    - Ở thanh tìm kiếm của trình duyệt, nhập: http://localhost:3000/

Hoàn thành mục tiêu 1. 


2. Cài đặt và sử dụng thư viện Nodemon

* Nodemon là gì? 
   - Nodemon là một công cụ giúp phát triển các ứng dụng dựa trên Node.js bằng cách TỰ ĐỘNG KHƠI ĐỘNG LẠI ứng dụng nút khi phát hiện thấy các thay đổi tệp trong thư mục. (nguồn: https://www.npmjs.com/package/nodemon).

* Cách cài đăt:
    - Câu lệnh: 
        + npm i nodemon --save-dev (cài trong môi trường phát triển của 1 dự án cố định).
        + npm install -g nodemon (cài ở môi trường global)
    - Chỉnh sửa lại file package.js:
        + Ở key "scripts" thêm:  "start": "nodemon --inspect index.js",

* Chạy lại dự án:
    _ Câu lệnh: npm start 
        (Khi chưa cài nodemon, với mỗi lần thay đổi trong dự án phải gõ dòng lệnh node index.js để chạy lại...rất phiền phức! Sau khi cài, chỉ cần lưu lại và refresh lại trình duyệt là xong...rất nhanh và tiện lợi. Ngoài ra, Nodemon còn cung cấp 1 môi trường Devtool riêng biệt giúp debug và "soi" code rõ hơn)

Hoàn thành mục tiêu 2.


3. Cài đặt và sử dụng Morgan

* Morgan là gì ?
    - morgan là một phần mềm trung gian cho phép ta dễ dàng ghi lại các yêu cầu, lỗi và hơn thế nữa vào console. Nó dễ sử dụng, nhưng vẫn mạnh mẽ và có thể tùy chỉnh.

* Cách cài đặt:
    - Câu lệnh: npm i morgan --save-dev (nguồn: https://www.npmjs.com/package/morgan)
    - Ở file index.js thêm vào: 

        const morgan = require('morgan')
        app.use(morgan('combined'))

Refresh lại trình duyệt và xem sự thay đổi của log trong cửa sổ console.

Hoàn thành mục tiêu 3.


4. Template engine (handlebars)

* Handlebars là gì ?
    - Handlebars là một thư viện javascrip rất mạnh mẽ hỗ trợ bạn có thể binding data vào một templete để hiển thị ra website. (nguồn: https://www.npmjs.com/package/express-handlebars)

* Cách cài đặt:
    - Câu lệnh: npm install express-handlebars

* Tổ chức khung dự án và cấu hình lại (có thể tổ chức theo cách khác):
    - Tổ chức lại khung sự án:
        .
        |_____src
                |_____index.js
                |_____resources
                              |_____views
                                        |_____home.hbs
                                        |_____news.hbs
                                        |_____layouts
                                                    |______main.hbs
                                        |_____partials
                                                    |______header.hbs
                                                    |______footer.hds

(xem commit code để biết rõ sự thay đổi của các file)

Hoàn thành mục tiêu 4.


5. Static file & SASS

* Static file: là các file tĩnh (vd: file img, css,...), nếu không được cấu hình trình duyệt sẽ không chạy được các file này. Vì vậy, cần cấu hình để trình duyệt hiểu và chạy được. 
    - Ví dụ muốn chạy được file ảnh ở src/public/logo.jpg, ta thêm câu lệnh sau vào file index:
        app.use(express.static(path.join(__dirname, 'public')));

* Sử dụng SASS:
    - Cài đặt sass: npm i sass --save-dev 

(chạy npm run watch mỗi khi start dự án để lắng nghe sự thay đổi của các file tĩnh)

Hoàn thành mục tiêu 5.


6. Use Bootrap

* Tìm hiểu Bootrap: Bootstrap là một framework bao gồm các HTML, CSS và JavaScript template dùng để phát triển website chuẩn responsive.

* Cách cài đặt và sử dụng: 
    - Đặt thẻ <link> với href là link CDN trong thẻ <head> (trước thẻ <link> của CSS tự custom)
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    - Đặt 2 thẻ <script> sau trước thẻ </body>: 
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>

    (nguồn: https://getbootstrap.com/docs/5.2/getting-started/introduction/)

    - Coppy thử 1 đoạn code bất kì trong trang chủ của Bootrap và quan sát kết quả.

Hoàn thành mục tiêu 6.


7. Xóa thư mục public/css

* Để giảm thời gian push code lên github và tiện lợi hơn trong việc teamwwork.

* Các bước thực hiện:
    - Xóa thư mục public/css.
    - Thêm dòng lệnh sau trong file .gitignore: src/public/css
    - Push code lên github và quan sát sự thay đổi.
