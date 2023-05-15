#!/usr/bin/env bash

tmux kill-session -t server
tmux new-session -d -s server
tmux send-keys -t server 'bundle install' C-m
tmux send-keys -t server 'bin/rails server -b 0.0.0.0' C-m
tmux detach -s server
