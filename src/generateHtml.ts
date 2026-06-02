import { BUSINESS_INFO } from "./data";

export function generateSingleFileHtml(
  webhookUrl: string = "",
  telegramToken: string = "",
  telegramChatId: string = ""
): string {
  return `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dịch Vụ Cho Thuê Cây Xanh Văn Phòng Giá Rẻ - Cây Xanh Thủ Đô</title>
    <meta name="description" content="Chuyên cho thuê cây xanh văn phòng, cây cảnh văn phòng tại Hà Nội, Hưng Yên, Bắc Ninh. Chi phí chỉ từ 1.2M/tháng trọn gói, miễn phí chăm sóc và khảo sát thiết kế. Đăng ký nhận báo giá!">
    <meta name="keywords" content="cho thuê cây xanh văn phòng, cho thuê cây cảnh văn phòng, cây cảnh văn phòng Hà Nội, cây xanh thủ đô, thuê cây cảnh">
    
    <!-- Tailwind CSS Play CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#f0fdf4',
                            100: '#dcfce7',
                            200: '#bbf7d0',
                            500: '#22c55e',
                            600: '#16a34a',
                            700: '#15803d',
                            800: '#166534',
                            900: '#14532d',
                        }
                    }
                }
            }
        }
    </script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            scroll-behavior: smooth;
        }
        .trust-badge {
            transition: all 0.3s ease;
        }
        .trust-badge:hover {
            transform: translateY(-5px);
        }
        /* Floating Button Animations */
        @keyframes pulse-ring {
            0% { transform: scale(0.95); opacity: 1; }
            50% { transform: scale(1.15); opacity: 0.5; }
            100% { transform: scale(1.3); opacity: 0; }
        }
        .pulse-btn::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: var(--pulse-color, #16a34a);
            opacity: 0.8;
            z-index: -1;
            animation: pulse-ring 2s cubic-bezier(0.25, 0, 0, 1) infinite;
        }
    </style>

    <!-- ==========================================
      1. GOOGLE ADS GLOBAL TAG (gtag.js)
      Dán mã theo dõi Google Ads vào đây
    ========================================== -->
    <!-- 
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-XXXXXXXXX'); // Thay AW-XXXXXXXXX bằng ID tài khoản Google Ads của bạn
    </script>
    -->
    
    <!-- ==========================================
      2. MÃ REMARKETING (Bám đuổi khách hàng)
    ========================================== -->
    <!-- 
    <script>
        gtag('event', 'conversion', {
            'send_to': 'AW-XXXXXXXXX/RemarketingLabel',
            'value': 1.0,
            'currency': 'VND'
        });
    </script>
    -->
</head>
<body class="bg-slate-50 text-slate-800 antialiased">

    <!-- Top Alert Bar -->
    <div class="bg-primary-900 text-white text-center py-2 px-4 text-xs font-semibold tracking-wide flex justify-between items-center max-w-7xl mx-auto rounded-b-lg shadow-sm">
        <span class="truncate"><i class="fa-solid fa-gift text-amber-400 mr-2"></i>Ưu đãi đặc biệt: Giảm ngay 15% gói hợp đồng trên 1 năm</span>
        <a href="tel:${BUSINESS_INFO.hotline1}" class="hover:underline flex items-center shrink-0">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-2"></span>
            <span>Hotline 24/7: ${BUSINESS_INFO.hotline1Formatted}</span>
        </a>
    </div>

    <!-- Main Navigation Header -->
    <header class="bg-white/95 backdrop-blur sticky top-0 z-40 border-b border-emerald-100 shadow-sm transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
            
            <!-- Brand Logo / Company Name -->
            <a href="#" class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-md text-white">
                    <i class="fa-solid fa-seedling text-2xl"></i>
                </div>
                <div>
                     <span class="block font-extrabold text-lg sm:text-xl text-primary-800 uppercase tracking-tight">Cây Xanh Thủ Đô</span>
                     <span class="block text-[10px] sm:text-xs text-slate-500 font-medium tracking-wide">${BUSINESS_INFO.slogan}</span>
                </div>
            </a>

            <!-- Navigation Menu -->
            <nav class="hidden lg:flex items-center gap-x-8 text-sm font-semibold text-slate-600">
                <a href="#services" class="hover:text-primary-600 transition">Dịch Vụ</a>
                <a href="#commitments" class="hover:text-primary-600 transition">Cam Kết</a>
                <a href="#process" class="hover:text-primary-600 transition">Quy Trình</a>
                <a href="#stats" class="hover:text-primary-600 transition">Số Liệu</a>
                <a href="#reviews" class="hover:text-primary-600 transition">Đánh Giá</a>
                <a href="#contact" class="hover:text-primary-600 transition">Liên Hệ</a>
            </nav>

            <!-- Actions / Dial Buttons -->
            <div class="flex items-center gap-2">
                <a href="tel:${BUSINESS_INFO.hotline1}" class="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2.5 px-4 rounded-xl text-sm flex items-center gap-2 shadow-lg hover:shadow-primary-600/30 transition">
                    <i class="fa-solid fa-phone animate-bounce"></i>
                    <span class="hidden sm:inline">${BUSINESS_INFO.hotline1Formatted}</span>
                </a>
                <a href="#contact" class="hidden md:inline-flex bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 px-4 rounded-xl text-sm transition">
                    Chọn Cây Ngay
                </a>
            </div>
        </div>
    </header>

    <!-- SECTION 1: HERO / BANNER -->
    <section class="relative bg-gradient-to-b from-primary-50 via-white to-slate-100 pt-8 pb-16 lg:pt-12 lg:pb-20 overflow-hidden">
        <!-- Floating shapes & background -->
        <div class="absolute inset-0 z-0 opacity-40">
            <div class="absolute top-10 right-10 w-96 h-96 rounded-full bg-emerald-200 filter blur-3xl"></div>
            <div class="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-green-200 filter blur-3xl"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                <!-- Left Hand Side Visual Column (Carousel Container with multi-image support) -->
                <div class="lg:col-span-7 space-y-6">
                    <div class="relative overflow-hidden w-full h-[360px] sm:h-[480px] rounded-3xl shadow-2xl border border-emerald-100 bg-emerald-950 group">
                        
                        <!-- Slide 1 -->
                        <div class="hero-slide absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out opacity-100 scale-100 z-10" data-index="0">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10"></div>
                            <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1600&auto=format&fit=crop" alt="Cây Xanh Thủ Đô 1" class="w-full h-full object-cover">
                            <div class="absolute top-4 right-4 bg-amber-500 text-slate-950 text-[10px] sm:text-xs font-black px-3 py-1.5 rounded-full shadow-lg z-20 uppercase tracking-widest">Giảm 15% Hợp Đồng</div>
                            <div class="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 z-20 space-y-2 sm:space-y-3">
                                <span class="inline-block bg-primary-600/95 text-white text-[9px] sm:text-[11px] font-black px-3 py-1 rounded-md uppercase tracking-wider">CÂY XANH THỦ ĐÔ • ƯU ĐÃI THUÊ HÈ 2026</span>
                                <h2 class="text-xl sm:text-3xl font-extrabold text-white leading-tight drop-shadow-md">MANG THIÊN NHIÊN VÀO VĂN PHÒNG</h2>
                                <p class="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-medium">Chỉ từ 1.2 Triệu/Tháng - Thiết kế 3D tối ưu nhiệt độ, gieo mầm năng lượng thịnh vượng.</p>
                            </div>
                        </div>

                        <!-- Slide 2 -->
                        <div class="hero-slide absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out opacity-0 scale-105 pointer-events-none z-0" data-index="1">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10"></div>
                            <img src="https://images.unsplash.com/photo-1545224376-1aeae92cdd74?q=80&w=1600&auto=format&fit=crop" alt="Cây Xanh Thủ Đô 2" class="w-full h-full object-cover">
                            <div class="absolute top-4 right-4 bg-amber-500 text-slate-950 text-[10px] sm:text-xs font-black px-3 py-1.5 rounded-full shadow-lg z-20 uppercase tracking-widest">Thay thế FREE 24h</div>
                            <div class="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 z-20 space-y-2 sm:space-y-3">
                                <span class="inline-block bg-primary-600/95 text-white text-[9px] sm:text-[11px] font-black px-3 py-1 rounded-md uppercase tracking-wider">BẢO HÀNH ĐỔI MỚI TOÀN DIỆN</span>
                                <h2 class="text-xl sm:text-3xl font-extrabold text-white leading-tight drop-shadow-md">CHĂM SÓC ĐỊNH KỲ - ĐỔI CÂY MIỄN PHÍ</h2>
                                <p class="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-medium">Kỹ thuật viên bón nước tỉ mẩn tỉ rải sạch bong bụi lá. Phát hiện cây úa héo rụng lả đổi mới trong 24h.</p>
                            </div>
                        </div>

                        <!-- Slide 3 -->
                        <div class="hero-slide absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out opacity-0 scale-105 pointer-events-none z-0" data-index="2">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10"></div>
                            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop" alt="Cây Xanh Thủ Đô 3" class="w-full h-full object-cover">
                            <div class="absolute top-4 right-4 bg-amber-500 text-slate-950 text-[10px] sm:text-xs font-black px-3 py-1.5 rounded-full shadow-lg z-20 uppercase tracking-widest">Khảo Sát 0Đ Tận Nơi</div>
                            <div class="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 z-20 space-y-2 sm:space-y-3">
                                <span class="inline-block bg-primary-600/95 text-white text-[9px] sm:text-[11px] font-black px-3 py-1 rounded-md uppercase tracking-wider">ĐA DẠNG CHỦNG LOẠI CAO CẤP</span>
                                <h2 class="text-xl sm:text-3xl font-extrabold text-white leading-tight drop-shadow-md">150+ MẪU CÂY PHONG THỦY ĐÓN LỘC</h2>
                                <p class="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-medium">Kim tiền, thiết mộc lan quân vương tinh chế lọc benzene tia sóng điện từ mang phồn thỉnh mộc gia quý.</p>
                            </div>
                        </div>

                        <!-- Slide 4 -->
                        <div class="hero-slide absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out opacity-0 scale-105 pointer-events-none z-0" data-index="3">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10"></div>
                            <img src="https://images.unsplash.com/photo-1530745342582-0795f23ec976?q=80&w=1600&auto=format&fit=crop" alt="Cây Xanh Thủ Đô 4" class="w-full h-full object-cover">
                            <div class="absolute top-4 right-4 bg-amber-500 text-slate-950 text-[10px] sm:text-xs font-black px-3 py-1.5 rounded-full shadow-lg z-20 uppercase tracking-widest">Thiết Kế Đẳng Cấp</div>
                            <div class="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 z-20 space-y-2 sm:space-y-3">
                                <span class="inline-block bg-primary-600/95 text-white text-[9px] sm:text-[11px] font-black px-3 py-1 rounded-md uppercase tracking-wider">SANG TRỌNG • ĐỘC ĐÁO • THỊNH VƯỢNG</span>
                                <h2 class="text-xl sm:text-3xl font-extrabold text-white leading-tight drop-shadow-md">HƠN 150+ MẪU CHẬU CÂY PHONG THỦY</h2>
                                <p class="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-medium">Sử dụng chậu mạ vàng, chậu đá mài cao cấp mang lại luồng sinh khí mới cho góc làm việc sành điệu.</p>
                            </div>
                        </div>

                        <!-- Navigation Arrows -->
                        <button onclick="prevHeroSlide()" class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-emerald-600 border border-white/10 transition z-20 opacity-0 group-hover:opacity-100 pointer-events-auto cursor-pointer" title="Trước">
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                        <button onclick="nextHeroSlide()" class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-emerald-600 border border-white/10 transition z-20 opacity-0 group-hover:opacity-100 pointer-events-auto cursor-pointer" title="Kế tiếp">
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>

                        <!-- Dot Indicators -->
                        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                            <button onclick="setHeroSlide(0)" class="hero-dot w-6 h-2.5 rounded-full bg-amber-400 transition-all duration-300 pointer-events-auto cursor-pointer"></button>
                            <button onclick="setHeroSlide(1)" class="hero-dot w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white transition-all duration-300 pointer-events-auto cursor-pointer"></button>
                            <button onclick="setHeroSlide(2)" class="hero-dot w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white transition-all duration-300 pointer-events-auto cursor-pointer"></button>
                            <button onclick="setHeroSlide(3)" class="hero-dot w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white transition-all duration-300 pointer-events-auto cursor-pointer"></button>
                        </div>
                    </div>

                    <!-- Trust Stats Bar -->
                    <div class="grid grid-cols-3 gap-2 text-center">
                        <div class="p-2 sm:p-3 bg-white rounded-2xl shadow-sm border border-emerald-50">
                            <span class="block font-black text-sm sm:text-base text-primary-700">6+ Năm</span>
                            <span class="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Kinh Nghiệm</span>
                        </div>
                        <div class="p-2 sm:p-3 bg-white rounded-2xl shadow-sm border border-emerald-50">
                            <span class="block font-black text-sm sm:text-base text-primary-700">300+</span>
                            <span class="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Khách Hàng</span>
                        </div>
                        <div class="p-2 sm:p-3 bg-white rounded-2xl shadow-sm border border-emerald-50">
                            <span class="block font-black text-sm sm:text-base text-primary-700">Trọn Gói</span>
                            <span class="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Bảo Hành FREE</span>
                        </div>
                    </div>
                </div>

                <!-- Right Hand Side Form Column -->
                <div class="lg:col-span-5">
                    <div class="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-emerald-100 relative">
                        <!-- Hot Sale ribbon -->
                        <div class="absolute -top-3.5 right-6 bg-rose-600 text-white text-[10px] font-black px-3.5 py-1.5 rounded-full shadow-lg uppercase tracking-widest flex items-center gap-1 z-20">
                            <i class="fa-solid fa-fire"></i> Ưu Đãi 15%
                        </div>

                        <div class="text-center mb-6">
                            <h3 class="text-xl font-extrabold text-slate-900 leading-tight">NHẬN BÁO GIÁ THUÊ CÂY</h3>
                            <p class="text-xs text-slate-500 mt-1.5">Đội ngũ kỹ sư Công ty Cây Xanh Thủ Đô liên hệ phản hồi phương án, báo giá trong vòng 8h!</p>
                        </div>

                        <form id="hero-quote-form" onsubmit="submitLeadForm(event, 'Form Hero')">
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-xs font-bold text-slate-600 uppercase mb-1">Họ và tên đại diện / nhân sự <span class="text-rose-500">*</span></label>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <i class="fa-solid fa-user text-sm"></i>
                                        </div>
                                        <input type="text" name="name" required placeholder="Ví dụ: Anh Hoàng Admin / Chị Mai HR" class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 text-sm bg-slate-50">
                                    </div>
                                </div>
                                
                                <div>
                                    <label class="block text-xs font-bold text-slate-600 uppercase mb-1">Số điện thoại liên hệ <span class="text-rose-500">*</span></label>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <i class="fa-solid fa-phone text-sm"></i>
                                        </div>
                                        <input type="tel" name="phone" required placeholder="Ví dụ: 0977xxxxxx hoặc 0777xxxxxx" class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 text-sm bg-slate-50">
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-xs font-bold text-slate-600 uppercase mb-1">Dịch vụ bạn đang quan tâm</label>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <i class="fa-solid fa-seedling text-sm"></i>
                                        </div>
                                        <select name="service" class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 text-sm bg-white appearance-none font-medium">
                                            <option value="Thuê cây xanh">Thuê cây xanh văn phòng trọn gói (Tiện lợi nhất)</option>
                                            <option value="Cung cấp cây xanh">Cung cấp mua đứt cây xanh chậu cảnh (Sở hữu vĩnh viễn)</option>
                                            <option value="Chăm sóc cây xanh">Ủy thác chăm sóc cây cảnh văn phòng có sẵn</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="bg-primary-50 p-3 rounded-xl border border-primary-100 flex items-start gap-2 text-xs text-primary-800">
                                    <i class="fa-solid fa-check-circle mt-0.5 text-primary-600 shrink-0"></i>
                                    <span><strong>Miễn phí 100%</strong> khảo sát hiện trạng & đo vẽ 3D phân bổ phong thủy cây cảnh quan tại đơn vị.</span>
                                </div>

                                <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-600/20 tracking-wider text-sm transition transition-all uppercase cursor-pointer">
                                    Gửi Yêu Cầu Tối Ưu Chi Phí <i class="fa-solid fa-arrow-right ml-2 animate-pulse"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION 3: KHÁCH HÀNG TIÊU BIỂU -->
    <section class="py-12 bg-white border-y border-emerald-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p class="text-center text-xs font-extrabold text-emerald-800 uppercase tracking-widest mb-8">ĐỐI TÁC CHIẾN LƯỢC & DOANH NGHIỆP TIN DÙNG</p>
            
            <div class="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center opacity-85">
                <div class="flex flex-col items-center p-3 text-center">
                    <span class="text-base font-extrabold text-slate-800 tracking-tight">Brighton College</span>
                    <span class="text-[10px] text-slate-400 mt-1 uppercase">Hệ thống giáo dục</span>
                </div>
                <div class="flex flex-col items-center p-3 text-center">
                    <span class="text-base font-extrabold text-slate-800 tracking-tight">TH True Milk</span>
                    <span class="text-[10px] text-slate-400 mt-1 uppercase">Tập đoàn Sữa sạch</span>
                </div>
                <div class="flex flex-col items-center p-3 text-center">
                    <span class="text-base font-extrabold text-slate-800 tracking-tight">Starbucks VN</span>
                    <span class="text-[10px] text-slate-400 mt-1 uppercase">Hệ thống cà phê</span>
                </div>
                <div class="flex flex-col items-center p-3 text-center">
                    <span class="text-base font-extrabold text-slate-800 tracking-tight">G-Group</span>
                    <span class="text-[10px] text-slate-400 mt-1 uppercase">Tập đoàn Công nghệ</span>
                </div>
                <div class="flex flex-col items-center col-span-2 md:col-span-1 p-3 text-center">
                    <span class="text-base font-extrabold text-slate-800 tracking-tight">Giao Hàng Tiết Kiệm</span>
                    <span class="text-[10px] text-slate-400 mt-1 uppercase">Logistics Toàn Quốc</span>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION: INTERACTIVE BEFORE/AFTER MAKEOVER GALLERY -->
    <section class="py-16 bg-white border-b border-slate-100">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-10">
                <span class="text-xs font-bold tracking-widest uppercase bg-emerald-50 px-3 py-1 rounded-full text-emerald-800">
                    SỰ BIẾN ĐỔI KỲ DIỆU
                </span>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
                    Trước & Sau Khi Thiết Kế Cảnh Quan Cây Xanh
                </h2>
                <p class="text-xs sm:text-sm text-slate-500 mt-1">
                    Dịch chuyển thanh trượt để so sánh văn phòng tẻ nhạt truyền thống so với diện mạo xanh tươi sảng khoái sau khi được Thủ Đô bài bài trí cây xanh phong thủy đón tài lộc.
                </p>
            </div>

            <div class="relative w-full h-[280px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 select-none">
                <!-- Before (Gray Empty Office) -->
                <div class="absolute inset-0 w-full h-full">
                    <img
                        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop"
                        alt="Before Office Makeover"
                        class="w-full h-full object-cover grayscale brightness-90 saturate-50"
                    >
                    <div class="absolute top-4 left-4 bg-black/70 text-white text-[10px] uppercase font-extrabold px-3 py-1.5 rounded shadow z-20">
                        Trước: Văn phòng tẻ nhạt, bí bách, đầy tia bức xạ máy tính
                    </div>
                </div>

                <!-- After (Green Plant Luxury Office) with dynamic width based on sliderPosition -->
                <div
                    id="html-after-overlay"
                    class="absolute inset-y-0 left-0 overflow-hidden z-10"
                    style="width: 50%"
                >
                    <!-- Ensure image inside doesn't move with width of container -->
                    <div class="absolute inset-0 w-[90vw] max-w-4xl h-[280px] sm:h-[420px]">
                        <img
                            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200&auto=format&fit=crop"
                            alt="After Office Makeover"
                            class="w-full h-full object-cover"
                        >
                    </div>
                    <div class="absolute top-4 right-4 bg-emerald-600 text-white text-[10px] uppercase font-bold px-3 py-1.5 rounded shadow z-25 whitespace-nowrap">
                        Sau: Cây xanh tươi mát, đón tài lộc phong thủy, lọc không khí trong lành
                    </div>
                </div>

                <!-- Draggagle vertical handler line -->
                <div
                    id="html-slider-handler"
                    class="absolute inset-y-0 w-1 bg-amber-500 z-30 cursor-ew-resize flex items-center justify-center"
                    style="left: 50%"
                >
                    <div class="w-8 h-8 rounded-full bg-amber-500 text-slate-900 shadow-xl border border-white flex items-center justify-center -translate-x-3.5 select-none font-bold text-xs pointer-events-none">
                        ↔
                    </div>
                </div>

                <!-- Invisible native range slider covering the area for simple interactive drag controls -->
                <input
                    type="range"
                    min="0"
                    max="100"
                    value="50"
                    oninput="handleHtmlSliderInput(this.value)"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
                    aria-label="Before-After slider handler"
                />
            </div>
        </div>
    </section>

    <!-- SECTION 2: THÔNG TIN DỊCH VỤ -->
    <section id="services" class="py-16 md:py-24 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-primary-700 text-xs font-extrabold tracking-widest uppercase bg-emerald-50 px-3 py-1.5 rounded-full">GIẢI PHÁP TOÀN DIỆN</span>
                <h2 class="text-3xl font-extrabold text-slate-900 mt-4">3 DỊCH VỤ CHÍNH TẠI CÂY XANH THỦ ĐÔ</h2>
                <p class="text-slate-600 mt-3 text-sm sm:text-base">Chúng tôi mang lại chu trình dịch vụ khép kín từ khâu phác thảo thiết kế tới lúc bàn giao chăm sóc, tối giản hóa mệt mỏi cho doanh nghiệp.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <!-- Service Card 1 -->
                <div class="bg-white rounded-2xl p-8 border border-emerald-50 shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between">
                    <div class="space-y-4">
                        <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl">
                            <i class="fa-solid fa-compass"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900">Tư Vấn & Bố Trí Phong Thủy</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Khảo sát vị trí phòng ốc tận nơi mượn các mẫu cây đẹp, lọc bức xạ máy tính, thanh mát phổi, tư vấn kích thước cây hợp phong thủy đón cát trạch.
                        </p>
                        <div class="border-t border-slate-100 pt-4 space-y-2">
                            <div class="flex items-center text-xs text-slate-600 gap-2">
                                <i class="fa-solid fa-circle-check text-emerald-500"></i> Khảo sát mặt bằng miễn phí
                            </div>
                            <div class="flex items-center text-xs text-slate-600 gap-2">
                                <i class="fa-solid fa-circle-check text-emerald-500"></i> Định vị cây sinh tài lộc
                            </div>
                        </div>
                    </div>
                    <a href="#contact" class="mt-6 block text-center bg-slate-100 hover:bg-primary-600 text-slate-800 hover:text-white text-xs font-bold py-2.5 px-4 rounded-xl transition">Đăng Ký Khảo Sát Tận Nơi</a>
                </div>

                <!-- Service Card 2 -->
                <div class="bg-white rounded-2xl p-8 border border-emerald-50 shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between">
                    <div class="space-y-4">
                        <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl">
                            <i class="fa-solid fa-leaf"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900">Setup Cây Xanh Văn Phòng</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Cung cấp chậu sứ trắng, sang trọng hoặc chậu đá mài cao cấp, phối đất vi sinh sạch sẽ giàu dinh dưỡng, tiến hành bài trí đúng hẹn thẩm mỹ nhất.
                        </p>
                        <div class="border-t border-slate-100 pt-4 space-y-2">
                            <div class="flex items-center text-xs text-slate-600 gap-2">
                                <i class="fa-solid fa-circle-check text-emerald-500"></i> Chậu cây bóng bẩy 100%
                            </div>
                            <div class="flex items-center text-xs text-slate-600 gap-2">
                                <i class="fa-solid fa-circle-check text-emerald-500"></i> Setup ngăn nắp trong ngày
                            </div>
                        </div>
                    </div>
                    <a href="#contact" class="mt-6 block text-center bg-slate-100 hover:bg-primary-600 text-slate-800 hover:text-white text-xs font-bold py-2.5 px-4 rounded-xl transition">Nhận Mẫu Cây Phổ Biến</a>
                </div>

                <!-- Service Card 3 -->
                <div class="bg-white rounded-2xl p-8 border border-emerald-50 shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between">
                    <div class="space-y-4">
                        <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl">
                            <i class="fa-solid fa-shield-halved"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900">Chăm Sóc & Đổi Mới Định Kỳ</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Ủy thác hoàn toàn việc chăm sóc định kỳ cho kỹ thuật viên. Tưới nước đúng độ, loại bỏ lá vàng úa, bón phân. Cây héo hỏng đổi chậu mới trọn vẹn 100% hoàn toàn free.
                        </p>
                        <div class="border-t border-slate-100 pt-4 space-y-2">
                            <div class="flex items-center text-xs text-slate-600 gap-2">
                                <i class="fa-solid fa-circle-check text-emerald-500"></i> Cam kết chu kỳ bảo dưỡng đều đặn
                            </div>
                            <div class="flex items-center text-xs text-slate-600 gap-2">
                                <i class="fa-solid fa-circle-check text-emerald-500"></i> Đổi trả miễn phí 24 giờ
                            </div>
                        </div>
                    </div>
                    <a href="#contact" class="mt-6 block text-center bg-slate-100 hover:bg-primary-600 text-slate-800 hover:text-white text-xs font-bold py-2.5 px-4 rounded-xl transition">Tìm Hiểu Gói Chăm Sóc</a>
                </div>

            </div>
        </div>
    </section>

            </div>
        </div>
    </section>

    <!-- SECTION: BẢNG GIÁ THUÊ CÂY TRỌN GÓI THEO DIỆN TÍCH -->
    <section id="pricing-packages" class="py-16 md:py-24 bg-emerald-950 text-white relative overflow-hidden">
        <!-- Decorative elements -->
        <div class="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div class="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-emerald-800/40 filter blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-emerald-700/30 filter blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-amber-400 text-xs font-black tracking-widest uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/10 decoration-none inline-block">
                    BÁO GIÁ MINH BẠCH - KHÔNG PHÁT SINH PHỤ PHÍ
                </span>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-tight uppercase">
                    Bảng Giá Thuê Cây Cảnh Trọn Gói
                </h2>
                <p class="text-emerald-200 mt-3 text-sm sm:text-base leading-relaxed">
                    Các gói giải pháp được thiết kế tối ưu hóa theo diện tích mặt bằng thực tế để giúp doanh nghiệp duyệt chi ngân sách nhanh nhất.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                
                <!-- Gói STANDARD -->
                <div class="bg-white text-slate-800 rounded-3xl p-8 border border-emerald-800 flex flex-col justify-between shadow-xl transition-all hover:scale-[1.02] duration-300 relative">
                    <div class="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-[10px] uppercase font-black px-3 py-1 rounded-full">
                        Văn phòng &lt; 50m²
                    </div>
                    <div class="space-y-6">
                        <div>
                            <span class="block text-slate-400 text-xs font-black uppercase tracking-wider">GÓI KHỞI NGHIỆP</span>
                            <h3 class="text-2xl font-extrabold text-slate-900 mt-1">Gói Standard</h3>
                            <p class="text-slate-500 text-xs mt-1.5 leading-relaxed">Tiết kiệm chi phí, phủ xanh góc làm việc cho các doanh nghiệp quy mô nhỏ gọn.</p>
                        </div>

                        <div class="border-y border-slate-100 py-4">
                            <span class="block text-slate-400 text-[10px] font-black uppercase tracking-widest">PHÍ THUÊ TRỌN GÓI</span>
                            <div class="flex items-baseline gap-1 mt-1">
                                <span class="text-3xl sm:text-4xl font-black text-emerald-700">1.200.000</span>
                                <span class="text-sm font-bold text-slate-500">đ / tháng</span>
                            </div>
                        </div>

                        <div class="space-y-3">
                            <span class="text-xs font-black text-slate-900 block uppercase tracking-wider">Cơ cấu cây tiêu chuẩn:</span>
                            <ul class="space-y-2.5 text-xs text-slate-600 font-medium">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-circle-check text-emerald-600 shrink-0 mt-0.5 animate-pulse"></i>
                                    <span><strong>02 – 03 cây lớn tầm Đại</strong> đặt góc phòng họp, phòng khách (Thiết Mộc Lan, Kim Ngân Cột, v.v.)</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-circle-check text-emerald-600 shrink-0 mt-0.5 animate-pulse"></i>
                                    <span><strong>04 – 05 cây tầm Trung</strong> đặt cạnh bàn, sảnh (Ngũ Gia Bì, Trầu Bà Cột, v.v.)</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-circle-check text-emerald-600 shrink-0 mt-0.5 animate-pulse"></i>
                                    <span><strong>05 – 08 cây Để Bàn nhỏ</strong> (Kim Tiền, Lưỡi Hổ Thái, Lan Ý, v.v.)</span>
                                </li>
                                <li class="flex items-start gap-2 border-t border-slate-100 pt-2 text-slate-500">
                                    <i class="fa-solid fa-check text-emerald-600 shrink-0 mt-0.5"></i>
                                    <span>Chăm sóc, tưới phân định kỳ 1 lần/tuần</span>
                                </li>
                                <li class="flex items-start gap-2 text-slate-500">
                                    <i class="fa-solid fa-check text-emerald-600 shrink-0 mt-0.5"></i>
                                    <span>Đổi cây héo/suy yếu miễn phí trong 24h</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="pt-8">
                        <button
                            onclick="selectPackage('Gói Standard (Khởi Nghiệp)', 'Chào Cây Xanh Thủ Đô, công ty tôi cần thuê cây theo cấu hình gói Standard 1.2M/tháng cho mặt bằng nhỏ. Hãy xin lịch hẹn khảo sát miễn phí!')"
                            class="w-full bg-slate-100 hover:bg-emerald-600 text-slate-800 hover:text-white font-extrabold py-3.5 px-4 rounded-xl text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 cursor-pointer text-center"
                        >
                            Chọn Gói Standard
                        </button>
                    </div>
                </div>

                <!-- Gói DELUXE -->
                <div class="bg-white text-slate-800 rounded-3xl p-8 border-2 border-amber-400 flex flex-col justify-between shadow-2xl transition-all hover:scale-[1.02] duration-300 relative">
                    <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-[10px] font-black px-4 py-1.5 rounded-full shadow z-20 uppercase tracking-widest flex items-center gap-1 animate-pulse">
                        <i class="fa-solid fa-fire text-slate-950"></i> ĐƯỢC CHỌN NHIỀU NHẤT
                    </div>
                    <div class="absolute top-5 right-5 bg-amber-100 text-amber-900 text-[10px] uppercase font-black px-3 py-1 rounded-full">
                        Văn phòng 50m² – 150m²
                    </div>
                    
                    <div class="space-y-6 pt-2">
                        <div>
                            <span class="block text-slate-400 text-xs font-black uppercase tracking-wider">GÓI HÀNH TINH XANH</span>
                            <h3 class="text-2xl font-extrabold text-slate-900 mt-1">Gói Deluxe</h3>
                            <p class="text-slate-500 text-xs mt-1.5 leading-relaxed">Sự lựa chọn tối ưu nhất của 80% doanh nghiệp Hà Nội, phủ xanh sảng khoái kích hoạt sáng tạo.</p>
                        </div>

                        <div class="border-y border-slate-100 py-4">
                            <span class="block text-slate-400 text-[10px] font-black uppercase tracking-widest">PHÍ THUÊ TRỌN GÓI</span>
                            <div class="flex items-baseline gap-1 mt-1">
                                <span class="text-3xl sm:text-4xl font-black text-emerald-700">2.800.000</span>
                                <span class="text-sm font-bold text-slate-500">đ / tháng</span>
                            </div>
                        </div>

                        <div class="space-y-3">
                            <span class="text-xs font-black text-slate-900 block uppercase tracking-wider">Cơ cấu cây hoành tráng & đa dạng:</span>
                            <ul class="space-y-2.5 text-xs text-slate-600 font-medium">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-circle-check text-amber-500 shrink-0 mt-0.5"></i>
                                    <span><strong>05 – 07 cây lớn tầm Đại</strong> (Bàng Singapore, Hạnh Phúc, Kim Ngân Lộc Khổng Lồ)</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-circle-check text-amber-500 shrink-0 mt-0.5"></i>
                                    <span><strong>08 – 12 cây tầm Trung phong thủy</strong> đặt góc phòng làm việc (Phát Tài Núi, Trầu Bà Cột)</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-circle-check text-amber-500 shrink-0 mt-0.5"></i>
                                    <span><strong>Tặng kèm set 12 – 15 cây Để Bàn nhỏ</strong> đặt bàn của nhân sự, máy tính lọc bức xạ</span>
                                </li>
                                <li class="flex items-start gap-2 border-t border-slate-50 pt-2 text-slate-500 font-bold text-emerald-850">
                                    <i class="fa-solid fa-check text-emerald-600 shrink-0 mt-0.5"></i>
                                    <span>Tần suất bón tỉa 1 – 2 lần/tuần bởi thợ khéo tay</span>
                                </li>
                                <li class="flex items-start gap-2 text-emerald-800 font-bold">
                                    <i class="fa-solid fa-check text-emerald-600 shrink-0 mt-0.5"></i>
                                    <span>Đổi cây luân phiên định kỳ 2 tháng để tránh nhàm chán</span>
                                </li>
                                <li class="flex items-start gap-2 text-emerald-800 font-bold">
                                    <i class="fa-solid fa-check text-emerald-600 shrink-0 mt-0.5"></i>
                                    <span>Miễn phí 100% công đo đạc phác thảo 3D phong thủy</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="pt-8">
                        <button
                            onclick="selectPackage('Gói Deluxe (Hành Tinh Xanh)', 'Yêu cầu thuê cây: Xin chào Thủ Đô, chúng tôi muốn đặt trước gói Deluxe 2.8M/tháng cho diện tích văn phòng trung bình. Cần được khảo sát 3D thực tế mặt bằng.')"
                            class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 px-4 rounded-xl text-xs sm:text-sm tracking-wide uppercase shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:scale-[1.01] cursor-pointer text-center animate-bounce animate-duration-1000"
                        >
                            Chọn Gói Deluxe Bán Chạy
                        </button>
                    </div>
                </div>

                <!-- Gói VIP -->
                <div class="bg-white text-slate-800 rounded-3xl p-8 border border-emerald-800 flex flex-col justify-between shadow-xl transition-all hover:scale-[1.02] duration-300 relative">
                    <div class="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-[10px] uppercase font-black px-3 py-1 rounded-full">
                        Văn phòng &gt; 150m²
                    </div>
                    <div class="space-y-6">
                        <div>
                            <span class="block text-slate-400 text-xs font-black uppercase tracking-wider">THIỆN VƯỢNG ĐÓN LỘC</span>
                            <h3 class="text-2xl font-extrabold text-slate-900 mt-1">Gói VIP</h3>
                            <p class="text-slate-500 text-xs mt-1.5 leading-relaxed">May đo không giới hạn cho đại văn phòng, tòa nhà, sảnh sự kiện thương mại đón tài lộc phát lộc sếp lớn.</p>
                        </div>

                        <div class="border-y border-slate-100 py-4">
                            <span class="block text-slate-400 text-[10px] font-black uppercase tracking-widest">PHÍ THUÊ TRỌN GÓI</span>
                            <div class="flex items-baseline gap-1 mt-1">
                                <span class="text-xl sm:text-2xl font-black text-emerald-700">Khảo Sát Thực Tế</span>
                            </div>
                        </div>

                        <div class="space-y-3">
                            <span class="text-xs font-black text-slate-900 block uppercase tracking-wider">Đặc quyền tối cao không giới hạn:</span>
                            <ul class="space-y-2.5 text-xs text-slate-600 font-medium">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-circle-check text-emerald-600 shrink-0 mt-0.5"></i>
                                    <span><strong>15+ chậu cây cảnh Đại cao cấp nhất</strong> (Bàng Singapore cổ thụ, Thiết Mộc Lan)</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-circle-check text-emerald-600 shrink-0 mt-0.5"></i>
                                    <span><strong>20+ chậu cây trung đẹp mắt</strong> sắp bố trí phân tầng lọc tia sóng điện từ văn phòng</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-circle-check text-emerald-600 shrink-0 mt-0.5"></i>
                                    <span><strong>30+ set chậu để bàn</strong> phong thủy may đo chuẩn cung tài lộc sếp & nhân viên</span>
                                </li>
                                <li class="flex items-start gap-2 text-emerald-850 font-bold">
                                    <i class="fa-solid fa-check text-emerald-400 shrink-0 mt-0.5"></i>
                                    <span>Khảo sát đo đạc hướng sảnh với kỹ sư cảnh quan thực chiến</span>
                                </li>
                                <li class="flex items-start gap-2 text-emerald-850 font-bold">
                                    <i class="fa-solid fa-check text-emerald-400 shrink-0 mt-0.5"></i>
                                    <span>Túc trực luân chuyển đổi loại cây cấp tốc phục vụ đón khách quý, đại hội đồng cổ đông</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="pt-8">
                        <button
                            onclick="selectPackage('Gói VIP (Thịnh Vượng Đón Lộc)', 'Chào Cây Xanh Thủ Đô, tôi cần tư vấn gói VIP thiết kế riêng cho đại văn phòng / tòa nhà tập đoàn lớn. Mong sớm có kỹ sư hẹn lịch đo đạc khảo sát phong thủy!')"
                            class="w-full bg-slate-100 hover:bg-emerald-600 text-slate-800 hover:text-white font-extrabold py-3.5 px-4 rounded-xl text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 cursor-pointer text-center"
                        >
                            Liên Hệ Khảo Sát May Đo
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION: BẢNG SO SÁNH THIỆT HƠN (TỰ MUA vs THUÊ THỦ ĐÔ) -->
    <section class="py-16 md:py-24 bg-slate-100 border-b border-slate-200">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-primary-700 text-xs font-black tracking-widest uppercase bg-emerald-105 px-3 py-1 rounded-full bg-emerald-50 inline-block">
                    SO SÁNH BÀI TOÁN KINH TẾ CHO DOANH NGHIỆP
                </span>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 tracking-tight">
                    Tự Mua Tự Chăm Sóc vs Thuê Trọn Gói Cây Xanh
                </h2>
                <p class="text-slate-500 mt-2 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                    Vì sao hơn 95% khối hành chính văn phòng chuyển hướng sang thuê trọn gói thay vì tốn ngân quỹ tự mua cây cảnh? Hãy xem so sánh thực tế tại đây.
                </p>
            </div>

            <div class="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <div class="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-150">
                    
                    <!-- TỰ MUA TRỒNG -->
                    <div class="p-8 sm:p-10 space-y-6 bg-rose-50/20">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-black">
                                ❌
                            </div>
                            <div>
                                <h3 class="text-lg font-extrabold text-slate-900 leading-tight">Doanh Nghiệp Tự Mua & Chăm</h3>
                                <p class="text-xs text-rose-600 mt-0.5">Tốn kém ban đầu, rủi ro cây héo úa chết cao</p>
                            </div>
                        </div>

                        <ul class="space-y-4 text-xs text-slate-600 font-medium">
                            <li class="flex items-start gap-3">
                                <span class="text-rose-500 shrink-0 text-sm mt-0.5 font-bold">●</span>
                                <p><strong>Chi phí ban đầu cực lớn:</strong> Phải tự chi trả 100% tiền mua cây, mua chậu sứ đắt đỏ, đĩa đệm trữ nước tốn ngân doanh nghiệp cực lớn ngay từ đầu.</p>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-rose-500 shrink-0 text-sm mt-0.5 font-bold">●</span>
                                <p><strong>Rủi ro héo úa, chết cây cao:</strong> Cây văn phòng chăm sóc thiếu chuyên môn nước sẽ chết thối rễ, héo úa liên tục trong điều hòa khiến sếp phàn nàn, lại mất công mua thay thế.</p>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-rose-500 shrink-0 text-sm mt-0.5 font-bold">●</span>
                                <p><strong>Làm tốn thời giờ nhân sự:</strong> Hành chính, HR hay cô lao công phải sờ tay bón tưới phân rác rơi, dọn lau lá tốn lao lực, mất mỹ quan khi làm việc.</p>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-rose-500 shrink-0 text-sm mt-0.5 font-bold">●</span>
                                <p><strong>Không được thay đổi cây:</strong> Cây bày trí bày trơ trọi tủ hồ sơ quanh năm suốt tháng một kiểu buồn tẻ, bám bụi bẩn dơ sàn.</p>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-rose-500 shrink-0 text-sm mt-0.5 font-bold">●</span>
                                <p><strong>Không hóa đơn chứng từ:</strong> Mua bán vỉa hè nhỏ lẻ không thể bóc gộp chiết khấu chứng từ VAT kế toán, xuất tiền hành chính rất rủi ro.</p>
                            </li>
                        </ul>
                    </div>

                    <!-- THUÊ TRỌN GÓI -->
                    <div class="p-8 sm:p-10 space-y-6 bg-emerald-50/10 relative">
                        <div class="absolute top-4 right-4 bg-emerald-600 text-white text-[9px] font-black px-2.5 py-1 rounded shadow-md uppercase">
                            Giải Pháp Vượt Trội
                        </div>
                        
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black animate-pulse">
                                ✓
                            </div>
                            <div>
                                <h3 class="text-lg font-extrabold text-slate-900 leading-tight">Dịch Vụ Thuê Tại Thủ Đô</h3>
                                <p class="text-xs text-emerald-600 mt-0.5">Tiết kiệm 50% chi phí, chăm sóc kỹ, bảo hành 24h</p>
                            </div>
                        </div>

                        <ul class="space-y-4 text-xs text-slate-600 font-medium">
                            <li class="flex items-start gap-3">
                                <span class="text-emerald-600 shrink-0 text-sm mt-0.5 font-extrabold">✦</span>
                                <p><strong>Chi phí ban đầu là 0đ:</strong> Không mất một đồng ngân sách sắm sửa cây chậu lúc đầu. Phí dịch vụ thuê bình dân cố định hàng tháng cực kỳ thấp.</p>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-emerald-600 shrink-0 text-sm mt-0.5 font-extrabold">✦</span>
                                <p><strong>Bảo hành thay cây FREE 100%:</strong> Khi cây có dấu hiệu suy sút lá vàng héo úa, thợ kỹ thuật đánh xe chở chậu béo tốt khỏe xum xuê đổi mới ngay trong 24h miễn phí.</p>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-emerald-600 shrink-0 text-sm mt-0.5 font-extrabold">✦</span>
                                <p><strong>Giải phóng triệt để công sức:</strong> Kỹ thuật viên Thủ Đô tự động qua tưới tắm, rải sỏi dọn bụi, lau lá sạch bóng bẩy mát mẻ hàng tuần tươm tất.</p>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-emerald-600 shrink-0 text-sm mt-0.5 font-extrabold">✦</span>
                                <p><strong>Phân bổ phong thủy luôn chuyển:</strong> Đổi mẫu cây luân phiên định kỳ 2 – 3 tháng một góc để rước may mắn, vạn sự phất lên sáng lạng.</p>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-emerald-600 shrink-0 text-sm mt-0.5 font-extrabold">✦</span>
                                <p><strong>Hỗ trợ kế toán tối đa:</strong> Có đầy đủ hóa đơn tài chính VAT (GTGT) điện tử, Hợp đồng kinh tế, biên bản nghiệm thu phục vụ kế kiểm đúng luật pháp.</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 6: SỐ LIỆU NỔI BẬT -->
    <section id="stats" class="bg-emerald-800 py-16 text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
            <div class="absolute -bottom-10 right-0 w-80 h-80 rounded-full bg-white filter blur-2xl"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                
                <div class="space-y-2">
                    <div class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-300">2000+</div>
                    <p class="text-sm font-medium text-emerald-100">Cây xanh được chăm định kỳ mỗi tháng</p>
                    <p class="text-[10px] text-emerald-200">Không lo cây héo úa, tốn công</p>
                </div>

                <div class="space-y-2">
                    <div class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-300">300+</div>
                    <p class="text-sm font-medium text-emerald-100">Doanh nghiệp tin cậy ký kết hợp đồng</p>
                    <p class="text-[10px] text-emerald-200">Từ tập đoàn tới công ty công nghệ, chuỗi cafe</p>
                </div>

                <div class="space-y-2">
                    <div class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-300">6+ Năm</div>
                    <p class="text-sm font-medium text-emerald-100">Kinh nghiệm ươm chăm và phối xanh</p>
                    <p class="text-[10px] text-emerald-200">Kỹ thuật viên am hiểu từng đặc tính loài cây</p>
                </div>

                <div class="space-y-2">
                    <div class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-300">Chỉ 1.2Tr/T</div>
                    <p class="text-sm font-medium text-emerald-100">Chi phí khởi điểm gói trọn gói</p>
                    <p class="text-[10px] text-emerald-200">Gấp rưỡi giá trị thẩm mỹ, tiết kiệm 50% vốn</p>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION 4: QUY TRÌNH 6 BƯỚC -->
    <section id="process" class="py-16 md:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="text-center max-w-2xl mx-auto mb-16">
                <span class="text-primary-700 text-xs font-extrabold tracking-widest uppercase bg-emerald-50 px-3 py-1.5 rounded-full">QUY TRÌNH TINH GỌN</span>
                <h2 class="text-3xl font-extrabold text-slate-900 mt-4">Hợp Tác Dễ Dàng Trong 6 Bước</h2>
                <p class="text-slate-500 mt-2 text-sm sm:text-base">Mọi khâu chuẩn bị bải bản, chuẩn tác phong thiết kế thi công công nghiệp.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
                
                <!-- Step 1 -->
                <div class="relative bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between">
                    <div>
                        <span class="text-4xl font-black text-emerald-600/20 block">01</span>
                        <h4 class="font-bold text-slate-900 text-base mt-2">Khảo sát</h4>
                        <p class="text-xs text-slate-500 mt-1 leading-relaxed">Đến tận nơi đo đạc luồng không khí, ánh sáng căn phòng giải pháp hợp văn phòng.</p>
                    </div>
                </div>

                <!-- Step 2 -->
                <div class="relative bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between">
                    <div>
                        <span class="text-4xl font-black text-emerald-600/20 block">02</span>
                        <h4 class="font-bold text-slate-900 text-base mt-2">Tư vấn báo giá</h4>
                        <p class="text-xs text-slate-500 mt-1 leading-relaxed">Gửi danh sách báo giá tối ưu các mẫu cây tương ứng trong vòng 8 giờ.</p>
                    </div>
                </div>

                <!-- Step 3 -->
                <div class="relative bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between">
                    <div>
                        <span class="text-4xl font-black text-emerald-600/20 block">03</span>
                        <h4 class="font-bold text-slate-900 text-base mt-2">Thiết kế vị trí</h4>
                        <p class="text-xs text-slate-500 mt-1 leading-relaxed">Lên layout sơ đồ phối cảnh 2D chân thực giúp nhân sự dễ hình dung.</p>
                    </div>
                </div>

                <!-- Step 4 -->
                <div class="relative bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between">
                    <div>
                        <span class="text-4xl font-black text-emerald-600/20 block">04</span>
                        <h4 class="font-bold text-slate-900 text-base mt-2">Thi công cực gọn</h4>
                        <p class="text-xs text-slate-500 mt-1 leading-relaxed">Chuyển chậu sắp xếp đặt cây sạch sẽ, khéo léo tránh ồn ào công sở.</p>
                    </div>
                </div>

                <!-- Step 5 -->
                <div class="relative bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between">
                    <div>
                        <span class="text-4xl font-black text-emerald-600/20 block">05</span>
                        <h4 class="font-bold text-slate-900 text-base mt-2">Nghiệm thu bàn giao</h4>
                        <p class="text-xs text-slate-500 mt-1 leading-relaxed">Đôi bên nghiệm thu độ mới bóng bẩy của lá hoa cùng khế ước dịch vụ.</p>
                    </div>
                </div>

                <!-- Step 6 -->
                <div class="relative bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between">
                    <div>
                        <span class="text-4xl font-black text-emerald-600/20 block">06</span>
                        <h4 class="font-bold text-slate-900 text-base mt-2">Chăm sóc bảo dưỡng</h4>
                        <p class="text-xs text-slate-500 mt-1 leading-relaxed">Cử nhân sự định kỳ qua bón nước bón cây, tỉa sạch bóng bẩy mát mẻ đời xế.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION 5: CAM KẾT CHẤT LƯỢNG -->
    <section id="commitments" class="py-16 md:py-24 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="text-center max-w-2xl mx-auto mb-16">
                <span class="text-primary-700 text-xs font-extrabold tracking-widest uppercase bg-emerald-50 px-3 py-1.5 rounded-full">LÝ DO GỬI TRỌN NIỀM TIN</span>
                <h2 class="text-3xl font-extrabold text-slate-900 mt-4">Cam Kết Chất Lượng Vượt Trội</h2>
                <p class="text-slate-600 mt-2 text-sm sm:text-base">Mọi quyết sách của Cây Xanh Thủ Đô luôn hướng tới sự thanh thản, tiện nghi nhất cho nhân sự văn phòng.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                
                <!-- Commitment item 1 -->
                <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-emerald-50 flex gap-4">
                    <div class="w-14 h-14 bg-emerald-50 hover:bg-emerald-100 rounded-xl flex items-center justify-center text-2xl text-emerald-700 shrink-0">
                        <i class="fa-solid fa-tree"></i>
                    </div>
                    <div class="space-y-2">
                        <h4 class="font-extrabold text-lg text-slate-900">Đa dạng các chủng loài cây văn phòng</h4>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Nhà vườn rộng lớn với hơn 150 loài cây cảnh đẹp khỏe khoắn thanh thọc: Kim Tiền, Kim Ngân, Thiết Mộc Lan, Vạn Niên Thanh,... thích ứng tuyệt hảo bóng râm và điều hòa.
                        </p>
                    </div>
                </div>

                <!-- Commitment item 2 -->
                <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-emerald-50 flex gap-4">
                    <div class="w-14 h-14 bg-emerald-50 hover:bg-emerald-100 rounded-xl flex items-center justify-center text-2xl text-emerald-700 shrink-0">
                        <i class="fa-solid fa-award"></i>
                    </div>
                    <div class="space-y-2">
                        <h4 class="font-extrabold text-lg text-slate-900">Dịch vụ chu đáo, uy tín và chuẩn chỉ</h4>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Kỹ thuật viên am hiểu cây cỏ, có tinh thần trách nhiệm. Thao tác dọn lá vàng bón phân sạch sành sanh, cư xử lịch sự nhã nhặn, tôn trọng yên tĩnh phòng ban.
                        </p>
                    </div>
                </div>

                <!-- Commitment item 3 -->
                <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-emerald-50 flex gap-4">
                    <div class="w-14 h-14 bg-emerald-50 hover:bg-emerald-100 rounded-xl flex items-center justify-center text-2xl text-emerald-700 shrink-0">
                        <i class="fa-solid fa-gift"></i>
                    </div>
                    <div class="space-y-2">
                        <h4 class="font-extrabold text-lg text-slate-900">Chiết khấu ưu đãi khách hàng thân thiết</h4>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Mức giá chiết khấu mạnh 10% - 20% khi ký hợp đồng dịch vụ dài hạn. Khuyến mãi công thiết kế bài trí phong thủy cảnh quan hoàn toàn miễn phí.
                        </p>
                    </div>
                </div>

                <!-- Commitment item 4 -->
                <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-emerald-50 flex gap-4">
                    <div class="w-14 h-14 bg-emerald-50 hover:bg-emerald-100 rounded-xl flex items-center justify-center text-2xl text-emerald-700 shrink-0">
                        <i class="fa-solid fa-tags"></i>
                    </div>
                    <div class="space-y-2">
                        <h4 class="font-extrabold text-lg text-slate-900">Giá siêu hạt dẻ - chỉ từ 1.2 Triệu/Tháng</h4>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Hợp lý hóa chi phí tuyệt đỉnh cho bộ phận hành chính. Tiết kiệm nhân công tự chăm sóc dễ gây hốc héo, hạn chế lãng phí ngân sách mua mới vô tội vạ.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION 7: ĐÁNH GIÁ KHÁCH HÀNG (TESTIMONIALS) -->
    <section id="reviews" class="py-16 md:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="text-center max-w-2xl mx-auto mb-16">
                <span class="text-primary-700 text-xs font-extrabold tracking-widest uppercase bg-emerald-50 px-3 py-1.5 rounded-full">ĐÁNH GIÁ TRỰC QUAN</span>
                <h2 class="text-3xl font-extrabold text-slate-900 mt-4">Khách Hàng Nói Gì Về Chúng Tôi</h2>
                <p class="text-slate-500 mt-2 text-sm sm:text-base">Hơn 300+ đối tác tại Hà Nội đã kiểm chứng chất lượng làm việc tử tế, chỉn chu.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <!-- Review Card 1 -->
                <div class="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 relative">
                    <div class="text-amber-400 text-sm mb-4">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="text-slate-600 text-sm leading-relaxed italic mb-6">
                        "Dịch vụ cực kỳ chuyên nghiệp. Kỹ thuật viên rất đúng giờ và lịch sự, chăm sóc cây định kỳ tỉ khéo nhã nhặn. Nhờ đó văn phòng luôn mát mẻ căng tràn sức sáng tạo làm việc hăng hái."
                    </p>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">P</div>
                        <div>
                            <span class="block font-bold text-slate-900 text-sm">Chị Phương</span>
                            <span class="text-[10px] text-slate-400">Hành chính Nhân sự – G-Group Hà Nội</span>
                        </div>
                    </div>
                </div>

                <!-- Review Card 2 -->
                <div class="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 relative">
                    <div class="text-amber-400 text-sm mb-4">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="text-slate-600 text-sm leading-relaxed italic mb-6">
                        "Cây Xanh Thủ Đô có đội ngũ năng động, giao hàng setup chậu mài bóng vô cùng nhanh gọn lẹ. Thuê cây của các bạn vừa an tâm lọc bớt khí bí vừa giải phóng gánh nặng quản lý cho ban quản lý."
                    </p>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">H</div>
                        <div>
                            <span class="block font-bold text-slate-900 text-sm">Chị Hương</span>
                            <span class="text-[10px] text-slate-400">Trưởng phòng tổ chức – Giao Hàng Tiết Kiệm</span>
                        </div>
                    </div>
                </div>

                <!-- Review Card 3 -->
                <div class="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 relative">
                    <div class="text-amber-400 text-sm mb-4">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="text-slate-600 text-sm leading-relaxed italic mb-6">
                        "Mẫu cây lộng lẫy và phong phú cực kỳ. Điểm tôi ưng ý nhất là cứ chậu nào lá hơi vàng héo rủ, bên Thủ Đô đều đổi chậu mới toanh ngay tắp lự miễn phí hoàn toàn không phát sinh thêm một đồng chi phí."
                    </p>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">L</div>
                        <div>
                            <span class="block font-bold text-slate-900 text-sm">Chị Linh</span>
                            <span class="text-[10px] text-slate-400">Giám đốc Vận hành – Starbucks Hà Nội</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION: FAQ & CHỮ KÝ CAM KẾT VÀNG -->
    <section id="faq-section" class="py-16 md:py-24 bg-white border-y border-slate-150">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
            
                <!-- Left Column: Signed Guarantee Badge -->
                <div class="lg:col-span-5 space-y-6">
                    <div class="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-300 rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
                        <!-- Decorative retro gold stamp element -->
                        <div class="absolute top-4 right-4 w-12 h-12 rounded-full border-4 border-dashed border-amber-500 flex items-center justify-center text-[9px] font-black text-amber-600 opacity-35 select-none uppercase tracking-tighter transform rotate-12">
                            Cam Kết Vàng
                        </div>

                        <div class="space-y-4">
                            <span class="inline-block bg-amber-500 text-slate-900 font-extrabold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-md">
                                CAM KẾT ĐỒNG HÀNH KHÔNG RỦI RO
                            </span>
                            
                            <h3 class="text-xl font-bold text-amber-950 tracking-tight leading-tight">
                                Cam Kết Sắt Đá Từ Cây Xanh Thủ Đô
                            </h3>
                            
                            <blockquote class="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold italic">
                                "Chúng tôi cam kết thay mới 100% mọi cây xanh héo úa hoặc hư hỏng phiêu thăng trong vòng 24 giờ. Nếu chậm trễ, quý công ty sẽ được MIỄN PHÍ tiền thuê tuần đó. Quy trình làm việc lịch sự, trung thực, hóa đơn hành chính VAT minh bạch sòng phẳng."
                            </blockquote>

                            <div class="border-t border-amber-300/60 pt-4 flex items-center gap-3">
                                <div class="w-11 h-11 rounded-xl bg-amber-400 text-amber-950 font-black text-sm flex items-center justify-center uppercase shadow">
                                    CEO
                                </div>
                                <div>
                                    <span class="block font-black text-amber-950 text-sm">Ban Giám Đốc</span>
                                    <span class="text-[10px] text-slate-500 font-bold block uppercase tracking-wider">Cây Xanh Thủ Đô</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-emerald-990 bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg">
                        <h4 class="font-extrabold text-base text-amber-300 tracking-tight flex items-center gap-2">
                            <i class="fa-solid fa-clock text-amber-300"></i> Khảo sát phản hồi trong 8h
                        </h4>
                        <p class="text-xs text-emerald-100 leading-relaxed">
                            Quý khách chỉ cần bấm điền thông tin ngắn xuống biểu mẫu, kỹ sư nông lâm của chúng tôi sẽ liên hệ khảo sát đo đạc ánh sáng, mật độ vị trí phong thủy và gửi bảng báo giá 3D hoàn toàn không mất một xu phí nào.
                        </p>
                    </div>
                </div>

                <!-- Right Column: Interactive FAQ Accordion -->
                <div class="lg:col-span-7 space-y-4">
                    <div class="space-y-2">
                        <span class="text-emerald-700 text-xs font-black tracking-widest uppercase bg-emerald-50 px-3 py-1 rounded-full block w-fit">
                            HỎI ĐÁP DỊCH VỤ - LĂN TĂN ĐƯỢC GIẢI QUYẾT
                        </span>
                        <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                            Giải Đáp Thắc Mắc Từ Khách Hàng
                        </h3>
                    </div>

                    <!-- Accordion List -->
                    <div class="space-y-3.5 pt-4">
                        <details class="group bg-slate-50 border border-slate-150 rounded-xl p-4 transition-all duration-300 open:bg-emerald-50/20 open:border-emerald-200 select-none cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary class="flex justify-between items-center outline-none list-none font-bold">
                                <span class="font-extrabold text-slate-900 text-xs sm:text-sm text-left pr-4">
                                    1. Chi phí thuê cây trọn gói đã bao gồm những gì? Có phát sinh thêm phụ phí nào không?
                                </span>
                                <span class="text-emerald-600 font-extrabold group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p class="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed pl-4 border-l-2 border-emerald-500 font-medium text-left">
                                Cam kết tuyệt đối không phát sinh thêm chi phí ngoài giá hợp đồng. Chi phí trọn gói hàng tháng đã bao gồm: thuê cây, chậu sứ trang trí cao cấp, đĩa đệm giữ nước sạch sàn, phân bón, công vận chuyển sắp đặt ban đầu, nhân viên qua chăm sóc định kỳ hàng tuần và đổi cây mới miễn phí khi cây suy giảm sinh lực.
                            </p>
                        </details>

                        <details class="group bg-slate-50 border border-slate-150 rounded-xl p-4 transition-all duration-300 open:bg-emerald-50/20 open:border-emerald-200 select-none cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary class="flex justify-between items-center outline-none list-none font-bold">
                                <span class="font-extrabold text-slate-900 text-xs sm:text-sm text-left pr-4">
                                    2. Nếu trong quá trình thuê cây bị héo, úa hoặc lá rụng nhiều thì xử lý làm sao? Có tính tiền đổi cây không?
                                </span>
                                <span class="text-emerald-600 font-extrabold group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p class="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed pl-4 border-l-2 border-emerald-500 font-medium text-left">
                                Đây chính là giá trị cốt lõi của Cây Xanh Thủ Đô! Kỹ thuật viên qua chăm sóc định kỳ nếu phát hiện cây yếu, héo hoặc rụng lá sẽ tự động đổi mới 100% bằng chậu cây cùng loại khỏe mạnh căng tràn sức sống. Khách hàng cũng có thể gửi ảnh chụp yêu cầu qua Zalo/Hotline, chúng tôi sẽ cho kỹ sư qua thay thế miễn phí trong vòng 24 giờ mà không thu thêm bất cứ đồng xu cước phí đổi cây nào.
                            </p>
                        </details>

                        <details class="group bg-slate-50 border border-slate-150 rounded-xl p-4 transition-all duration-300 open:bg-emerald-50/20 open:border-emerald-200 select-none cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary class="flex justify-between items-center outline-none list-none font-bold">
                                <span class="font-extrabold text-slate-900 text-xs sm:text-sm text-left pr-4">
                                    3. Công ty có hỗ trợ xuất hóa đơn tài chính VAT không? Quy trình thanh toán hợp đồng thế nào?
                                </span>
                                <span class="text-emerald-600 font-extrabold group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p class="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed pl-4 border-l-2 border-emerald-500 font-medium text-left">
                                Chúng tôi là doanh nghiệp có pháp nhân đầy đủ: Công ty TNHH Sản Xuất Và Kinh Doanh Cây Xanh Thủ Đô. Cam kết hỗ trợ xuất hóa đơn điện tử GTGT (VAT) đúng chủng loại dịch vụ hàng tháng/quý để làm việc nhanh chóng với các phòng ban Hành chính Nhân sự và Kế toán kế toán. Quy trình thanh toán linh hoạt trả sau hàng tháng hoặc hàng quý tiện lợi.
                            </p>
                        </details>

                        <details class="group bg-slate-50 border border-slate-150 rounded-xl p-4 transition-all duration-300 open:bg-emerald-50/20 open:border-emerald-200 select-none cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary class="flex justify-between items-center outline-none list-none font-bold">
                                <span class="font-extrabold text-slate-900 text-xs sm:text-sm text-left pr-4">
                                    4. Thời gian tối thiểu để đăng ký hợp đồng thuê cây cảnh là bao lâu?
                                </span>
                                <span class="text-emerald-600 font-extrabold group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p class="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed pl-4 border-l-2 border-emerald-500 font-medium text-left">
                                Hợp đồng dịch vụ tối thiểu chuẩn là từ 6 tháng đến 1 năm trở lên để đảm bảo tính ổn định tối ưu chi phí thiết kế vận chuyển ban đầu. Tuy nhiên nếu quý doanh nghiệp có nhu cầu thuê cây ngắn hạn tổ chức sự kiện, hội chợ, khai trương, đón tiếp thanh tra đoàn khách, xin hãy kết nối qua hotline để nhận báo giá ưu đãi may đo cấp tốc.
                            </p>
                        </details>

                        <details class="group bg-slate-50 border border-slate-150 rounded-xl p-4 transition-all duration-300 open:bg-emerald-50/20 open:border-emerald-200 select-none cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary class="flex justify-between items-center outline-none list-none font-bold">
                                <span class="font-extrabold text-slate-900 text-xs sm:text-sm text-left pr-4">
                                    5. Cây xanh đặt trong văn phòng có bị phun các chất bảo quản độc hại gây dị ứng cho nhân viên không?
                                </span>
                                <span class="text-emerald-600 font-extrabold group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p class="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed pl-4 border-l-2 border-emerald-500 font-medium text-left">
                                Tuyệt đối không! Cây xanh văn phòng của Thủ Đô được tuyển chọn nuôi trồng hữu cơ lành tính. Chúng tôi sử dụng chất dinh dưỡng chiết xuất sinh học hữu cơ lành mạnh, tuyệt đối không dùng hóa chất bảo vệ thực vật nồng nặc độc hại trong văn phòng. Quy trình chăm bón dưỡng lá không mùi khép kín, đảm bảo môi trường làm việc tinh khiết nhất cho mẹ bầu và sếp sòng.
                            </p>
                        </details>
                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- SECTION 8: FORM ĐĂNG KÝ TƯ VẤN & BÁO GIÁ PHỤ (CHÍNH CHO CONVERSION) -->
    <section id="contact" class="py-16 md:py-24 bg-gradient-to-br from-primary-900 to-emerald-950 text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-10 right-1/4 w-96 h-96 rounded-full bg-white filter blur-3xl"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Left Details & Conversion Arguments -->
                <div class="lg:col-span-5 space-y-6">
                    <span class="text-amber-400 text-xs font-bold tracking-wider uppercase">TẠI SAO TRĂM PHẦN TIN TƯỞNG CÂY XANH THỦ ĐÔ?</span>
                    <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight">Cắt Giảm Đến 50% Chi Phí Tự Chăm Sóc Cây Cảnh</h2>
                    
                    <div class="space-y-4 pt-2">
                        <div class="flex items-start gap-3">
                            <div class="w-6 h-6 rounded-full bg-emerald-600/50 flex items-center justify-center shrink-0 mt-0.5">
                                <i class="fa-solid fa-shipping-fast text-xs text-emerald-300"></i>
                            </div>
                            <p class="text-sm text-emerald-100"><strong>Miễn phí vận chuyển & setup:</strong> Không thu thêm bất kỳ một đồng lẻ chi phí di chuyển khi ký kết hợp đồng.</p>
                        </div>

                        <div class="flex items-start gap-3">
                            <div class="w-6 h-6 rounded-full bg-emerald-600/50 flex items-center justify-center shrink-0 mt-0.5">
                                <i class="fa-solid fa-building text-xs text-emerald-300"></i>
                            </div>
                            <p class="text-sm text-emerald-100"><strong>300+ Doanh nghiệp hài lòng:</strong> Phục vụ mảng xanh văn phòng bền bỉ cho các thương hiệu hàng đầu.</p>
                        </div>

                        <div class="flex items-start gap-3">
                            <div class="w-6 h-6 rounded-full bg-emerald-600/50 flex items-center justify-center shrink-0 mt-0.5">
                                <i class="fa-solid fa-briefcase text-xs text-emerald-300"></i>
                            </div>
                            <p class="text-sm text-emerald-100"><strong>6+ Năm uy tín lành nghề:</strong> Cơ sở vườn rộng tại Phụng Công, Hưng Yên sẵn sàng cung ứng nhanh số lượng chậu lớn.</p>
                        </div>
                    </div>

                    <div class="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
                        <span class="block text-xs text-emerald-300 font-semibold uppercase">HOTLINE KHẨN CẤP NHẬN PHẢN HỒI NHANH</span>
                        <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <a href="tel:${BUSINESS_INFO.hotline1}" class="text-lg font-bold text-white hover:text-amber-300 transition flex items-center gap-1.5">
                                <i class="fa-solid fa-phone"></i> ${BUSINESS_INFO.hotline1Formatted}
                            </a>
                            <a href="tel:${BUSINESS_INFO.hotline2}" class="text-lg font-bold text-white hover:text-amber-300 transition flex items-center gap-1.5">
                                <i class="fa-solid fa-phone"></i> ${BUSINESS_INFO.hotline2Formatted}
                            </a>
                        </div>
                        <span class="block text-[11px] text-emerald-200/70 italic">* Cam kết phản hồi tư vấn nhanh chóng trong vòng 8 giờ làm việc.</span>
                    </div>
                </div>

                <!-- Right Side Custom Form Column -->
                <div class="lg:col-span-7">
                    <div class="bg-white text-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
                        <div class="mb-6">
                            <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900">LIÊN HỆ TƯ VẤN TRỰC TIẾP KHẢO SÁT</h3>
                            <p class="text-xs text-slate-500 mt-1">Vui lòng điền thông tin để kỹ sư sắp xếp lịch hẹn đến trao đổi mẫu mã.</p>
                        </div>

                        <form id="contact-main-form" onsubmit="submitLeadForm(event, 'Form Main Bottom')">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-xs font-bold text-slate-600 uppercase mb-1">Họ tên quý khách <span class="text-rose-500">*</span></label>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <i class="fa-solid fa-user text-sm"></i>
                                        </div>
                                        <input type="text" name="name" required placeholder="Họ và tên của bạn" class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 text-sm">
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-xs font-bold text-slate-600 uppercase mb-1">Số điện thoại liên lạc <span class="text-rose-500">*</span></label>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <i class="fa-solid fa-phone text-sm"></i>
                                        </div>
                                        <input type="tel" name="phone" required placeholder="SĐT ví dụ: 0912..." class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 text-sm">
                                    </div>
                                </div>

                                <div class="md:col-span-2">
                                    <label class="block text-xs font-bold text-slate-600 uppercase mb-1">Hình thức dịch vụ mong muốn</label>
                                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        <label class="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-emerald-50 hover:border-emerald-200 transition">
                                            <input type="radio" name="service_type" value="Thuê cây xanh văn phòng" checked class="text-emerald-600 focus:ring-emerald-500">
                                            <span class="text-xs font-semibold text-slate-700">Thuê cây xanh</span>
                                        </label>
                                        <label class="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-emerald-50 hover:border-emerald-200 transition">
                                            <input type="radio" name="service_type" value="Cung cấp cây xanh" class="text-emerald-600 focus:ring-emerald-500">
                                            <span class="text-xs font-semibold text-slate-700">Mua đứt cây xanh</span>
                                        </label>
                                        <label class="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-emerald-50 hover:border-emerald-200 transition">
                                            <input type="radio" name="service_type" value="Chăm sóc cây xanh tại VP" class="text-emerald-600 focus:ring-emerald-500">
                                            <span class="text-xs font-semibold text-slate-700">Ủy thác chăm sóc</span>
                                        </label>
                                    </div>
                                </div>

                                <div class="md:col-span-2">
                                    <label class="block text-xs font-bold text-slate-600 uppercase mb-1">Tin nhắn, yêu cầu cụ thể (Không bắt buộc)</label>
                                    <textarea name="message" rows="3" placeholder="Ví dụ: Cần thuê 20 cây to nhỏ cho văn phòng 150m2 tại Cầu Giấy..." class="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 text-sm"></textarea>
                                </div>
                            </div>

                            <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-lg mt-6 focus:outline-none tracking-wider text-sm transition transition-all uppercase">
                                Gửi Yêu Cầu Tư Vấn - Miễn Phí Khảo Sát <i class="fa-solid fa-paper-plane ml-2"></i>
                            </button>

                            <!-- Alert Box on Success (JS controlled) -->
                            <div id="submit-success-alert" class="hidden mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3 text-emerald-800 text-xs">
                                <i class="fa-solid fa-circle-check text-emerald-600 text-base shrink-0 mt-0.5"></i>
                                <div>
                                    <span class="block font-bold">ĐĂNG KÝ THÀNH CÔNG!</span>
                                    <span>Thông tin của quý khách đã được lưu lại hệ thống. Đội ngũ Cây Xanh Thủ Đô sẽ liên hệ lai hỗ trợ nhanh chóng nhất trong vòng 8h làm việc. Xin cám ơn!</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION 9: FOOTER -->
    <footer class="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 pb-8 border-b border-slate-800">
                
                <!-- Left Details -->
                <div class="md:col-span-5 space-y-4">
                    <div class="flex items-center gap-2">
                        <div class="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-lg">
                            <i class="fa-solid fa-seedling"></i>
                        </div>
                        <div>
                             <span class="block font-black text-white text-base uppercase tracking-tight">Cây Xanh Thủ Đô</span>
                             <span class="block text-[10px] text-slate-500">${BUSINESS_INFO.slogan}</span>
                        </div>
                    </div>
                    <p class="text-xs text-slate-500 leading-relaxed">
                        Đơn vị dẫn đầu hoạt động thiết kế thi công, cho thuê cây xanh văn phòng thương hiệu tại địa bàn Hà Nội, Hưng Yên,... Mang lại giải pháp xanh mát giúp giảm mệt mỏi, nâng tầm khí thế doanh nghiệp.
                    </p>
                </div>

                <!-- Mid Contact info -->
                <div class="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="space-y-3">
                        <h5 class="text-white font-bold text-xs uppercase tracking-widest text-emerald-500">THÔNG TIN LIÊN HỆ</h5>
                        <ul class="space-y-2 text-xs text-slate-400">
                            <li class="flex items-start gap-2.5">
                                <i class="fa-solid fa-building text-slate-600 shrink-0 mt-0.5"></i>
                                <span><strong>Doanh nghiệp:</strong> ${BUSINESS_INFO.name}</span>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <i class="fa-solid fa-location-dot text-slate-600 shrink-0 mt-0.5"></i>
                                <span><strong>Địa chỉ:</strong> ${BUSINESS_INFO.address}</span>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <i class="fa-solid fa-envelope text-slate-600 shrink-0 mt-0.5"></i>
                                <span><strong>Email:</strong> ${BUSINESS_INFO.email}</span>
                            </li>
                        </ul>
                    </div>

                    <div class="space-y-3">
                        <h5 class="text-white font-bold text-xs uppercase tracking-widest text-emerald-500">ĐƯỜNG DÂY NÓNG</h5>
                        <ul class="space-y-2 text-xs">
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-phone text-emerald-500"></i>
                                <a href="tel:${BUSINESS_INFO.hotline1}" class="text-white font-bold hover:underline">${BUSINESS_INFO.hotline1Formatted}</a>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-phone text-emerald-500"></i>
                                <a href="tel:${BUSINESS_INFO.hotline2}" class="text-white font-bold hover:underline">${BUSINESS_INFO.hotline2Formatted}</a>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-globe text-slate-500"></i>
                                <a href="https://${BUSINESS_INFO.website}" target="_blank" class="hover:underline">${BUSINESS_INFO.website}</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <!-- Bottom Note -->
            <div class="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
                <span>© 2026 Cây Xanh Thủ Đô. Bản quyền thiết kế đã được bảo hộ. Thiết kế chuẩn Google Ads 100% conversion.</span>
                <div class="flex gap-4">
                    <a href="#services" class="hover:underline">Bảng giá</a>
                    <a href="#commitments" class="hover:underline">Cam kết chất lượng</a>
                    <a href="#contact" class="hover:underline">Báo chí & Liên hệ</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- FLOAT ACTION BUTTONS FOR MOBILE & GOOGLE ADS -->
    <div class="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        
        <!-- Call Button -->
        <a href="tel:${BUSINESS_INFO.hotline1}" class="pulse-btn w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl relative" style="--pulse-color: #16a34a;">
            <i class="fa-solid fa-phone text-xl"></i>
        </a>

        <!-- Custom Conversion/Zalo/Messenger Floating trigger -->
        <a href="https://zalo.me/${BUSINESS_INFO.hotline1}" target="_blank" class="pulse-btn w-14 h-14 bg-sky-500 text-white rounded-full flex items-center justify-center shadow-2xl relative" style="--pulse-color: #0ea5e9;">
            <span class="font-extrabold text-xs">ZALO</span>
        </a>
    </div>

    <!-- FORM SUBMISSION & GOOGLE ADS TRACKING SCRIPTS -->
    <script>
        // Interactive Hero Carousel Logic
        let currentHeroIndex = 0;
        const heroSlides = document.querySelectorAll('.hero-slide');
        const heroDots = document.querySelectorAll('.hero-dot');
        const totalSlides = heroSlides.length;

        function updateHeroSlides() {
            heroSlides.forEach((slide, idx) => {
                if (idx === currentHeroIndex) {
                    slide.classList.remove('opacity-0', 'scale-105', 'pointer-events-none');
                    slide.classList.add('opacity-100', 'scale-100');
                    slide.style.zIndex = "10";
                } else {
                    slide.classList.remove('opacity-100', 'scale-100');
                    slide.classList.add('opacity-0', 'scale-105', 'pointer-events-none');
                    slide.style.zIndex = "0";
                }
            });

            heroDots.forEach((dot, idx) => {
                if (idx === currentHeroIndex) {
                    dot.classList.remove('w-2.5', 'bg-white/50');
                    dot.classList.add('w-6', 'bg-amber-400');
                } else {
                    dot.classList.remove('w-6', 'bg-amber-400');
                    dot.classList.add('w-2.5', 'bg-white/50');
                }
            });
        }

        window.setHeroSlide = function(index) {
            currentHeroIndex = index;
            updateHeroSlides();
        }

        window.prevHeroSlide = function() {
            currentHeroIndex = (currentHeroIndex - 1 + totalSlides) % totalSlides;
            updateHeroSlides();
        }

        window.nextHeroSlide = function() {
            currentHeroIndex = (currentHeroIndex + 1) % totalSlides;
            updateHeroSlides();
        }

        // Auto play hero slides every 6s
        setInterval(() => {
            if (totalSlides > 0) {
                currentHeroIndex = (currentHeroIndex + 1) % totalSlides;
                updateHeroSlides();
            }
        }, 6000);

        // Before & After Interactive Slider Logic
        window.handleHtmlSliderInput = function(val) {
            const afterOverlay = document.getElementById('html-after-overlay');
            const sliderHandler = document.getElementById('html-slider-handler');
            if (afterOverlay) {
                afterOverlay.style.width = val + '%';
            }
            if (sliderHandler) {
                sliderHandler.style.left = val + '%';
            }
        }

        /**
         * Hàm xử lý khi khách gửi form thu thập đối tác
         * Giúp lưu thông tin, phản hồi và gửi notify về Telegram / Webhook doanh nghiệp
         */
        function submitLeadForm(e, source) {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);
            const name = formData.get('name') || '';
            const phone = formData.get('phone') || '';
            const serviceType = formData.get('service_type') || formData.get('service') || 'Thuê cây xanh văn phòng';
            const message = formData.get('message') || '';

            console.log("Submit Form thành công từ [" + source + "]:", { name, phone, serviceType, message });

            // Lưu trữ thông tin đăng ký vào danh sách của trình duyệt khách hàng
            try {
                const localLeads = JSON.parse(localStorage.getItem('captured_leads') || '[]');
                const newLead = {
                    id: Date.now().toString(),
                    name: name,
                    phone: phone,
                    service: serviceType,
                    message: message,
                    timestamp: new Date().toLocaleString('vi-VN'),
                    source: source
                };
                localLeads.unshift(newLead);
                localStorage.setItem('captured_leads', JSON.stringify(localLeads));
            } catch (err) {
                console.error("Lỗi lưu trữ cục bộ:", err);
            }

            // Gửi báo động qua Telegram Group nếu có cấu hình
            const tgToken = "${telegramToken}";
            const tgChatId = "${telegramChatId}";
            if (tgToken && tgChatId) {
                const textMsg = "🌱 **CÓ YÊU CẦU BÁO GIÁ MỚI** 🌱\n\n" +
                    "▪️ **Khách hàng:** " + name + "\n" +
                    "▪️ **Số điện thoại:** " + phone + "\n" +
                    "▪️ **Gói quan tâm:** " + serviceType + "\n" +
                    "▪️ **Nội dung yêu cầu:** " + (message || "Không có") + "\n" +
                    "▪️ **Form đăng ký:** " + source + "\n" +
                    "▪️ **Thời gian gửi:** " + new Date().toLocaleString('vi-VN');

                fetch("https://api.telegram.org/bot" + tgToken + "/sendMessage", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: tgChatId,
                        text: textMsg,
                        parse_mode: "Markdown"
                    })
                })
                .then(function(r) { return r.json(); })
                .then(function(data) {
                    if (data.ok) console.log("Gửi thông báo Telegram thành công!");
                    else console.error("Lỗi gửi thông báo Telegram:", data.description);
                })
                .catch(function(err) { console.error("Lỗi mạng Telegram:", err); });
            }

            // Đẩy lead về Webhook nếu có cấu hình (ví dụ: Google Sheets, Pancake, CRM)
            const hookUrl = "${webhookUrl}";
            if (hookUrl) {
                if (hookUrl.toLowerCase().indexOf("docs.google.com/spreadsheets") !== -1) {
                    console.warn("Lỗi bảo mật CORS khi cố gắng POST dữ liệu trực tiếp lên link Google Sheets.");
                    alert("⚠️ BÁO LỖI CẤU HÌNH WEBHOOK:\n\nBạn đang cấu hình Webhook là link Google Sheets trực tiếp (docs.google.com/spreadsheets/...). Trình duyệt sẽ bị chặn bảo mật CORS và không thể gửi trực tiếp từ máy khách!\n\n👉 CÁCH GIẢI QUYẾT:\n1. Mở phần cấu hình (⚙️) ở trang quản trị.\n2. Xem hướng dẫn kết nối Google Sheets, Copy đoạn mã Apps Script dán vào Extensions -> Apps Script của Sheet.\n3. Bấm Deploy (Triển khai) -> New deployment -> Web App, chọn Who has access: 'Anyone' (Mọi người) để lấy link dạng /exec dán vào!");
                } else {
                    fetch(hookUrl, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            id: Date.now().toString(),
                            name: name,
                            phone: phone,
                            service: serviceType,
                            message: message,
                            timestamp: new Date().toLocaleString('vi-VN'),
                            source: source
                        })
                    })
                    .then(function() { console.log("Đẩy dữ liệu lên Webhook thành công!"); })
                    .catch(function(err) { console.error("Lỗi đẩy dữ liệu Webhook:", err); });
                }
            }

            // 1. Fire Google Ads Conversion Event
            // Bạn hãy thay thế ID cụ thể ở phần AW-XXXXXXXXX/YYYYYYYYYY bên dưới để kích hoạt đo lường
            /*
            if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-XXXXXXXXX/YYYYYYYYYY', // ID sự kiện Conversion thiết lập trong Google Ads
                    'value': 1.0,
                    'currency': 'VND'
                });
                console.log("Google Ads conversion event triggered.");
            }
            */

            // 2. Chạy hiệu ứng thông báo thành công
            const successAlert = document.getElementById('submit-success-alert');
            if (successAlert) {
                // Hiện thị khối thành công của form bottom dán chung
                successAlert.classList.remove('hidden');
                // Tự động cuộn mượt xuống thông báo
                successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

            // Hiển thị alert popup báo thành công dễ nhìn trên trình duyệt
            alert("Công Ty Cây Xanh Thủ Đô đã nhận được thông tin liên hệ của quý khách (" + name + " - " + phone + "). Kỹ thuật viên sẽ gọi lại hỗ trợ ngay trong ít phút! Chúc quý khách ngày mới tốt lành!");
            
            form.reset();
        }

        /**
         * Hàm bổ trợ chọn gói nhanh từ bảng giá
         * Tác động cuộn xuống form chính và tự động chọn loại gói cùng lời nhắn mẫu
         */
        window.selectPackage = function(packageName, requestMessage) {
            // Tìm input radio tương ứng hình thức dịch vụ hoặc tự động điền lời nhắn
            const messageTextarea = document.querySelector('textarea[name="message"]');
            if (messageTextarea) {
                messageTextarea.value = requestMessage;
                // Thêm hiệu ứng focus nhẹ
                messageTextarea.focus();
            }

            // Chọn radio hình thức thuê cây
            const rentalRadio = document.querySelector('input[name="service_type"][value="Thuê cây xanh văn phòng"]');
            if (rentalRadio) {
                rentalRadio.checked = true;
            }

            // Cuộn xuống biểu mẫu liên hệ
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };
    </script>
</body>
</html>`;
}
