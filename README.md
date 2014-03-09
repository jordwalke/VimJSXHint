JSXVimHint
==========

Inline JSHint error highlighting with support for JSX



The vim plugin is based on:
https://github.com/hallettj/jslint.vim
Which is why the top level license is copied from there. Within this repo, there are subprojects that have and retain their own licensing. Most of the JS is a direct copy of the Facebook JS transform stack and jshint itself.


**Installation**

- Install Node.js
- Put this in your `.vimrc`:  let g:jsCommand='node'
- Install using `Vundle` or `NeoBundle`.


        " Using Vundle
        Bundle 'jordwalke/JSXVimHint'

        " Or if using NeoBundle(recommended)
        NeoBundle 'jordwalke/JSXVimHint'


Then open a JS file edit it, save it and any lint errors should appear.

**Support**

MacOS + MacVim work well. iTerm on Mac and gvim on windows (with cygwin) have also been tested and worked in the past.

**Customizing Errors**

`JSXVimHint` looks for a file `~/.vim/.jshint.js`. Here's an example of what you could include:
        
        /*global __DEV__:true, self: true, document: true, window: true, Event: true, localStorage: true, expect: true, it: true, beforeEach: true, describe: true */
        /*jshint
          browser: true,
          devel: true,
          node: true,
          nonstandard: true,
          browser:   true,
          regexp:    true,
          smarttabs: true,
          unused: true,
          bitwise:  true,
          curly:    true,
          eqeqeq:   false,
          forin:    false,
          immed:    false,
          latedef:  false,
          noarg:    true,
          noempty:  false,
          nonew:    false,
          plusplus: false,
          regexp:   false,
          undef:    true,
          strict:   false,
          trailing: false,
          asi:      false,
          debug:    true,
          es5:      false,
          esnext:   false,
          evil:     false,
          expr:     true,
          funcscope: false,
          globalstrict: false,
          iterator: false,
          lastsemic: false,
          laxbreak: false,
          laxcomma: false,
          loopfunc: false,
          multistr: false,
          onecase:  false,
          proto:    false,
          regexdash: false,
          scripturl: true,
          smarttabs: false,
          sub:      true,
          supernew: false,
          boss:     false,
          newcap:   false,
          eqnull:   false,
          shadow:   false
        */

