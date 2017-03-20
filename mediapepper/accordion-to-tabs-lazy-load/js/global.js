// Make sure JS is active and add class for CSS
document.documentElement.className = 'js';

//
// Lazy Load Tabs
//

// Ajax ready

function getAjax(url, success) {
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
  xhr.open('GET', url);
  xhr.onreadystatechange = function() {
      if (xhr.readyState > 3 && xhr.status == 200) success(xhr.responseText);
  };
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.send();
  return xhr;
}

// add listener to tabs

var tabs = document.getElementsByClassName('tabs__label');

for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", loadContent);
}

// Function to load in content

function loadContent() {

  var tabName = this.getAttribute('for');
  var tabContainer = document.getElementsByClassName(tabName)[0];

  if ( tabContainer.innerHTML !== "") {
      getAjax('./tabs/' + tabName + '.html', function(data) {
          tabContainer.innerHTML = data;
      });
  }

}
