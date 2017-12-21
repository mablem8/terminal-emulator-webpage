// script.js
// Terminal Emulator Webpage JS script file
//
// Written in 2017 by Bradley Denby
// Other contributors: None
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.
//
// You should have received a copy of the CC0 Public Domain Dedication with this
// software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.

// Global constants
var PROMPT_SPAN = '<span class="prompt">guest@andrew.cmu.edu:~$&nbsp;</span>';
var USERIN_SPAN = '<span id="userin"></span>';
var CURSOR_SPAN = '<span id="cursor">&#9608;</span>';

// Global variables
var print_buffer = [];
var print_buffer_interval_id = 0;

// Functions
function dequeue_print_buffer() {
  var current_line = document.getElementById('current-line');
  if(print_buffer.length>0) {
    var chunk = print_buffer.shift();
    if(chunk=='\n') {
      current_line.removeAttribute('id');
      current_line.insertAdjacentHTML('afterend','<p id="current-line"></p>');
      current_line = document.getElementById('current-line');
    } else {
      current_line.innerHTML += chunk;
    }
  } else {
    window.clearInterval(print_buffer_interval_id);
    print_buffer_interval_id = 0;
    current_line.insertAdjacentHTML('beforeend',PROMPT_SPAN);
    current_line.insertAdjacentHTML('beforeend',USERIN_SPAN);
    current_line.insertAdjacentHTML('beforeend',CURSOR_SPAN);
  }
  current_line.scrollIntoView();
}

function enqueue_print_buffer(text_array) {
  for(var i=0; i<text_array.length; i++) {
    print_buffer.push(text_array[i]);
  }
  if(print_buffer_interval_id==0) {
    if(document.getElementById('cursor')) {
      var cursor_element = document.getElementById('cursor');
      cursor_element.parentNode.removeChild(cursor_element);
    }
    print_buffer_interval_id = window.setInterval(dequeue_print_buffer, 50);
  }
}

function cursor_blink() {
  if(document.getElementById('cursor')) {
    var cursor_element = document.getElementById('cursor');
    if(cursor_element.innerHTML.length==0) {
      cursor_element.innerHTML = '&#9608;';
    } else {
      cursor_element.innerHTML = '';
    }
  }
}

function execute_user_input() {
  var userin = document.getElementById('userin').textContent;
  document.getElementById('userin').removeAttribute('id');
  userin = userin.split(' ');
  enqueue_print_buffer(['\n'])
  if(userin.length>0) {
    userin.push('');
    switch(userin[0]) {
      case 'cat':
        switch(userin[1]) {
          case 'about.txt':
            enqueue_print_buffer(ABOUT_TXT);
            break;
          case 'contact.txt':
            enqueue_print_buffer(CONTACT_TXT);
            break;
          case 'license.txt':
            enqueue_print_buffer(LICENSE_TXT);
            break;
          default:
            enqueue_print_buffer(NO_SUCH_FILE_OR_DIRECTORY);
            break;
        }
        break;
      case 'cd':
        enqueue_print_buffer(PERMISSION_DENIED);
        break;
      case 'chmod':
        enqueue_print_buffer(PERMISSION_DENIED);
        break;
      case 'chown':
        enqueue_print_buffer(PERMISSION_DENIED);
        break;
      case 'cp':
        enqueue_print_buffer(PERMISSION_DENIED);
        break;
      case 'date':
        var date = new Date();
        enqueue_print_buffer(
         [date.toLocaleDateString('en-US',
           {weekday:'short', month:'short', day:'2-digit', hour:'2-digit',
            minute:'2-digit', second:'2-digit', timeZoneName:'short',
            year:'numeric'}
          ),'\n']
        );
        break;
      case 'echo':
        enqueue_print_buffer(([(userin.slice(1)).join(' ')]).concat(['\n']));
        break;
      case 'emacs':
        enqueue_print_buffer(['Don\'t you mean vim?','\n']);
        break;
      case 'ls':
        enqueue_print_buffer(['about.txt\tcontact.txt\tlicense.txt','\n']);
        break;
      case 'mkdir':
        enqueue_print_buffer(PERMISSION_DENIED);
        break;
      case 'mv':
        enqueue_print_buffer(PERMISSION_DENIED);
        break;
      case 'nano':
        enqueue_print_buffer(PERMISSION_DENIED);
        break;
      case 'pwd':
        enqueue_print_buffer(['/home/guest','\n']);
        break;
      case 'rm':
        enqueue_print_buffer(PERMISSION_DENIED);
        break;
      case 'sleep':
        var num_zs = parseFloat(userin[1]);
        var zs = ['Z'];
        for(var i=1; i<num_zs; i++) {
          zs.push('z');
        }
        enqueue_print_buffer(zs.concat(['\n']));
        break;
      case 'su':
        enqueue_print_buffer(PERMISSION_DENIED);
        break;
      case 'sudo':
        enqueue_print_buffer(['guest is not in the sudoers file. This incident will not be reported.','\n']);
        break;
      case 'vim':
        enqueue_print_buffer(['Don\'t you mean emacs?','\n']);
        break;
      default:
        enqueue_print_buffer(COMMAND_NOT_FOUND);
        break;
    }
  }
}

function keypress_handler(event) {
  var captured_input = event.key;
  switch(captured_input) {
    case 'Enter':
      execute_user_input();
      break;
    default:
      document.getElementById('userin').innerHTML += captured_input;
      break;
  }
}

// Window functions
window.onload = enqueue_print_buffer(LOGIN_BOILERPLATE);
window.setInterval(cursor_blink, 1000);

// Window events
window.addEventListener('keypress',keypress_handler);
