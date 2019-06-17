window.onload = onLoadFunction;

function onLoadFunction()
{
	var homeBtn = document.getElementById("home_btn");
	homeBtn.addEventListener("click", function()
	{
		location.href = "index.html";
	});
	
	var resumeBtn = document.getElementById("resume_btn");
	resumeBtn.addEventListener("click", function()
	{
		location.href = "resume.html";
	});
	
	var gradeBtn = document.getElementById("grade_btn");
	gradeBtn.addEventListener("click", function()
	{
		location.href = "grade.html";
	});
}