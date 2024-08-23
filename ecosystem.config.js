module.exports = {
  apps: [
    {
      name: 'nestjs-app',
      script: 'dist/main.js',  // Đường dẫn đến file đã build của bạn
      instances: 1,            // Đặt số lượng instance là 1 (hoặc số lượng cần thiết)
      exec_mode: 'cluster',    // Chế độ cluster để phân chia tải
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
