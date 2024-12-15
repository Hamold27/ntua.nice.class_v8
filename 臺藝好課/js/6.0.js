// script.js

document.addEventListener("DOMContentLoaded", function () {
  // 定義課程資料，每個物件對應一張卡片的內容
  const courses = [
    {
      title: "美術學院",
      department: "College of Fine Arts",
    },
    {
      title: "設計學院",
      department: "College of Design",
    },
    {
      title: "傳播學院",
      department: "College of Communication",
    },
    {
      title: "表演藝術學院",
      department: "College of Performing Arts",
    },
    {
      title: "人文學院",
      department: "College of Liberal Arts",
    },
    {
      title: "體育教學中心",
      department: "Physical Education Center",
    },
  ];

  // 獲取 course-list 容器
  const courseList = document.getElementById("course-list");

  // 遍歷課程資料，生成卡片
  courses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.className = "course-card"; // 設定卡片的類名，用於樣式

    // 定義卡片的 HTML 結構
    courseCard.innerHTML = `
      <div class="course-content">
        <!-- 課程標題與部門 -->
        <div class="course-info">
          <h3>${course.title}</h3>
          <p>${course.department}</p>
        </div>

        <!-- 按鈕 -->
        <button class="course-button">
          <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.30272 2.35308L34.8205 2.36625L34.8073 28.8916" stroke="white" stroke-width="3" stroke-linejoin="round"/>
            <path d="M34.8201 2.36663L1.20361 35.9497" stroke="white" stroke-width="3" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- 顯示課程科目學分表 -->
        <div class="course-info-text">
          <p>課程科目學分表</p>
        </div>
      </div>
    `;

    // 將卡片添加到 course-list 容器中
    courseList.appendChild(courseCard);
  });
});
// 2. Modal 彈窗邏輯
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("courseModal");
  const closeBtn = modal.querySelector(".close");
  const courseCards = document.querySelectorAll(".course-card"); // 假設課程卡片有 'course-card' 類

  // 課程數據（此例中所有課程相同）
  const courseData = {
    department: "國立台灣藝術大學",
    title: "科目學分表",
    teacher: "發佈者",
    schedule: "教務處",
    description: "https://aca.ntua.edu.tw/catalog.aspx?ca=209 ",
  };

    // 创建一个超链接元素
    const link = document.createElement('a');
    link.href = 'https://aca.ntua.edu.tw/catalog.aspx?ca=209 '; // 设置链接地址
    link.textContent = '.'; // 设置链接文本
    link.target = '_blank'; // 设置在新窗口中打开

    // 将链接插入到页面中的某个容器内
    const container = document.getElementById('courseModal');
    container.appendChild(link);

  function openModal() {
    modal.style.display = "flex";
    modal.querySelector(".course-department").innerHTML = courseData.department;
    modal.querySelector(".course-title").innerHTML = courseData.title;

    modal.querySelector(".course-teacher").textContent = courseData.teacher;
    modal.querySelector(".course-schedule").textContent = courseData.schedule;
    modal.querySelector(".course-description").textContent =
      courseData.description;

    // // 顯示星星評分
    // const starsContainer = modal.querySelector(".stars");
    // starsContainer.innerHTML = ""; // 清空舊的星星
    // for (let i = 0; i < 5; i++) {
    //   const star = document.createElement("svg");
    //   star.classList.add("star");
    //   star.setAttribute("viewBox", "0 0 20 20");
    //   star.innerHTML = `
    //    <svg class="star" viewBox="0 0 20 20" fill="currentColor">
    //             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    //           </svg>
    //   `;
    //   star.style.fill = i < Math.round(courseData.rating) ? "#ff5d5d" : "#ccc";
    //   starsContainer.appendChild(star);
    // }
  }

  function closeModal() {
    modal.style.display = "none";
  }

  courseCards.forEach((card) => {
    card.addEventListener("click", openModal);
  });

  closeBtn.addEventListener("click", closeModal);
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
});

// 3. Dropdown 選單邏輯
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".dropdown-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const content = e.currentTarget.nextElementSibling;
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
  });
});
