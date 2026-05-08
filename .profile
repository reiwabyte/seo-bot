# ~/.profile: executed by Bourne-compatible login shells.

if [ "$BASH" ]; then
  if [ -f ~/.bashrc ]; then
    . ~/.bashrc
  fi
fi

mesg n 2> /dev/null || true
. "/etc/skel/.cargo/env"

# Created by `pipx` on 2026-04-13 23:03:12
export PATH="$PATH:/opt/pipx_bin"
