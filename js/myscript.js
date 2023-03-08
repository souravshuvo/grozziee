let selectedLanguage = localStorage.getItem("language");
if(selectedLanguage===null){
  selectedLanguage="english";
}

const bannerImage = document.getElementById("bannerImage");

//  switch(selectedLanguage){
//   case 'english':
//     bannerImage.setAttribute("src", "images/englishBanner.png");
//     break;

//     case 'thai':
//       bannerImage.setAttribute("src", "images/thaiBanner.png");
//     break;

//     case 'malay':
//       bannerImage.setAttribute("src", "images/malayBanner.png");
//     break;

//     case 'filip':
//       bannerImage.setAttribute("src", "images/pilipBanner.png");
//     break;

//     case 'vietnam':
//       bannerImage.setAttribute("src", "images/vietnamBanner.png");
//     break;

//     default:
//       bannerImage.setAttribute("src", "images/englishBanner.png");

// }

var languages;
axios.get("json/languages.json").then((response) => {
  languages = response.data;
});

$(document).ready(function() {
    // Initialize the draggable widget on the modal content element
    $(".modal-content").draggable({
      handle: ".modal-header, .modal-footer" // Allow dragging the modal by the header & footer
    });
   
  });

const languageSelect = document.getElementById("language-select");

for (let i = 0; i < languageSelect.length; i++) {
  if (languageSelect[i].value == selectedLanguage) {
    languageSelect[i].selected = true;
    break;
  }
}

const seeMoreButton = document.getElementById("seeMoreButton");

seeMoreButton.addEventListener("click", function () {
  if (additionalContent.style.display === "none") {
    additionalContent.style.display = "block";
    seeMoreButton.innerHTML = languages[selectedLanguage]["see_less_text"];
  } else {
    additionalContent.style.display = "none";
    seeMoreButton.innerHTML = languages[selectedLanguage]["see_more_text"];
  }
});

const seeMoreButton2 = document.getElementById("seeMoreButton2");

seeMoreButton2.addEventListener("click", function () {
  if (additionalContent2.style.display === "none") {
    additionalContent2.style.display = "block";
    seeMoreButton2.innerHTML = languages[selectedLanguage]["see_less_text"];
  } else {
    additionalContent2.style.display = "none";
    seeMoreButton2.innerHTML = languages[selectedLanguage]["see_more_text"];
  }
});

const seeMoreButton3 = document.getElementById("seeMoreButton3");
seeMoreButton3.addEventListener("click", function () {
  if (additionalContent3.style.display === "none") {
    additionalContent3.style.display = "block";
    seeMoreButton3.innerHTML = languages[selectedLanguage]["see_less_text"];
  } else {
    additionalContent3.style.display = "none";
    seeMoreButton3.innerHTML = languages[selectedLanguage]["see_more_text"];
  }
});

document.getElementById("list2_tab").onclick = function () {
  document.getElementById("list1").classList.remove("active", "show");
  document.getElementById("list2").classList.add("active", "show");
  document.getElementById("list1_tab").classList.remove("active", "show");
  document.getElementById("list2_tab").classList.add("active", "show");
};

document.getElementById("list1_tab").onclick = function () {
  document.getElementById("list2").classList.remove("active", "show");
  document.getElementById("list1").classList.add("active", "show");
  document.getElementById("list2_tab").classList.remove("active", "show");
  document.getElementById("list1_tab").classList.add("active", "show");
};

const videoLinks = document.querySelectorAll(".video-link");
const modal = document.getElementById("myModal");
const videoPlayer = document.getElementById("video-player");
var closeBtn1 = document.getElementsByClassName("close")[0];
var closeBtn2 = document.getElementsByClassName("close")[1];
const videoTitle = document.getElementById("videoModalLabel");
//const videoOrginalTitle = document.getElementsByClassName("title")


videoLinks.forEach(function (videoLink) {
  videoLink.addEventListener("click", function (e) {
    const videoLanguage = languageSelect.value;
    e.preventDefault();
    const videoSrc = this.getAttribute("data-src");
    videoPlayer.src = "videos/" + videoLanguage + "/" + videoSrc;
    videoTitle.textContent=languages[selectedLanguage]["Please_follow_text"];
    modal.style.display = "block";
  });
});

