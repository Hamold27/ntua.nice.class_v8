document.addEventListener("DOMContentLoaded", function () {
  const folders = document.querySelectorAll(".folder");

  folders.forEach((folder) => {
    folder.addEventListener("click", function () {
      if (this.classList.contains("active")) {
        return;
      }
      // 初始化時移除所有 active 類
      folders.forEach((folder) => {
        folder.classList.remove("active");
        folder.style.marginBottom = "10px";
      });
      document.addEventListener("DOMContentLoaded", function () {
        // 其他程式碼
      });

      // 設置當前資料夾為活動狀態
      this.classList.add("active");

      // 計算並設置合適的 margin-bottom
      const content = this.querySelector(".content");
      if (content) {
        const contentHeight = content.offsetHeight;
        this.style.marginBottom = `${contentHeight + 20}px`;
      }

      // 平滑滾動到當前資料夾
      const containerTop =
        document.querySelector(".folders-container").offsetTop;
      const folderTop = this.offsetTop;
      window.scrollTo({
        top: containerTop + folderTop - 20,
        behavior: "smooth",
      });
    });
  });
});
