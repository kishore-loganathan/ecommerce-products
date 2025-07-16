import { GET_PRODUCTS } from "./graphql/queries";

export const productMocks = [
  {
    request: {
      query: GET_PRODUCTS,
    },
    result: {
      data: {
        products: [
          {
            id: "1",
            name: "iPhone 15",
            price: 79999,
            image:
              "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
            category: "Electronics",
            inStock: true,
          },
          {
            id: "2",
            name: "Samsung Galaxy S24",
            price: 74999,
            image:
              "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
            category: "Electronics",
            inStock: true,
          },
          {
            id: "3",
            name: "MacBook Pro M3",
            price: 129999,
            image:
              "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
            category: "Computers",
            inStock: false,
          },
          {
            id: "4",
            name: "Dell XPS 15 Laptop",
            price: 115000,
            image:
              "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
            category: "Computers",
            inStock: true,
          },
          {
            id: "5",
            name: "Sony WH-1000XM5 Headphones",
            price: 29999,
            image:
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
            category: "Audio",
            inStock: true,
          },
          {
            id: "6",
            name: "Bose QuietComfort Earbuds II",
            price: 22000,
            image:
              "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
            category: "Audio",
            inStock: true,
          },
          {
            id: "7",
            name: "LG C3 OLED TV 65-inch",
            price: 95000,
            image:
              "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
            category: "Televisions",
            inStock: false,
          },
          {
            id: "8",
            name: "Samsung 55-inch QLED TV",
            price: 85000,
            image:
              "https://images.unsplash.com/photo-1552975084-6e4e173e8425?w=400&h=400&fit=crop",
            category: "Televisions",
            inStock: true,
          },
          {
            id: "9",
            name: "PlayStation 5 Console",
            price: 49990,
            image:
              "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
            category: "Gaming",
            inStock: true,
          },
          {
            id: "10",
            name: "Xbox Series X Console",
            price: 49990,
            image:
              "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=400&fit=crop",
            category: "Gaming",
            inStock: true,
          },
          {
            id: "11",
            name: "Nintendo Switch OLED Model",
            price: 32000,
            image:
              "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=400&fit=crop",
            category: "Gaming",
            inStock: true,
          },
          {
            id: "12",
            name: "Apple Watch Series 9",
            price: 41900,
            image:
              "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=400&fit=crop",
            category: "Wearables",
            inStock: true,
          },
          {
            id: "13",
            name: "Samsung Galaxy Watch 6",
            price: 29999,
            image:
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
            category: "Wearables",
            inStock: true,
          },
          {
            id: "14",
            name: "Fitbit Charge 6",
            price: 13000,
            image:
              "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
            category: "Wearables",
            inStock: true,
          },
          {
            id: "15",
            name: "Dyson V15 Detect Absolute",
            price: 65000,
            image:
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
            category: "Home Appliances",
            inStock: true,
          },
          {
            id: "16",
            name: "Instant Pot Duo Nova 7-in-1",
            price: 8000,
            image:
              "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
            category: "Kitchen Appliances",
            inStock: true,
          },
          {
            id: "17",
            name: "Philips Air Fryer XL",
            price: 12000,
            image:
              "https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=400&h=400&fit=crop",
            category: "Kitchen Appliances",
            inStock: true,
          },
          {
            id: "18",
            name: "Ninja Foodi 12-in-1 Grill",
            price: 18000,
            image:
              "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
            category: "Kitchen Appliances",
            inStock: true,
          },
          {
            id: "19",
            name: "GoPro HERO11 Black",
            price: 35000,
            image:
              "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
            category: "Cameras",
            inStock: true,
          },
          {
            id: "20",
            name: "Canon EOS R6 Mark II",
            price: 250000,
            image:
              "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
            category: "Cameras",
            inStock: false,
          },
          {
            id: "21",
            name: "Sony Alpha a7 IV Mirrorless Camera",
            price: 220000,
            image:
              "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
            category: "Cameras",
            inStock: true,
          },
          {
            id: "22",
            name: "Amazon Echo Dot (5th Gen)",
            price: 4500,
            image:
              "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=400&h=400&fit=crop",
            category: "Smart Home",
            inStock: true,
          },
          {
            id: "23",
            name: "Google Nest Hub Max",
            price: 18000,
            image:
              "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa9?w=400&h=400&fit=crop",
            category: "Smart Home",
            inStock: true,
          },
          {
            id: "24",
            name: "Philips Hue White and Color Ambiance",
            price: 9000,
            image:
              "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop",
            category: "Smart Home",
            inStock: true,
          },
          {
            id: "25",
            name: "Kindle Paperwhite (11th Gen)",
            price: 13000,
            image:
              "https://images.unsplash.com/photo-1481712582499-44330e58b9bb?w=400&h=400&fit=crop",
            category: "E-readers",
            inStock: true,
          },
          {
            id: "26",
            name: "Bose SoundLink Revolve+ II",
            price: 19000,
            image:
              "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
            category: "Audio",
            inStock: true,
          },
          {
            id: "27",
            name: "JBL Flip 6 Portable Speaker",
            price: 9000,
            image:
              "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop",
            category: "Audio",
            inStock: true,
          },
          {
            id: "28",
            name: "Logitech MX Master 3S Mouse",
            price: 9500,
            image:
              "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
            category: "Computer Peripherals",
            inStock: true,
          },
          {
            id: "29",
            name: "Keychron K2 Mechanical Keyboard",
            price: 8000,
            image:
              "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
            category: "Computer Peripherals",
            inStock: true,
          },
          {
            id: "30",
            name: "HP Envy 6055e All-in-One Printer",
            price: 10000,
            image:
              "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=400&fit=crop",
            category: "Printers",
            inStock: true,
          },
          {
            id: "31",
            name: "WD My Passport 2TB Portable HDD",
            price: 6000,
            image:
              "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop",
            category: "Storage",
            inStock: true,
          },
          {
            id: "32",
            name: "Samsung T7 Portable SSD 1TB",
            price: 12000,
            image:
              "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=400&fit=crop",
            category: "Storage",
            inStock: true,
          },
          {
            id: "33",
            name: "Netgear Nighthawk AX1800 Router",
            price: 15000,
            image:
              "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=400&fit=crop",
            category: "Networking",
            inStock: true,
          },
          {
            id: "34",
            name: "TP-Link Deco Mesh WiFi System",
            price: 22000,
            image:
              "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=400&fit=crop",
            category: "Networking",
            inStock: true,
          },
          {
            id: "35",
            name: "Ring Video Doorbell Pro 2",
            price: 25000,
            image:
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
            category: "Smart Home Security",
            inStock: true,
          },
          {
            id: "36",
            name: "Arlo Pro 4 Spotlight Camera",
            price: 18000,
            image:
              "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
            category: "Smart Home Security",
            inStock: true,
          },
          {
            id: "37",
            name: "Blink Outdoor Security Camera",
            price: 8000,
            image:
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
            category: "Smart Home Security",
            inStock: true,
          },
          {
            id: "38",
            name: "Roku Streaming Stick 4K",
            price: 5000,
            image:
              "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
            category: "Streaming Devices",
            inStock: true,
          },
          {
            id: "39",
            name: "Apple TV 4K (3rd Gen)",
            price: 15000,
            image:
              "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop",
            category: "Streaming Devices",
            inStock: true,
          },
          {
            id: "40",
            name: "Chromecast with Google TV",
            price: 6500,
            image:
              "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa9?w=400&h=400&fit=crop",
            category: "Streaming Devices",
            inStock: true,
          },
          {
            id: "41",
            name: "Garmin Forerunner 965",
            price: 60000,
            image:
              "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
            category: "Sports & Outdoors",
            inStock: true,
          },
          {
            id: "42",
            name: "Peloton Bike+ Treadmill",
            price: 250000,
            image:
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
            category: "Fitness Equipment",
            inStock: false,
          },
          {
            id: "43",
            name: "Bowflex SelectTech 552 Dumbbells",
            price: 25000,
            image:
              "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=400&h=400&fit=crop",
            category: "Fitness Equipment",
            inStock: true,
          },
          {
            id: "44",
            name: "NutriBullet Pro 900 Blender",
            price: 7000,
            image:
              "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
            category: "Kitchen Appliances",
            inStock: true,
          },
          {
            id: "45",
            name: "Vitamix Explorian E310 Blender",
            price: 35000,
            image:
              "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop",
            category: "Kitchen Appliances",
            inStock: true,
          },
          {
            id: "46",
            name: "Robot Vacuum Cleaner with Mop",
            price: 28000,
            image:
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
            category: "Home Appliances",
            inStock: true,
          },
          {
            id: "47",
            name: "Smart Thermostat Google Nest",
            price: 15000,
            image:
              "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa9?w=400&h=400&fit=crop",
            category: "Smart Home",
            inStock: true,
          },
          {
            id: "48",
            name: "Oral-B Electric Toothbrush",
            price: 5000,
            image:
              "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=400&fit=crop",
            category: "Personal Care",
            inStock: true,
          },
          {
            id: "49",
            name: "Dyson Supersonic Hair Dryer",
            price: 30000,
            image:
              "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=400&h=400&fit=crop",
            category: "Personal Care",
            inStock: true,
          },
          {
            id: "50",
            name: "HyperX Cloud II Gaming Headset",
            price: 10000,
            image:
              "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=400&fit=crop",
            category: "Gaming Peripherals",
            inStock: true,
          },
          {
            id: "51",
            name: "Logitech C920s HD Pro Webcam",
            price: 4000,
            image:
              "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop",
            category: "Computer Peripherals",
            inStock: true,
          },
          {
            id: "52",
            name: "Dell Ultrasharp U2723QE Monitor",
            price: 20000,
            image:
              "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
            category: "Monitors",
            inStock: true,
          },
          {
            id: "53",
            name: "Green Soul Ergonomic Office Chair",
            price: 18000,
            image:
              "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
            category: "Office Furniture",
            inStock: false,
          },
          {
            id: "54",
            name: "Philips Hue Smart Bulbs (4-pack)",
            price: 3500,
            image:
              "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop",
            category: "Smart Home Lighting",
            inStock: true,
          },
          {
            id: "55",
            name: "Anker PowerCore 20000mAh Power Bank",
            price: 2500,
            image:
              "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
            category: "Mobile Accessories",
            inStock: true,
          },
          {
            id: "56",
            name: "Samsung Wireless Charger Stand",
            price: 1500,
            image:
              "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=400&h=400&fit=crop",
            category: "Mobile Accessories",
            inStock: true,
          },
          {
            id: "57",
            name: "Universal Travel Adapter",
            price: 1000,
            image:
              "https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop",
            category: "Travel Accessories",
            inStock: true,
          },
          {
            id: "58",
            name: "Digital Kitchen Scale",
            price: 1200,
            image:
              "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
            category: "Kitchen Gadgets",
            inStock: true,
          },
          {
            id: "59",
            name: "Bluetooth Car FM Transmitter",
            price: 800,
            image:
              "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=400&fit=crop",
            category: "Car Accessories",
            inStock: true,
          },
          {
            id: "60",
            name: "70mai Dash Cam 1080p",
            price: 4500,
            image:
              "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=400&fit=crop",
            category: "Car Accessories",
            inStock: true,
          },
        ],
      },
    },
  },
];
