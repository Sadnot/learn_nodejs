1. Mục tiêu: Cài đặt framework ExpressJS và khơi chạy dự án Hello World đầu tiên

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