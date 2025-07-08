 // utils/getGreeting.js

export const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return { text: "Good Morning, Anil  Sir", icon: "☀️" };
  } else if (hour >= 12 && hour < 17) {
    return { text: "Good Afternoon, Anil  Sir", icon: "🌤️" };
  } else if (hour >= 17 && hour < 21) {
    return { text: "Good Evening,Anil  Sir", icon: "🌇" };
  } else {
    return { text: "Good Night, Anil  Sir", icon: "🌙" };
  }
};
