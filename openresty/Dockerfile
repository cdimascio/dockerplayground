FROM openresty/openresty:trusty

ENV JWT_SECRET TEST_SECRET

ADD nginx.conf /usr/local/openresty/nginx/conf/nginx.conf
ADD lua-scripts /lua/scripts
