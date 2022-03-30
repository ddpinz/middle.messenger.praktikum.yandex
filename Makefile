deploy:
    docker build -t owl_chat .
    heroku container:push web -a owl-chat
    heroku container:release web -a owl-chat
   	heroku open	-a owl-chat