closeBtn1.addEventListener("click", function () {
  modal.style.display = "none";
  videoPlayer.pause();
});

closeBtn2.addEventListener("click", function () {
  modal.style.display = "none";
  videoPlayer.pause();
  
});

window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
    videoPlayer.pause();
    
  }
});

// language change

var elementsDownload = document.getElementsByClassName("btn btn-primary");
var elementsPlay = document.getElementsByClassName("video-link");

const welcomeText1 = document.getElementById("welcome-text1");
const welcomeText2 = document.getElementById("welcome-text2");
const Driver_Download = document.getElementById("Driver_Download");
const Tharmal_printer_driver = document.getElementById(
  "Tharmal_printer_driver"
);
const Applicable_Model1 = document.getElementById("Applicable_Model1");
const Dot_Matrix_Printer_Driver = document.getElementById(
  "Dot_Matrix_Printer_Driver"
);
const Applicable_Model2 = document.getElementById("Applicable_Model2");
const Label_software_Download = document.getElementById(
  "Label_software_Download"
);
const Bluetooth_thermal_printer_app = document.getElementById(
  "Bluetooth_thermal_printer_app"
);
const label_software_for_android_system = document.getElementById(
  "label_software_for_android_system"
);
const label_software_for_iPhone_or_ios = document.getElementById(
  "label_software_for_iPhone_or_ios"
);
const Windows_computer_label_software = document.getElementById(
  "Windows_computer_label_software"
);
const Thermal_Printer_Video = document.getElementById("Thermal_Printer_Video");
const list1_tab = document.getElementById("list1_tab");
const Dot_Matrix_Printer_Video = document.getElementById(
  "Dot_Matrix_Printer_Video"
);
const list2_tab = document.getElementById("list2_tab");
const Attendance_Machine_Video = document.getElementById(
  "Attendance_Machine_Video"
);

const Install_Drive = document.getElementById("Install_Drive");
const Cancel_Document = document.getElementById("Cancel_Document");
const Change_Port = document.getElementById("Change_Port");
const Delete_Driver = document.getElementById("Delete_Driver");
const Print_Offline = document.getElementById("Print_Offline");
const Print_Unclear = document.getElementById("Print_Unclear");
const Print_Pause = document.getElementById("Print_Pause");
const Registry_Instalation = document.getElementById("Registry_Instalation");
const Adjust_Paper_Size = document.getElementById("Adjust_Paper_Size");
const Adjust_Printing_Density = document.getElementById(
  "Adjust_Printing_Density"
);

const Adjust_Printing_Position = document.getElementById(
  "Adjust_Printing_Position"
);

const Adjust_Printing_Speed = document.getElementById("Adjust_Printing_Speed");
const Delete_Driver_Manually = document.getElementById(
  "Delete_Driver_Manually"
);
const Adjust_Of_Missing_Stroke = document.getElementById(
  "Adjust_Of_Missing_Stroke"
);
const Restart_The_Print_Performance = document.getElementById(
  "Restart_The_Print_Performance"
);
const Adjust_The_WaterMark_Density = document.getElementById(
  "Adjust_The_WaterMark_Density"
);
const User_Install_Driver_Manually = document.getElementById(
  "User_Install_Driver_Manually"
);
const Just_Frame_But_No_Fonts_On_The_Shipping_Label = document.getElementById(
  "Just_Frame_But_No_Fonts_On_The_Shipping_Label"
);
const t_Find_The_Port_When_Install_The_Driver_Manually =
  document.getElementById(
    "Can't_Find_The_Port_When_Install_The_Driver_Manually"
  );
const t_Delete_The_Driver_Package_When_Delete_The_Driver_Manually =
  document.getElementById(
    "Can't_Delete_The_Driver_Package_When_Delete_The_Driver_Manually"
  );

