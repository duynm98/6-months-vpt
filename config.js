// ============================================================
//  💕 ANNIVERSARY TIMELINE — CONFIGURATION FILE
//  Edit this file to personalize your anniversary gift!
// ============================================================

const CONFIG = {

  // ── COUPLE INFO ──────────────────────────────────────────
  names: {
    yours: "Duy",          // Your name
    hers:  "Thảo",           // Her name
  },

  // The big message shown on the landing screen
  heroTitle:    "7 Tháng Bên Nhau",
  heroSubtitle: "Every moment with you is a treasure I'll keep forever.",

  // Anniversary date (shown in the hero section)
  anniversaryDate: "October 25, 2025",

  heroImage: "images/cover.jpg",   // your photo in media/images/

  // Closing message at the bottom of the page
  closingMessage: "Cảm ơn em đã xuất hiện trong cuộc đời của anh 💕",


  // ── TIMELINE EVENTS ──────────────────────────────────────
  // Each event appears as a card on the timeline.
  //
  // Fields:
  //   date    – displayed date string
  //   title   – short headline
  //   caption – longer description
  //   media   – (optional) filename inside the /media folder
  //             e.g. "images/first-date.jpg"  or  "videos/trip.mp4"
  //   type    – "image" | "video" | "text"  (auto-detected if omitted)
  //   romantic – true | false  (default false)
  //             Set to true to highlight this card with a glowing border,
  //             floating petals 🌸, and a 💕 Special badge
  //
  events: [
    {
      date:    "October 25, 2025",
      title:   "Day One 💖",
      caption: "Em mặc cái váy như công chúa trong truyện bước ra lun 👸🏻.\n\nBan đầu định ra Hồ Tây anh mí tỏ tình mà tặng hoa xong cái hồi hộp quá nói lun =))\n\nNgày đầu bọn mình iu nhau 🩷",
      images: ["images/6287438269007992222.jpg"],
      type:    "image",
      romantic: true,   // 💕 set to true to highlight with romantic effects
    },
    {
      date:    "October 30, 2025",
      title:   "First Coffee Date ☕",
      caption: "Lần đầu đi cà phê cùng nhau với tư cách là người eo ☕. Trời mưa và lạnh cũng k thể cản nổi 2 đứa này!!",
      media:   ["images/6287438269007992223.jpg"],
      type:    "image",
    },
    {
      date:    "November 11, 2025",
      title:   "HUST Coffee Date ☕",
      caption: "Đi cafe ở gần Bách Khoa. Trận cờ vua đầu tiên và duy nhất của 2 đứa. Thảo thắng =))",
      media:   ["images/251104.jpg"],
      type:    "image",
    },
    // {
    //   date:    "November 2024",
    //   title:   "First Trip Together 🗺️",
    //   caption: "We got a little lost, argued about the map, and laughed about it for weeks. The best kind of adventure.",
    //   media:   "videos/03-trip.mp4",
    //   type:    "video",
    // },
    {
      date:    "November 15, 2025",
      title:   "Like a married couple 💑",
      caption: "Lần đầu e đến nhà a chơi và được a nấu cho ăn. Trông giống như đôi vợ chồng trẻ vậy, có điều hong bik ai ck ai vk =))",
      media:   ["images/251115.jpg"],
      type:    "image",
    },
    {
      date:    "November 16, 2025",
      title:   "Park date 🏞️",
      caption: "Nắm tay nhau đi dạo công viên Cầu Giấy. Cái ghế đá ở cái góc tối trở thành nơi yêu thích của 2 đứa 😊",
      media:   ["images/251116.jpg"],
      type:    "image",
    },
    {
      date:    "November 22, 2025",
      title:   "Công viên Thống Nhất 🏞️",
      caption: "Lần đầu tiên đi tô tượng cùng nhau (mà xấu hoắc 😂) được cái 2 cái tượng ôm nhau tình cảm như 2 đứa tô nó vậy!",
      media:   ["images/251122.jpg"],
      type:    "image",
    },
    {
      date:    "December 06, 2025",
      title:   "Đi hát cùng nhau 🎤",
      caption: "Đây là ngày cái mũ bảo hiểm chong chóng tre ra đời =)) Cũng là lần đầu tiên và duy nhất 2 đứa đi hát cùng nhau. Cũng ngày hôm nay tôi phát hiện ra là tôi yêu phải một Sky ngầm",
      media:   ["images/251206.jpg", "images/251206_2.jpg"],
      type:    "image",
    },
    {
      date:    "December 15, 2025",
      title:   "Meet làm việc cùng nhao 💻",
      caption: "Nhìn như đang gia sư một đứa cấp 2 luôn z. Google Meet trở thành một trong những địa điểm hẹn hò quen thuộc của 2 đứa =))",
      media:   ["images/251215.jpg", "images/251215_2.jpg"],
      type:    "image",
    },
    {
      date:    "December 21, 2025",
      title:   "Đi dạo hồ Gươm 🐢",
      caption: "Hôm này hình như là đi học về xong lôi nhau ra hồ Gươm đi dạo vào nói chuyện. Sau đó mình đi công viên ngồi. Hôm này là lần đầu tiên e cho a sờ 🍊 làm a vui quá cười từ lúc ở công viên đến lúc về nhà!!",
      media:   ["images/251221.jpg"],
      type:    "image",
    },
    {
      date:    "December 23, 2025",
      title:   "Đi chơi LGBT 🏳️‍🌈",
      caption: "Lần đầu tiên có chuyến đi chơi (hơi) xa cùng nhau, chắc là ngày bọn mình dành thời gian cho nhau nhiều nhất 🩷. A chọn ảnh của e ngày hôm nay để làm hình nền, không phải chỉ vì a thấy ảnh này xinh đâu, mà còn vì ngày hôm nay đối với a rất đáng nhớ vì e đã dành thời gian cả ngày cho a!",
      media:   ["images/251223.jpg", "images/251223_2.jpg", "images/251223_3.jpg", "images/251223_4.jpg", "images/251223_5.jpg"],
      type:    "image",
      romantic: true,
    },
    {
      date:    "February 01, 2026",
      title:   "Đi xem nhà cùng nhau 🏠",
      caption: "Cụ thể là đi xem nhà ở Bảo tàng Dân tộc Việt Nam. Chúng ta thực sự đã vẽ ra một gia đình từ những bức ảnh chụp chung với nhau ngày hôm nay đó!",
      media:   ["images/260201_2.jpg", "images/260201.jpg", "images/260201_4.jpg"],
      type:    "image",
    },
    {
      date:    "February 14, 2026",
      title:   "Cái Tết đầu tiên yêu nhau 🌸",
      caption: "Đây là hôm đầu tiên xa nhau sau khi có 2 đêm ngủ với nhau thật là mặn nồng. Nhớ cái lúc e bước lên xe bus để về quê là đã thấy nhớ e da diết luôn!",
      media:   ["images/260214.jpg"],
      type:    "image",
    },
    {
      date:    "February 18, 2026",
      title:   "Cái Tết đầu tiên yêu nhau 🌸",
      caption: "Tết không ở cạnh nhau nhưng vẫn làm đủ trò con mèo với nhau. Đúng là mấy đứa mới iu mà =))",
      media:   ["images/260218.jpg", "images/260218_2.jpg"],
      type:    "image",
    },
    {
      date:    "February 22, 2026",
      title:   "Chúc mừng năm mới! 🎊",
      caption: "Ra Tết cái là về nhà a luôn. Người này yêu e đến mức bình thường không tự nấu cho bản thân bữa nào ra hồn nhưng đã lên mạng lên youtube học cách nấu món mới cho e. Tính đến hôm nay thì ny đã được ăn đồ tôi nấu 2 lần, tôi được ăn đồ bố ny làm 2 lần, nhưng chưa được ny nấu cho lần nào.",
      media:   ["images/260222.jpg", "images/260222_2.jpg"],
      type:    "image",
    },
    {
      date:    "February 28, 2026",
      title:   "Lại là công viên 🛝",
      caption: "Khác gì 2 đứa con nít đâu =))",
      media:   ["images/260228.jpg", "images/260228_2.jpg"],
      type:    "image",
    },
    {
      date:    "March 06, 2026",
      title:   "Happy Woman day 🌹",
      caption: "Sau bao nhiêu lần trì hoãn thì cuối cùng cũng thực hiện được kèo steak! Hôm đấy người ta đã chuẩn bị hết rồi mà cứ tưởng người ta không mua hoa xong đòi cho bằng được, làm người ta phải nói ra, -1 sự bất ngờ. Mà cứ tưởng sau hôm nay sẽ được 1 đống ảnh sống ảo nhưng tiếc là toi không biết chụp ảnh =))",
      media:   ["images/260306.jpg", "images/260306_2.jpg", "images/260306_3.jpg"],
      type:    "image",
    },
    {
      date:    "March 07, 2026",
      title:   "Công Viên thống nhất 🌳 - NY chuẩn bị đi HCM 1 tuần",
      caption: "Ngay ngày hôm sau thì 2 đứa ra công viên cùng nhau vì không ra thì a sẽ siêu nhớ vì e chuẩn bị đi HCM nguyên 1 tuần. Thật may là có mấy cái ảnh này cx đỡ nhớ hơn xíu.",
      media:   ["images/260307.jpg", "images/260307_2.jpg"],
      type:    "image",
    },
    {
      date:    "March 18, 2026",
      title:   "Workdate",
      caption: "Đi workdate có xíu mà mất cả tiếng chụp ảnh đăng story 😄. Chỗ này trở thành chỗ workdate quen thuộc của 2 đứa luôn.",
      media:   ["images/260318.jpg"],
      type:    "image",
    },
    {
      date:    "Apr 21, 2026",
      title:   "Bảo đang chia tay chắc không ai tin ❤️‍🩹",
      caption: "Dù sao thì vẫn rất thương và nhớ em. Nếu chúng ta không thể đi được với nhau đến cùng, anh cũng rất hạnh phúc vì được yêu em, vì em đã từng là một phần quan trọng trong cuộc sống của anh!",
      media:   ["images/260421.jpg"],
      type:    "image",
    },
    {
      date:    "Apr 25, 2026",
      title:   "Tròn 6 tháng 💕",
      caption: "Vậy là bây giờ chúng ta vẫn ngồi với nhau ở đây vào ngày tròn 6 tháng chúng ta yêu nhau. Lúc anh viết dòng này thì không biết sau hôm nay mọi chuyện sẽ như thế nào, chỉ mong rằng đây không phải là bức ảnh cuối cùng lưu lại những kỷ niệm của 2 đứa mình! Dù chuyện gì xảy ra, em hãy nhớ rằng đã từng có một người rất yêu em và thương em nhé!",
      media:   ["images/260425.jpg"],
      type:    "image",
      romantic: true,
    },
    {
      date:    "Apr 26, 2026",
      title:   "Tròn 6 tháng + 1 ngày 💕",
      caption: "May quá bọn mình vẫn ở đây với nhau! Thật là hạnh phúc khi được thức dậy và đánh răng rửa mặt cùng iem. Thật là muốn về chung một nhà với em quá đii!",
      media:   ["images/260426.jpg"],
      type:    "image",
    },
    {
      date:    "Apr 27, 2026",
      title:   "Hậu concert 🔥",
      caption: "Đi chơi với 33 người yêu về xong được người yêu thứ 34 ở nhà đợi rồi còn úp mỳ tôm full topping cho ăng! Công Chúa cũng chưa được đến cỡ này lun á.",
      media:   ["images/260427.jpg", "images/260427_2.jpg"],
      type:    "image",
    },
    {
      date:    "May 01, 2026",
      title:   "Ngày 1 ở Hà Tĩnh",
      caption: "Đón em về nhà chơi và chính thức ra mắt gia đình. Người này trong một hôm gặp gần hết họ hàng nội ngoại nhà anh lun 😄 thua dâu Hà Tĩnh đúng cái hộ khẩu.\n\nBà, các dì, các o các bác nhà anh ai cũng mong ngóng em hết.\n\nTối về còn suýt được mẹ cho ngủ với nhau 😄 Mẹ ơi bọn con còn trong sáng lắm chưa dám ngủ với nhau đâu!!",
      media:   ["images/260501_6.jpeg", "images/260501_5.jpeg", "images/260501_4.jpeg", "images/260501_3.jpeg", "images/260501_2.jpeg", "images/260501.jpeg"],
      type:    "image",
      romantic: true,
    },
    {
      date:    "May 02, 2026",
      title:   "Ngày 2 ở Hà Tĩnh",
      caption: "Buổi sáng thì canh mẹ dậy đi thể dục một cái là nhảy lên giường ôm người yêu lun 💕 Thành công cho em ăn thử món mà anh thích nhất.\n\nHai ngày hôm nay tuy mệt xíu nhưng anh được ở cạnh những người mà anh yêu thương nhất trên đời. Thấy em như là một phần của gia đình anh thiệt là hạnh phúc, anh chỉ muốn điều đó chính thức thành sự thật luôn.",
      media:   ["images/260502.jpeg", "images/260502_2.jpeg", "images/260502_3.jpeg", "images/260502_4.jpeg", "images/260502_5.jpeg"],
      type:    "image",
      romantic: true,
    },
    {
      date:    "May 03, 2026",
      title:   "Lên lại Hà Nội",
      caption: "Sau cả sáng nằm ôm ngủ với nhau, buổi trưa anh ăn cơm cùng gia đình em, chiều thì rủ nhau đi tập thể dục nhưng cuối cùng lại đi mall làm mấy trò con mèo 😄 Thề cute thiệt chứ. Mà sau hôm nay ngừi eo lại đi job cả tuần ròi.",
      media:   ["images/260503.jpg", "images/260503_2.jpg", "images/260503_3.jpg", "images/260503_4.jpg"],
      type:    "image",
    },
    {
      date:    "May 09, 2026",
      title:   "Được cạnh nhau 12 tiếng hôm nay 💕",
      caption: "Em đi job cả tuần nên cuối tuần chúng ta mới đi chơi với nhau. Chúng ta có một ngày workdate cùng nhau và đi hát cùng nhau. Hữu duyên thế nào mà ban đầu đã trúng được phòng theme ATVNCG rồi mà sau đó phải đổi sang phòng theme Tùng Núi 😄. Thật sự là vui vì được dành cả ngày với em 💖",
      media:   ["images/260509.jpg", "images/260509_2.jpg", "images/260509_3.jpg", "images/260509_4.jpg", "images/260509_5.jpg"],
      type:    "image",
    },
    {
      date:    "May 17, 2026",
      title:   "Cafe board game ☕ 🎲",
      caption: "Ưu điểm: Biết chơi nhiều board game.\t\nKhuyết điểm: Chơi trò gì cũng thua em Thảo (trừ mèo nổ)",
      media:   ["images/260517.jpg", "images/260517_3.jpg"],
      type:    "image",
    },
    {
      date:    "May 22, 2026",
      title:   "Đi xem Doraemon cùng nhao 🎥🍿",
      caption: "Lần thứ 2 bọn mình đi xem phim cùng nhau. Tính ra phần đáng nhớ nhất của buổi tối hôm nay là lúc 2 đứa ngồi ôm nhau trên cái ghế chờ của CGV chứ phim thì như cc.",
      media:   ["images/260522.jpg", "images/260522_2.jpg", "images/260522_3.jpg", "images/260522_4.jpg"],
      type:    "image",
    },
    {
      date:    "May 30, 2026",
      title:   "Đi Lotte Tây Hồ",
      caption: "Sáng đưa e đi phỏng vấn và đi xem những căn biệt thự mà chắc chắn mình sẽ không bao giờ mua được. Trưa thì đi workdate. Chiều thì đi Lotte Tây Hồ cùng nhau. Mall to nhưng hôm nay điện thoại hết pin nên hơi ít ảnh.",
      media:   ["images/260530.jpg", "images/260530_2.jpg"],
      type:    "image",
    },
    // {
    //   date:    "March 29, 2026",
    //   title:   "18+",
    //   caption: "Cảnh báo, ảnh này chứa nội dung 18+",
    //   media:   ["images/260329.jpg"],
    //   type:    "image",
    // }
  ],

  // ── EASTER EGG ───────────────────────────────────────────
  // A secret message revealed when she clicks the big heart in the hero.
  // Each click picks a different random message from the list.
  // Set enabled: false to hide it entirely.
  easterEgg: {
    enabled: true,
    messages: [
      {
        icon:    "💌",
        title:   "Bức tâm tình nho nhỏ",
        message: "Dear bé Thảo,\n\nCảm ơn em vì đã ở bên anh.\nAnh trân trọng từng giây từng phút được ở bên cạnh e 🌸",
      },
      {
        icon:    "🌙",
        title:   "Em biết gì không",
        message: "Anh không đòi hỏi gì nhiều, chỉ muốn em ở bên cạnh anh càng nhiều càng tốt.",
      },
      {
        icon:    "✨",
        title:   "Nhắc nhở nho nhỏ",
        message: "Anh vẫn luôn ấp ủ và lên kế hoạch cho nhiều thứ cùng em, chỉ chờ cơ hội được sử dụng nó 💕. Nên là cứ luôn chuẩn bị cho những điều bất ngờ hehe",
      },
      {
        icon:    "💌",
        title:   "Bức tâm tình nho nhỏ",
        message: "Cảm ơn em rất nhiều vì đã đến bên anh, đã cho anh khoảng thời gian hạnh phúc nhất cuộc đời.\n\nXin lỗi em vì đã có những lần em cảm thấy phiền lòng, tổn thương.",
      },
      {
        icon:    "🌸",
        title:   "Nói nghe nè",
        message: "Dù cho chuyện gì xảy ra, anh vẫn luôn biết ơn quãng thời gian ở bên em.",
      },
      {
        icon:    "🐠",
        title:   "Psst…",
        message: "Nếu không làm IT thì anh sẽ đi làm sale, vì việc anh làm giỏi nhất là Thương Thảo 💕",
      },
      {
        icon:    "🐠",
        title:   "Psst…",
        message: "Nếu mỗi lần nhớ em anh tạo ra được 1 nguyên tử vàng, thì vua Midas cũng chỉ còn là cái tên 💕",
      },
      {
        icon:    "🐠",
        title:   "Psst…",
        message: "Nếu mỗi lần nhớ em anh đốt được 1 calo thì bây giờ chắc anh đang bị còi xương",
      },
      {
        icon:    "🐠",
        title:   "Psst…",
        message: "Cứ nhìn mặt em là anh lại muốn cáu!\n\nCáu nhươi",
      },
      {
        icon:    "✨",
        title:   "Fun fact",
        message: "Em là người lấy đi rất nhiều lần đầu của anh, first love, first kiss và nhiều cái first khác nữa :3",
      },
      {
        icon:    "✨",
        title:   "Fun fact",
        message: "Hôm 3rd date của bọn mình, bạn của anh quay sang hỏi anh là 'Ny à?', lúc đấy chưa phải là ny nên anh phải lắc đầu =))",
      },
      {
        icon:    "✨",
        title:   "Fun fact",
        message: "Loại quả anh thích ăn nhất là cam 🍊, cụ thể là cam 🍊 Thảo",
      },
      {
        icon:    "✨",
        title:   "Nhắc nhở nho nhỏ",
        message: "Anh vẫn muốn một lần được ngồi cùng em dưới bầu trời đêm và ngắm sao 🌌. Anh sẽ kể cho em nghe thật nhiều câu chuyện hay ho về bầu trời!",
      },
      {
        icon:    "💌",
        title:   "Bức tâm tình",
        message: "Tuy chúng mình có cãi nhau, có giận nhau, có cả những lúc tưởng đã mất nhau\n\nnhưng đến giờ phút này chúng mình vẫn ở bên nhau\n\nỞ đây anh chỉ muốn lưu giữ những kỷ niệm đẹp. Mình hãy cùng nhau tạo ra thêm thật là nhiều nữa nhé\n\nAnh yêu em rất nhiều!",
      },
      {
        icon:    "😍",
        title:   "Em biết gì không",
        message: "Đối với anh thì em luôn là cô gái đáng yêu nhất Thế Giới 🌏. Nếu tương lai có ai đó soán ngôi này, đấy chỉ có thể là con gái của chúng ta.",
      },
    ],
  },

};