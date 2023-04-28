#!/usr/bin/env bash

tmux kill-session -t client
tmux new-session -d -s client
tmux send-keys -t client 'npm install' C-m
tmux send-keys -t client 'npm run build' C-m
tmux send-keys -t client 'cd dist/' C-m
tmux send-keys -t client 'http-server --cors' C-m
tmux detach -s client