const Install_Drive1 = document.getElementById("Install_Drive1");
const Cancel_Document1 = document.getElementById("Cancel_Document1");
const Change_Port1 = document.getElementById("Change_Port1");
const Delete_Driver1 = document.getElementById("Delete_Driver1");
const Print_Offline1 = document.getElementById("Print_Offline1");
const Print_Unclear1 = document.getElementById("Print_Unclear1");
const Print_Pause1 = document.getElementById("Print_Pause1");
const Registry_Instalation1 = document.getElementById("Registry_Instalation1");
const Adjust_Paper_Size1 = document.getElementById("Adjust_Paper_Size1");
const Adjust_Printing_Density1 = document.getElementById(
  "Adjust_Printing_Density1"
);
const Adjust_Printing_Position1 = document.getElementById(
  "Adjust_Printing_Position1"
);
const Adjust_Printing_Speed1 = document.getElementById(
  "Adjust_Printing_Speed1"
);
const Delete_Driver_Manually1 = document.getElementById(
  "Delete_Driver_Manually1"
);
const Adjust_Of_Missing_Stroke1 = document.getElementById(
  "Adjust_Of_Missing_Stroke1"
);
const Restart_The_Print_Performance1 = document.getElementById(
  "Restart_The_Print_Performance1"
);
const Adjust_The_WaterMark_Density1 = document.getElementById(
  "Adjust_The_WaterMark_Density1"
);
const User_Install_Driver_Manually1 = document.getElementById(
  "User_Install_Driver_Manually1"
);
const Just_Frame_But_No_Fonts_On_The_Shipping_Label1 = document.getElementById(
  "Just_Frame_But_No_Fonts_On_The_Shipping_Label1"
);
const t_Find_The_Port_When_Install_The_Driver_Manually1 =
  document.getElementById(
    "Can't_Find_The_Port_When_Install_The_Driver_Manually1"
  );
const t_Delete_The_Driver_Package_When_Delete_The_Driver_Manually1 =
  document.getElementById(
    "Can't_Delete_The_Driver_Package_When_Delete_The_Driver_Manually1"
  );

const AK915_paper_loading_and_printing_video = document.getElementById(
  "AK915_paper_loading_and_printing_video"
);
const Continuous_print_settings_for_English = document.getElementById(
  "Continuous_print_settings_for_English"
);


const How_to_adjust_if_cant_punch = document.getElementById(
  "How_to_adjust_if_cant_punch"
);
const How_to_adjust_the_position = document.getElementById(
  "How_to_adjust_the_position"
);
const How_to_do_if_or_E1E1_code_shows = document.getElementById(
  "How_to_do_if_or_E1E1_code_shows"
);
const How_to_do_if_5002_shows_or_just_date_no_time = document.getElementById(
  "How_to_do_if_5002_shows_or_just_date_no_time"
);
const How_to_do_if_the_screen_doesnt_light_up = document.getElementById(
  "How_to_do_if_the_screen_doesnt_light_up"
);
const How_to_exchange_the_ribbon = document.getElementById(
  "How_to_exchange_the_ribbon"
);
const How_to_know_Front_and_back = document.getElementById(
  "How_to_know_Front_and_back"
);
const How_to_punch_manually = document.getElementById("How_to_punch_manually");
const How_to_punch_when_Power_outage = document.getElementById(
  "How_to_punch_when_Power_outage"
);
const How_to_reset = document.getElementById("How_to_reset");
const How_to_self_test = document.getElementById("How_to_self_test");
const How_to_set_the_alarm = document.getElementById("How_to_set_the_alarm");
const If_no_two_colors_printing = document.getElementById(
  "If_no_two_colors_printing"
);
const Introduction_of_use = document.getElementById("Introduction_of_use");
const How_to_change_password = document.getElementById(
  "How_to_change_password"
);
const How_to_set_one_attendance_shift = document.getElementById(
  "How_to_set_one_attendance_shift"
);
const How_to_set_the_date_and_the_time = document.getElementById(
  "How_to_set_the_date_and_the_time"
);
const How_to_set_three_attendance_shifts = document.getElementById(
  "How_to_set_three_attendance_shifts"
);
const How_to_set_two_attendance_shifts = document.getElementById(
  "How_to_set_two_attendance_shifts"
);

