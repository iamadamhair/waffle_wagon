var width = window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;
<!--
// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature by Andrew Moulden, Site Engineering Ltd
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/ -- >
coded = "FVsXX3s7FZ7@e6KLJ.5Z6"
key = "OwlvSrR6sKFE4MNzncZ3VAXJGbfDgjY81WU2i75ITkxqBypumeat0HQ9PLCodh"
shift=coded.length
link=""

for (i=0; i<coded.length; i++) {
  if (key.indexOf(coded.charAt(i))==-1) {
    ltr = coded.charAt(i)
    link += (ltr)
  }
   else {     
    ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
    link += (key.charAt(ltr))
  }
}
document.getElementById("email").innerHTML = "<p><a href='mailto:"+link+"'>"+link+"</a></p>";

coded = "(kOv) T27-2qTv"
key = "i1F8L3GWYZw5N497K2JzRImUXqfOkTDnEeSas0bQBpjAo6VrxPHvdlMygchutC"
shift=coded.length
visible=""

for (i=0; i<coded.length; i++) {
  if (key.indexOf(coded.charAt(i))==-1) {
    ltr = coded.charAt(i)
    visible += (ltr)
  }
  else {     
    ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
    visible += (key.charAt(ltr))
  }
}
coded = "kOv-T27-2qTv"
dialable=""

for (i=0; i<coded.length; i++) {
  if (key.indexOf(coded.charAt(i))==-1) {
    ltr = coded.charAt(i)
    dialable += (ltr)
  }
  else {     
    ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
    dialable += (key.charAt(ltr))
  }
}
if(width < 700) { 
  document.getElementById("phone").innerHTML = "<p><a href="+"tel:"+dialable+"><h3 class='btn-custom'>"+visible+"</h3></a><p>";
}
else
  document.getElementById("phone").innerHTML = "<p><h3 class='btn-custom'>"+visible+"</h3><p>";