
Sample docker container with a simple nodejs app running inside of it.

```docker
docker build -t sheldon/open-mic-docker .
docker run -p 3000:8000 -d sheldon/open-mic-docker
```
