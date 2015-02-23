var bio = {
	"name": "Iuliia",
	"role" : "Web Developer",
	"contacts": {
		"mobile" : "345-456-6777",
		"email" : "kotlenko.julia@gmail.com",
		"github": "IuliiaKot",
		"twitter": "N/A",
		"location": "Seattle, WA"
	},
	"biopic": "images/pic.jpg",
	"welcomeMessage": "Welcome to my resume!",
	"skills": ["Python", "Ruby", "JS", "HTML", "CSS", "R"]
}

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	
	//$("#header").append(formattedName+formattedRole);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocarion = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPic);
	$("#header").append(formattedWelcomeMsg);

	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocarion);

	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedLocarion);

	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

var education = {
	"schools" : [
	{
		"name": "Oles Honchar Dnipropetrovsk National University",
		"location": "Ukraine",
		"degree": "Masters",
		"majors": ["Computer Science"],
		"dates": 2011,
		"url": "http://www.dnu.dp.ua/en"
	}
	],
	"onlineCourses" : [
	{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"dates": 2014,
		"url": "https://www.udacity.com/course/ud304"
	},
	{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": 2014,
		"url": "https://www.udacity.com/course/ud804"
	},
	{
		"title": "Intro to jQuery",
		"school": "Udacity",
		"dates": 2014,
		"url": "https://www.udacity.com/course/ud245"
	},
	{
		"title": "Algorithms: Design and Analysis, Part 1",
		"school": "Coursera",
		"dates": 2014,
		"url": "https://www.coursera.org/course/algo"
	},
	{
		"title": "R Programming",
		"school": "Coursera",
		"dates": 2014,
		"url": "https://www.coursera.org/course/algo"
	},
	{
		"title": "Introduction to Computer Science and Programming Using Python",
		"school": "edX",
		"dates": 2014,
		"url": "https://www.edx.org"
	},
	{
		"title": "Programming Languages",
		"school": "Coursera",
		"dates": 2014,
		"url": "https://www.coursera.org/course/proglang"
	},
	{
		"title": "Mining Massive Datasets",
		"school": "Coursera",
		"dates": 2014,
		"url": "https://www.coursera.org/course/mmds"
	},
	{
		"title": "Python",
		"school": "codeacademy",
		"dates": 2014,
		"url": "hhttp://www.codecademy.com"
	},
		{
		"title": "JavaScript",
		"school": "codeacademy",
		"dates": 2014,
		"url": "hhttp://www.codecademy.com"
	}
	]
} 

education.display = function(){
	$("#education").append(HTMLschoolStart);
	for (school in education.schools)
	{
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		formattedSchoolName = formattedSchoolName.replace("%url%", education.schools[school].url);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
		$(".education-entry:last").append(formattedSchoolNameDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location)
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedSchoolMajor);

		var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
	}

		$(".education-entry:last").append(HTMLonlineClasses);
		for (course in education.onlineCourses){
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
				formattedOnlineSchool = formattedOnlineSchool.replace("%url%", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool); 

			var fornmattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			$(".education-entry:last").append(fornmattedOnlineDates);

			var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			formattedOnlineUrl = formattedOnlineUrl.replace("%url%", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedOnlineUrl);
			$(".education-entry:last").append("<br><div><hr class='section-hr'></div>");
		}
};

var work = {
	"jobs": [
	{
		"employer": "DialogBank",
		"title": "System Administrator",
		"dates": "2010-2011",
		"description": "rrænet og klimaet varierer fra ørken rrænet og klimaet varierer fra ørken rrænet og klimaet varierer fra ørken",
		"location": "Dnipropetrovsk, Ukraine"	
	}
	]
}

work.display = function() {
	//$("#workExperience").append(HTMLworkStart);
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
   		$(".work-entry:last").append(formattedLocation);		
		
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$("work-entry:last").append(formattedDescription);

    	$(".work-entry:last").append("<br><div><hr class='section-hr'></div>");
 
	}

}

var projects = {
	"projects": [
	{
		"title": "Orange Udacity Mug",
		"dates": "2014",
		"description": "This was my first project in Front-End Nanodegree. I was provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS. I developed a responsive website that display images, descriptions and links to each of the portfolio projects.",
		"images": ["images/pr1.jpg"]
	},
	{
		"title": "Mookup to Website",
		"dates": "2014",
		"description": "This was my second project in Fron-End Nanodegree. I  builded my resume by writing a JS script that combine my personal information with pre-written HTML and CSS templates to generate the resume.",
		"images": ["images/pr2.png", "images/pr2_1.png", "images/pr2_2.png", "images/pr2_3.png" ]
	},
	{
		"title": "Mookup to Website",
		"dates": "2014",
		"description": "I finished path on the codeacademy.com “Make a Website”. I built a recent version of Airbnb's home page and learned the fundamentals of web development in the process. Also I learned how to structure a web page using HTML, style a web page using CSS, and how to do all of this quickly using Bootstrap.",
		"images": ["images/pr3.png", "images/pr3_1.png"]	
	}
	]
}


projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		//var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedEmployerTitle = formattedTitle;

		$(".project-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

bio.display();
projects.display();
education.display();
work.display();

$("#mapDiv").append(googleMap);
//$("#mapDiv").before(HTMLmapButton);

