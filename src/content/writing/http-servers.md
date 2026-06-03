---
title: HTTP servers
date: 2026-06-02
meta: HTTP server · 2026
---

## Bare-bones HTTP over TCP

What a web server really is

**A process that**

1. Creates a listening TCP socket (IP + port)
    - binds an address like 0.0.0.0:80 (HTTP) or :443 (HTTPS)

2. Accepts client connections in a loop
    - each accept() call blocks until a client (browser, curl) connects
    - Returns a new socket just for that client conversation

3. Receives bytes (an HTTP request)
    - reads from a client socket until a blank line is found

    ```text
    GET /index.html HTTP/1.1
    Host: example.com
    ```

4. Sends bytes (an HTTP response)
    - writes back a raw HTTP response string

    ```text
    HTTP/1.1 200 OK
    Content-length: 8

    Hello, World
    ```

5. Closes the connection
    - In HTTP/1.0, close immediately after sending response
    - In HTTP/1.1, might keep it alive for reuse



so, in general *HTTP is just a text sent over TCP*
frameworks mainly automate steps 3-5 and add features, but the underlying loop never changes



minimal working example

```python
import socket

# creates a listening TCP socket
SERVER_HOST = '0.0.0.0'
SERVER_PORT = 8080

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM) # 
server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1) # reuse port after restart
# attach socker to address
server_socket.bind((SERVER_HOST, SERVER_PORT))
server_socket.listen(5)

print(f"Listening on {SERVER_HOST}:{SERVER_PORT}")

# accept client connections with a loop
while True:
    # block unitl client connects
    client_socket, client_addr = server_socket.accept()
    print(f"Connected by {client_addr}")

    # receives bytes(request)
    request_data = client_socket.recv(4096).decode()
    print(f"Request:\n{request_data}")

    # sends bytes(response)
    response = (
        "HTTP/1.1 200 OK\r\n"               # status line
        "Content-Length: 8\r\n"             # header : length  of the text
        "Content-Type: text/plain\r\n"      # header : plain text
        "\r\n"                              
        "wazzzzap"                          # response body
    )

    client_socket.sendall(response.encode())
    # close the connection
    client_socket.close()

```
run `curl http://localhost:8080` then we will get `wazzzzap`

So we just sent wazzzzap over a raw TCP socket, nothing complicated or anything

### important notes

#### why blank lines matter
HTTP messages are separated into sections.

A blank line (\r\n\r\n) marks the end of the HTTP headers.

```
GET / HTTP/1.1
Host: example.com
User-Agent: curl/8.0
```

Everything before the blank line is metadata(headers).
Anything after it is considered the request body.

Without this separator, the server would not know where headers stop.

#### why content length matter
Content-Length tells the client how many bytes exist in the response body.

eg: Content-Length: 8
without it, the browser/client may keep waiting for more data because TCP itself does not define where the message ends.

The client needs some way to know:
- when the response body starts
- how large it is
- when it is complete

#### why HTTP/1.1 keeps connections alive
Opening a new TCP connection for every request is expensive.

TCP connections require:
- handshakes
- kernel resources
- extra latency

HTTP/1.1 introduced persistent connections (keep-alive) so multiple HTTP requests can reuse the same TCP connection.

This reduces:

- latency
- connection overhead
- repeated TCP handshakes

Modern browsers heavily rely on persistent connections for performance.

#### why TCP is used instead of UDP

HTTP needs reliable communication.

TCP provides:

- ordered packets
- retransmission of lost packets
- error checking
- reliable delivery

UDP is faster but unreliable:

- packets can arrive out of order
- packets may disappear entirely
- no guarantee data arrives

For web pages and APIs, reliability matters more than raw speed.

The browser must receive the exact bytes the server sent.


``` 
                    Browser
                      ↓
                 TCP connection
                      ↓
                HTTP request bytes
                      ↓
                Python socket server
                      ↓
                HTTP response bytes
                      ↓
                Browser renders response

```


## what this simple server is missing

#### concurrent conections 

one slow client block all others, this server is synchronous/blocking.
while recv() waits for data from one client, the server can't handle another client

#### HTTP method routing
 /home vs /about all return the same response 

#### headers parsing
no Host, User-Agent, cookies, Auth

#### persistent connections

#### File serving

#### error handling


## What frameworks abstract away

- socket creation
- request parsing
- routing
- middleware
- thread/event management
- response formatting
- connection pooling
- TLS/HTTPS
- logging
- error handling