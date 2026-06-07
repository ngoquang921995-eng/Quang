# PLAN: Portfolio Bento Grid Layout (Đen Trắng)

Bản kế hoạch này mô tả chi tiết các bước thiết kế và phát triển trang portfolio cá nhân với bố cục lưới Bento hiện đại, tông màu đen trắng tối giản, tinh tế.

## 1. Mục Tiêu & Phong Cách Thiết Kế
- **Layout**: Bento Grid (lưới hộp cơm Nhật Bản) chia thành nhiều card chức năng linh hoạt.
- **Color Palette**: Đen trắng chủ đạo (Nền đen sâu `#080808`, thẻ kính mờ `rgba(255, 255, 255, 0.03)` với viền mảnh `rgba(255, 255, 255, 0.08)`, chữ trắng `#ffffff` và xám nhạt `#888888`).
- **Typography**: Font chữ hiện đại: `Outfit` (Tiêu đề) và `Inter` (Nội dung).
- **Aesthetics**: Glassmorphism 2.0, Dot Matrix background, và Spotlight Hover effect.

## 2. Phân Chia Bố Cục Lưới (Bento Blocks)
- **Khối 1 (Hero Card - 3x2)**: Lời chào, tên, và nghề nghiệp chính với hiệu ứng gõ chữ (Typing Effect).
- **Khối 2 (Status Card - 1x1)**: Trạng thái làm việc hiện tại với dấu tròn phát sáng (Pulsing Dot).
- **Khối 3 (Skills Card - 2x1)**: Các biểu tượng công nghệ được căn lề gọn gàng.
- **Khối 4 (Project 1 - 2x2)**: Dự án nổi bật nhất kèm hình ảnh và mô tả khi hover.
- **Khối 5 (Project 2 - 1x2)**: Dự án phụ có định dạng dọc.
- **Khối 6 (About Card - 2x1)**: Giới thiệu bản thân ngắn gọn.
- **Khối 7 (Stats Card - 1x1)**: Hiển thị các chỉ số kinh nghiệm (+5 năm, +50 dự án) chạy số.
- **Khối 8 (Social Card - 1x1)**: Các liên kết mạng xã hội (GitHub, LinkedIn).
- **Khối 9 (Contact Card - 4x1)**: Nút sao chép địa chỉ email trực tiếp kèm thông báo toast.

## 3. Lộ Trình Triển Khai
- **Bước 1**: Khởi tạo cấu trúc dự án (HTML/CSS/JS thuần).
- **Bước 2**: Thiết kế hệ thống CSS Variable, thiết lập font chữ và Dot Matrix Background.
- **Bước 3**: Dựng Layout Bento Grid chuẩn Responsive (CSS Grid & Flexbox).
- **Bước 4**: Thêm hiệu ứng Spotlight Hover bằng JavaScript để card tự động phát sáng theo con trỏ chuột.
- **Bước 5**: Viết logic tương tác phụ (Typing effect, Copy-to-clipboard toast).
- **Bước 6**: Kiểm thử hiển thị trên Mobile và tối ưu hóa hiệu năng tải trang.

---
*Kế hoạch được tạo tự động bởi quy trình `/plan` của Jarvis.*
