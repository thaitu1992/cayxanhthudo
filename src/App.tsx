import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Leaf,
  Compass,
  ShieldCheck,
  Award,
  Sparkles,
  Coins,
  Trees,
  Check,
  CheckCircle,
  Download,
  Copy,
  ExternalLink,
  ChevronRight,
  Star,
  Menu,
  X,
  FileText,
  DollarSign,
  Users,
  Briefcase,
  Flame,
  ArrowRight,
  Info,
  Eye,
  Clock
} from "lucide-react";
import {
  BUSINESS_INFO,
  SERVICES,
  CLIENT_LOGOS,
  STEPS,
  COMMITMENTS,
  STATS,
  TESTIMONIALS
} from "./data";
import { generateSingleFileHtml } from "./generateHtml";

import imgLobby from "./assets/lobby_tree_planter_1780305669999.png";
import imgLobbyGreen from "./assets/office_greenery_lobby_1780305697016.png";
import imgGardenRelax from "./assets/office_garden_relax_1780305715599.png";
import imgGoldPots from "./assets/corporate_gold_pots_1780305734535.png";
import imgDracaena from "./assets/dracaena_fragrans_office_1780306247848.png";

const IMG_FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
       <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
         <stop offset='0%' stop-color='#065f46'/>
         <stop offset='100%' stop-color='#10b981'/>
       </linearGradient></defs>
       <rect width='600' height='400' fill='url(#g)'/>
       <text x='50%' y='50%' fill='white' font-family='sans-serif' font-size='28' font-weight='700' text-anchor='middle' dominant-baseline='middle'>CÂY XANH THỦ ĐÔ</text>
     </svg>`
  );

const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const el = e.currentTarget;
  if (el.src !== IMG_FALLBACK) el.src = IMG_FALLBACK;
};

export const HERO_SLIDES = [
  {
    image: imgLobby,
    tag: "CÂY XANH THỦ ĐÔ • ƯU ĐÃI THUÊ HÈ 2026",
    title: "MANG THIÊN NHIÊN VÀO VĂN PHÒNG",
    subtitle: "Chỉ từ 1.2 Triệu/Tháng - Thiết kế 3D tối ưu nhiệt độ, gieo mầm năng lượng thịnh vượng.",
    badge: "Giảm 15% Hợp Đồng"
  },
  {
    image: imgLobbyGreen,
    tag: "BẢO HÀNH ĐỔI MỚI TOÀN DIỆN",
    title: "CHĂM SÓC ĐỊNH KỲ - ĐỔI CÂY MIỄN PHÍ",
    subtitle: "Kỹ thuật viên bón nước tỉ mẩn tỉ rải sạch bong bụi lá. Phát hiện cây úa héo rụng lả đổi mới trong 24h.",
    badge: "Thay thế FREE 24h"
  },
  {
    image: imgGardenRelax,
    tag: "ĐA DẠNG CHỦNG LOẠI CAO CẤP",
    title: "150+ MẪU CÂY PHONG THỦY ĐÓN LỘC",
    subtitle: "Kim tiền, thiết mộc lan quân vương tinh chế lọc benzene tia sóng điện từ mang phồn thỉnh mộc gia quý.",
    badge: "Khảo Sát 0Đ Tận Nơi"
  },
  {
    image: imgGoldPots,
    tag: "SANG TRỌNG • ĐỘC ĐÁO • THỊNH VƯỢNG",
    title: "HƠN 150+ MẪU CHẬU CÂY PHONG THỦY",
    subtitle: "Sử dụng chậu mạ vàng, chậu đá mài cao cấp mang lại luồng sinh khí mới cho góc làm việc sành điệu.",
    badge: "Thiết Kế Đỉnh Cao"
  }
];

export default function App() {
  // Mobile menu control
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hero carousel index
  const [activeSlide, setActiveSlide] = useState(0);

  // Before/After comparison slider position
  const [sliderPosition, setSliderPosition] = useState(50);
  const [sliderWidth, setSliderWidth] = useState(800);
  const sliderContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderContainerRef.current) return;
    const updateWidth = () => {
      if (sliderContainerRef.current) {
        setSliderWidth(sliderContainerRef.current.offsetWidth);
      }
    };
    updateWidth();
    
    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(updateWidth);
      observer.observe(sliderContainerRef.current);
      return () => observer.disconnect();
    } else {
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }
  }, []);

  // Auto-play the sliding hero banner
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  // Lead capture forms states
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [registeredLead, setRegisteredLead] = useState<{
    name: string;
    phone: string;
    service: string;
    message?: string;
  } | null>(null);

  // Calculator states
  const [largeQty, setLargeQty] = useState(5);
  const [midQty, setMidQty] = useState(8);
  const [smallQty, setSmallQty] = useState(10);
  const [calcTotal, setCalcTotal] = useState(1200000);

  // Active showcase plant for interactive widget
  const [selectedPlantTab, setSelectedPlantTab] = useState(0);

  // Chosen plan state to link package cards with the contact form
  const [selectedService, setSelectedService] = useState("Thuê cây xanh văn phòng");
  const [customMessage, setCustomMessage] = useState("");

  // Webhook & Telegram Bot integration states
  const [webhookUrl, setWebhookUrl] = useState(() => localStorage.getItem("lead_webhook_url") || "");
  const [telegramToken, setTelegramToken] = useState(() => localStorage.getItem("lead_telegram_token") || "");
  const [telegramChatId, setTelegramChatId] = useState(() => localStorage.getItem("lead_telegram_chat_id") || "");

  // Dynamic parsing of Google Sheets link to pre-configure Google Apps Script custom code
  const parsedSheetId = (() => {
    if (webhookUrl && webhookUrl.toLowerCase().includes("docs.google.com/spreadsheets")) {
      const match = webhookUrl.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
      if (match && match[1]) return match[1];
    }
    return "1AH0dbRA-2VFrghQNt4blfhwTfGfAJuUQbHrlmIluU_g";
  })();

  const parsedSheetUrl = `https://docs.google.com/spreadsheets/d/${parsedSheetId}/edit?pli=1&gid=0#gid=0`;

  // Local database lead history state
  const [capturedLeads, setCapturedLeads] = useState<any[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("captured_leads") || "[]");
    } catch {
      return [];
    }
  });

  const [showConfigModal, setShowConfigModal] = useState(false);
  const [showLeadsModal, setShowLeadsModal] = useState(false);
  const [showSheetScript, setShowSheetScript] = useState(false);

  // Copy single-file standalone HTML
  const handleCopyCode = () => {
    const code = generateSingleFileHtml(webhookUrl, telegramToken, telegramChatId);
    navigator.clipboard.writeText(code);
    alert("Đã sao chép toàn bộ mã nguồn Standalone HTML thành công vào Clipboard!");
  };

  // Download single-file standalone HTML
  const handleDownloadFile = () => {
    const code = generateSingleFileHtml(webhookUrl, telegramToken, telegramChatId);
    const blob = new Blob([code], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "index.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Form submission handler
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>, sourceName: string) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const service = (formData.get("service") || formData.get("service_type") || "Thuê cây xanh văn phòng") as string;
    const message = (formData.get("message") || "") as string;

    // Simulate event tracking
    console.log(`[Google Ads Conversion Tracker] Triggered for: ${sourceName}`);
    console.log(`Submit Data: name=${name}, phone=${phone}, service=${service}, msg=${message}`);

    const newLead = {
      id: Date.now().toString(),
      name,
      phone,
      service,
      message,
      timestamp: new Date().toLocaleString("vi-VN"),
      source: sourceName
    };

    // Save history locally to the browser
    const updatedLeads = [newLead, ...capturedLeads];
    setCapturedLeads(updatedLeads);
    localStorage.setItem("captured_leads", JSON.stringify(updatedLeads));

    // Send Telegram Notification
    if (telegramToken && telegramChatId) {
      const textMsg = `🌱 *YÊU CẦU BÁO GIÁ MỚI* 🌱\n\n` +
        `▪️ *Khách hàng:* ${name}\n` +
        `▪️ *Số điện thoại:* ${phone}\n` +
        `▪️ *Dịch vụ đăng ký:* ${service}\n` +
        `▪️ *Nội dung yêu cầu:* ${message || "Không có"}\n` +
        `▪️ *Form đăng ký:* ${sourceName}\n` +
        `▪️ *Thời gian:* ${new Date().toLocaleString("vi-VN")}`;

      fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: textMsg,
          parse_mode: "Markdown"
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
          console.log("Đã gửi tin nhắn thông báo đến Telegram thành công!");
        } else {
          console.error("Lỗi gửi Telegram:", data.description);
        }
      })
      .catch(err => {
        console.error("Lỗi mạng Telegram:", err);
      });
    }

    // Send Webhook (ví dụ: Google Sheets, Pancake, CRM)
    if (webhookUrl) {
      if (webhookUrl.toLowerCase().includes("docs.google.com/spreadsheets")) {
        console.warn("Lỗi bảo mật CORS khi cố gắng POST dữ liệu trực tiếp lên link Google Sheets. Cần dùng Apps Script Web App URL.");
        alert("⚠️ BÁO LỖI CẤU HÌNH WEBHOOK:\n\nBạn đang cài đặt ô 'Webhook URL' là link Google Sheets trực tiếp (docs.google.com/spreadsheets/...). Trình duyệt sẽ bị chặn bảo mật (CORS ID) và không thể gửi trực tiếp từ máy khách!\n\n👉 CÁCH GIẢI QUYẾT:\n1. Nhấn nút '⚙️ Cấu hình' ở góc dưới cùng (footer).\n2. Chọn 'Xem hướng dẫn & lấy mã' dưới mục kết nối Google Sheets.\n3. Tiến hành Copy Script, dán vào Apps Script của Sheets, bấm Deploy lấy 'URL ứng dụng web' (Có đuôi /exec) rồi dán vào ô Webhook.");
      } else {
        fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(newLead)
        })
        .then(() => {
          console.log("Đã đẩy dữ liệu lead lên Webhook thành công!");
        })
        .catch(err => {
          console.error("Lỗi đẩy dữ liệu lên Webhook:", err);
        });
      }
    }

    const leadInfo = { name, phone, service, message };
    setRegisteredLead(leadInfo);
    setSuccessMsg(
      `ĐĂNG KÝ THÀNH CÔNG! Chào anh/chị ${name}, Công ty Cây Xanh Thủ Đô đã ghi nhận yêu cầu tư vấn gói [${service}]. Chúng tôi sẽ liên hệ trong vòng tối đa 8 giờ để làm lịch hẹn khảo sát miễn phí.`
    );

    // Reset forms
    e.currentTarget.reset();
    
    // Auto scroll to notifications
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper when clicking a package card to scroll and preset form contents
  const handleSelectPackage = (serviceName: string, messageText: string) => {
    setSelectedService(serviceName);
    setCustomMessage(messageText);
    const formSec = document.getElementById("form-section");
    if (formSec) {
      formSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Re-estimate prices dynamically
  useEffect(() => {
    // Estimating cost: Large plant (160k), Medium (90k), Small (40k)
    const rawCost = largeQty * 160000 + midQty * 90000 + smallQty * 40000;
    // Premium discount for larger quantity
    let finalCost = rawCost;
    const totalPlants = largeQty + midQty + smallQty;
    
    if (totalPlants > 25) {
      finalCost = rawCost * 0.8; // 20% off
    } else if (totalPlants > 15) {
      finalCost = rawCost * 0.9; // 10% off
    }

    // Standard baseline minimum package price for standard service delivery is 1.2M
    if (finalCost < 1200000) {
      setCalcTotal(1200000);
    } else {
      setCalcTotal(Math.round(finalCost / 10000) * 10000); // round to 10k VND
    }
  }, [largeQty, midQty, smallQty]);

  // List of showcase office plants with descriptions & specs
  const SHOWCASE_PLANTS = [
    {
      name: "Thiết Mộc Lan (Phát Tài)",
      scientific: "Dracaena fragrans",
      benefits: "Lọc cực tốt khí benzene, toluene; Mang lại phú quý, may mắn thịnh vượng.",
      space: "Mặt tiền sảnh lớn, phòng họp VIP hoặc hành lang rộng rực ánh sáng.",
      img: imgDracaena,
      size: "Dáng trụ cột cao, 1m4 - 1m8"
    },
    {
      name: "Cây Kim Tiền",
      scientific: "Zamioculcas zamiifolia",
      benefits: "Hút sóng bức xạ điện từ, diệt vi khuẩn; Chiêu tài đắc lộc, sinh khí dồi dào.",
      space: "Bàn làm việc giám đốc, quầy lễ tân đón tiếp khách hoặc cạnh tủ tài liệu.",
      img: imgGoldPots,
      size: "Thân mọng xum xuê, cao 60cm - 1m"
    },
    {
      name: "Cây Lưỡi Hổ",
      scientific: "Sansevieria trifasciata",
      benefits: "Sản sinh lượng oxy lớn vào ban đêm; Trói giữ bình an, trừ tà khí xui xẻo.",
      space: "Khu vực sảnh tiếp đón khách hàng, sát vách kính ngăn, góc phòng ngủ/làm việc mộc mạc.",
      img: imgGardenRelax,
      size: "Lá vươn thẳng nhọn hoắt, cao 50cm - 90cm"
    },
    {
      name: "Cây Vạn Niên Thanh",
      scientific: "Dieffenbachia amoena",
      benefits: "Cân bằng độ ẩm nhanh chóng văn phòng điều hòa; Cát tường thuận lợi bền lâu.",
      space: "Những góc phòng trống khô khan, kế bên kệ tivi hoặc chân cầu thang chuyển tiếp.",
      img: imgLobbyGreen,
      size: "Bản lá to mềm mại, cao 80cm - 1m2"
    }
  ];

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      
      {/* WEBHOOK & TELEGRAM CONFIG MODAL */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 flex flex-col max-h-[90vh]">
            <div className="bg-indigo-950 text-white px-6 py-4 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <h3 className="font-bold text-base text-white">Cấu hình Đẩy Báo Giá Tự Động</h3>
              </div>
              <button
                onClick={() => setShowConfigModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5">
              <div className="bg-indigo-50 border border-indigo-100 p-3.5 rounded-xl text-xs text-indigo-900 leading-relaxed">
                <strong className="font-semibold block mb-1">💡 Các giải pháp nhận lead thời gian thực:</strong>
                Khi khách điền biểu mẫu, hệ thống sẽ tự động thực hiện gửi báo cáo trực tiếp đến kênh Telegram hoặc API Webhook của bạn.
                Khi bạn bấm <strong>Tải Xuống File HTML</strong>, cấu hình thông tin này cũng sẽ được đúc đóng gói tự động trực tiếp vô file HTML tải về!
              </div>

              {/* Telegram Form */}
              <div className="space-y-3 border-b border-slate-100 pb-5">
                <h4 className="font-bold text-sm text-slate-800 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded bg-sky-100 text-sky-700 flex items-center justify-center text-[10px] font-black">TG</span>
                  1. Gửi thông báo về Telegram Bot (Miễn Phí)
                </h4>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-600">Telegram Bot Token</label>
                  <input
                    type="text"
                    value={telegramToken}
                    onChange={(e) => {
                      setTelegramToken(e.target.value);
                      localStorage.setItem("lead_telegram_token", e.target.value);
                    }}
                    placeholder="Ví dụ: 123456789:ABCDefGhIjKlM..."
                    className="w-full text-xs border border-slate-200 rounded-lg px-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-600">Telegram Chat ID (Cá nhân hoặc Group ID)</label>
                  <input
                    type="text"
                    value={telegramChatId}
                    onChange={(e) => {
                      setTelegramChatId(e.target.value);
                      localStorage.setItem("lead_telegram_chat_id", e.target.value);
                    }}
                    placeholder="Ví dụ: -100123456789 hoặc 987654321"
                    className="w-full text-xs border border-slate-200 rounded-lg px-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white"
                  />
                  <p className="text-[10px] text-slate-400 leading-normal">
                    * Mẹo: Tạo nhóm Telegram, thêm Bot của bạn vào, gõ <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-600">/my_id</code> hoặc dùng bot <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-600">@MissRose_bot</code> để lấy Chat ID cực kỳ nhanh chóng.
                  </p>
                </div>
              </div>

              {/* Webhook Form */}
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-slate-800 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded bg-indigo-100 text-indigo-700 flex items-center justify-center text-[10px] font-black">WH</span>
                  2. Đẩy Lead về Webhook URL / Google Sheets
                </h4>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-600">Webhook URL (POST JSON)</label>
                  <input
                    type="url"
                    value={webhookUrl}
                    onChange={(e) => {
                      setWebhookUrl(e.target.value);
                      localStorage.setItem("lead_webhook_url", e.target.value);
                    }}
                    placeholder="Ví dụ: https://script.google.com/macros/s/.../exec"
                    className="w-full text-xs border border-slate-200 rounded-lg px-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white"
                  />
                  {webhookUrl && webhookUrl.toLowerCase().includes("docs.google.com/spreadsheets") && (
                    <div className="bg-amber-50 border border-amber-200 text-amber-900 text-[11px] rounded-lg p-3 leading-relaxed mt-1 shadow-sm">
                      <p className="font-extrabold flex items-center gap-1 text-xs text-amber-800">
                        ⚠️ ĐƯỜNG DẪN CHƯA CHÍNH XÁC:
                      </p>
                      <p className="mt-1">Bạn đang dán thẳng link trang tính <strong>docs.google.com/spreadsheets</strong>. Trình duyệt không thể tự gửi dữ liệu trực tiếp vào link này vì rào cản bảo mật CORS.</p>
                      <p className="mt-1.5 font-bold">👉 Cách cài đặt đúng:</p>
                      <p>Hãy xem phần <strong className="text-emerald-950 underline font-bold">"Xem hướng dẫn & lấy mã"</strong> dưới đây, thực hiện dán code Script vào Sheets và lấy link deployment dạng <strong>https://script.google.com/macros/s/.../exec</strong> dán vào đây!</p>
                    </div>
                  )}
                  <p className="text-[10px] text-slate-400 leading-normal">
                    * Nhận dữ liệu thời gian thực và tự động ghi thẳng vào Google Sheets, CRM hoặc LadiPage.
                  </p>
                </div>

                {/* Google Sheets Specific Assistant Section */}
                <div className="bg-emerald-50 border border-emerald-150 rounded-xl p-4 space-y-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-emerald-600" />
                      Kết nối nhanh Google Sheets của bạn
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowSheetScript(!showSheetScript)}
                      className="text-xs text-emerald-700 hover:text-emerald-950 underline font-semibold transition cursor-pointer"
                    >
                      {showSheetScript ? "Đóng hướng dẫn" : "Xem hướng dẫn & lấy mã"}
                    </button>
                  </div>

                  {showSheetScript && (
                    <div className="space-y-3 text-xs text-slate-700 leading-relaxed pt-2 border-t border-emerald-100">
                      <p className="font-semibold text-emerald-950">
                        Bảng tính của bạn: 
                        <a 
                          href={parsedSheetUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-indigo-600 hover:underline inline-flex items-center gap-1 ml-1 font-bold animate-pulse"
                        >
                          Mở Trang Google Sheet <ExternalLink className="w-3 h-3" />
                        </a>
                      </p>

                      <div className="space-y-1 bg-white/70 rounded-lg p-2.5 border border-emerald-100 text-[11px] space-y-1">
                        <strong className="block text-emerald-900 mb-1">🛠️ Quy trình thiết lập gồm 3 bước:</strong>
                        <p><strong>Bước 1:</strong> Mở bảng tính Google Sheets của bạn ➔ Trên Menu, chọn <strong className="text-emerald-900">Tiện ích mở rộng (Extensions)</strong> ➔ chọn <strong className="text-emerald-900">Apps Script</strong>.</p>
                        <p><strong>Bước 2:</strong> Xóa hết code mặc định trong đó và dán đoạn mã bên dưới vào. Bấm <strong>Lưu (Ctrl + S)</strong>.</p>
                        <p><strong>Bước 3:</strong> Bấm <strong className="text-indigo-700">Triển khai (Deploy)</strong> ở góc trên bên phải ➔ Chọn <strong className="text-indigo-700">Triển khai mới (New deployment)</strong> ➔ Bấm biểu tượng bánh răng chọn <strong className="text-emerald-950">Ứng dụng web (Web app)</strong>.</p>
                        <ul className="list-disc pl-4 space-y-0.5 mt-1 text-slate-600">
                          <li>Cấu hình: <em>"Ai có quyền truy cập"</em> (Who has access) chọn <strong>"Mọi người"</strong> (Anyone).</li>
                          <li>Bấm <strong>Triển khai</strong> và cho phép cấp quyền (ủy quyền tài khoản Google của bạn).</li>
                        </ul>
                        <p className="mt-1 font-semibold text-emerald-900">➔ Sao chép "Url ứng dụng web" đã cấp dán vào ô "Webhook URL" ở trên!</p>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <span className="block text-[11px] font-bold text-slate-700">📋 Đoạn mã Script tối ưu riêng bảng tính của bạn:</span>
                          <button
                            type="button"
                            onClick={() => {
                              const scriptCode = `function doPost(e) {
  try {
    var sheetId = "${parsedSheetId}";
    var sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
    
    // Nếu bảng tính rỗng, tự động tạo dòng tiêu đề trước
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["ID", "Thời Gian Đăng Ký", "Họ & Tên Khách Hàng", "Số Điện Thoại", "Gói Lựa Chọn", "Yêu Cầu / Ghi Chú", "Nguồn Form Đăng Ký"]);
    }
    
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      data.id || Date.now().toString(),
      data.timestamp || new Date().toLocaleString("vi-VN"),
      data.name || "",
      data.phone || "",
      data.service || "",
      data.message || "",
      data.source || ""
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ "status": "success", "message": "Lead inserted successfully" }))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}`;
                              navigator.clipboard.writeText(scriptCode);
                              alert("Đã copy đoạn mã Apps Script thành công! Bây giờ hãy dán nó vào Google Apps Script.");
                            }}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold px-2 py-1 rounded transition flex items-center gap-1 cursor-pointer"
                          >
                            <Copy className="w-3 h-3" /> Copy Mã Script
                          </button>
                        </div>
                        <pre className="bg-slate-900 text-slate-100 text-[10px] leading-relaxed p-3 rounded-lg overflow-x-auto max-h-[160px] font-mono border border-slate-800">
{`function doPost(e) {
  try {
    var sheetId = "${parsedSheetId}";
    var sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
    
    // Nếu bảng tính rỗng, tự động tạo dòng tiêu đề trước
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["ID", "Thời Gian Đăng Ký", "Họ & Tên Khách Hàng", "Số Điện Thoại", "Gói Lựa Chọn", "Yêu Cầu / Ghi Chú", "Nguồn Form Đăng Ký"]);
    }
    
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      data.id || Date.now().toString(),
      data.timestamp || new Date().toLocaleString("vi-VN"),
      data.name || "",
      data.phone || "",
      data.service || "",
      data.message || "",
      data.source || ""
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ "status": "success", "message": "Lead inserted successfully" }))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}`}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex justify-end gap-2 shrink-0">
              <button
                onClick={handleCopyCode}
                className="border border-indigo-200 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 font-bold px-3.5 py-2 rounded-xl text-xs transition cursor-pointer flex items-center gap-1"
                title="Sao chép toàn bộ mã nguồn của trang đích thành 1 file HTML duy nhất"
              >
                <Copy className="w-3.5 h-3.5" /> Copy Mã HTML
              </button>
              <button
                onClick={handleDownloadFile}
                className="border border-emerald-200 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 font-bold px-3.5 py-2 rounded-xl text-xs transition cursor-pointer flex items-center gap-1 whitespace-nowrap"
                title="Tải tệp tin index.html đã được đúc đóng gói cấu hình"
              >
                <Download className="w-3.5 h-3.5" /> Tải Xuống File HTML
              </button>
              <button
                onClick={() => {
                  if (telegramToken && telegramChatId) {
                    alert("Đang kiểm tra gửi tin nhắn thử nghiệm đến Telegram...");
                    fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        chat_id: telegramChatId,
                        text: "🎉 *Cây Xanh Thủ Đô Test Bot*!\nHệ thống kết nối thời gian thực thành công mượt mà!"
                      })
                    })
                    .then(res => res.json())
                    .then(data => {
                      if (data.ok) alert("KẾT NỐI TELEGRAM THÀNH CÔNG! Hãy kiểm tra điện thoại của bạn.");
                      else alert("LỖI TELEGRAM: " + data.description);
                    })
                    .catch(e => alert("Lỗi mạng Telegram: " + e.message));
                  } else {
                    alert("Hãy nhập đầy đủ thông tin Telegram Token & Chat ID để gửi test thử nghiệm!");
                  }
                }}
                className="border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 font-bold px-3.5 py-2 rounded-xl text-xs transition cursor-pointer whitespace-nowrap"
              >
                Gửi Test Telegram
              </button>
              <button
                onClick={() => {
                  alert("Đã lưu cấu hình thông báo thành công! Lúc này khi khách điền form sẽ tự động gửi thông tin về các kênh đã lưu.");
                  setShowConfigModal(false);
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-2 rounded-xl text-xs shadow-md transition cursor-pointer whitespace-nowrap"
              >
                Hoàn Tất & Lưu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LEADS PANEL MODAL */}
      {showLeadsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-100 flex flex-col max-h-[85vh]">
            <div className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                <div>
                  <h3 className="font-bold text-base text-white">Hộp Thư Yêu Cầu Báo Giá ({capturedLeads.length})</h3>
                  <p className="text-[10px] text-slate-400 font-medium">Bảo mật tuyệt đối, lưu trữ an toàn trong trình duyệt (localStorage)</p>
                </div>
              </div>
              <button
                onClick={() => setShowLeadsModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 min-h-[300px]">
              {capturedLeads.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-slate-400 space-y-2">
                  <FileText className="w-12 h-12 text-slate-300 stroke-[1.5]" />
                  <p className="text-sm font-semibold">Chưa có khách hàng đăng ký nào đăng ký báo giá</p>
                  <p className="text-xs text-slate-400">Các yêu cầu từ form sẽ xuất hiện tại đây.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <span className="text-xs text-slate-500 font-medium">Dữ liệu được lưu trữ trên trình duyệt của bạn cho tên miền thuecayxanhvanphong.online.</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          if (capturedLeads.length === 0) {
                            alert("Chưa có danh sách leads nào để xuất!");
                            return;
                          }
                          let csvContent = "\uFEFF";
                          csvContent += "ID,Họ Tên,Số Điện Thoại,Dịch Vụ,Lời Nhắn,Thời Gian,Nguồn Đăng Ký\n";
                          capturedLeads.forEach(lead => {
                            const row = [
                              lead.id,
                              `"${lead.name.replace(/"/g, '""')}"`,
                              `"${lead.phone.replace(/"/g, '""')}"`,
                              `"${lead.service.replace(/"/g, '""')}"`,
                              `"${(lead.message || "").replace(/"/g, '""')}"`,
                              `"${lead.timestamp}"`,
                              `"${lead.source}"`
                            ].join(",");
                            csvContent += row + "\n";
                          });

                          const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
                          const url = URL.createObjectURL(blob);
                          const link = document.createElement("a");
                          link.setAttribute("href", url);
                          link.setAttribute("download", `danh_sach_leads_dang_ky_${Date.now()}.csv`);
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition inline-flex items-center gap-1 shadow-sm cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" /> Xuất File Excel (CSV)
                      </button>
                      <button
                        onClick={() => {
                          if (confirm("Bạn có chắc chắn muốn xóa tất cả danh sách leads đã ghi nhận? Hành động này không thể hoàn tác!")) {
                            setCapturedLeads([]);
                            localStorage.removeItem("captured_leads");
                          }
                        }}
                        className="border border-red-200 text-red-600 hover:bg-red-50 text-xs font-bold px-3 py-1.5 rounded-lg transition cursor-pointer"
                      >
                        Xóa Tất Cả
                      </button>
                    </div>
                  </div>

                  <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs min-w-[700px]">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-100 text-slate-700">
                          <th className="p-3 font-semibold">Thời Gian</th>
                          <th className="p-3 font-semibold">Khách Hàng</th>
                          <th className="p-3 font-semibold">Số Điện Thoại</th>
                          <th className="p-3 font-semibold">Gói Đăng Ký</th>
                          <th className="p-3 font-semibold">Lời Nhắn / Yêu Cầu</th>
                          <th className="p-3 font-semibold">Form Nguồn</th>
                          <th className="p-3 text-center font-semibold">Hành Động</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                        {capturedLeads.map((lead, index) => (
                          <tr key={lead.id || index} className="hover:bg-slate-50">
                            <td className="p-3 whitespace-nowrap text-slate-400">{lead.timestamp}</td>
                            <td className="p-3 font-bold text-slate-900">{lead.name}</td>
                            <td className="p-3 whitespace-nowrap">
                              <a href={`tel:${lead.phone}`} className="text-indigo-600 hover:underline font-bold">
                                {lead.phone}
                              </a>
                            </td>
                            <td className="p-3">
                              <span className="inline-block bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded text-[10px] font-bold border border-emerald-100">
                                {lead.service}
                              </span>
                            </td>
                            <td className="p-3 max-w-xs break-words text-slate-500 italic">
                              {lead.message || "—"}
                            </td>
                            <td className="p-3">
                              <span className="text-[10px] bg-slate-100 text-slate-600 font-bold px-1.5 py-0.5 rounded">
                                {lead.source}
                              </span>
                            </td>
                            <td className="p-3 text-center">
                              <button
                                onClick={() => {
                                  const filtered = capturedLeads.filter(l => l.id !== lead.id);
                                  setCapturedLeads(filtered);
                                  localStorage.setItem("captured_leads", JSON.stringify(filtered));
                                }}
                                className="text-red-500 hover:text-red-700 text-[10px] font-bold cursor-pointer"
                              >
                                Xóa
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex justify-end shrink-0">
              <button
                onClick={() => setShowLeadsModal(false)}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-2 rounded-xl text-xs transition cursor-pointer"
              >
                Đóng Lại
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUCCESS POPUP ALERT DISPLAY */}
      {successMsg && (
        <div id="success-banner" className="bg-emerald-50 border-y border-emerald-200 py-4 px-6 relative transition">
          <div className="max-w-4xl mx-auto flex items-start gap-3 text-emerald-900">
            <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5 animate-bounce" />
            <div className="space-y-1">
              <p className="font-extrabold text-base tracking-tight text-slate-900 uppercase">Gửi Thông Tin Thành Công!</p>
              <p className="text-sm leading-relaxed">{successMsg}</p>
              <div className="pt-2 text-xs text-emerald-700 font-semibold space-y-1">
                <p>• Mã theo dõi Google Ads đã sẵn sàng kích hoạt trong tệp xuất bản của bạn.</p>
                <p>• Trình mô phỏng chuyển đổi hệ thống: <span className="underline italic">gtag('event', 'conversion', ... )</span> đã kích hoạt giả lập thành công.</p>
              </div>
            </div>
            <button 
              onClick={() => setSuccessMsg(null)} 
              className="absolute right-4 top-4 text-emerald-800 hover:text-emerald-950 p-1 rounded-full hover:bg-emerald-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* TOP DECORATIVE BANNER */}
      <div className="bg-emerald-900 text-white text-xs font-semibold py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-amber-500 text-slate-950 text-[9px] font-black px-1.5 py-0.5 rounded uppercase">Quà tặng 2026</span>
            <span className="truncate">Miễn phí 100% công khảo sát thiết kế và 3D phối cảnh cây cảnh quan văn phòng</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-emerald-300">|</span>
            <a href={`tel:${BUSINESS_INFO.hotline1}`} className="hover:text-amber-300 flex items-center gap-1 shrink-0">
              <Phone className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
              <span>Hotline 24/7: <strong className="font-extrabold">{BUSINESS_INFO.hotline1Formatted}</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-30 border-b border-emerald-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          
          {/* Logo / Brand identity */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-md text-white">
              <Leaf className="w-7 h-7" />
            </div>
            <div>
              <span className="block font-black text-lg sm:text-xl text-emerald-800 uppercase tracking-tight">Cây Xanh Thủ Đô</span>
              <span className="block text-[10px] sm:text-xs text-slate-400 font-medium tracking-wide">
                {BUSINESS_INFO.slogan}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-x-8 text-sm font-bold text-slate-600">
            <a href="#services" className="hover:text-emerald-600 transition">Dịch Vụ</a>
            <a href="#plants-showcase" className="hover:text-emerald-600 transition">Mẫu Cây Đẹp</a>
            <a href="#calculator" className="hover:text-emerald-600 transition block relative">
              Tính Chi Phí <span className="absolute -top-3.5 -right-5 bg-rose-500 text-white text-[8px] px-1 rounded-full animate-bounce">Hot</span>
            </a>
            <a href="#commitments" className="hover:text-emerald-600 transition">Cam Kết</a>
            <a href="#process" className="hover:text-emerald-600 transition">Quy Trình</a>
            <a href="#reviews" className="hover:text-emerald-600 transition">Đánh Giá</a>
          </nav>

          {/* Call to Actions headers */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.hotline1}`}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-black py-2.5 px-4 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
              id="header-cta-hotline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Gọi Báo Giá:</span> {BUSINESS_INFO.hotline1Formatted}
            </a>

            {/* Mobile menu dialog toggler */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-150 py-4 px-6 space-y-3 shadow-inner">
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-semibold text-slate-700 hover:text-emerald-600 py-1"
            >
              • Dịch Vụ Cho Thuê Cây
            </a>
            <a
              href="#plants-showcase"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-semibold text-slate-700 hover:text-emerald-600 py-1"
            >
              • Các Mẫu Cây Xanh Văn Phòng
            </a>
            <a
              href="#calculator"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-semibold text-slate-700 hover:text-emerald-600 py-1"
            >
              • Công Cụ Thiết Tính Chi Phí Thuê
            </a>
            <a
              href="#commitments"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-semibold text-slate-700 hover:text-emerald-600 py-1"
            >
              • Cam Kết Dịch Vụ
            </a>
            <a
              href="#process"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-semibold text-slate-700 hover:text-emerald-600 py-1"
            >
              • Quy Trình Hợp Tác 6 Bước
            </a>
            <a
              href="#reviews"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-semibold text-slate-700 hover:text-emerald-600 py-1"
            >
              • Nhận Xét Từ Khách Doanh Nghiệp
            </a>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#form-section"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center bg-amber-500 text-slate-950 font-bold py-2.5 rounded-lg text-xs uppercase"
              >
                Nhận Bản Dự Toán Tư Vấn Miễn Phí
              </a>
              <div className="flex gap-2">
                <a href={`tel:${BUSINESS_INFO.hotline1}`} className="flex-1 text-center bg-slate-100 text-slate-900 border font-bold py-2 rounded-lg text-xs">
                  SĐT 1: {BUSINESS_INFO.hotline1Formatted}
                </a>
                <a href={`tel:${BUSINESS_INFO.hotline2}`} className="flex-1 text-center bg-slate-100 text-slate-900 border font-bold py-2 rounded-lg text-xs">
                  SĐT 2: {BUSINESS_INFO.hotline2Formatted}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* SECTION 1: HERO / BANNER WITH DIRECT LEAD CONVERSION FORM */}
      <section className="relative bg-gradient-to-b from-emerald-50 via-white to-slate-100 pt-8 pb-16 lg:pt-12 lg:pb-20 overflow-hidden">
        {/* Decorative background patterns */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 bg-[radial-gradient(#10b981_1.2px,transparent_1.2px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute -bottom-16 left-0 w-80 h-80 rounded-full bg-emerald-100/50 filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Visual Active Hero Slider */}
            <div className="lg:col-span-7 space-y-6">
              {/* Luxury Carousel container */}
              <div className="relative overflow-hidden w-full h-[360px] sm:h-[480px] rounded-3xl shadow-xl border border-emerald-100 bg-emerald-950 group">
                {HERO_SLIDES.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                      idx === activeSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 pointer-events-none z-0"
                    }`}
                  >
                    {/* Visual filter overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/45 to-transparent z-10"></div>
                    
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading={idx === 0 ? "eager" : "lazy"}
                      onError={handleImgError}
                    />

                    {/* Badge at the top right of the active slide */}
                    <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 text-[10px] sm:text-xs font-black px-3 py-1.5 rounded-full shadow-lg z-20 uppercase tracking-widest animate-pulse">
                      {slide.badge}
                    </div>

                    {/* Active slide text overlays */}
                    <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 z-20 space-y-2 sm:space-y-3">
                      <span className="inline-block bg-emerald-600/90 backdrop-blur-sm text-white text-[9px] sm:text-[11px] font-black px-3 py-1 rounded-md uppercase tracking-wider">
                        {slide.tag}
                      </span>
                      <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
                        {slide.title}
                      </h2>
                      <p className="text-xs sm:text-sm md:text-base text-slate-200/95 leading-relaxed font-medium drop-shadow">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Navigation arrows */}
                <button
                  onClick={() => setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-emerald-600 border border-white/10 transition z-20 opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
                  title="Trước"
                >
                  <ChevronRight className="w-5 h-5 rotate-180" />
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-emerald-600 border border-white/10 transition z-20 opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
                  title="Kế Tiếp"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Pagination Dots indicator bulbs */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === activeSlide
                          ? "bg-amber-400 w-6 shadow-md"
                          : "bg-white/50 hover:bg-white"
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Slider quick benefits preview toolbar */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 sm:p-3 bg-white rounded-2xl border border-emerald-50/50 shadow-sm">
                  <span className="block font-black text-sm sm:text-base text-emerald-700">6+ Năm</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Kinh Nghiệm</span>
                </div>
                <div className="p-2 sm:p-3 bg-white rounded-2xl border border-emerald-50/50 shadow-sm">
                  <span className="block font-black text-sm sm:text-base text-emerald-700">300+</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Doanh nghiệp</span>
                </div>
                <div className="p-2 sm:p-3 bg-white rounded-2xl border border-emerald-50/50 shadow-sm">
                  <span className="block font-black text-sm sm:text-base text-emerald-700">Trọn Gói</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Bảo Hành FREE</span>
                </div>
              </div>
            </div>

            {/* Right Column: High Conversion Submission Form (Form 1) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-emerald-100 relative">
                
                {/* Hot Sale ribbon */}
                <div className="absolute -top-3.5 right-6 bg-rose-600 text-white text-[10px] font-black px-3.5 py-1.5 rounded-full shadow-lg animate-pulse uppercase tracking-widest flex items-center gap-1 z-20">
                  <Flame className="w-3.5 h-3.5 fill-white" /> Ưu Đãi Hợp Đồng 15%
                </div>

                <div className="text-center mb-5">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 uppercase tracking-tight">NHẬN BÁO GIÁ THUÊ CÂY CHI TIẾT</h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed">
                    Đội ngũ chuyên viên Công ty Cây Xanh Thủ Đô sẽ liên hệ gửi báo giá tối ưu & phác thảo thiết kế 3D hoàn toàn <strong>MIỄN PHÍ</strong>.
                  </p>
                </div>

                <form onSubmit={(e) => handleFormSubmit(e, "Form Hero Đầu Trang")} className="space-y-4">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-600 uppercase tracking-wider mb-1">
                      Họ tên quý nhân sự / đại diện <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Ví dụ: Anh Hoàng Admin / Chị Mai HR"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500 text-sm bg-slate-50 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-600 uppercase tracking-wider mb-1">
                      Số điện thoại nhận tư vấn <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Ví dụ: 0977xxxxxx hoặc 0777xxxxxx"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500 text-sm bg-slate-50 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-600 uppercase tracking-wider mb-1">
                      Dịch vụ bạn đang quan tâm
                    </label>
                    <select
                      name="service"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500 text-sm bg-white font-medium"
                    >
                      <option value="Thuê cây xanh văn phòng">Thuê cây xanh văn phòng trọn gói (Tiện lợi nhất)</option>
                      <option value="Gói Standard (Khởi Nghiệp)">Thuê gói Standard (Khởi Nghiệp) - 1.2M/tháng</option>
                      <option value="Gói Deluxe (Hành Tinh Xanh)">Thuê gói Deluxe (Hành Tinh Xanh) - 2.8M/tháng</option>
                      <option value="Gói VIP (Thịnh Vượng Đón Lộc)">Thuê gói VIP (Thịnh Vượng Đón Lộc) - Theo yêu cầu</option>
                      <option value="Cung cấp mua đứt cây">Mua cây xanh chậu cảnh (Sở hữu vĩnh viễn)</option>
                      <option value="Cải tạo, chăm sóc vườn văn phòng">Ủy thác chăm sóc cây cảnh có sẵn tại công ty</option>
                    </select>
                  </div>

                  <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-100 text-[11px] text-slate-600 leading-relaxed flex gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Cam kết liên hệ gửi phương án thiết kế và bảng chi phí dự toán tối ưu chỉ trong vòng <strong>8 giờ làm việc</strong>!
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-600/20 tracking-wider text-xs md:text-sm transition duration-300 hover:scale-[1.01] uppercase flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Gửi Thông Tin Ngay <ChevronRight className="w-4 h-4 animate-pulse" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: KHÁCH HÀNG TIÊU BIỂU BRAND LOGO DISPLAY */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] md:text-xs font-extrabold text-emerald-800 uppercase tracking-widest mb-6">
            HƠN 300+ ĐỐI TÁC DOANH NGHIỆP ĐÃ ĐỒNG HÀNH & KIỂM CHỨNG CHẤT LƯỢNG
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center opacity-85">
            {CLIENT_LOGOS.map((client, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col items-center justify-center p-3 text-center border border-emerald-50 rounded-xl hover:border-emerald-200 hover:bg-emerald-50/50 w-full transition duration-300"
              >
                <span className="text-sm md:text-base font-black text-slate-800 tracking-tight block">
                  {client.name}
                </span>
                <span className="text-[9px] text-slate-400 block mt-0.5 font-medium">
                  {client.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: INTERACTIVE BEFORE/AFTER MAKEOVER GALLERY */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-emerald-700 text-xs font-bold tracking-widest uppercase bg-emerald-50 px-3 py-1 rounded-full">
              SỰ BIẾN ĐỔI KỲ DIỆU
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Trước & Sau Khi Thiết Kế Cảnh Quan Cây Xanh
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Dịch chuyển thanh trượt để so sánh văn phòng tẻ nhạt truyền thống so với diện mạo xanh tươi sảng khoái sau khi được Thủ Đô bài trí cây xanh phong thủy.
            </p>
          </div>

          <div 
            ref={sliderContainerRef}
            className="relative w-full h-[280px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 select-none"
          >
            {/* Before (Gray Empty Office) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={imgGardenRelax}
                alt="Before Office Makeover"
                className="w-full h-full object-cover grayscale brightness-90 saturate-50"
                referrerPolicy="no-referrer"
                onError={handleImgError}
              />
              <div className="absolute top-4 left-4 bg-black/70 text-white text-[10px] uppercase font-extrabold px-3 py-1.5 rounded shadow z-20">
                Trước: Văn phòng tẻ nhạt, bí bách, đầy tia bức xạ máy tính
              </div>
            </div>

            {/* After (Green Plant Luxury Office) with dynamic width based on sliderPosition */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden z-10"
              style={{ width: `${sliderPosition}%` }}
            >
              {/* Ensure image inside doesn't move with width of container */}
              <div 
                className="absolute inset-y-0 left-0 h-full"
                style={{ width: `${sliderWidth}px` }}
              >
                <img
                  src={imgLobby}
                  alt="After Office Makeover"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={handleImgError}
                />
              </div>
              <div className="absolute top-4 right-4 bg-emerald-600 text-white text-[10px] uppercase font-bold px-3 py-1.5 rounded shadow z-25 whitespace-nowrap hidden sm:inline-block">
                Sau: Cây xanh tươi mát, đón tài lộc phong thủy, lọc không khí trong lành
              </div>
            </div>

            {/* Draggagle vertical handler line */}
            <div
              className="absolute inset-y-0 w-1 bg-amber-500 z-30 cursor-ew-resize flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-900 shadow-xl border border-white flex items-center justify-center -translate-x-3.5 select-none font-bold text-xs pointer-events-none">
                ↔
              </div>
            </div>

            {/* Invisible native range slider covering the area for simple interactive drag controls */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
              aria-label="Before-After slider handler"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: THÔNG TIN 3 DỊCH VỤ CHÍNH DẠNG CARD */}
      <section id="services" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-700 text-xs font-extrabold tracking-widest uppercase bg-emerald-100/50 px-3 py-1.5 rounded-full">
              GIẢI PHÁP TRỌN GÓI CHO DOANH NGHIỆP
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
              3 Dịch Vụ Cốt Lõi Tại Cây Xanh Thủ Đô
            </h2>
            <p className="text-slate-500 mt-3 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Giải phóng bộ phận hành chính của công ty khỏi gánh nặng tưới tiêu chăm tỉa cây cối. Chúng tôi đồng hành xuyên suốt vòng đời chậu cây đảm bảo văn phòng luôn lộng lẫy và tinh tươm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => {
              // Custom icon parser
              let IconComp = Leaf;
              if (service.iconName === "Compass") IconComp = Compass;
              if (service.iconName === "ShieldCheck") IconComp = ShieldCheck;

              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-50 hover:border-emerald-100 shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="border-t border-slate-100 pt-4 space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-4">
                    <a 
                      href="#form-section" 
                      className="w-full block text-center bg-slate-50 group-hover:bg-emerald-600 text-slate-700 hover:bg-emerald-600 hover:text-white text-xs font-bold py-3 rounded-lg transition"
                    >
                      Đăng Ký Tư Vấn Ngay
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION: BẢNG GIÁ THUÊ CÂY TRỌN GÓI THEO DIỆN TÍCH */}
      <section id="pricing-packages" className="py-16 md:py-24 bg-emerald-950 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-emerald-800/40 filter blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-emerald-700/30 filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 text-xs font-black tracking-widest uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
              BÁO GIÁ MINH BẠCH - KHÔNG PHÁT SINH PHỤ PHÍ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-tight">
              Bảng Giá Thuê Cây Cảnh Trọn Gói
            </h2>
            <p className="text-emerald-200 mt-3 text-sm sm:text-base leading-relaxed">
              Các gói giải pháp được thiết kế tối ưu hóa theo diện tích mặt bằng thực tế để giúp doanh nghiệp duyệt chi ngân sách nhanh nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Gói STANDARD */}
            <div className="bg-white text-slate-800 rounded-3xl p-8 border border-emerald-800 flex flex-col justify-between shadow-xl transition-all hover:scale-[1.02] duration-300 relative">
              <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-[10px] uppercase font-black px-3 py-1 rounded-full">
                Văn phòng &lt; 50m²
              </div>
              <div className="space-y-6">
                <div>
                  <span className="block text-slate-400 text-xs font-black uppercase tracking-wider">GÓI KHỞI NGHIỆP</span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-1">Gói Standard</h3>
                  <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">Tiết kiệm chi phí, phủ xanh góc làm việc cho các doanh nghiệp quy mô nhỏ gọn.</p>
                </div>

                <div className="border-y border-slate-100 py-4">
                  <span className="block text-slate-400 text-[10px] font-black uppercase tracking-widest">PHÍ THUÊ TRỌN GÓI</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl sm:text-4xl font-black text-emerald-700">1.200.000</span>
                    <span className="text-sm font-bold text-slate-500">đ / tháng</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-black text-slate-900 block uppercase tracking-wider">Cơ cấu cây tiêu chuẩn:</span>
                  <ul className="space-y-2.5 text-xs text-slate-600 font-medium font-sans">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 animate-pulse" />
                      <span><strong>02 – 03 cây lớn tầm Đại</strong> đặt góc phòng họp, phòng khách (Thiết Mộc Lan, Kim Ngân Cột, v.v.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 animate-pulse" />
                      <span><strong>04 – 05 cây tầm Trung</strong> đặt cạnh bàn, sảnh (Ngũ Gia Bì, Trầu Bà Cột, v.v.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 animate-pulse" />
                      <span><strong>05 – 08 cây Để Bàn nhỏ</strong> (Kim Tiền, Lưỡi Hổ Thái, Lan Ý, v.v.)</span>
                    </li>
                    <li className="flex items-start gap-2 border-t border-slate-55 pt-2 text-slate-500">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Chăm sóc, tưới phân định kỳ 1 lần/tuần</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-500">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Đổi cây héo/suy yếu miễn phí trong 24h</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleSelectPackage("Gói Standard (Khởi Nghiệp)", "Chào Cây Xanh Thủ Đô, công ty tôi cần thuê cây theo cấu hình gói Standard 1.2M/tháng cho mặt bằng nhỏ. Hãy xin lịch hẹn khảo sát miễn phí!")}
                  className="w-full bg-slate-100 hover:bg-emerald-600 text-slate-800 hover:text-white font-extrabold py-3.5 px-4 rounded-xl text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 cursor-pointer text-center"
                >
                  Chọn Gói Standard
                </button>
              </div>
            </div>

            {/* Gói DELUXE */}
            <div className="bg-white text-slate-800 rounded-3xl p-8 border-2 border-amber-400 flex flex-col justify-between shadow-2xl transition-all hover:scale-[1.02] duration-300 relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-[10px] font-black px-4 py-1.5 rounded-full shadow z-20 uppercase tracking-widest flex items-center gap-1 animate-pulse">
                <Flame className="w-3.5 h-3.5 text-slate-950 fill-slate-950" /> ĐƯỢC CHỌN NHIỀU NHẤT
              </div>
              <div className="absolute top-5 right-5 bg-amber-100 text-amber-900 text-[10px] uppercase font-black px-3 py-1 rounded-full">
                Văn phòng 50m² – 150m²
              </div>
              
              <div className="space-y-6 pt-2">
                <div>
                  <span className="block text-slate-400 text-xs font-black uppercase tracking-wider">GÓI HÀNH TINH XANH</span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-1">Gói Deluxe</h3>
                  <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">Sự lựa chọn tối ưu nhất của 80% doanh nghiệp Hà Nội, phủ xanh sảng khoái kích hoạt sáng tạo.</p>
                </div>

                <div className="border-y border-slate-100 py-4">
                  <span className="block text-slate-400 text-[10px] font-black uppercase tracking-widest">PHÍ THUÊ TRỌN GÓI</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl sm:text-4xl font-black text-emerald-700">2.800.000</span>
                    <span className="text-sm font-bold text-slate-500">đ / tháng</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-black text-slate-900 block uppercase tracking-wider">Cơ cấu cây hoành tráng & đa dạng:</span>
                  <ul className="space-y-2.5 text-xs text-slate-600 font-medium font-sans">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span><strong>05 – 07 cây lớn tầm Đại</strong> (Bàng Singapore, Hạnh Phúc, Kim Ngân Lộc Khổng Lồ)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span><strong>08 – 12 cây tầm Trung phong thủy</strong> đặt góc phòng làm việc (Phát Tài Núi, Trầu Bà Cột)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span><strong>Tặng kèm set 12 – 15 cây Để Bàn nhỏ</strong> đặt bàn của nhân sự, máy tính lọc bức xạ</span>
                    </li>
                    <li className="flex items-start gap-2 border-t border-slate-50 pt-2 text-slate-500 font-bold text-emerald-850">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Tần suất bón tỉa 1 – 2 lần/tuần bởi thợ khéo tay</span>
                    </li>
                    <li className="flex items-start gap-2 text-emerald-800 font-bold">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Đổi cây luân phiên định kỳ 2 tháng để tránh nhàm chán</span>
                    </li>
                    <li className="flex items-start gap-2 text-emerald-800 font-bold">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Miễn phí 100% công đo đạc phác thảo 3D phong thủy</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleSelectPackage("Gói Deluxe (Hành Tinh Xanh)", "Yêu cầu thuê cây: Xin chào Thủ Đô, chúng tôi muốn đặt trước gói Deluxe 2.8M/tháng cho diện tích văn phòng trung bình. Cần được khảo sát 3D thực tế mặt bằng.")}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 px-4 rounded-xl text-xs sm:text-sm tracking-wide uppercase shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:scale-[1.01] cursor-pointer text-center animate-bounce"
                >
                  Chọn Gói Deluxe Bán Chạy
                </button>
              </div>
            </div>

            {/* Gói VIP */}
            <div className="bg-white text-slate-800 rounded-3xl p-8 border border-emerald-800 flex flex-col justify-between shadow-xl transition-all hover:scale-[1.02] duration-300 relative">
              <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-[10px] uppercase font-black px-3 py-1 rounded-full">
                Văn phòng &gt; 150m²
              </div>
              <div className="space-y-6">
                <div>
                  <span className="block text-slate-400 text-xs font-black uppercase tracking-wider">THIỆN VƯỢNG ĐÓN LỘC</span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-1">Gói VIP</h3>
                  <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">May đo không giới hạn cho đại văn phòng, tòa nhà, sảnh sự kiện thương mại đón tài lộc phát lộc sếp lớn.</p>
                </div>

                <div className="border-y border-slate-100 py-4">
                  <span className="block text-slate-400 text-[10px] font-black uppercase tracking-widest">PHÍ THUÊ TRỌN GÓI</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-xl sm:text-2xl font-black text-emerald-700">Khảo Sát Thực Tế</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-black text-slate-900 block uppercase tracking-wider">Đặc quyền tối cao không giới hạn:</span>
                  <ul className="space-y-2.5 text-xs text-slate-600 font-medium font-sans">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>15+ chậu cây cảnh Đại cao cấp nhất</strong> (Bàng Singapore cổ thụ, Thiết Mộc Lan)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>20+ chậu cây trung đẹp mắt</strong> sắp bố trí phân tầng lọc tia sóng điện từ văn phòng</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>30+ set chậu để bàn</strong> phong thủy may đo chuẩn cung tài lộc sếp & nhân viên</span>
                    </li>
                    <li className="flex items-start gap-2 text-emerald-850 font-bold">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Khảo sát đo đạc hướng sảnh với kỹ sư cảnh quan thực chiến</span>
                    </li>
                    <li className="flex items-start gap-2 text-emerald-850 font-bold">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Túc trực luân chuyển đổi loại cây cấp tốc phục vụ đón khách quý, đại hội đồng cổ đông</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleSelectPackage("Gói VIP (Thịnh Vượng Đón Lộc)", "Chào Cây Xanh Thủ Đô, tôi cần tư vấn gói VIP thiết kế riêng cho đại văn phòng / tòa nhà tập đoàn lớn. Mong sớm có kỹ sư hẹn lịch đo đạc khảo sát phong thủy!")}
                  className="w-full bg-slate-100 hover:bg-emerald-600 text-slate-800 hover:text-white font-extrabold py-3.5 px-4 rounded-xl text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 cursor-pointer text-center"
                >
                  Liên Hệ Khảo Sát May Đo
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: BẢNG SO SÁNH THIỆT HƠN (TỰ MUA vs THUÊ THỦ ĐÔ) */}
      <section className="py-16 md:py-24 bg-slate-100 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-700 text-xs font-black tracking-widest uppercase bg-emerald-100 px-3 py-1 rounded-full">
              SO SÁNH BÀI TOÁN KINH TẾ CHO DOANH NGHIỆP
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Tự Mua Tự Chăm Sóc vs Thuê Trọn Gói Cây Xanh
            </h2>
            <p className="text-slate-500 mt-2 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Vì sao hơn 95% khối hành chính văn phòng chuyển hướng sang thuê trọn gói thay vì tốn ngân quỹ tự mua cây cảnh? Hãy xem so sánh thực tế tại đây.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-150">
              
              {/* TỰ MUA TRỒNG */}
              <div className="p-8 sm:p-10 space-y-6 bg-rose-50/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-black">
                    ❌
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 leading-tight">Doanh Nghiệp Tự Mua & Chăm</h3>
                    <p className="text-xs text-rose-600 mt-0.5">Tốn kém ban đầu, rủi ro cây héo úa chết cao</p>
                  </div>
                </div>

                <ul className="space-y-4 text-xs text-slate-600 font-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 shrink-0 text-sm mt-0.5 font-bold">●</span>
                    <p><strong>Chi phí ban đầu cực lớn:</strong> Phải tự chi trả 100% tiền mua cây, mua chậu sứ đắt đỏ, đĩa đệm trữ nước tốn ngân doanh nghiệp cực lớn ngay từ đầu.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 shrink-0 text-sm mt-0.5 font-bold">●</span>
                    <p><strong>Rủi ro héo úa, chết cây cao:</strong> Cây văn phòng chăm sóc thiếu chuyên môn nước sẽ chết thối rễ, héo úa liên tục trong điều hòa khiến sếp phàn nàn, lại mất công mua thay thế.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 shrink-0 text-sm mt-0.5 font-bold">●</span>
                    <p><strong>Làm tốn thời giờ nhân sự:</strong> Hành chính, HR hay cô lao công phải sờ tay bón tưới phân rác rơi, dọn lau lá tốn lao lực, mất mỹ quan khi làm việc.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 shrink-0 text-sm mt-0.5 font-bold">●</span>
                    <p><strong>Không được thay đổi cây:</strong> Cây bày trí bày trơ trọi tủ hồ sơ quanh năm suốt tháng một kiểu buồn tẻ, bám bụi bẩn dơ sàn.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 shrink-0 text-sm mt-0.5 font-bold">●</span>
                    <p><strong>Không hóa đơn chứng từ:</strong> Mua bán vỉa hè nhỏ lẻ không thể bóc gộp chiết khấu chứng từ VAT kế toán, xuất tiền hành chính rất rủi ro.</p>
                  </li>
                </ul>
              </div>

              {/* THUÊ TRỌN GÓI */}
              <div className="p-8 sm:p-10 space-y-6 bg-emerald-50/10 relative">
                <div className="absolute top-4 right-4 bg-emerald-600 text-white text-[9px] font-black px-2.5 py-1 rounded shadow-md uppercase">
                  Giải Pháp Vượt Trội
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black animate-pulse">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 leading-tight">Dịch Vụ Thuê Tại Thủ Đô</h3>
                    <p className="text-xs text-emerald-600 mt-0.5">Tiết kiệm 50% chi phí, chăm sóc kỹ, bảo hành 24h</p>
                  </div>
                </div>

                <ul className="space-y-4 text-xs text-slate-600 font-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 shrink-0 text-sm mt-0.5 font-extrabold">✦</span>
                    <p><strong>Chi phí ban đầu là 0đ:</strong> Không mất một đồng ngân sách sắm sửa cây chậu lúc đầu. Phí dịch vụ thuê bình dân cố định hàng tháng cực kỳ thấp.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 shrink-0 text-sm mt-0.5 font-extrabold">✦</span>
                    <p><strong>Bảo hành thay cây FREE 100%:</strong> Khi cây có dấu hiệu suy sút lá vàng héo úa, thợ kỹ thuật đánh xe chở chậu béo tốt khỏe xum xuê đổi mới ngay trong 24h miễn phí.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 shrink-0 text-sm mt-0.5 font-extrabold">✦</span>
                    <p><strong>Giải phóng triệt để công sức:</strong> Kỹ thuật viên Thủ Đô tự động qua tưới tắm, rải sỏi dọn bụi, lau lá sạch bóng bẩy mát mẻ hàng tuần tươm tất.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 shrink-0 text-sm mt-0.5 font-extrabold">✦</span>
                    <p><strong>Phân bổ phong thủy luôn chuyển:</strong> Đổi mẫu cây luân phiên định kỳ 2 – 3 tháng một góc để rước may mắn, vạn sự phất lên sáng lạng.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 shrink-0 text-sm mt-0.5 font-extrabold">✦</span>
                    <p><strong>Hỗ trợ kế toán tối đa:</strong> Có đầy đủ hóa đơn tài chính VAT (GTGT) điện tử, Hợp đồng kinh tế, biên bản nghiệm thu phục vụ kế kiểm đúng luật pháp.</p>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL INTERACTIVE WIDGET: POPULAR PLANETS SHOWCASE WITH DESCRIPTION TAB */}
      <section id="plants-showcase" className="py-16 md:py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-emerald-700 text-xs font-extrabold tracking-widest uppercase bg-emerald-100/50 px-3 py-1.5 rounded-full">
              SHOWROOM NHÀ VƯỜN THỰC TẾ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Các Mẫu Cây Xanh Văn Phòng Được Thuê Nhiều Nhất
            </h2>
            <p className="text-slate-500 mt-2 text-xs sm:text-sm">
              Nhấp chọn để tra cứu trực quan kích thước sinh lý, chức năng lọc khí và cung lộc phong thủy tài vận.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Tabs Trigger Left Side */}
            <div className="lg:col-span-4 space-y-2">
              {SHOWCASE_PLANTS.map((plant, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPlantTab(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between text-sm ${
                    selectedPlantTab === idx
                      ? "border-emerald-500 bg-emerald-50/50 text-emerald-950 font-bold"
                      : "border-slate-100 bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <div>
                    <span className="block text-xs text-slate-400 font-medium">{plant.size}</span>
                    <span className="text-sm font-bold block">{plant.name}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition ${selectedPlantTab === idx ? "text-emerald-700 scale-125" : "text-slate-300"}`} />
                </button>
              ))}
              
              <div className="p-4 bg-emerald-900 text-white rounded-xl text-xs space-y-2">
                <span className="font-bold block text-amber-300">💡 Có thể bạn chưa biết:</span>
                <p className="text-emerald-100 leading-relaxed">
                  Cây văn phòng trồng chậu sứ được bón đất mặn và tro trấu kỹ lượng tại nhà vườn, giúp giữ sức bền chống chịu tốt nhất trong điều kiện phòng kín máy lạnh điều hòa liên miên.
                </p>
              </div>
            </div>

            {/* Preview Right Column */}
            <div className="lg:col-span-8 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-150">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                <div className="md:col-span-5">
                  <img
                    src={SHOWCASE_PLANTS[selectedPlantTab].img}
                    alt={SHOWCASE_PLANTS[selectedPlantTab].name}
                    className="w-full h-64 object-cover rounded-xl shadow-md border border-slate-200"
                    referrerPolicy="no-referrer"
                    onError={handleImgError}
                  />
                </div>

                <div className="md:col-span-7 space-y-4">
                  <div>
                    <span className="text-emerald-600 text-xs font-semibold uppercase italic tracking-wide">
                      {SHOWCASE_PLANTS[selectedPlantTab].scientific}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-0.5">
                      {SHOWCASE_PLANTS[selectedPlantTab].name}
                    </h3>
                  </div>

                  <div className="space-y-3.5 text-xs sm:text-sm">
                    <div className="space-y-0.5">
                      <span className="text-slate-400 font-bold block text-[10px] uppercase">Lợi ích lọc không khí & phong thủy:</span>
                      <p className="text-slate-700 font-medium leading-relaxed">{SHOWCASE_PLANTS[selectedPlantTab].benefits}</p>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-slate-400 font-bold block text-[10px] uppercase">Vị trí bài trí khuyên dùng:</span>
                      <p className="text-slate-700 font-medium leading-relaxed">{SHOWCASE_PLANTS[selectedPlantTab].space}</p>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-slate-400 font-bold block text-[10px] uppercase">Quy cách xuất nhà vườn:</span>
                      <span className="inline-block bg-white border px-3 py-1 rounded-full text-emerald-800 font-bold text-xs">
                        {SHOWCASE_PLANTS[selectedPlantTab].size}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#form-section"
                      className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg gap-2"
                    >
                      Báo Giá Thuê Riêng Mẫu Này <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ADDITIONAL INTERACTIVE WIDGET: MONTHLY PLANT RENTAL CALCULATOR */}
      <section id="calculator" className="py-16 md:py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-emerald-700 text-xs font-extrabold tracking-widest uppercase bg-emerald-100/50 px-3 py-1.5 rounded-full">
              CÔNG CỤ THIẾT TÍNH DỰ TOÁN BÀI BẢN
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Mô Phỏng Dự Toán Ngân Sách Thuê Cây
            </h2>
            <p className="text-slate-500 mt-2 text-xs sm:text-sm">
              Kéo thanh trượt để ước lượng nhanh phí dịch vụ hàng tháng của văn phòng bạn.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Silders panel */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Sliders large plants */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-slate-800 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                      Số cây Đại phát tài lớn (trên sảnh, góc VIP):
                    </span>
                    <span className="bg-emerald-50 text-emerald-800 font-extrabold px-3 py-0.5 rounded-full">
                      {largeQty} cây
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={largeQty}
                    onChange={(e) => setLargeQty(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>0 cây</span>
                    <span>10 cây</span>
                    <span>20 cây</span>
                  </div>
                </div>

                {/* Sliders middle plants */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-slate-800 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                      Số cây Trung dáng đẹp (cạnh văn phòng, tủ hồ sơ):
                    </span>
                    <span className="bg-emerald-50 text-emerald-800 font-extrabold px-3 py-0.5 rounded-full">
                      {midQty} cây
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    value={midQty}
                    onChange={(e) => setMidQty(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>0 cây</span>
                    <span>15 cây</span>
                    <span>30 cây</span>
                  </div>
                </div>

                {/* Sliders small plants */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-slate-800 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-300"></span>
                      Số cây Để Bàn Máy Tính nhỏ (kim tiền, trầu bà):
                    </span>
                    <span className="bg-emerald-50 text-emerald-800 font-extrabold px-3 py-0.5 rounded-full">
                      {smallQty} cây
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="40"
                    value={smallQty}
                    onChange={(e) => setSmallQty(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>0 cây</span>
                    <span>20 cây</span>
                    <span>40 cây</span>
                  </div>
                </div>

              </div>

              {/* Live Cost Result Screen Column */}
              <div className="lg:col-span-5 bg-emerald-950 text-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-inner text-center lg:text-left">
                <div>
                  <span className="text-[10px] sm:text-xs font-bold text-emerald-400 uppercase tracking-widest block">
                    CHI PHÍ DỰ KIẾN TRỌN GÓI
                  </span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-black text-amber-300 mt-1">
                    {calcTotal.toLocaleString("vi-VN")} <span className="text-sm font-semibold">đ / tháng</span>
                  </span>
                </div>

                <div className="border-t border-emerald-800/80 pt-4 text-xs space-y-2 text-emerald-100 text-left">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Đã bao gồm công chăm sóc <strong>1 lần / tuần</strong>.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Đã bao gồm chi phí bảo hành thay cây héo úa.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Đã giảm trừ chiết khấu số lượng cây lớn.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#form-section"
                    onClick={() => {
                      // Optionally find any form input to inject calculated quantity info
                      const msgArea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
                      if (msgArea) {
                        msgArea.value = `Xin chào Cây Xanh Thủ Đô, cần thuê cây theo cấu hình: ${largeQty} đại, ${midQty} trung, ${smallQty} để bàn. Tư vấn phương án và chiết khấu giúp hành chính!`;
                      }
                    }}
                    className="w-full block text-center bg-amber-500 hover:bg-amber-600 text-slate-950 font-black py-3 px-4 rounded-xl text-xs sm:text-sm tracking-wide transition uppercase"
                  >
                    Ký Hợp Đồng & Nhận Khảo Sát
                  </a>
                  <span className="block text-[10px] text-emerald-400/85 text-center mt-2 font-medium">
                    * Giá trị cuối có thể thay đổi sau khi khảo sát đo lượng ánh sáng thực tế.
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: SỐ LIỆU NỔI BẬT GRIDS */}
      <section className="bg-emerald-800 py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-2 group">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-300 tracking-tight transition duration-300 group-hover:scale-105">
                  {stat.value}
                </div>
                <p className="text-sm font-extrabold text-emerald-50">
                  {stat.label}
                </p>
                <p className="text-xs text-emerald-200">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: QUY TRÌNH 6 BƯỚC THI CÔNG */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-700 text-xs font-extrabold tracking-widest uppercase bg-emerald-50 px-3 py-1.5 rounded-full">
              TIẾN ĐỘ THI CÔNG CHUYÊN NGHIỆP
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Quy Trình 6 Bước Hợp Tác Bền Bỉ
            </h2>
            <p className="text-slate-500 mt-2 text-xs sm:text-sm">
              Định hình tiến triển chuyên nghiệp, rõ ràng từng giai đoạn bảo toàn thời gian của văn phòng.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {STEPS.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between hover:border-emerald-200 hover:shadow-sm transition"
              >
                <div>
                  <span className="text-3xl font-black text-emerald-600/25 block">
                    {step.number}
                  </span>
                  <h4 className="font-bold text-slate-900 text-base mt-2 tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: CAM KẾT CHẤT LƯỢNG */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-700 text-xs font-extrabold tracking-widest uppercase bg-emerald-100/50 px-3 py-1.5 rounded-full">
              SỰ HÀI LÒNG CỦA DOANH NGHIỆP LÀ KIM CHỈ NAM
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 tracking-tight">
              4 Cam Kết Sắt Đá Từ Cây Xanh Thủ Đô
            </h2>
            <p className="text-slate-500 mt-2 text-xs sm:text-sm">
              Chúng tôi luôn bộc bạch rõ ràng quyền lợi của khách hàng để gắn bó đồng hành dài lâu thịnh vượng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMMITMENTS.map((commitment, idx) => {
              // Get icons
              let IconItem = Trees;
              if (commitment.iconName === "Award") IconItem = Award;
              if (commitment.iconName === "Sparkles") IconItem = Sparkles;
              if (commitment.iconName === "Coins") IconItem = Coins;

              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-50/60 shadow-sm flex gap-4 hover:shadow-md transition"
                >
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 shrink-0">
                    <IconItem className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-lg text-slate-900 tracking-tight">
                      {commitment.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {commitment.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 7: ĐÁNH GIÁ KHÁCH HÀNG REAL TESTIMONIALS */}
      <section id="reviews" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-700 text-xs font-extrabold tracking-widest uppercase bg-emerald-50 px-3 py-1.5 rounded-full">
              LIÊN MINH KHÁCH HÀNG TIN CẬY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Khách Hàng Chia Sẻ Trải Nghiệm Thực Tế
            </h2>
            <p className="text-slate-500 mt-2 text-xs sm:text-sm">
              Hơn 300+ doanh nghiệp đã sử dụng dịch vụ và tiếp tục ký gia hạn hàng năm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 relative hover:border-emerald-200 transition duration-300"
              >
                {/* Rating stars display */}
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
                  "{review.content}"
                </p>

                <div className="flex items-center gap-3 border-t border-slate-200/60 pt-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-sm shadow-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900 text-sm">{review.name}</span>
                    <span className="text-[10px] text-slate-400 block font-semibold">{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION: FAQ & CHỮ KÝ CAM KẾT VÀNG */}
      <section id="faq-section" className="py-16 md:py-24 bg-white border-y border-slate-150">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Signed Guarantee Badge */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-300 rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
                {/* Decorative retro gold stamp element */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full border-4 border-dashed border-amber-500 flex items-center justify-center text-[9px] font-black text-amber-600 opacity-35 select-none uppercase tracking-tighter transform rotate-12">
                  Cam Kết Vàng
                </div>

                <div className="space-y-4">
                  <span className="inline-block bg-amber-500 text-slate-900 font-extrabold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-md">
                    CAM KẾT ĐỒNG HÀNH KHÔNG RỦI RO
                  </span>
                  
                  <h3 className="text-xl font-bold text-amber-950 tracking-tight leading-tight">
                    Cam Kết Sắt Đá Từ Cây Xanh Thủ Đô
                  </h3>
                  
                  <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium italic">
                    "Chúng tôi cam kết thay mới 100% mọi cây xanh héo úa hoặc hư hỏng phiêu thăng trong vòng 24 giờ. Nếu chậm trễ, quý công ty sẽ được MIỄN PHÍ tiền thuê tuần đó. Quy trình làm việc lịch sự, trung thực, hóa đơn hành chính VAT minh bạch sòng phẳng."
                  </blockquote>

                  <div className="border-t border-amber-300/60 pt-4 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-amber-400 text-amber-950 font-black text-sm flex items-center justify-center uppercase shadow">
                      CEO
                    </div>
                    <div>
                      <span className="block font-black text-amber-950 text-sm">Ban Giám Đốc</span>
                      <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider">Cây Xanh Thủ Đô</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg">
                <h4 className="font-extrabold text-base text-amber-300 tracking-tight flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-300 animate-spin" /> Khảo sát phản hồi trong 8h
                </h4>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  Quý khách chỉ cần bấm điền thông tin ngắn xuống biểu mẫu, kỹ sư nông lâm của chúng tôi sẽ liên hệ khảo sát đo đạc ánh sáng, mật độ vị trí phong thủy và gửi bảng báo giá 3D hoàn toàn không mất một xu phí nào.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive FAQ Accordion */}
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-2">
                <span className="text-emerald-700 text-xs font-black tracking-widest uppercase bg-emerald-50 px-3 py-1 rounded-full block w-fit">
                  HỎI ĐÁP DỊCH VỤ - LĂN TĂN ĐƯỢC GIẢI QUYẾT
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Giải Đáp Thắc Mắc Từ Khách Hàng
                </h3>
              </div>

              {/* Accordion List */}
              <div className="space-y-3.5 pt-4">
                {[
                  {
                    q: "Chi phí thuê cây trọn gói đã bao gồm những gì? Có phát sinh thêm phụ phí nào không?",
                    a: "Cam kết tuyệt đối không phát sinh thêm chi phí ngoài giá hợp đồng. Chi phí trọn gói hàng tháng đã bao gồm: thuê cây, chậu sứ trang trí cao cấp, đĩa đệm giữ nước sạch sàn, phân bón, công vận chuyển sắp đặt ban đầu, nhân viên qua chăm sóc định kỳ hàng tuần và đổi cây mới miễn phí khi cây suy giảm sinh lực."
                  },
                  {
                    q: "Nếu trong quá trình thuê cây bị héo, úa hoặc lá rụng nhiều thì xử lý làm sao? Có tính tiền đổi cây không?",
                    a: "Đây chính là giá trị cốt lõi của Cây Xanh Thủ Đô! Kỹ thuật viên qua chăm sóc định kỳ nếu phát hiện cây yếu, héo hoặc rụng lá sẽ tự động đổi mới 100% bằng chậu cây cùng loại khỏe mạnh căng tràn sức sống. Khách hàng cũng có thể gửi ảnh chụp yêu cầu qua Zalo/Hotline, chúng tôi sẽ cho kỹ sư qua thay thế miễn phí trong vòng 24 giờ mà không thu thêm bất cứ đồng xu cước phí đổi cây nào."
                  },
                  {
                    q: "Công ty có hỗ trợ xuất hóa đơn tài chính VAT không? Quy trình thanh toán hợp đồng thế nào?",
                    a: "Chúng tôi là doanh nghiệp có pháp nhân đầy đủ: Công ty TNHH Sản Xuất Và Kinh Doanh Cây Xanh Thủ Đô. Cam kết hỗ trợ xuất hóa đơn điện tử GTGT (VAT) đúng chủng loại dịch vụ hàng tháng/quý để làm việc nhanh chóng với các phòng ban Hành chính Nhân sự và Kế toán kế toán. Quy trình thanh toán linh hoạt trả sau hàng tháng hoặc hàng quý tiện lợi."
                  },
                  {
                    q: "Thời gian tối thiểu để đăng ký hợp đồng thuê cây cảnh là bao lâu?",
                    a: "Hợp đồng dịch vụ tối thiểu chuẩn là từ 6 tháng đến 1 năm trở lên để đảm bảo tính ổn định tối ưu chi phí thiết kế vận chuyển ban đầu. Tuy nhiên nếu quý doanh nghiệp có nhu cầu thuê cây ngắn hạn tổ chức sự kiện, hội chợ, khai trương, đón tiếp thanh tra đoàn khách, xin hãy kết nối qua hotline để nhận báo giá ưu đãi may đo cấp tốc."
                  },
                  {
                    q: "Cây xanh đặt trong văn phòng có bị phun các chất bảo quản độc hại gây dị ứng cho nhân viên không?",
                    a: "Tuyệt đối không! Cây xanh văn phòng của Thủ Đô được tuyển chọn nuôi trồng hữu cơ lành tính. Chúng tôi sử dụng chất dinh dưỡng chiết xuất sinh học hữu cơ lành mạnh, tuyệt đối không dùng hóa chất bảo vệ thực vật nồng nặc độc hại trong văn phòng. Quy trình chăm bón dưỡng lá không mùi khép kín, đảm bảo môi trường làm việc tinh khiết nhất cho mẹ bầu và sếp sòng."
                  }
                ].map((faq, idx) => {
                  return (
                    <details 
                      key={idx} 
                      className="group bg-slate-50 border border-slate-150 rounded-xl p-4 transition-all duration-300 open:bg-emerald-50/20 open:border-emerald-200 select-none cursor-pointer [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex justify-between items-center outline-none list-none">
                        <span className="font-extrabold text-slate-900 border-none select-none text-xs sm:text-sm text-left pr-4">
                          {idx + 1}. {faq.q}
                        </span>
                        <span className="text-emerald-600 font-extrabold group-open:rotate-180 transition-transform flex-shrink-0">
                          ▼
                        </span>
                      </summary>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed pl-4 border-l-2 border-emerald-500 font-medium">
                        {faq.a}
                      </p>
                    </details>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 8: PRIMARY REGISTRATION & CONVERSION FORM */}
      <section id="form-section" className="py-16 md:py-24 bg-gradient-to-br from-emerald-900 to-emerald-950 text-white relative overflow-hidden border-t border-slate-100">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left conversion reinforcement side */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <span className="text-amber-400 text-xs font-bold tracking-widest uppercase block">
                ĐIỂM TỰA KHÔNG GIAN XANH CHO VĂN PHÒNG
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                Ủy Thác Mảng Xanh Cho Chuyên Gia Thủ Đô
              </h2>
              
              <div className="space-y-4 text-emerald-100 text-sm leading-relaxed">
                <div className="flex justify-center lg:justify-start items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-800 flex items-center justify-center text-emerald-300 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-left"><strong>Miễn phí 100%</strong> bãi đổ xe, công vận chuyển sắp đặt ban đầu trọn bộ.</p>
                </div>

                <div className="flex justify-center lg:justify-start items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-800 flex items-center justify-center text-emerald-300 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-left">Đầy đủ hợp đồng kinh tế và <strong>hóa đơn tài chính VAT</strong> minh bạch cho phòng kế toán.</p>
                </div>

                <div className="flex justify-center lg:justify-start items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-800 flex items-center justify-center text-emerald-300 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-left"><strong>Không phát sinh phụ phí:</strong> Mức giá thuê trọn gói đã gồm thuốc phun tưới nước thay chậu.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl text-left space-y-2">
                <span className="block text-xs text-emerald-300 font-bold uppercase tracking-wider">
                  CẦN KIỂM TRA MẪU CÂY NHANH CẤP TỐC?
                </span>
                <p className="text-xs text-slate-300">Gọi ngay tới các số hotline nóng kinh doanh trực chiến của Thủ Đô:</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${BUSINESS_INFO.hotline1}`} className="text-base font-black text-white hover:text-amber-300 transition flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-emerald-400" /> {BUSINESS_INFO.hotline1Formatted}
                  </a>
                  <a href={`tel:${BUSINESS_INFO.hotline2}`} className="text-base font-black text-white hover:text-amber-300 transition flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-emerald-400" /> {BUSINESS_INFO.hotline2Formatted}
                  </a>
                </div>
              </div>
            </div>

            {/* Right main custom submission form (Form 2) */}
            <div className="lg:col-span-7">
              <div className="bg-white text-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
                <div className="mb-6">
                  <span className="text-emerald-700 text-xs font-bold uppercase block tracking-wider">Phiếu Đăng Ký Tư Vấn Cây Cảnh</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    Gửi Yêu Cầu Nhận Báo Giá Trong 8h
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Hệ thống tự động kích hoạt mã conversion Google Ads khi bạn bấm nút gửi và bàn giao lịch hẹn.
                  </p>
                </div>

                <form onSubmit={(e) => handleFormSubmit(e, "Form Liên Hệ Chính")} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-extrabold text-slate-600 uppercase tracking-wider mb-1.5">
                        Tên liên hệ của quý khách <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Họ và tên của bạn"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500 text-sm bg-slate-50 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-slate-600 uppercase tracking-wider mb-1.5">
                        Điện thoại (Zalo nhận ảnh cây) <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Số điện thoại nhận tư vấn"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500 text-sm bg-slate-50 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-600 uppercase tracking-wider mb-2">
                      Loại hình dịch vụ văn phòng đang nhắm tới:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <label className="relative flex items-center gap-2.5 p-3.5 bg-slate-50 hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-200 rounded-xl cursor-pointer transition">
                        <input
                          type="radio"
                          name="service_type"
                          value="Thuê cây xanh văn phòng"
                          defaultChecked
                          className="text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                        />
                        <span className="text-xs font-bold text-slate-700">Thuê cây xanh</span>
                      </label>

                      <label className="relative flex items-center gap-2.5 p-3.5 bg-slate-50 hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-200 rounded-xl cursor-pointer transition">
                        <input
                          type="radio"
                          name="service_type"
                          value="Cung cấp mua đứt cây"
                          className="text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                        />
                        <span className="text-xs font-bold text-slate-700">Mua cây đứt</span>
                      </label>

                      <label className="relative flex items-center gap-2.5 p-3.5 bg-slate-50 hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-200 rounded-xl cursor-pointer transition">
                        <input
                          type="radio"
                          name="service_type"
                          value="Chăm sóc bảo dưởng và vệ sinh vườn"
                          className="text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                        />
                        <span className="text-xs font-bold text-slate-700">Chăm sóc hộ</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-600 uppercase tracking-wider mb-1.5">
                      Tin nhắn ngắn / Lưu ý cụ thể hoặc kích thước phòng
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      placeholder="Ví dụ: Cần thiết kế bồn cây hoa cho sảnh họp, cần thuê 15 chậu thiết mộc lan..."
                      className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500 text-sm bg-slate-50 font-medium"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-4 px-6 rounded-xl shadow-lg shadow-emerald-600/25 tracking-wide text-xs sm:text-sm uppercase transition"
                  >
                    Gửi Yêu Cầu - Miễn Phí Khảo Sát Thiết Kế
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9: FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 pb-8 border-b border-slate-800">
            
            {/* Brand column */}
            <div className="md:col-span-5 space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-md">
                  <Leaf className="w-6 h-6 animate-pulse" />
                </div>
                <div className="text-left">
                  <span className="block font-black text-white text-base uppercase tracking-tight">Cây Xanh Thủ Đô</span>
                  <span className="block text-[10px] text-slate-500 font-medium">{BUSINESS_INFO.slogan}</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto md:mx-0">
                Nhà cung cấp, ươm phôi và tạo mẫu cây trang trí văn phòng hàng đầu thị trường miền Bắc. Cam kết uy tín cao, hợp tác rõ ràng, tối ưu chi phí cực đỉnh cho phòng ban hành chính quản trị.
              </p>
            </div>

            {/* Info columns */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="space-y-3.5">
                <h5 className="text-white font-bold text-xs uppercase tracking-widest text-emerald-400">
                  THÔNG TIN DOANH NGHIỆP
                </h5>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 font-medium">Doanh nghiệp:</span>
                    <span className="text-slate-300 font-bold">{BUSINESS_INFO.name}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 font-medium">Trụ sở ươm:</span>
                    <span className="text-slate-300 font-bold">{BUSINESS_INFO.address}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 font-medium font-bold">Email:</span>
                    <span className="text-slate-300">{BUSINESS_INFO.email}</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3.5">
                <h5 className="text-white font-bold text-xs uppercase tracking-widest text-emerald-400">
                  ĐƯỜNG DÂY NÓNG KINH DOANH
                </h5>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-center gap-1.5">
                    <span className="text-slate-500 font-semibold">Tư vấn 1:</span>
                    <a href={`tel:${BUSINESS_INFO.hotline1}`} className="text-white font-black hover:underline hover:text-amber-300">
                      {BUSINESS_INFO.hotline1Formatted}
                    </a>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-slate-500 font-semibold">Tư vấn 2:</span>
                    <a href={`tel:${BUSINESS_INFO.hotline2}`} className="text-white font-black hover:underline hover:text-amber-300">
                      {BUSINESS_INFO.hotline2Formatted}
                    </a>
                  </li>
                  <li className="flex items-center gap-1.5 pt-1">
                    <span className="text-slate-500 font-semibold">Website:</span>
                    <a href={`https://${BUSINESS_INFO.website}`} target="_blank" className="text-emerald-400 hover:underline">
                      {BUSINESS_INFO.website}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Bottom fine print */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 gap-4 text-center sm:text-left">
            <span>
              © 2026 Cayxanhthudo.vn. Hệ thống trang đích tối ưu hóa bám đuổi & sự kiện thẻ Google Ads 100% tỷ lệ chuyển đổi.
            </span>
            <div className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2 text-slate-500">
              <a href="#services" className="hover:underline hover:text-white">Bảng giá</a>
              <a href="#plants-showcase" className="hover:underline hover:text-white">Danh mục cây</a>
              <a href="#form-section" className="hover:underline hover:text-white">Nhận tư vấn tức thì</a>
              <span className="text-slate-700 hidden sm:inline">|</span>
              <button
                onClick={() => setShowConfigModal(true)}
                className="hover:underline hover:text-indigo-400 font-bold flex items-center gap-1 cursor-pointer"
                title="Quản lý Webhook, Google Sheets Apps Script & cấu hình nhận tin nhắn Telegram"
              >
                ⚙️ Cấu hình
              </button>
              <button
                onClick={() => setShowLeadsModal(true)}
                className="hover:underline hover:text-emerald-400 font-bold flex items-center gap-1 cursor-pointer"
                title="Xem danh sách khách hàng đã đăng ký nhận báo cáo từ trình duyệt"
              >
                📊 Hộp thư Leads ({capturedLeads.length})
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTION TELEPHONE & ZALO CALLS FOR MOBILE GOOGLE ADS */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Telephone phone link with ripple animation */}
        <a
          href={`tel:${BUSINESS_INFO.hotline1}`}
          className="relative group w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
          title="Gọi hotline tư vấn"
        >
          {/* Ringing effect overlay */}
          <span className="absolute inset-0 rounded-full bg-emerald-600/40 animate-ping pointer-events-none"></span>
          <Phone className="w-6 h-6 animate-pulse" />
        </a>

        {/* Zalo button */}
        <a
          href={`https://zalo.me/${BUSINESS_INFO.hotline1}`}
          target="_blank"
          className="relative w-14 h-14 bg-sky-500 hover:bg-sky-600 text-white rounded-full flex flex-col items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 text-[10px] font-black"
          title="Nhắn tin Zalo nhận ảnh"
        >
          <span className="absolute inset-0 rounded-full bg-sky-400/30 animate-pulse pointer-events-none"></span>
          <span>ZALO</span>
        </a>
      </div>

    </div>
  );
}
