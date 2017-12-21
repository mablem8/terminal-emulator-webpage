// data.js
// Terminal Emulator Webpage JS data file
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

var CLIENT_INFO =
 window.navigator.platform + ' ' +
 window.navigator.appName + ' ' +
 window.navigator.appVersion.split(' ')[0];

var LOGIN_BOILERPLATE = [
 'Brad Denby @ CMU ('+CLIENT_INFO+')',                                    '\n',
 ' * About:   cat about.txt',                                             '\n',
 ' * Contact: cat contact.txt',                                           '\n'];

var NO_SUCH_FILE_OR_DIRECTORY = [
 'No such file or directory',                                             '\n'];

var PERMISSION_DENIED = [
 'Permission denied',                                                     '\n'];

var COMMAND_NOT_FOUND = [
 'Command not found',                                                     '\n'];

var ABOUT_TXT = [
 '               ##                       ',                              '\n',
 '             ######                     ',                              '\n',
 '             ###       &&               ',                              '\n',
 '         &  ####         &&&            ',                              '\n',
 '       &&   ###           &&&&          ',                              '\n',
 '      &&    ###            &&&&  &      ',                              '\n',
 '     &&&    ###             &&&&&&&     ',                              '\n',
 '    &&&     ###              &&&&&&&    ','Brad Denby is a PhD student with the','\n',
 ' &  &&&     ###            &&&&&&&      ','<a href="http://ece.cmu.edu">Electrical and Computer Engineering Department</a>','\n',
 '&&&&&&&     ###        &&&&&&&&&&       ','at <a href="https://www.cmu.edu">Carnegie Mellon University</a>. He is part of','\n',
 ' &&&&&&&&&&& ###       &&&&   &&&       ','<a href="https://www.cylab.cmu.edu">CyLab</a>, the Security and Privacy Institute','\n',
 '   &&&&&&&&& ###              &&&       ','at CMU\'s Collaborative Innovation Center.','\n',
 '    &&&&     ####            &&&&       ',                              '\n',
 '     &&&&     ###            &&&        ',                              '\n',
 '      &&&&    ####           &&         ',                              '\n',
 '       &&&&    ####         &&          ',                              '\n',
 '         &&&    ####       &            ',                              '\n',
 '            &&   ####                   ',                              '\n',
 '                  ######                ',                              '\n',
 '                    ##                  ',                              '\n'];

var CONTACT_TXT = [
 'sssssssssssssssssssssssssssssssssssss',                                 '\n',
 'ss,.                             .,ss',                                 '\n',
 's XAX.                         .XAX s',                                 '\n',
 's   :AX.                     .AX:   s',                                 '\n',
 's      XA.                 .AX      s',                                 '\n',
 's        XX,.           .,XX        s',                                 '\n',
 's        .XA5A         A5AX.        s              ', '<span class="underline">bdenby@cmu.edu</span>','\n',               
 's      .XAX  XAX.   .XAX  XAX.      s',                                 '\n',
 's    .AX,       XXXXX       ,XA.    s',                                 '\n',
 's  .XA                         AX.  s',                                 '\n',
 'sXAX                             XAXs',                                 '\n',
 'ss                                 ss',                                 '\n',
 'sssssssssssssssssssssssssssssssssssss',                                 '\n'];

var LICENSE_TXT = [
 'Written in 2017 by Bradley Denby','\n',
 'Other contributors: None','\n',
 '<br>','\n',
 'To the extent possible under law, the author(s) have dedicated all copyright','\n',
 'and related and neighboring rights to this software to the public domain','\n',
 'worldwide. This software is distributed without any warranty.','\n',
 '<br>','\n',
 'You should have received a copy of the CC0 Public Domain Dedication with this','\n',
 'software. If not, see <a href="http://creativecommons.org/publicdomain/zero/1.0/">http://creativecommons.org/publicdomain/zero/1.0/</a>.','\n'];