axios.get("json/languages.json").then((response) => {
  const languages = response.data;

  seeMoreButton.textContent = languages[selectedLanguage]["see_more_text"];
  seeMoreButton2.textContent = languages[selectedLanguage]["see_more_text"];
  seeMoreButton3.textContent = languages[selectedLanguage]["see_more_text"];

  welcomeText1.textContent = languages[selectedLanguage]["welcome-text1"];
  welcomeText2.textContent = languages[selectedLanguage]["welcome-text2"];
  Driver_Download.textContent = languages[selectedLanguage]["Driver_Download"];
  Tharmal_printer_driver.textContent =
    languages[selectedLanguage]["Tharmal_printer_driver"];
  Applicable_Model1.textContent =
    languages[selectedLanguage]["Applicable_Model1"];
  Dot_Matrix_Printer_Driver.textContent =
    languages[selectedLanguage]["Dot_Matrix_Printer_Driver"];
  Label_software_Download.textContent =
    languages[selectedLanguage]["Label_software_Download"];
  Bluetooth_thermal_printer_app.textContent =
    languages[selectedLanguage]["Bluetooth_thermal_printer_app"];
  label_software_for_android_system.textContent =
    languages[selectedLanguage]["label_software_for_android_system"];
  label_software_for_iPhone_or_ios.textContent =
    languages[selectedLanguage]["label_software_for_iPhone_or_ios"];
  Windows_computer_label_software.textContent =
    languages[selectedLanguage]["Windows_computer_label_software"];
  Thermal_Printer_Video.textContent =
    languages[selectedLanguage]["Thermal_Printer_Video"];
  // list1_tab.textContent = languages[selectedLanguage]["list1_tab"];
  Dot_Matrix_Printer_Video.textContent =
    languages[selectedLanguage]["Dot_Matrix_Printer_Video"];
  Applicable_Model2.textContent =
    languages[selectedLanguage]["Applicable_Model2"];
  //list2_tab.textContent = languages[selectedLanguage]["list2_tab"];
  Attendance_Machine_Video.textContent =
    languages[selectedLanguage]["Attendance_Machine_Video"];

  //  video 1

  Install_Drive.textContent = languages[selectedLanguage]["Install_Drive"];
  Cancel_Document.textContent = languages[selectedLanguage]["Cancel_Document"];
  Change_Port.textContent = languages[selectedLanguage]["Change_Port"];
  Delete_Driver.textContent = languages[selectedLanguage]["Delete_Driver"];
  Print_Offline.textContent = languages[selectedLanguage]["Print_Offline"];
  Print_Unclear.textContent = languages[selectedLanguage]["Print_Unclear"];
  Print_Pause.textContent = languages[selectedLanguage]["Print_Pause"];
  Registry_Instalation.textContent =
    languages[selectedLanguage]["Registry_Instalation"];
  Adjust_Paper_Size.textContent =
    languages[selectedLanguage]["Adjust_Paper_Size"];
  Adjust_Printing_Density.textContent =
    languages[selectedLanguage]["Adjust_Printing_Density"];
  Adjust_Printing_Position.textContent =
    languages[selectedLanguage]["Adjust_Printing_Position"];
  Adjust_Printing_Speed.textContent =
    languages[selectedLanguage]["Adjust_Printing_Speed"];
  Delete_Driver_Manually.textContent =
    languages[selectedLanguage]["Delete_Driver_Manually"];
  Adjust_Of_Missing_Stroke.textContent =
    languages[selectedLanguage]["Adjust_Of_Missing_Stroke"];
  Restart_The_Print_Performance.textContent =
    languages[selectedLanguage]["Restart_The_Print_Performance"];
  Adjust_The_WaterMark_Density.textContent =
    languages[selectedLanguage]["Adjust_The_WaterMark_Density"];
  User_Install_Driver_Manually.textContent =
    languages[selectedLanguage]["User_Install_Driver_Manually"];
  Just_Frame_But_No_Fonts_On_The_Shipping_Label.textContent =
    languages[selectedLanguage][
      "Just_Frame_But_No_Fonts_On_The_Shipping_Label"
    ];
  t_Find_The_Port_When_Install_The_Driver_Manually.textContent =
    languages[selectedLanguage][
      "Can't_Find_The_Port_When_Install_The_Driver_Manually"
    ];
  t_Delete_The_Driver_Package_When_Delete_The_Driver_Manually.textContent =
    languages[selectedLanguage][
      "Can't_Delete_The_Driver_Package_When_Delete_The_Driver_Manually"
    ];

  Install_Drive1.textContent = languages[selectedLanguage]["Install_Drive1"];
  Cancel_Document1.textContent =
    languages[selectedLanguage]["Cancel_Document1"];
  Change_Port1.textContent = languages[selectedLanguage]["Change_Port1"];
  Delete_Driver1.textContent = languages[selectedLanguage]["Delete_Driver1"];
  Print_Offline1.textContent = languages[selectedLanguage]["Print_Offline1"];
  Print_Unclear1.textContent = languages[selectedLanguage]["Print_Unclear1"];
  Print_Pause1.textContent = languages[selectedLanguage]["Print_Pause1"];
  Registry_Instalation1.textContent =
    languages[selectedLanguage]["Registry_Instalation1"];
  Adjust_Paper_Size1.textContent =
    languages[selectedLanguage]["Adjust_Paper_Size1"];
  Adjust_Printing_Density1.textContent =
    languages[selectedLanguage]["Adjust_Printing_Density1"];
  Adjust_Printing_Position1.textContent =
    languages[selectedLanguage]["Adjust_Printing_Position1"];
  Adjust_Printing_Speed1.textContent =
    languages[selectedLanguage]["Adjust_Printing_Speed1"];
  Delete_Driver_Manually1.textContent =
    languages[selectedLanguage]["Delete_Driver_Manually1"];
  Adjust_Of_Missing_Stroke1.textContent =
    languages[selectedLanguage]["Adjust_Of_Missing_Stroke1"];
  Restart_The_Print_Performance1.textContent =
    languages[selectedLanguage]["Restart_The_Print_Performance1"];
  Adjust_The_WaterMark_Density1.textContent =
    languages[selectedLanguage]["Adjust_The_WaterMark_Density1"];
  User_Install_Driver_Manually1.textContent =
    languages[selectedLanguage]["User_Install_Driver_Manually1"];
  Just_Frame_But_No_Fonts_On_The_Shipping_Label1.textContent =
    languages[selectedLanguage][
      "Just_Frame_But_No_Fonts_On_The_Shipping_Label1"
    ];
  t_Find_The_Port_When_Install_The_Driver_Manually1.textContent =
    languages[selectedLanguage][
      "Can't_Find_The_Port_When_Install_The_Driver_Manually1"
    ];
  t_Delete_The_Driver_Package_When_Delete_The_Driver_Manually1.textContent =
    languages[selectedLanguage][
      "Can't_Delete_The_Driver_Package_When_Delete_The_Driver_Manually1"
    ];

  //video 2

  AK915_paper_loading_and_printing_video.textContent =
    languages[selectedLanguage]["AK915_paper_loading_and_printing_video"];
  Continuous_print_settings_for_English.textContent =
    languages[selectedLanguage]["Continuous_print_settings_for_English"];

  //video 3

  How_to_adjust_if_cant_punch.textContent =
    languages[selectedLanguage]["How_to_adjust_if_cant_punch"];
  How_to_adjust_the_position.textContent =
    languages[selectedLanguage]["How_to_adjust_the_position"];
  How_to_do_if_or_E1E1_code_shows.textContent =
    languages[selectedLanguage]["How_to_do_if_or_E1E1_code_shows"];
  How_to_do_if_5002_shows_or_just_date_no_time.textContent =
    languages[selectedLanguage]["How_to_do_if_5002_shows_or_just_date_no_time"];
  How_to_do_if_the_screen_doesnt_light_up.textContent =
    languages[selectedLanguage]["How_to_do_if_the_screen_doesnt_light_up"];
  How_to_exchange_the_ribbon.textContent =
    languages[selectedLanguage]["How_to_exchange_the_ribbon"];
  How_to_know_Front_and_back.textContent =
    languages[selectedLanguage]["How_to_know_Front_and_back"];
  How_to_punch_manually.textContent =
    languages[selectedLanguage]["How_to_punch_manually"];
  How_to_punch_when_Power_outage.textContent =
    languages[selectedLanguage]["How_to_punch_when_Power_outage"];
  How_to_reset.textContent = languages[selectedLanguage]["How_to_reset"];
  How_to_self_test.textContent =
    languages[selectedLanguage]["How_to_self_test"];
  How_to_set_the_alarm.textContent =
    languages[selectedLanguage]["How_to_set_the_alarm"];
  If_no_two_colors_printing.textContent =
    languages[selectedLanguage]["If_no_two_colors_printing"];
  Introduction_of_use.textContent =
    languages[selectedLanguage]["Introduction_of_use"];
  How_to_change_password.textContent =
    languages[selectedLanguage]["How_to_change_password"];
  How_to_set_one_attendance_shift.textContent =
    languages[selectedLanguage]["How_to_set_one_attendance_shift"];
  How_to_set_the_date_and_the_time.textContent =
    languages[selectedLanguage]["How_to_set_the_date_and_the_time"];
  How_to_set_three_attendance_shifts.textContent =
    languages[selectedLanguage]["How_to_set_three_attendance_shifts"];
  How_to_set_two_attendance_shifts.textContent =
    languages[selectedLanguage]["How_to_set_two_attendance_shifts"];

  for (var i = 0; i < elementsDownload.length; i++) {
    elementsDownload[i].innerText =
      languages[selectedLanguage]["download_text"];
  }

  for (var i = 0; i < elementsPlay.length; i++) {
    elementsPlay[i].innerText = languages[selectedLanguage]["play_text"];
  }

  // switch(selectedLanguage){
  //   case 'english':
  //     bannerImage.setAttribute("src", "images/englishBanner.png");
  //     break;

  //     case 'thai':
  //       bannerImage.setAttribute("src", "images/thaiBanner.png");
  //     break;

  //     case 'malay':
  //       bannerImage.setAttribute("src", "images/malayBanner.png");
  //     break;

  //     case 'filip':
  //       bannerImage.setAttribute("src", "images/pilipBanner.png");
  //     break;

  //     case 'vietnam':
  //       bannerImage.setAttribute("src", "images/vietnamBanner.png");
  //     break;

  //     default:
  //       bannerImage.setAttribute("src", "images/englishBanner.png");

  // }

  
});

