function Appear()
{
  var mains = document.querySelectorAll('.main'); // Change this line
  mains.forEach(main => {
    var mainPosition = main.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;
    if(mainPosition < screenPosition)
    {
      main.classList.add('appear');
    }
  })
}




window.addEventListener('scroll', Appear);
