#!/bin/sh
pwd
cd /tmp
tar -zxf $PAYLOAD_PATH/mesa-18.2.3.tar.gz
export LD_LIBRARY_PATH=/tmp/mesa-18.2.3/usr/local/lib/x86_64-linux-gnu
export GALLIUM_DRIVER=swr
sudo apt-get install mesa-utils
sudo apt-get install xvfb
glxinfo