languageSelect.addEventListener("change", function () {
  selectedLanguage = languageSelect.value;
  localStorage.setItem("language", selectedLanguage);

  // switch(selectedLanguage){
  //   case 'english':
  //     bannerImage.setAttribute("src", "images/englishBanner.png");
  //     break;

  //     case 'thai':
  //       bannerImage.setAttribute("src", "images/thaiBanner.png");
  //     break;

  //     case 'malay':
  //       bannerImage.setAttribute("src", "images/malayBanner.png");
  //     break;

  //     case 'filip':
  //       bannerImage.setAttribute("src", "images/pilipBanner.png");
  //     break;

  //     case 'vietnam':
  //       bannerImage.setAttribute("src", "images/vietnamBanner.png");
  //     break;

  //     default:
  //       bannerImage.setAttribute("src", "images/englishBanner.png");

  // }

  axios.get("json/languages.json").then((response) => {
    const languages = response.data;

    for (var i = 0; i < elementsDownload.length; i++) {
      elementsDownload[i].innerText =
        languages[selectedLanguage]["download_text"];
    }

    for (var i = 0; i < elementsPlay.length; i++) {
      elementsPlay[i].innerText = languages[selectedLanguage]["play_text"];
    }

    seeMoreButton.textContent = languages[selectedLanguage]["see_more_text"];
    seeMoreButton2.textContent = languages[selectedLanguage]["see_more_text"];
    seeMoreButton3.textContent = languages[selectedLanguage]["see_more_text"];

    welcomeText1.textContent = languages[selectedLanguage]["welcome-text1"];
    welcomeText2.textContent = languages[selectedLanguage]["welcome-text2"];
    Driver_Download.textContent =
      languages[selectedLanguage]["Driver_Download"];
    Tharmal_printer_driver.textContent =
      languages[selectedLanguage]["Tharmal_printer_driver"];
    Applicable_Model1.textContent =
      languages[selectedLanguage]["Applicable_Model1"];
    Dot_Matrix_Printer_Driver.textContent =
      languages[selectedLanguage]["Dot_Matrix_Printer_Driver"];
    Label_software_Download.textContent =
      languages[selectedLanguage]["Label_software_Download"];
    Bluetooth_thermal_printer_app.textContent =
      languages[selectedLanguage]["Bluetooth_thermal_printer_app"];
    label_software_for_android_system.textContent =
      languages[selectedLanguage]["label_software_for_android_system"];
    label_software_for_iPhone_or_ios.textContent =
      languages[selectedLanguage]["label_software_for_iPhone_or_ios"];
    Windows_computer_label_software.textContent =
      languages[selectedLanguage]["Windows_computer_label_software"];
    Thermal_Printer_Video.textContent =
      languages[selectedLanguage]["Thermal_Printer_Video"];
    //list1_tab.textContent = languages[selectedLanguage]["list1-tab"];
    Dot_Matrix_Printer_Video.textContent =
      languages[selectedLanguage]["Dot_Matrix_Printer_Video"];
    Applicable_Model2.textContent =
      languages[selectedLanguage]["Applicable_Model2"];
    Attendance_Machine_Video.textContent =
      languages[selectedLanguage]["Attendance_Machine_Video"];

    //  video 1

    Install_Drive.textContent = languages[selectedLanguage]["Install_Drive"];
    Cancel_Document.textContent =
      languages[selectedLanguage]["Cancel_Document"];
    Change_Port.textContent = languages[selectedLanguage]["Change_Port"];
    Delete_Driver.textContent = languages[selectedLanguage]["Delete_Driver"];
    Print_Offline.textContent = languages[selectedLanguage]["Print_Offline"];
    Print_Unclear.textContent = languages[selectedLanguage]["Print_Unclear"];
    Print_Pause.textContent = languages[selectedLanguage]["Print_Pause"];
    Registry_Instalation.textContent =
      languages[selectedLanguage]["Registry_Instalation"];
    Adjust_Paper_Size.textContent =
      languages[selectedLanguage]["Adjust_Paper_Size"];
    Adjust_Printing_Density.textContent =
      languages[selectedLanguage]["Adjust_Printing_Density"];
    Adjust_Printing_Position.textContent =
      languages[selectedLanguage]["Adjust_Printing_Position"];
    Adjust_Printing_Speed.textContent =
      languages[selectedLanguage]["Adjust_Printing_Speed"];
    Delete_Driver_Manually.textContent =
      languages[selectedLanguage]["Delete_Driver_Manually"];
    Adjust_Of_Missing_Stroke.textContent =
      languages[selectedLanguage]["Adjust_Of_Missing_Stroke"];
    Restart_The_Print_Performance.textContent =
      languages[selectedLanguage]["Restart_The_Print_Performance"];
    Adjust_The_WaterMark_Density.textContent =
      languages[selectedLanguage]["Adjust_The_WaterMark_Density"];
    User_Install_Driver_Manually.textContent =
      languages[selectedLanguage]["User_Install_Driver_Manually"];
    Just_Frame_But_No_Fonts_On_The_Shipping_Label.textContent =
      languages[selectedLanguage][
        "Just_Frame_But_No_Fonts_On_The_Shipping_Label"
      ];
    t_Find_The_Port_When_Install_The_Driver_Manually.textContent =
      languages[selectedLanguage][
        "Can't_Find_The_Port_When_Install_The_Driver_Manually"
      ];
    t_Delete_The_Driver_Package_When_Delete_The_Driver_Manually.textContent =
      languages[selectedLanguage][
        "Can't_Delete_The_Driver_Package_When_Delete_The_Driver_Manually"
      ];

    Install_Drive1.textContent = languages[selectedLanguage]["Install_Drive1"];
    Cancel_Document1.textContent =
      languages[selectedLanguage]["Cancel_Document1"];
    Change_Port1.textContent = languages[selectedLanguage]["Change_Port1"];
    Delete_Driver1.textContent = languages[selectedLanguage]["Delete_Driver1"];
    Print_Offline1.textContent = languages[selectedLanguage]["Print_Offline1"];
    Print_Unclear1.textContent = languages[selectedLanguage]["Print_Unclear1"];
    Print_Pause1.textContent = languages[selectedLanguage]["Print_Pause1"];
    Registry_Instalation1.textContent =
      languages[selectedLanguage]["Registry_Instalation1"];
    Adjust_Paper_Size1.textContent =
      languages[selectedLanguage]["Adjust_Paper_Size1"];
    Adjust_Printing_Density1.textContent =
      languages[selectedLanguage]["Adjust_Printing_Density1"];
    Adjust_Printing_Position1.textContent =
      languages[selectedLanguage]["Adjust_Printing_Position1"];
    Adjust_Printing_Speed1.textContent =
      languages[selectedLanguage]["Adjust_Printing_Speed1"];
    Delete_Driver_Manually1.textContent =
      languages[selectedLanguage]["Delete_Driver_Manually1"];
    Adjust_Of_Missing_Stroke1.textContent =
      languages[selectedLanguage]["Adjust_Of_Missing_Stroke1"];
    Restart_The_Print_Performance1.textContent =
      languages[selectedLanguage]["Restart_The_Print_Performance1"];
    Adjust_The_WaterMark_Density1.textContent =
      languages[selectedLanguage]["Adjust_The_WaterMark_Density1"];
    User_Install_Driver_Manually1.textContent =
      languages[selectedLanguage]["User_Install_Driver_Manually1"];
    Just_Frame_But_No_Fonts_On_The_Shipping_Label1.textContent =
      languages[selectedLanguage][
        "Just_Frame_But_No_Fonts_On_The_Shipping_Label1"
      ];
    t_Find_The_Port_When_Install_The_Driver_Manually1.textContent =
      languages[selectedLanguage][
        "Can't_Find_The_Port_When_Install_The_Driver_Manually1"
      ];
    t_Delete_The_Driver_Package_When_Delete_The_Driver_Manually1.textContent =
      languages[selectedLanguage][
        "Can't_Delete_The_Driver_Package_When_Delete_The_Driver_Manually1"
      ];

    //  video 2

    AK915_paper_loading_and_printing_video.textContent =
      languages[selectedLanguage]["AK915_paper_loading_and_printing_video"];
    Continuous_print_settings_for_English.textContent =
      languages[selectedLanguage]["Continuous_print_settings_for_English"];
    

    //video 3

    How_to_adjust_if_cant_punch.textContent =
      languages[selectedLanguage]["How_to_adjust_if_cant_punch"];
    How_to_adjust_the_position.textContent =
      languages[selectedLanguage]["How_to_adjust_the_position"];
    How_to_do_if_or_E1E1_code_shows.textContent =
      languages[selectedLanguage]["How_to_do_if_or_E1E1_code_shows"];
    How_to_do_if_5002_shows_or_just_date_no_time.textContent =
      languages[selectedLanguage][
        "How_to_do_if_5002_shows_or_just_date_no_time"
      ];
    How_to_do_if_the_screen_doesnt_light_up.textContent =
      languages[selectedLanguage]["How_to_do_if_the_screen_doesnt_light_up"];
    How_to_exchange_the_ribbon.textContent =
      languages[selectedLanguage]["How_to_exchange_the_ribbon"];
    How_to_know_Front_and_back.textContent =
      languages[selectedLanguage]["How_to_know_Front_and_back"];
    How_to_punch_manually.textContent =
      languages[selectedLanguage]["How_to_punch_manually"];
    How_to_punch_when_Power_outage.textContent =
      languages[selectedLanguage]["How_to_punch_when_Power_outage"];
    How_to_reset.textContent = languages[selectedLanguage]["How_to_reset"];
    How_to_self_test.textContent =
      languages[selectedLanguage]["How_to_self_test"];
    How_to_set_the_alarm.textContent =
      languages[selectedLanguage]["How_to_set_the_alarm"];
    If_no_two_colors_printing.textContent =
      languages[selectedLanguage]["If_no_two_colors_printing"];
    Introduction_of_use.textContent =
      languages[selectedLanguage]["Introduction_of_use"];
    How_to_change_password.textContent =
      languages[selectedLanguage]["How_to_change_password"];
    How_to_set_one_attendance_shift.textContent =
      languages[selectedLanguage]["How_to_set_one_attendance_shift"];
    How_to_set_the_date_and_the_time.textContent =
      languages[selectedLanguage]["How_to_set_the_date_and_the_time"];
    How_to_set_three_attendance_shifts.textContent =
      languages[selectedLanguage]["How_to_set_three_attendance_shifts"];
    How_to_set_two_attendance_shifts.textContent =
      languages[selectedLanguage]["How_to_set_two_attendance_shifts"];
  });

  

  // if (selectedLanguage === "english") {
  //   bannerImage.setAttribute("src", "images/englishBanner.png");
  // } else if (selectedLanguage === "thai") {
  //   bannerImage.setAttribute("src", "images/thaiBanner.png");
  // } else if (selectedLanguage === "malay") {
  //   bannerImage.setAttribute("src", "images/malayBanner.png");
  // }else if (selectedLanguage === "filip") {
  //   bannerImage.setAttribute("src", "images/thaiBanner.png");
  // }

  

});
