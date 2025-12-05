// data.js - SEMUA DATA PRODUK DTTASTORE LENGKAP
const dttastoreData = {
  // ========== PRODUCT CARDS ==========
  products: [
    {
      id: 'musicCard',
      title: 'Stream Musics & Video',
      icon: '🎵',
      desc: 'Spotify, Netflix, YouTube & more.',
      modal: 'musicModal',
      color: '#FF6B6B'
    },
    {
      id: 'editingCard',
      title: 'Editing Apps',
      icon: '🎨',
      desc: 'CapCut, Canva, Lightroom & others.',
      modal: 'editingModal',
      color: '#4ECDC4'
    },
    {
      id: 'mlCard',
      title: 'Mobile Legend Diamonds',
      icon: '🔥',
      desc: 'Top-up cepat & aman, all server.',
      modal: 'mlModal',
      color: '#FFA726'
    },
    {
      id: 'aiCard',
      title: 'AI Premium',
      icon: '🤖',
      desc: 'ChatGPT, Blackbox, Quilbot & more.',
      modal: 'aiModal',
      color: '#66BB6A'
    },
    {
      id: 'RobuxCard',
      title: 'Robux',
      icon: '💰',
      desc: 'Top-up Robux murah dan aman.',
      modal: 'RobuxModal',
      color: '#42A5F5'
    },
    {
      id: 'HotelCard',
      title: 'Hotel Reservation',
      icon: '🏨',
      desc: 'Pemesanan hotel dengan harga terjangkau.',
      modal: 'HotelModal',
      color: '#AB47BC'
    },
    {
      id: 'pubgCard',
      title: 'PUBG Mobile',
      icon: '🎯',
      desc: 'Top-up UC murah dan cepat.',
      modal: 'pubgModal',
      color: '#EF5350'
    },
    {
      id: 'freefireCard',
      title: 'Free Fire',
      icon: '💎',
      desc: 'Top-up diamond aman semua server.',
      modal: 'freefireModal',
      color: '#26C6DA'
    },
    {
      id: 'imvuCard',
      title: 'IMVU',
      icon: '📱',
      desc: 'Berbagai kebutuhan imvu kalian.',
      modal: 'imvuModal',
      color: '#8C52FF'
    }
  ],

  // ========== MODAL DATA ==========
  modals: {
    // IMVU MODAL
    imvuModal: {
      title: 'IMVU UPGRADE',
      subtitle: 'Penuhi Segala Kebutuhan IMVU',
      type: 'tabs',
      tabs: [
        {
          name: 'CREDIT',
          items: [
            { name: '5.000 Credit', price: 'Rp 30.000' },
            { name: '10.000 Credit', price: 'Rp 53.000' }
          ]
        },
        {
          name: 'GIFT WL',
          items: [
            { name: '5.000 Gift WL', price: 'Rp 20.000' },
            { name: '10.000 Gift WL', price: 'Rp 38.000' }
          ]
        },
        {
          name: 'UPGRADE',
          items: [
            { name: 'Marriage Package (MP)', desc: 'Tergantung Promo', price: 'Rp 270.000 - 320.000' },
            { name: 'AP Only', price: 'Rp 110.000' },
            { name: 'Age Only', price: 'Rp 110.000' },
            { name: 'AP + Age', desc: 'Proses terima beres', price: 'Rp 230.000' },
            { name: 'Change Name (CN)', desc: 'Tergantung Promo', price: 'Rp 130.000 - 160.000' },
            { name: 'Slot Room', desc: 'Tergantung Promo', price: 'Rp 290.000 - 320.000' }
          ]
        },
        {
          name: 'VIP PLATINUM',
          items: [
            { name: 'VIP 1 Bulan', desc: 'Tergantung Promo', price: 'Rp 110.000 - 120.000' },
            { name: 'VIP 2 Bulan', desc: 'Tergantung Promo', price: 'Rp 260.000 - 270.000' }
          ]
        }
      ],
      note: 'Harga dapat berubah sesuai promo aplikasi • Proses cepat & aman • Garansi 100%'
    },

    // PUBG MOBILE MODAL - LENGKAP!
    pubgModal: {
      title: 'PUBG MOBILE',
      subtitle: 'Top-up UC cepat dan aman',
      type: 'sections',
      sections: [
        {
          name: 'UC PUBG MOBILE',
          subtitle: 'All Server • Process 5-15 minutes',
          items: [
            { plan: '35 UC', type: 'Basic Top-up', price: 'Rp 7,000' },
            { plan: '60 UC', type: 'Basic Top-up', price: 'Rp 12,000' },
            { plan: '125 UC', type: 'Basic Top-up', price: 'Rp 23,000' },
            { plan: '250 UC', type: 'Basic Top-up', price: 'Rp 45,000' },
            { plan: '500 UC', type: 'Basic Top-up', price: 'Rp 85,000' },
            { plan: '750 UC', type: 'Basic Top-up', price: 'Rp 125,000' },
            { plan: '1200 UC', type: 'Basic Top-up', price: 'Rp 195,000' },
            { plan: '1600 UC', type: 'Basic Top-up', price: 'Rp 255,000' },
            { plan: '2500 UC', type: 'Basic Top-up', price: 'Rp 385,000' },
            { plan: '5000 UC', type: 'Basic Top-up', price: 'Rp 750,000' },
            { plan: '10000 UC', type: 'Basic Top-up', price: 'Rp 1,450,000' }
          ]
        }
      ],
      note: 'Via ID + Server • Proses cepat • Garansi 100%'
    },

    // FREE FIRE MODAL - LENGKAP!
    freefireModal: {
      title: 'FREE FIRE',
      subtitle: 'Top-up Diamond semua server',
      type: 'tabs',
      tabs: [
        {
          name: 'VIA ID',
          items: [
            { name: '5 Diamond', desc: 'VIA ID • 5-10 Menit', price: 'Rp 1.800' },
            { name: '50 Diamond', desc: 'VIA ID • 5-10 Menit', price: 'Rp 8.000' },
            { name: '70 Diamond', desc: 'VIA ID • 5-10 Menit', price: 'Rp 10.000' },
            { name: '100 Diamond', desc: 'VIA ID • 5-10 Menit', price: 'Rp 15.000' },
            { name: '140 Diamond', desc: 'VIA ID • 5-10 Menit', price: 'Rp 20.000' },
            { name: '210 Diamond', desc: 'VIA ID • 5-10 Menit', price: 'Rp 28.000' },
            { name: '355 Diamond', desc: 'VIA ID • 5-10 Menit', price: 'Rp 47.000' },
            { name: '500 Diamond', desc: 'VIA ID • 5-10 Menit', price: 'Rp 65.000' },
            { name: '720 Diamond', desc: 'VIA ID • 5-10 Menit', price: 'Rp 90.000' },
            { name: '1000 Diamond', desc: 'VIA ID • 5-10 Menit', price: 'Rp 130.000' },
            { name: '2000 Diamond', desc: 'VIA ID • 5-10 Menit', price: 'Rp 260.000' },
            { name: '7290 Diamond', desc: 'VIA ID • 5-10 Menit', price: 'Rp 870.000' }
          ]
        }
      ],
      note: 'Proses 5-10 menit • Semua server • Garansi 100%'
    },

    // ROBLOX MODAL - LENGKAP!
    RobuxModal: {
      title: 'ROBLOX',
      subtitle: 'Proses via login • Aman & Legal • 5-60 menit max 2 jam • Sesuai antrian',
      type: 'tabs',
      tabs: [
        {
          name: 'ROBUX',
          items: [
            { name: '80 robux', desc: 'Regular', price: 'Rp 20.000' },
            { name: '500 robux', desc: 'Regular', price: 'Rp 85.000' },
            { name: '1.000 robux', desc: 'Regular', price: 'Rp 160.000' },
            { name: '1.500 robux', desc: 'Regular', price: 'Rp 230.000' },
            { name: '2.000 robux', desc: 'Regular', price: 'Rp 305.000' },
            { name: '3.000 robux', desc: 'Regular', price: 'Rp 435.000' },
            { name: '4.000 robux', desc: 'Regular', price: 'Rp 600.000' },
            { name: '10.000 robux', desc: 'Regular', price: 'Rp 1.430.000' },
            { name: '22.500 robux', desc: 'Regular', price: 'Rp 2.860.000' },
            { name: '30.000 robux', desc: 'Regular', price: 'Rp 4.200.000' }
          ]
        },
        {
          name: 'FISH IT',
          items: [
            { name: 'Futuristic Pack', desc: 'Skin/Pack/Boat', price: 'Rp 50.000' },
            { name: 'Blossom Pack', desc: 'Skin/Pack/Boat', price: 'Rp 50.000' },
            { name: 'Soul Scythe Rod Skin', desc: 'Skin/Pack/Boat', price: 'Rp 137.000' },
            { name: 'Sharki Boat', desc: 'Skin/Pack/Boat', price: 'Rp 63.000' },
            { name: 'VIP + Luck', desc: 'Skin/Pack/Boat', price: 'Rp 56.000' },
            { name: '+ Mutations', desc: 'Skin/Pack/Boat', price: 'Rp 37.000' },
            { name: 'Advanced Luck', desc: 'Skin/Pack/Boat', price: 'Rp 69.000' },
            { name: 'Extra Luck', desc: 'Skin/Pack/Boat', price: 'Rp 31.000' },
            { name: 'Small Luck', desc: 'Skin/Pack/Boat', price: 'Rp 7.000' },
            { name: 'Double XP', desc: 'Skin/Pack/Boat', price: 'Rp 25.000' },
            { name: 'Mini Hoverboat', desc: 'Skin/Pack/Boat', price: 'Rp 29.000' },
            { name: 'Hyper Boat Pack', desc: 'Skin/Pack/Boat', price: 'Rp 125.000' }
          ]
        },
        {
            name: 'FISH IT CRATES',
            items: [
            { name: 'Pumpkin Limited Gacha 1x', price: 'Rp 32.000' },
            { name: 'Pumpkin Limited Gacha 5x', price: 'Rp 155.000' },
            { name: 'Luxury/Enchanted Gacha 1x', price: 'Rp 13.000' },
            { name: 'Luxury/Enchanted Gacha 5x', price: 'Rp 62.000' },
            { name: 'Ocean Gacha 1x', price: 'Rp 12.000' },
            { name: 'Ocean Gacha 5x', price: 'Rp 56.000' }
        ]
        },
        {
          name: 'PREMIUM',
          items: [
            { name: 'PREMIUM 450 robux', desc: 'Paket Premium', price: 'Rp 85.000' },
            { name: 'PREMIUM 1000 robux', desc: 'Paket Premium', price: 'Rp 160.000' },
            { name: 'PREMIUM 1350 robux', desc: 'Paket Premium', price: 'Rp 230.000' },
            { name: 'PREMIUM 2200 robux', desc: 'Paket Premium', price: 'Rp 300.000' },
            { name: 'PREMIUM 2750 robux', desc: 'Paket Premium', price: 'Rp 370.000' },
            { name: 'PREMIUM 3300 robux', desc: 'Paket Premium', price: 'Rp 450.000' },
            { name: 'PREMIUM 3850 robux', desc: 'Paket Premium', price: 'Rp 520.000' },
            { name: 'PREMIUM 4200 robux', desc: 'Paket Premium', price: 'Rp 600.000' },
            { name: 'PREMIUM 4950 robux', desc: 'Paket Premium', price: 'Rp 670.000' },
            { name: 'PREMIUM 5500 robux', desc: 'Paket Premium', price: 'Rp 740.0000'},
            { name: 'PREMIUM 15.000 robux', desc: 'Paket Premium', price: 'Rp 1.450.000'},
          ]
        }
      ],
      note: 'Proses via login dengan backup code • Aman & Legal • Garansi 100%'
    },
    

    // STREAMING MODAL
    musicModal: {
      title: 'Streaming Services',
      subtitle: 'Berbagai layanan streaming premium',
      type: 'sections',
      sections: [
        {
          name: 'YouTube Premium',
          subtitle: 'Including Youtube music',
          items: [
            { plan: '1 Month Premium', type: 'Email Customer', price: 'Rp 12,000' },
            { plan: '3 Months Premium', type: 'Email Customer', price: 'Rp 30,000' },
            { plan: '1 Month Premium', type: 'Admin Email', price: 'Rp 16,000' },
            { plan: '3 Months Premium', type: 'Admin Email', price: 'Rp 45,000' }
          ]
        },
        {
          name: 'Spotify Premium',
          subtitle: 'Enjoy your music without ads',
          items: [
            { plan: '1 Month', type: 'Personal Email', price: 'Rp 38,000' },
            { plan: '2 Months', type: 'Personal Email', price: 'Rp 68,000' },
            { plan: '3 Months', type: 'Personal Email', price: 'Rp 88,000' },
            { plan: '1 Month', type: 'Admin Email', price: 'Rp 35,000' },
            { plan: '2 Months', type: 'Admin Email', price: 'Rp 65,000' },
            { plan: '3 Months', type: 'Admin Email', price: 'Rp 85,000' }
          ]
        },
        {
          name: 'Netflix',
          subtitle: 'HD Streaming Plans',
          items: [
            { plan: '1 Month', type: 'Private 28-30 days', price: 'Rp 35,000' },
            { plan: '1 Month', type: 'Sharing 28-30 days', price: 'Rp 30,000' },
            { plan: '3 Months', type: 'Private 84-90 days', price: 'Rp 90,000' },
            { plan: '3 Months', type: 'Sharing 84-90 days', price: 'Rp 75,000' }
          ]
        },
        {
          name: 'VIU Premium',
          subtitle: 'Korean Drama & Asian Content',
          items: [
            { plan: '1 Month', type: 'Private', price: 'Rp 10,000' },
            { plan: '3 Months', type: 'Private', price: 'Rp 15,000' },
            { plan: '1 Year', type: 'Private', price: 'Rp 25,000' }
          ]
        }
      ]
    },

    // EDITING APPS MODAL
    editingModal: {
      title: 'Editing Apps',
      subtitle: 'Premium editing tools & software',
      type: 'sections',
      sections: [
        {
          name: 'Canva',
          subtitle: 'Premium design assets',
          items: [
            { plan: '1 Month', type: 'Pro', price: 'Rp 10,000' }
          ]
        },
        {
          name: 'Capcut Pro',
          subtitle: 'Video editor easy to use',
          items: [
            { plan: '1 Month', type: 'Private', price: 'Rp 35,000' },
            { plan: '1 Month', type: 'Sharing', price: 'Rp 20,000' },
            { plan: '6 Months', type: 'Sharing', price: 'Rp 100,000' }
          ]
        },
        {
          name: 'Adobe Lightroom',
          subtitle: 'Professional light editing',
          items: [
            { plan: '1 Year', type: 'Sharing', price: 'Rp 20,000' }
          ]
        },
        {
          name: 'Meitu',
          subtitle: 'Professional photo editing',
          items: [
            { plan: '7 days', type: 'Premium Plan', price: 'Rp 15,000' },
            { plan: '1 Month', type: 'Premium Plan', price: 'Rp 35,000' }
          ]
        }
      ]
    },

    // MOBILE LEGENDS MODAL
    mlModal: {
      title: 'Mobile Legends',
      subtitle: 'Diamond & Starlight Member',
      type: 'tabs',
      tabs: [
      {
        name: 'DIAMOND MLBB',
        subtitle: 'VIA ID + SERVER • Proses 5-15 menit',
        items: [
        { name: '5 Diamond', desc: 'Basic Top-up', price: 'Rp 3,500' },
        { name: '12 Diamond', desc: 'Basic Top-up', price: 'Rp 6,000' },
        { name: '19 Diamond', desc: 'Basic Top-up', price: 'Rp 8,000' },
        { name: '28 Diamond', desc: 'Basic Top-up', price: 'Rp 11,000' },
        { name: '44 Diamond', desc: 'Basic Top-up', price: 'Rp 15,000' },
        { name: '59 Diamond', desc: 'Basic Top-up', price: 'Rp 18,000' },
        { name: '85 Diamond', desc: 'Basic Top-up', price: 'Rp 25,000' },
        { name: '170 Diamond', desc: 'Basic Top-up', price: 'Rp 48,000' },
        { name: '240 Diamond', desc: 'Basic Top-up', price: 'Rp 67,000' },
        { name: '296 Diamond', desc: 'Buat misi 250 Diamond', price: 'Rp 83,000' },
        { name: '408 Diamond', desc: 'Basic Top-up', price: 'Rp 115,000' },
        { name: '568 Diamond', desc: 'Buat misi 500 Diamond', price: 'Rp 157,000' },
        { name: '875 Diamond', desc: 'Basic Top-up', price: 'Rp 235,000' },
        { name: '965 Diamond', desc: 'Basic Top-up', price: 'Rp 260,000' },
        { name: '1004 Diamond', desc: 'Basic Top-up', price: 'Rp 270,000' },
        { name: '1050 Diamond', desc: 'Basic Top-up', price: 'Rp 280,000' }
        ]
      },
      {
        name: 'STARLIGHT MEMBER',
        subtitle: 'Via gift card • Delay 7-8 Hari',
        items: [
        { name: 'SL Basic', desc: 'Sebelum Rilis', price: 'Rp 45,000' },
        { name: 'SL Premium', desc: 'Sebelum Rilis', price: 'Rp 100,000' },
        { name: 'SL Basic', desc: 'Setelah Rilis', price: 'Rp 50,000' },
        { name: 'SL Premium', desc: 'Setelah Rilis', price: 'Rp 105,000' }
        ]
      }
      ],
      note: 'WDP (Weekly Diamond Pass) tersedia seharga : Rp 28,000'
    },

    // PRODUK LAIN (OPSIONAL)
    aiModal: {
      title: 'AI Premium Tools',
      subtitle: 'Coming soon...',
      type: 'sections',
      sections: [
        {
          name: 'Under Development',
          subtitle: 'Data akan segera diisi',
          items: [
            { plan: 'Coming Soon', type: '', price: '-' }
          ]
        }
      ]
    },

    HotelModal: {
      title: 'Hotel Reservation',
      subtitle: 'Coming soon...',
      type: 'sections',
      sections: [
        {
          name: 'Under Development',
          subtitle: 'Data akan segera diisi',
          items: [
            { plan: 'Coming Soon', type: '', price: '-' }
          ]
        }
      ]
    }
  }
};