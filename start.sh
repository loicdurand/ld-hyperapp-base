#!/bin/sh -x
mount -i -o remount,exec /home/chronos/user;
su chronos;
nvm use 12.14.0;