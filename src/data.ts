export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Commitment {
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Stat {
  value: string;
  label: string;
  sub: string;
}

export const BUSINESS_INFO = {
  name: "CÔNG TY TNHH SẢN XUẤT VÀ KINH DOANH CÂY XANH THỦ ĐÔ",
  slogan: "Hơn 2000 cây xanh được chăm sóc mỗi tháng",
  hotline1: "0777080111",
  hotline1Formatted: "0777.080.111",
  hotline2: "0777010222",
  hotline2Formatted: "0777.010.222",
  email: "Cayxanhthudo001@gmail.com",
  website: "cayxanhthudo.vn",
  address: "Xã Phụng Công – Tỉnh Hưng Yên",
  experience: "6+ năm kinh nghiệm thực chiến",
  servedCount: "300+ doanh nghiệp tại Hà Nội & lân cận",
};

export const SERVICES: Service[] = [
  {
    id: "consulting",
    title: "Tư Vấn Bố Trí Phong Thủy",
    description: "Khảo sát tận nơi và lên phương án bố trí cây cảnh hợp mệnh, chuẩn phong thủy giúp thu hút vượng khí, tài lộc cho doanh nghiệp.",
    iconName: "Compass",
    features: ["Khảo sát mặt bằng miễn phí", "Tư vấn chọn cây hợp hướng & mệnh", "Phối hợp màu sắc không gian"],
  },
  {
    id: "setup",
    title: "Setup & Trực Tiếp Thi Công",
    description: "Vận chuyển và sắp đặt chậu cây theo đúng sơ đồ thiết kế nhanh chóng, gọn gàng, không ảnh hưởng đến giờ làm việc của văn phòng.",
    iconName: "Leaf",
    features: ["Bàn giao chậu cây mới 100%", "Setup nhanh chóng trong 1 ngày", "Không phát sinh phụ phí"],
  },
  {
    id: "maintenance",
    title: "Bảo Dưỡng Chăm Sóc Định Kỳ",
    description: "Nhân viên kỹ thuật đến chăm sóc đều đặn hàng tuần. Đổi cây mới MIỄN PHÍ ngay lập tức trong vòng 24 giờ nếu cây có dấu hiệu suy yếu.",
    iconName: "ShieldCheck",
    features: ["Tưới nước, tỉa cành định kỳ", "Vệ sinh lá sạch bụi, bón phân", "Bảo hành đổi mới miễn phí"],
  },
];

export const CLIENT_LOGOS = [
  { name: "Brighton College", type: "Thành viên tập đoàn giáo dục chuẩn Anh Quốc" },
  { name: "TH True Milk", type: "Công ty TH milk nổi tiếng" },
  { name: "Starbucks VN", type: "Hệ thống cà phê quốc tế cao cấp" },
  { name: "G-Group", type: "Tập đoàn công nghệ hàng đầu" },
  { name: "Giao Hàng Tiết Kiệm", type: "Đơn vị vận chuyển phủ rộng toàn quốc" },
];

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Khảo sát mặt bằng",
    description: "Đội ngũ chuyên viên đến tận văn phòng đo đạc hướng nắng, ánh sáng, nhiệt độ điều hòa.",
  },
  {
    number: "02",
    title: "Tư vấn báo giá",
    description: "Gửi báo giá chi tiết, phân tích chi phí tối ưu nhất cho doanh nghiệp trong vòng 8 giờ.",
  },
  {
    number: "03",
    title: "Thiết kế & Layout",
    description: "Lên layout 2D/3D vị trí đặt cây trực quan giúp khách hàng dễ hình dung không gian thực tế.",
  },
  {
    number: "04",
    title: "Vận chuyển & Setup",
    description: "Thi công bài bản, chuyên nghiệp, giữ vệ sinh tuyệt đối cho không gian văn phòng.",
  },
  {
    number: "05",
    title: "Nghiệm thu bàn giao",
    description: "Bàn giao các cây xanh tươi đẹp, căng tràn sức sống cùng biên bản nghiệm thu minh bạch.",
  },
  {
    number: "06",
    title: "Chăm sóc & Bảo hành",
    description: "Tự động cử nhân viên qua chăm sóc định kỳ, đổi cây mới định kỳ miễn phí nếu cây héo úa.",
  },
];

export const COMMITMENTS: Commitment[] = [
  {
    title: "Đa dạng các loại cây xanh",
    description: "Sở hữu vườn ươm rộng lớn với hơn 150 loài cây cảnh phong phú: Kim Tiền, Thiết Mộc Lan, Kim Ngân, Vạn Niên Thanh,... luôn khỏe mạnh, xanh bóng mượt.",
    iconName: "Trees",
  },
  {
    title: "Dịch vụ uy tín & Chuyên nghiệp",
    description: "Đội ngũ kỹ thuật viên am hiểu sâu sắc về cây trồng, tác phong làm việc nhanh gọn gàng, lễ phép, dọn sạch rác sau khi chăm sóc.",
    iconName: "Award",
  },
  {
    title: "Ưu đãi cho khách hàng dài hạn",
    description: "Miễn phí 100% chi phí thiết kế, phối cảnh cây trang trí. Nhiều gói khuyến mãi giảm giá thuê từ 10% - 20% cho hợp đồng dài từ 1 năm.",
    iconName: "Sparkles",
  },
  {
    title: "Giá siêu ưu đãi tiết kiệm",
    description: "Chỉ từ 1.2 Triệu/tháng, tối ưu hóa đến 50% chi phí so với việc tự mua mới cây tự chăm sóc dễ bị hỏng hóc, héo chết hao phí.",
    iconName: "Coins",
  },
];

export const STATS: Stat[] = [
  {
    value: "2000+",
    label: "Cây Chăm Sóc Mỗi Tháng",
    sub: "Luôn tươi mát đầy sức sống",
  },
  {
    value: "300+",
    label: "Doanh Nghiệp Tin Dùng",
    sub: "Khách hàng thân thiết ký kết hợp đồng",
  },
  {
    value: "6+ Năm",
    label: "Kinh Nghiệm Thực Chiến",
    sub: "Hiểu sâu sắc kỹ thuật cây văn phòng",
  },
  {
    value: "Chỉ Từ 1.2Tr",
    label: "Chi Phí Trọn Gói / Tháng",
    sub: "Rẻ hơn mua mới & tự chăm sóc",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Chị Phương",
    role: "Hành chính Nhân sự - Tập đoàn G-Group",
    content: "Dịch vụ cực kỳ chuyên nghiệp và uy tín. Cây xanh được chăm sóc định kỳ hàng tuần rất đều đặn, luôn giữ được vẻ xanh tươi lộng lẫy giúp cả văn phòng tràn ngập không khí sáng tạo.",
    rating: 5,
  },
  {
    name: "Chị Hương",
    role: "Trưởng phòng Admin - Giao Hàng Tiết Kiệm",
    content: "Dịch vụ của Cây Xanh Thủ Đô đã đồng hành cùng chúng tôi hơn 3 năm nay. Các bạn chăm sóc rất chu đáo, lịch sự, đổi cây ngay lập tức khi phát hiện rụng lá mà không tính thêm cước phí nào.",
    rating: 5,
  },
  {
    name: "Chị Linh",
    role: "Quản lý chuỗi - Starbucks Cầu Giấy",
    content: "Mẫu mã chậu cây hiện đại, đa dạng và hợp phong thủy mộc gia chủ. Sự nhiệt tình hỗ trợ 24/7 của hotline giúp chúng tôi hoàn toàn an tâm và tập trung cao độ vào công việc kinh doanh của mình.",
    rating: 5,
  },
];
