##TMux Setup

[tmux](http://tmux.sourceforge.net/) is a terminal multiplexer

**What is a terminal multiplexer?** It lets you switch easily between several programs in one terminal, detach them (they keep running in the background) and reattach them to a different terminal. And do a lot more. 

###`$TERM` Setup
For consistant results. The terminal ID from your terminal application along with `$TERM` environment variable and terminal settings in `.tmux.conf` should match to properly support 256 colors.

1. The terminal application such as gnome-terminal or iTerm2 should identify itself as `screen-256color`

1. In your `.bashrc` (or `.bash_profile` if you are on Mac):
```bash
#Set terminal to screen-256color in TMUX
if [ -n "$TMUX" ]; then
	export TERM=screen-256color
fi

#Force TMUX to start in 256 support-mode
alias tmux='tmux -2'
```

1. `.tmux.conf` should properly set the terminal to
```bash
set -g default-terminal 'screen-256color'
```

1. If you are using vim within tmux, you should also set the terminal colors:
```
set t_Co=256                        " force vim to use 256 colors
let g:solarized_termcolors=256      " use solarized 256 fallback
```

###Basic TMUX Setup
```
#TMUX configuration file
curl --silent -L -o ~/.tmux.conf TMUX_FILE

#TMUX config & scripts directory
mkdir -p ~/.tmux.conf.d

#Extra configuration
curl --silent -o -L ~/.tmux.conf.d/tmuxcolors-dark.conf https://raw.github.com/seebi/tmux-colors-solarized/master/tmuxcolors-dark.conf
```

##TMUX Cheatsheets:
  + http://www.cheatography.com/bechtold/cheat-sheets/tmux-the-terminal-multiplexer/
  + https://gist.github.com/henrik/1967800

###Notes
  + [Forcing TERM is bad](http://blog.sanctum.geek.nz/term-strings/)
