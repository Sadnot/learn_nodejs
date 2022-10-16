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