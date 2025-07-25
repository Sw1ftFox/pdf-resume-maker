export function initDoubleClick() {
  const jobs = document.querySelectorAll(".job");

  jobs.forEach((job) => {
    job.addEventListener("dblclick", () => {
      job.classList.toggle("most-recent");

      const jobId = job.dataset.id;
      const isRecent = job.classList.contains("most-recent");
      localStorage.setItem(`${jobId}-recent`, isRecent);
    });
  });

  const courses = document.querySelectorAll(".courses > div");

  courses.forEach((course) => {
    course.addEventListener("dblclick", () => {
      course.classList.toggle("favorite");

      const courseType = course.classList[0];
      localStorage.setItem(
        `course-${courseType}-favorite`,
        course.classList.contains("favorite")
      );
    });
  });

  jobs.forEach((job) => {
    const jobId = job.dataset.id;
    if (localStorage.getItem(`${jobId}-recent`) === "true") {
      job.classList.add("most-recent");
    }
  });

  courses.forEach((course) => {
    const courseType = course.classList[0];
    if (localStorage.getItem(`course-${courseType}-favorite`) === "true") {
      course.classList.add("favorite");
    }
  });
}
