let devProfile = {
    fullName: "Lore Monaca",
    age: 39,
    profession: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    isEmployed: true,
    contact: {
      email: "lmonacavogel@gmail.com",
      location: "Posadas"
    }
  };
  
  function introduceDev(profile) {
    let intro = `Hello! My name is ${profile.fullName}. `;
    intro += `I am a ${profile.profession}. `;
    intro += `I work with ${profile.skills.join(", ")}. `;
    intro += `I live in ${profile.contact.location}. `;
    intro += `I am ${profile.age} years old. `;
    intro += profile.isEmployed ? "I am currently employed." : "I am currently looking for a job.";
    
    return intro;
  }

  console.log(introduceDev(devProfile));
