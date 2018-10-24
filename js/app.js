/* this is the document listener to allow the full document to load before loading the js so it doesn't throw errors in the console and slow the loading*/
document.addEventListener('DOMContentLoaded', function(){
  /* this allows us to grab the whole div and the other aspects of the child divs */
  let wrapper = document.getElementById('wrapper');
  /* allows us to select the specific class .top */
  let topLayer = wrapper.querySelector('.top');
  /* lets us grab the divider */
  let handle = wrapper.querySelector('.handle');
  /* allows us to set delta and skew which we need to pass different screen measurements */
  let skew = 0;
  let delta = 0;
  /* allows to search for the skewed and not perform actions if there is none. */
  if(wrapper.className.indexOf('skewed') != - 1){
  skew = 999;
}

/* allows to listen to the mouse as an input function to set the delta variable position on the page. */
wrapper.addEventListener('mousemove', function(e){
  delta = (e.clientX - window.innerWidth / 2) * 0.5;
  console.log(e.clientX);
  /* adjusts the handdle with the delta */
  handle.style.left = e.clientX + delta + 'px';
  /* adjusts the top layer to retract and extend with the delta. */
  topLayer.style.width = e.clientX + skew + delta + 'px'
});
  
});