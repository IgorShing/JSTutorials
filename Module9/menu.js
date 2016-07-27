/**
 * 
 */
function Menu(options) {
	
	  var elem;
	  this.getElem = getElem;
	  this.toggle = toggle;
	  this.close = close;
	  this.open = open;

	  function getElem() {
	    if (!elem) render();
	    return elem;
	  }

	  function render() {
	    var html = options.template({
	      title: options.title
	    });

	    elem = document.createElement('div');
	    elem.innerHTML = html;
	    elem = elem.firstElementChild;

	    elem.onmousedown = function() {
	      return false;
	    }

	    elem.onclick = function(event) {
	      if (event.target.closest('.title')) {
	        toggle();
	      }
	    }
	  }

	  function renderItems() {
	    if (elem.querySelector('ul')) return;

	    var listHtml = options.listTemplate({
	      items: options.items
	    });
	    elem.insertAdjacentHTML("beforeEnd", listHtml);
	  }

	  function open() {
	    renderItems();
	    elem.classList.add('open');
	    alert("open");
	  };

	  function close() {
	    elem.classList.remove('open');
	    alert("close");
	  };

	  function toggle() {
	    if (elem.classList.contains('open')) close();
	    else open();
	  };


	}