#    ___               __                         __    ______               
#   / _ \___ _  _____ / /__  ___  __ _  ___ ___  / /_  / __/ /____ ____ ____ 
#  / // / -_) |/ / -_) / _ \/ _ \/  ' \/ -_) _ \/ __/ _\ \/ __/ _ `/ _ `/ -_)
# /____/\__/|___/\__/_/\___/ .__/_/_/_/\__/_//_/\__/ /___/\__/\_,_/\_, /\__/ 
#                         /_/                                     /___/      
#
# Files mounted from docker-compose

FROM nginx:alpine AS dev
WORKDIR /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



#    ___              __         __  _             ______               
#   / _ \_______  ___/ /_ ______/ /_(_)__  ___    / __/ /____ ____ ____ 
#  / ___/ __/ _ \/ _  / // / __/ __/ / _ \/ _ \  _\ \/ __/ _ `/ _ `/ -_)
# /_/  /_/  \___/\_,_/\_,_/\__/\__/_/\___/_//_/ /___/\__/\_,_/\_, /\__/ 
#                                                            /___/      
#
# Files copied into production image

FROM nginx:alpine AS prod
RUN rm -rf /usr/share/nginx/html/*
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
