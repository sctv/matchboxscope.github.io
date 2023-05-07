"use strict";(self.webpackChunkMatchboxscope=self.webpackChunkMatchboxscope||[]).push([[965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),l=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(r.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,g=d["".concat(r,".").concat(h)]||d[h]||m[h]||o;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=h;var c={};for(var r in t)hasOwnProperty.call(t,r)&&(c[r]=t[r]);c.originalType=e,c[d]="string"==typeof e?e:i,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const o={},s="Matchboxscope (Injection Molding Version)",c={unversionedId:"Matchboxscope_IM",id:"Matchboxscope_IM",title:"Matchboxscope (Injection Molding Version)",description:"This is a simplified version of the matchboxscope that can be produced using a desktop injection molding machine.",source:"@site/docs/Matchboxscope_IM.md",sourceDirName:".",slug:"/Matchboxscope_IM",permalink:"/docs/Matchboxscope_IM",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Matchboxscope",permalink:"/docs/Matchboxscope"},next:{title:"WebSERIAL",permalink:"/docs/WebSERIAL"}},r={},l=[{value:"todo",id:"todo",level:2},{value:"improvements",id:"improvements",level:2},{value:"Flash the firmware",id:"flash-the-firmware",level:2},{value:"Creating an access point / wifi hotspot",id:"creating-an-access-point--wifi-hotspot",level:3},{value:"Troubleshoot",id:"troubleshoot",level:3},{value:"Not connecting",id:"not-connecting",level:4},{value:"Stream stops",id:"stream-stops",level:4},{value:"Assembly",id:"assembly",level:2},{value:"Done",id:"done",level:2},{value:"Showcase",id:"showcase",level:2}],p={toc:l},d="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"matchboxscope-injection-molding-version"},"Matchboxscope (Injection Molding Version)"),(0,i.kt)("p",null,"This is a simplified version of the matchboxscope that can be produced using a desktop injection molding machine."),(0,i.kt)("h2",{id:"todo"},"todo"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"disconnect usb"),(0,i.kt)("li",{parentName:"ul"},"short screw lens"),(0,i.kt)("li",{parentName:"ul"},"safely unplug the lens"),(0,i.kt)("li",{parentName:"ul"},"add sticky something to lens holder"),(0,i.kt)("li",{parentName:"ul"},"correct screw sizes"),(0,i.kt)("li",{parentName:"ul"},"spring mechanism")),(0,i.kt)("h2",{id:"improvements"},"improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"hole for led holder larger"),(0,i.kt)("li",{parentName:"ul"},"really threaded inserts?")),(0,i.kt)("h2",{id:"flash-the-firmware"},"Flash the firmware"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect the ESP32-CAM board to the USB and press the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"RESET"))," (in the rear of the ESP32-CAM board) and ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"BOOT"))," (or sometimes ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"IO0")),") button (on the USB-side). Then first release the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"RESET"))," and then the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"BOOT"))," button. The device will be in ",(0,i.kt)("inlineCode",{parentName:"p"},"download mode"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("a",{parentName:"p",href:"https://matchboxscope.github.io/firmware/FLASH.html"},"https://matchboxscope.github.io/firmware/FLASH.html")," and select the ",(0,i.kt)("inlineCode",{parentName:"p"},"ESP32 Camera Simple Webcam Server Advanced")," firmware\n",(0,i.kt)("img",{src:n(793).Z,width:"3648",height:"2736"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Hit the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect")," button and select the ESP32-CAM\n",(0,i.kt)("img",{src:n(8069).Z,width:"3648",height:"2736"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Install ESP32..."),"\n",(0,i.kt)("img",{src:n(1737).Z,width:"3648",height:"2736"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Hit ",(0,i.kt)("inlineCode",{parentName:"p"},"Install"),"\n",(0,i.kt)("img",{src:n(8552).Z,width:"3648",height:"2736"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Wait for it...\n",(0,i.kt)("img",{src:n(6042).Z,width:"3648",height:"2736"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the serial Minitor afterwards and hit the ",(0,i.kt)("inlineCode",{parentName:"p"},"RESET"),"button on the ESP32\n",(0,i.kt)("img",{src:n(1629).Z,width:"3648",height:"2736"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The output should look something like this\n",(0,i.kt)("img",{src:n(8483).Z,width:"3648",height:"2736"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"By default the ESP32 will connect to a WIFI hotspot using the following default networks:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SSID: Blynk\nPW: 12345678\n\nSSID: omniscope\nPW: omniscope\n")),(0,i.kt)("p",null,"You can add your own by pasting the following string in the serial monitor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{"ssid":"youssid","password":"yourpassword"}\n')),(0,i.kt)("p",null,"The firmware is based on this code: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Matchboxscope/matchboxscope-simplecamera/tree/matchboxscope"},"https://github.com/Matchboxscope/matchboxscope-simplecamera/tree/matchboxscope")),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},"finding the ESP in the network may become tricky. You can install the Fing APP (",(0,i.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.overlook.android.fing"},"https://play.google.com/store/apps/details?id=com.overlook.android.fing"),") and scan your local network for its IP. In case you prepared an access point (AP) using Windows, you can spot the IP address in the hotspot  settings.")),(0,i.kt)("h3",{id:"creating-an-access-point--wifi-hotspot"},"Creating an access point / wifi hotspot"),(0,i.kt)("p",null,"You can use the Android AP or Windows hotspot, perhaps also the iPhone thingy to create an access point with the following credentials:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SSID: Blynk\nPW: 12345678\n")),(0,i.kt)("p",null,"and the ESP32 will automatically connect"),(0,i.kt)("p",null,"The log will look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Connecting to Wifi Network 1: [F6:D1:08:4A:51:F0] Blynk\n[ 13000][V][WiFiGeneric.cpp:97] set_esp_interface_ip(): Configuring Station static IP: 0.0.0.0, MASK: 0.0.0.0, GW: 0.0.0.0\n.[ 13632][V][WiFiGeneric.cpp:355] _arduino_event_cb(): STA Connected: SSID: Blynk, BSSID: f6:d1:08:4a:51:f0, Channel: 1, Auth: WPA2_PSK\n[ 13633][D][WiFiGeneric.cpp:931] _eventCallback(): Arduino Event: 4 - STA_CONNECTED\n[ 13674][V][WiFiGeneric.cpp:369] _arduino_event_cb(): STA Got New IP:192.168.137.217\n[ 13675][D][WiFiGeneric.cpp:931] _eventCallback(): Arduino Event: 7 - STA_GOT_IP\n[ 13678][D][WiFiGeneric.cpp:996] _eventCallback(): STA IP: 192.168.137.217, MASK: 255.255.255.0, GW: 192.168.137.1\n.Client connection succeeded\nIP address: 192.168.137.217\nNetmask   : 255.255.255.0\nGateway   : 192.168.137.1\nSetting httpURL\nSetting up OTA\n\nNo OTA password has been set! (insecure)\n\n[ 16024][I][ArduinoOTA.cpp:141] begin(): OTA server at: Matchboxscope.local:3232\nAdded HTTP service to MDNS server\nTime functions disabled\nStarting web server on port: '80'\nStarting stream server on port: '81'\n\nCamera Ready!\nUse 'http://192.168.137.217/' to connect\nStream viewer available at 'http://192.168.137.217:81/view'\nRaw stream URL is 'http://192.168.137.217:81/'\nCamera debug data is disabled (send 'd' for status dump, or any other char to enable debug)\n")),(0,i.kt)("p",null,"Go to the device's ip address, in this case  ",(0,i.kt)("a",{parentName:"p",href:"http://192.168.137.217/"},"http://192.168.137.217/")," and open the stream."),(0,i.kt)("h3",{id:"troubleshoot"},"Troubleshoot"),(0,i.kt)("h4",{id:"not-connecting"},"Not connecting"),(0,i.kt)("p",null,"Possible causes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Did you install the driver/is the driver installed (Usually it's preinstalled in Windows/Mac)"),(0,i.kt)("li",{parentName:"ul"},"Antivirus software running?"),(0,i.kt)("li",{parentName:"ul"},"USB Cable is actually a data-cable not a charging-only cable?")),(0,i.kt)("h4",{id:"stream-stops"},"Stream stops"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"lower the resolution (e.g. VGA)")),(0,i.kt)("h2",{id:"assembly"},"Assembly"),(0,i.kt)("p",null,"These are the parts you need to build a Matchboxscope:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4570).Z,width:"2736",height:"3648"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ESP32-Camera board + USB Serial adapter"),(0,i.kt)("li",{parentName:"ul"},"2x Lid/bottom (printed)"),(0,i.kt)("li",{parentName:"ul"},"2x Base (printed)"),(0,i.kt)("li",{parentName:"ul"},"1x camera holder (printed)"),(0,i.kt)("li",{parentName:"ul"},"1x lamp holder (printed)"),(0,i.kt)("li",{parentName:"ul"},"1x lens holder (printed)"),(0,i.kt)("li",{parentName:"ul"},"1x led lamp"),(0,i.kt)("li",{parentName:"ul"},"3x Springs"),(0,i.kt)("li",{parentName:"ul"},"8x M3x20 Cylindrical Headed Screws (DIN912)"),(0,i.kt)("li",{parentName:"ul"},"6x M3 threaded inserts (4x6mm)"),(0,i.kt)("li",{parentName:"ul"},"1x USB micro cable")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the threaded inserts to the base using a hot iron - don't burn yourself! Hint: You can have 3 inserts on the top and three on the bottom. A hot iron with a fine tip is better than one with a flat one.\n",(0,i.kt)("img",{src:n(110).Z,width:"3648",height:"2736"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Repeat this for all 6 slots (or 5 if you only use 2 on the bottom)\n",(0,i.kt)("img",{src:n(8775).Z,width:"2736",height:"3648"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Remove the lens from the camera module using pliers\n",(0,i.kt)("img",{src:n(7190).Z,width:"3648",height:"2736"})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"HINT:"),"\n",(0,i.kt)("img",{src:n(674).Z,width:"800",height:"450"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Add the lens to the holder and remove the sticky tape\n",(0,i.kt)("img",{src:n(4299).Z,width:"3648",height:"2736"}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"HINT:"),"\n",(0,i.kt)("img",{src:n(9305).Z,width:"800",height:"450"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fix the lens on the base using M3 screws\n",(0,i.kt)("img",{src:n(2260).Z,width:"3648",height:"2736"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the camera holder to the board and fix the camera in place\n",(0,i.kt)("img",{src:n(35).Z,width:"3648",height:"2736"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the esp32 board to the base\n",(0,i.kt)("img",{src:n(5448).Z,width:"3648",height:"2736"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Close the lid using M3 screws\n",(0,i.kt)("img",{src:n(8348).Z,width:"3648",height:"2736"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the springs to the screws and mount the sample plate using m3 screws + add teh lamp holder\n",(0,i.kt)("img",{src:n(4484).Z,width:"2736",height:"3648"})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"HINT:")," ",(0,i.kt)("img",{src:n(1962).Z,width:"640",height:"360"})),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},"Add the lamp - done!\n",(0,i.kt)("img",{src:n(4486).Z,width:"2736",height:"3648"}))),(0,i.kt)("h2",{id:"done"},"Done"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7295).Z,width:"3648",height:"2736"})),(0,i.kt)("h2",{id:"showcase"},"Showcase"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2530).Z,width:"1536",height:"2048"}),"\n",(0,i.kt)("img",{src:n(2440).Z,width:"800",height:"600"}),"\n",(0,i.kt)("img",{src:n(8847).Z,width:"800",height:"600"}),"\n",(0,i.kt)("img",{src:n(1973).Z,width:"800",height:"600"}),"\n",(0,i.kt)("img",{src:n(9669).Z,width:"800",height:"600"}),"\n",(0,i.kt)("img",{src:n(1791).Z,width:"1536",height:"2048"}),"\n",(0,i.kt)("img",{src:n(8221).Z,width:"1024",height:"768"}),"\n",(0,i.kt)("img",{src:n(1356).Z,width:"1280",height:"1024"}),"\n",(0,i.kt)("img",{src:n(3087).Z,width:"1280",height:"1024"}),"\n",(0,i.kt)("img",{src:n(2968).Z,width:"1280",height:"1024"}),"\n",(0,i.kt)("img",{src:n(7264).Z,width:"1280",height:"1024"}),"\n",(0,i.kt)("img",{src:n(5187).Z,width:"1280",height:"1024"})))}m.isMDXComponent=!0},674:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/VID_20230504_104920-8d39bee6aaca545cd498fecc4589f108.gif"},9305:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/VID_20230504_105826-6ea973f06dd0c41d439f029fe999d926.gif"},1962:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/VID_20230504_111346-11516b8d55037f8cc7613cc558e33c4d.gif"},8775:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding1-4bfb3439e6877ac04e07f2df3fedd1ac.jpg"},1629:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding10-f1e7ddb3b37bd0f6ecea0c1bc69b7346.jpg"},4299:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding11-4f7c7cad61624f560ccbfe11b0467a74.jpg"},2260:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding12-c2106c673e1d2bc649858635d28ce1a6.jpg"},8483:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding13-c097277e266b3e8ab7e8fd29b961654f.jpg"},35:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding14-64092b4a80e9797b32d499571ce9144a.jpg"},5448:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding15-4b5a7da10125605ee414410f80f37fec.jpg"},8348:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding16-a5f46520d1124b60cfdc57669e7646e9.jpg"},4484:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding17-f2a7b2701fe026b03fc2779a3163e39e.jpg"},4486:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding18-75c6958096c5e2b40e98212e9f2c33dc.jpg"},7295:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding19-a96bcc3f63a18b87e85d2cdfe0d4ecbc.jpg"},4570:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding2-9c988ea4150d8a9b485f969601b4931e.jpg"},110:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding3-7fe5fb603c763c13c4ef313d40a45948.jpg"},7190:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding4-018b8dbda900f4f889f56f7439902130.jpg"},793:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding5-a0621b5462d4963b4d204663c14c2195.jpg"},8069:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding6-e488288ae42c83ccea305d2575842ff5.jpg"},1737:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding7-6415c42bdce80bc46d3357fd10cc3301.jpg"},8552:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding8-ab91c1a211b638fff846c6ee14c3e43c.jpg"},6042:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding9-47f017578cc8dfbe42cc82ada16f9205.jpg"},2530:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding_sample_1-7baa588a80a902dc414d0a1f6177272d.jpeg"},2968:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding_sample_10-132556c39a40c76c8daa34eede9be222.jpeg"},7264:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding_sample_11-473950d15c546a8ddcdf8ab3566c4e87.jpeg"},5187:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding_sample_12-fc3bb0f097e4e3160649426d5ba06de7.jpeg"},2440:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding_sample_2-6315d7b9f68101e092a2da8bf467af19.jpeg"},8847:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding_sample_3-2d69551bbd68d5c379fc85567c919df0.jpeg"},1973:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding_sample_4-cdf4bbcc9831c51a23a62b5af1777382.jpeg"},9669:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding_sample_5-58038d0f265d15c7011ae7eb85ce3ca4.jpeg"},1791:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding_sample_6-420e35dedcc1832b81916f679fde444e.jpeg"},8221:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding_sample_7-fc96a654e1e24855e62c310ebeb9515a.jpeg"},1356:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding_sample_8-0aeb671dc39504874b7d2c394e288a2c.jpeg"},3087:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matchboxscope_injectionmolding_sample_9-3b137739ffe95fa31ba7f4ec35706567.jpeg"}}]);