
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  });

  document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
  });
  // const countdown = () => {
  //   const target = new Date("2025-05-05T00:00:00").getTime();

  //   const now = new Date().getTime();
  //   const gap = target - now;
  
  //   const second = 1000;
  //   const minute = second * 60;
  //   const hour = minute * 60;
  //   const day = hour * 24;
  
 /* The commented out code block is calculating the remaining time gap between the current time and a
 target date in days, hours, minutes, and seconds. */
    // const d = Math.floor(gap / day);
    // const h = Math.floor((gap % day) / hour);
    // const m = Math.floor((gap % hour) / minute);
    // const s = Math.floor((gap % minute) / second);
  
  //   document.getElementById("days").innerText = d;
  //   document.getElementById("hours").innerText = h;
  //   document.getElementById("minutes").innerText = m;
  //   document.getElementById("seconds").innerText = s;
  // };
  
  setInterval(countdown, 1000);

  function toggleMenu() {
    const nav = document.getElementById('navbar-links');
    nav.classList.toggle('show');
  }


  function toggleMenu() {
    const menu = document.getElementById('navbar-links');
    menu.classList.toggle('show');
  }
  
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const menu = document.getElementById('navbar-links');
      menu.classList.remove('show');  // Close the menu when a menu item is clicked
    });
  });


  